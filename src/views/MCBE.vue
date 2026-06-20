<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import type { Version, SortMode } from '../types';
import { t } from '../i18n';
import { API_BASE } from '../api';
import MCVersionCard from '../components/MCVersionCard.vue';

const versions = ref<Version[]>([]);
const loading = ref(true);
const sortMode = ref<SortMode>('newest');
const searchQuery = ref('');

onMounted(async () => {
  try {
    const res = await fetch(`${API_BASE}/mcdownload/download/mcbe/list`);
    const json = await res.json();
    if (json.code === 200) {
      versions.value = json.data.versions;
    }
  } catch (e) {
    console.error(e);
  } finally {
    loading.value = false;
  }
});

const filtered = computed(() => {
  if (!searchQuery.value) return versions.value;
  const q = searchQuery.value.toLowerCase();
  return versions.value.filter((v) => v.version.toLowerCase().includes(q));
});

const sorted = computed(() => {
  const list = [...filtered.value];
  switch (sortMode.value) {
    case 'beta_first':
      return list.sort((a, b) => Number(b.beta) - Number(a.beta) || new Date(b.date).getTime() - new Date(a.date).getTime());
    case 'stable_first':
      return list.sort((a, b) => Number(a.beta) - Number(b.beta) || new Date(b.date).getTime() - new Date(a.date).getTime());
    default:
      return list.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }
});
</script>

<template>
  <div class="mcbe-page">
    <div class="page-header">
      <h1 class="page-title">{{ t('mcbe_title') }}</h1>
      <p v-if="!loading" class="page-count">{{ t('mcbe_total', { n: versions.length }) }}</p>
    </div>

    <div class="toolbar">
      <input
        v-model="searchQuery"
        class="search-input"
        :placeholder="t('search_placeholder')"
        type="search"
      />
      <select v-model="sortMode" class="sort-select">
        <option value="newest">{{ t('sort_newest') }}</option>
        <option value="beta_first">{{ t('sort_beta_first') }}</option>
        <option value="stable_first">{{ t('sort_stable_first') }}</option>
      </select>
    </div>

    <div v-if="loading" class="loading-state">{{ t('mcbe_loading_list') }}</div>
    <div v-else-if="sorted.length === 0" class="loading-state">{{ t('search_no_results') }}</div>
    <div v-else class="versions-grid">
      <MCVersionCard
        v-for="v in sorted"
        :key="v.version"
        :version="v"
      />
    </div>
  </div>
</template>

<style scoped>
.mcbe-page {
  padding: 32px 24px;
  max-width: 1126px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
}

.page-header {
  margin-bottom: 24px;
}

.page-title {
  font-size: 28px;
  font-weight: 600;
  color: var(--text-h);
  margin: 0 0 6px;
}

.page-count {
  font-size: 14px;
  color: var(--text);
  margin: 0;
  font-family: var(--mono);
}

.toolbar {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}

.search-input {
  flex: 1;
  min-width: 200px;
  padding: 8px 14px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: var(--bg);
  color: var(--text-h);
  font-size: 14px;
  outline: none;
  font-family: var(--sans);
}

.search-input:focus {
  border-color: var(--accent);
}

.search-input::placeholder {
  color: var(--text);
  opacity: 0.6;
}

.sort-select {
  padding: 8px 14px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: var(--bg);
  color: var(--text-h);
  font-size: 14px;
  cursor: pointer;
  outline: none;
  font-family: var(--sans);
}

.sort-select:focus {
  border-color: var(--accent);
}

.loading-state {
  text-align: center;
  padding: 64px 0;
  color: var(--text);
  font-size: 15px;
}

.versions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
}

@media (max-width: 640px) {
  .mcbe-page {
    padding: 24px 16px;
  }
  .toolbar {
    flex-direction: column;
  }
  .search-input {
    min-width: 0;
  }
  .versions-grid {
    grid-template-columns: 1fr;
  }
}
</style>

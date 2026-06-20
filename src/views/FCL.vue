<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import type { FCLVersion } from '../types';
import { t } from '../i18n';
import { API_BASE } from '../api';
import FCLVersionCard from '../components/FCLVersionCard.vue';

const releases = ref<FCLVersion[]>([]);
const loading = ref(true);
const searchQuery = ref('');

onMounted(async () => {
  try {
    const res = await fetch(`${API_BASE}/mcdownload/fcl/version_list`);
    const json = await res.json();
    if (json.versions) {
      releases.value = json.versions;
    }
  } catch (e) {
    console.error(e);
  } finally {
    loading.value = false;
  }
});

const filtered = computed(() => {
  if (!searchQuery.value) return releases.value;
  const q = searchQuery.value.toLowerCase();
  return releases.value.filter((r) => r.name.toLowerCase().includes(q));
});
</script>

<template>
  <div class="fcl-page">
    <div class="page-header">
      <h1 class="page-title">{{ t('fcl_title') }}</h1>
    </div>

    <div class="toolbar">
      <input
        v-model="searchQuery"
        class="search-input"
        :placeholder="t('search_placeholder')"
        type="search"
      />
    </div>

    <div v-if="loading" class="loading-state">{{ t('fcl_loading') }}</div>
    <div v-else-if="filtered.length === 0" class="loading-state">{{ t('search_no_results') }}</div>
    <div v-else class="releases-list">
      <FCLVersionCard
        v-for="r in filtered"
        :key="r.name"
        :release="r"
      />
    </div>
  </div>
</template>

<style scoped>
.fcl-page {
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
  margin: 0;
}

.toolbar {
  margin-bottom: 24px;
}

.search-input {
  width: 100%;
  max-width: 400px;
  padding: 8px 14px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: var(--bg);
  color: var(--text-h);
  font-size: 14px;
  outline: none;
  font-family: var(--sans);
  box-sizing: border-box;
}

.search-input:focus {
  border-color: var(--accent);
}

.search-input::placeholder {
  color: var(--text);
  opacity: 0.6;
}

.loading-state {
  text-align: center;
  padding: 64px 0;
  color: var(--text);
  font-size: 15px;
}

.releases-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

@media (max-width: 640px) {
  .fcl-page {
    padding: 24px 16px;
  }
  .search-input {
    max-width: 100%;
  }
}
</style>

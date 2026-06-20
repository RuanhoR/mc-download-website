<script setup lang="ts">
import { ref } from 'vue';
import type { Version, Download } from '../types';
import { t } from '../i18n';
import { API_BASE } from '../api';

const props = defineProps<{
  version: Version;
}>();

const downloads = ref<Download[]>([]);
const loading = ref(false);
const error = ref('');
const selectedType = ref<'v8a' | 'v7a'>('v8a');

async function fetchLinks(type: 'v8a' | 'v7a') {
  selectedType.value = type;
  loading.value = true;
  error.value = '';
  downloads.value = [];
  try {
    const res = await fetch(`${API_BASE}/mcdownload/download/mcbe/download_link?version=${props.version.version}&type=${type}`);
    const json = await res.json();
    if (json.code === 200 && json.data?.data?.downloads?.length) {
      downloads.value = json.data.data.downloads;
    } else {
      error.value = t('mcbe_dl_fail');
    }
  } catch {
    error.value = t('mcbe_dl_fail');
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div class="version-card" :class="{ beta: version.beta, expanded: downloads.length > 0 }">
    <div class="card-main" @click="!downloads.length && !loading && fetchLinks('v8a')">
      <div class="card-header">
        <span class="version-name">{{ version.version }}</span>
        <span v-if="version.beta" class="badge beta-badge">{{ t('mcbe_beta') }}</span>
        <span v-else class="badge stable-badge">{{ t('mcbe_stable') }}</span>
      </div>
      <div class="card-meta">
        <span class="meta-date">{{ version.date }}</span>
        <span class="meta-size">{{ version.size }}</span>
      </div>
      <div class="card-arch">
        <button
          class="btn-arch"
          :class="{ active: selectedType === 'v8a' }"
          @click.stop="fetchLinks('v8a')"
        >
          {{ t('mcbe_v8a') }}
        </button>
        <button
          class="btn-arch"
          :class="{ active: selectedType === 'v7a' }"
          @click.stop="fetchLinks('v7a')"
        >
          {{ t('mcbe_v7a') }}
        </button>
      </div>
    </div>

    <div v-if="loading" class="dl-status loading">{{ t('mcbe_loading_dl') }}</div>
    <div v-else-if="error" class="dl-status error">{{ error }}</div>
    <div v-else-if="downloads.length" class="dl-list">
      <a
        v-for="dl in downloads"
        :key="dl.name"
        :href="dl.url"
        target="_blank"
        rel="noopener noreferrer"
        class="dl-item"
      >
        <span class="dl-name">{{ dl.name }}</span>
        <span v-if="dl.password" class="dl-pwd">{{ dl.password }}</span>
        <span class="dl-arrow">{{ t('mcbe_download') }}</span>
      </a>
    </div>
  </div>
</template>

<style scoped>
.version-card {
  background: var(--code-bg);
  border: 1px solid var(--border);
  border-radius: 12px;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.version-card:hover {
  border-color: var(--accent-border);
  box-shadow: var(--shadow);
}

.version-card.beta {
  border-left: 3px solid var(--accent);
}

.card-main {
  padding: 20px;
  cursor: pointer;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
}

.version-name {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-h);
  font-family: var(--mono);
}

.badge {
  font-size: 12px;
  padding: 2px 10px;
  border-radius: 20px;
  font-weight: 500;
}

.beta-badge {
  background: var(--accent-bg);
  color: var(--accent);
}

.stable-badge {
  background: rgba(52, 211, 153, 0.15);
  color: #34d399;
}

.card-meta {
  display: flex;
  gap: 16px;
  font-size: 14px;
  color: var(--text);
  margin-bottom: 12px;
}

.meta-date,
.meta-size {
  font-family: var(--mono);
  font-size: 13px;
}

.card-arch {
  display: flex;
  gap: 8px;
}

.btn-arch {
  flex: 1;
  padding: 8px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: transparent;
  color: var(--text);
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;
  font-family: var(--mono);
}

.btn-arch:hover {
  border-color: var(--accent-border);
  color: var(--text-h);
}

.btn-arch.active {
  background: var(--accent);
  color: #fff;
  border-color: var(--accent);
}

.dl-status {
  padding: 12px 20px;
  font-size: 13px;
  text-align: center;
  border-top: 1px solid var(--border);
}

.dl-status.loading {
  color: var(--text);
  opacity: 0.7;
}

.dl-status.error {
  color: #ef4444;
  font-size: 12px;
}

.dl-list {
  border-top: 1px solid var(--border);
}

.dl-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  text-decoration: none;
  transition: background 0.15s;
}

.dl-item:hover {
  background: var(--accent-bg);
}

.dl-item + .dl-item {
  border-top: 1px solid var(--border);
}

.dl-name {
  font-size: 14px;
  color: var(--text-h);
  flex: 1;
}

.dl-pwd {
  font-size: 12px;
  color: var(--text);
  font-family: var(--mono);
  padding: 2px 8px;
  border-radius: 4px;
  background: var(--bg);
  border: 1px solid var(--border);
}

.dl-arrow {
  font-size: 13px;
  color: var(--accent);
  font-weight: 500;
}
</style>

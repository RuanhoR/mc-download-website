<script setup lang="ts">
import type { FCLVersion } from '../types';
import { t } from '../i18n';

defineProps<{
  release: FCLVersion;
}>();

function formatSize(bytes: number): string {
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

function archLabel(name: string): string | null {
  if (name.includes('all')) return t('fcl_arch_all');
  if (name.includes('arm64-v8a') || name.includes('v8a')) return t('fcl_arch_v8a');
  if (name.includes('armeabi-v7a') || name.includes('v7a')) return t('fcl_arch_v7a');
  if (name.includes('x86_64') || name.includes('x64')) return t('fcl_arch_x64');
  if (name.includes('x86')) return t('fcl_arch_x86');
  return null;
}
</script>

<template>
  <div class="fcl-card">
    <div class="card-header">
      <span class="version-name">{{ release.name }}</span>
      <span class="version-date">{{ new Date(release.created_at).toLocaleDateString() }}</span>
    </div>
    <div class="assets-list">
      <a
        v-for="asset in release.assets_files"
        :key="asset.name"
        :href="asset.download_url"
        target="_blank"
        rel="noopener noreferrer"
        class="asset-item"
      >
        <span class="asset-arch">{{ archLabel(asset.name) || asset.name }}</span>
        <span class="asset-size">{{ formatSize(asset.size) }}</span>
        <span class="asset-dl">{{ t('fcl_download') }}</span>
      </a>
    </div>
  </div>
</template>

<style scoped>
.fcl-card {
  background: var(--code-bg);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 20px;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.fcl-card:hover {
  border-color: var(--accent-border);
  box-shadow: var(--shadow);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
}

.version-name {
  font-size: 17px;
  font-weight: 600;
  color: var(--text-h);
  font-family: var(--mono);
}

.version-date {
  font-size: 13px;
  color: var(--text);
  font-family: var(--mono);
}

.assets-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.asset-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  border-radius: 8px;
  text-decoration: none;
  background: var(--bg);
  border: 1px solid var(--border);
  transition: border-color 0.2s;
}

.asset-item:hover {
  border-color: var(--accent-border);
}

.asset-arch {
  font-size: 14px;
  color: var(--text-h);
  font-family: var(--mono);
}

.asset-size {
  font-size: 12px;
  color: var(--text);
  font-family: var(--mono);
}

.asset-dl {
  font-size: 13px;
  color: var(--accent);
  font-weight: 500;
}
</style>

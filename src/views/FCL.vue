<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { FCLVersion } from '../types';
import { t } from '../i18n';
import { API_BASE } from '../api';
import FCLVersionCard from '../components/FCLVersionCard.vue';

const releases = ref<FCLVersion[]>([]);
const loading = ref(true);

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
</script>

<template>
  <div class="fcl-page">
    <div class="page-header">
      <h1 class="page-title">{{ t('fcl_title') }}</h1>
    </div>

    <div v-if="loading" class="loading-state">{{ t('fcl_loading') }}</div>

    <div v-else class="releases-list">
      <FCLVersionCard
        v-for="r in releases"
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
}
</style>

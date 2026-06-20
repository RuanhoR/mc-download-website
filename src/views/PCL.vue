<script setup lang="ts">
import { t } from '../i18n';
</script>

<template>
  <div class="pcl-page">
    <div class="pcl-card">
      <h1 class="page-title">{{ t('pcl_title') }}</h1>
      <p class="page-desc">{{ t('pcl_desc') }}</p>
      <a
        href="https://ifdian.net/p/0164034c016c11ebafcb52540025c377"
        target="_blank"
        rel="noopener noreferrer"
        class="pcl-link"
      >
        {{ t('pcl_link') }}
      </a>
    </div>
  </div>
</template>

<style scoped>
.pcl-page {
  padding: 48px 24px;
  max-width: 1126px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
}

.pcl-card {
  max-width: 480px;
  width: 100%;
  text-align: center;
  padding: 48px 32px;
  border: 1px solid var(--border);
  border-radius: 16px;
  background: var(--code-bg);
}

.page-title {
  font-size: 28px;
  font-weight: 600;
  color: var(--text-h);
  margin: 0 0 16px;
}

.page-desc {
  font-size: 15px;
  color: var(--text);
  margin: 0 0 28px;
  line-height: 1.6;
}

.pcl-link {
  display: inline-block;
  padding: 12px 32px;
  background: var(--accent);
  color: #fff;
  text-decoration: none;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 500;
  transition: opacity 0.2s;
}

.pcl-link:hover {
  opacity: 0.9;
}

@media (max-width: 640px) {
  .pcl-page {
    padding: 32px 16px;
  }
  .pcl-card {
    padding: 32px 20px;
  }
}
</style>

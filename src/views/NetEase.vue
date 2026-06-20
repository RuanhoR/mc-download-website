<script setup lang="ts">
import { t } from '../i18n';
</script>

<template>
  <div class="netease-page">
    <div class="netease-card">
      <h1 class="page-title">{{ t('netease_title') }}</h1>
      <p class="page-desc">{{ t('netease_desc') }}</p>
      <a
        href="https://mc.163.com"
        target="_blank"
        rel="noopener noreferrer"
        class="netease-link"
      >
        {{ t('netease_link') }}
      </a>
    </div>
  </div>
</template>

<style scoped>
.netease-page {
  padding: 48px 24px;
  max-width: 1126px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
}

.netease-card {
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

.netease-link {
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

.netease-link:hover {
  opacity: 0.9;
}
</style>

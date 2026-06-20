<script setup lang="ts">
import { t } from '../i18n';
</script>

<template>
  <footer class="footer">
    <div class="footer-inner">
      <p class="footer-line">{{ t('footer_built') }}</p>
      <p class="footer-line">{{ t('footer_mcbe_api') }}</p>
      <p class="footer-line">{{ t('footer_fcl_api') }}</p>
      <p class="footer-line">
        <a href="mailto:zcvb182a@163.com">{{ t('footer_contact') }}</a>
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  padding: 32px 24px;
  margin-top: auto;
}

.footer-inner {
  max-width: 1126px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
}

.footer-line {
  font-size: 13px;
  color: var(--text);
  opacity: 0.7;
}

.footer-line a {
  color: var(--accent);
  text-decoration: none;
}

.footer-line a:hover {
  text-decoration: underline;
}
</style>

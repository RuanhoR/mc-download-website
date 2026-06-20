<script setup lang="ts">
import { t } from '../i18n';
</script>

<template>
  <div class="home">
    <section class="hero-section">
      <h1 class="hero-title">{{ t('home_title') }}</h1>
      <p class="hero-subtitle">{{ t('home_subtitle') }}</p>
      <p class="hero-disclaimer">{{ t('home_disclaimer') }}</p>
    </section>

    <section class="cards-grid">
      <router-link to="/mcbe" class="home-card">
        <div class="card-icon">MCBE</div>
        <h2 class="card-title">Minecraft Bedrock Edition</h2>
        <p class="card-desc">{{ t('home_desc_mcbe') }}</p>
        <span class="card-cta">{{ t('home_cta_mcbe') }}</span>
      </router-link>

      <router-link to="/fcl" class="home-card">
        <div class="card-icon">FCL</div>
        <h2 class="card-title">Fold Craft Launcher</h2>
        <p class="card-desc">{{ t('home_desc_fcl') }}</p>
        <span class="card-cta">{{ t('home_cta_fcl') }}</span>
      </router-link>

      <router-link to="/pcl" class="home-card">
        <div class="card-icon">PCL</div>
        <h2 class="card-title">Plain Craft Launcher</h2>
        <p class="card-desc">{{ t('home_desc_pcl') }}</p>
        <span class="card-cta">{{ t('home_cta_pcl') }}</span>
      </router-link>

      <router-link to="/netease" class="home-card">
        <div class="card-icon">MC</div>
        <h2 class="card-title">Minecraft NetEase</h2>
        <p class="card-desc">{{ t('home_desc_netease') }}</p>
        <span class="card-cta">{{ t('home_cta_netease') }}</span>
      </router-link>
    </section>
  </div>
</template>

<style scoped>
.home {
  padding: 48px 24px;
  max-width: 1126px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
}

.hero-section {
  text-align: center;
  margin-bottom: 56px;
}

.hero-title {
  font-size: 48px;
  font-weight: 600;
  color: var(--text-h);
  margin: 0 0 12px;
  letter-spacing: -1px;
}

.hero-subtitle {
  font-size: 18px;
  color: var(--text);
  margin: 0 0 12px;
}

.hero-disclaimer {
  display: inline-block;
  font-size: 14px;
  color: var(--accent);
  background: var(--accent-bg);
  border: 1px solid var(--accent-border);
  padding: 8px 20px;
  border-radius: 8px;
  font-weight: 500;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

.home-card {
  display: flex;
  flex-direction: column;
  padding: 32px;
  border: 1px solid var(--border);
  border-radius: 16px;
  text-decoration: none;
  background: var(--code-bg);
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
  text-align: left;
}

.home-card:hover {
  border-color: var(--accent-border);
  box-shadow: var(--shadow);
  transform: translateY(-2px);
}

.card-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: var(--accent-bg);
  color: var(--accent);
  font-weight: 700;
  font-size: 16px;
  font-family: var(--mono);
  margin-bottom: 20px;
}

.card-title {
  font-size: 20px;
  font-weight: 600;
  color: var(--text-h);
  margin: 0 0 10px;
}

.card-desc {
  font-size: 14px;
  color: var(--text);
  line-height: 1.6;
  margin: 0 0 20px;
  flex: 1;
}

.card-cta {
  font-size: 14px;
  color: var(--accent);
  font-weight: 500;
}

@media (max-width: 640px) {
  .home {
    padding: 32px 16px;
  }
  .hero-title {
    font-size: 32px;
  }
  .cards-grid {
    grid-template-columns: 1fr;
  }
}
</style>

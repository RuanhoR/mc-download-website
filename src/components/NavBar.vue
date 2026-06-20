<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { t } from '../i18n';

const route = useRoute();
const menuOpen = ref(false);

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}

function closeMenu() {
  menuOpen.value = false;
}
</script>

<template>
  <nav class="navbar">
    <div class="nav-inner">
      <router-link to="/" class="nav-logo" @click="closeMenu">MCDownload</router-link>
      <button class="hamburger" :class="{ open: menuOpen }" @click="toggleMenu" aria-label="Menu">
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>
      <div class="nav-links" :class="{ open: menuOpen }">
        <router-link to="/" :class="{ active: route.path === '/' }" @click="closeMenu">
          {{ t('nav_home') }}
        </router-link>
        <router-link to="/mcbe" :class="{ active: route.path === '/mcbe' }" @click="closeMenu">
          {{ t('nav_mcbe') }}
        </router-link>
        <router-link to="/fcl" :class="{ active: route.path === '/fcl' }" @click="closeMenu">
          {{ t('nav_fcl') }}
        </router-link>
        <router-link to="/pcl" :class="{ active: route.path === '/pcl' }" @click="closeMenu">
          {{ t('nav_pcl') }}
        </router-link>
        <router-link to="/netease" :class="{ active: route.path === '/netease' }" @click="closeMenu">
          {{ t('nav_netease') }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  border-bottom: 1px solid var(--border);
  background: var(--bg);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-inner {
  max-width: 1126px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  height: 56px;
}

.nav-logo {
  font-size: 20px;
  font-weight: 600;
  color: var(--text-h);
  text-decoration: none;
  letter-spacing: -0.5px;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
}

.hamburger-line {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--text-h);
  border-radius: 2px;
  transition: transform 0.2s, opacity 0.2s;
}

.hamburger.open .hamburger-line:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.hamburger.open .hamburger-line:nth-child(2) {
  opacity: 0;
}

.hamburger.open .hamburger-line:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

.nav-links {
  display: flex;
  gap: 4px;
}

.nav-links a {
  color: var(--text);
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 15px;
  transition: background 0.2s, color 0.2s;
}

.nav-links a:hover {
  background: var(--accent-bg);
  color: var(--text-h);
}

.nav-links a.active {
  color: var(--accent);
  background: var(--accent-bg);
}

@media (max-width: 640px) {
  .hamburger {
    display: flex;
  }

  .nav-links {
    display: none;
    position: absolute;
    top: 56px;
    left: 0;
    right: 0;
    flex-direction: column;
    background: var(--bg);
    border-bottom: 1px solid var(--border);
    padding: 8px;
    gap: 2px;
  }

  .nav-links.open {
    display: flex;
  }

  .nav-links a {
    padding: 12px 16px;
    font-size: 16px;
  }
}
</style>

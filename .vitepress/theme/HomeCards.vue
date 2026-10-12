<script setup lang="ts">
import { withBase } from 'vitepress'

defineProps<{
  items: { icon: string; title: string; text: string; link: string; badge?: string }[]
}>()

/** Small line icons (24px grid, stroke) so cards stay crisp in both themes. */
const icons: Record<string, string> = {
  rocket: 'M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2m-3-3 4 4m-4-4 3-6 7-5c2 0 3 1 3 3l-5 7-6 3m6-9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z',
  map: 'M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Zm0 0v14m6-12v14',
  calendar: 'M4 6h16v14H4zM4 10h16M8 3v4m8-4v4',
  ticket: 'M3 8V6h18v2a2 2 0 0 0 0 4v2a2 2 0 0 0 0 4v0H3v-2a2 2 0 0 0 0-4V12a2 2 0 0 0 0-4Zm10-2v12',
  card: 'M3 6h18v12H3zM3 10h18M7 15h4',
  users: 'M16 20v-1a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1m7-9a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm13 9v-1a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8',
  layout: 'M3 4h18v16H3zM3 9h18M9 9v11',
  globe: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-9-9h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3Z',
  search: 'M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm10 3-5-5',
  puzzle: 'M10 3h4v3a2 2 0 1 0 4 0V3h3v7h-3a2 2 0 1 0 0 4h3v7h-7v-3a2 2 0 1 0-4 0v3H3v-7h3a2 2 0 1 0 0-4H3V3h7Z',
  mail: 'M3 5h18v14H3zm0 0 9 8 9-8',
  chart: 'M4 20V10m6 10V4m6 16v-7m4 7H2',
  shield: 'M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Zm-3 9 2 2 4-4',
  code: 'm8 8-5 4 5 4m8-8 5 4-5 4M14 4l-4 16',
  download: 'M12 3v12m0 0-5-5m5 5 5-5M4 21h16',
  help: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-2.5-11.5A2.5 2.5 0 1 1 12 12v1.5m0 3.5h.01',
  star: 'm12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9L12 3Z',
  qr: 'M4 4h6v6H4zm10 0h6v6h-6zM4 14h6v6H4zm10 0h2v2h-2zm4 0h2v2h-2zm-4 4h2v2h-2zm4 0h2v2h-2z',
}
</script>

<template>
  <div class="home-cards">
    <a v-for="item in items" :key="item.link" class="home-card" :href="withBase(item.link)">
      <span class="hc-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="20" height="20"><path :d="icons[item.icon] ?? icons.rocket" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg>
      </span>
      <span class="hc-title">{{ item.title }} <span v-if="item.badge" class="hc-badge">{{ item.badge }}</span></span>
      <span class="hc-text">{{ item.text }}</span>
      <span class="hc-more" aria-hidden="true">Read guide →</span>
    </a>
  </div>
</template>

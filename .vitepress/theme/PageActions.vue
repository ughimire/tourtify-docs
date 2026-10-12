<script setup lang="ts">
import { ref } from 'vue'
import { useData, withBase } from 'vitepress'

const { page } = useData()
const copied = ref(false)
const mdUrl = () => withBase('/' + page.value.relativePath)

async function copy() {
  try {
    const res = await fetch(mdUrl())
    if (!res.ok) throw new Error(String(res.status))
    await navigator.clipboard.writeText(await res.text())
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  } catch {
    window.open(mdUrl(), '_blank')
  }
}
</script>

<template>
  <div class="page-actions" aria-label="Page actions">
    <button type="button" class="pa-btn" @click="copy">
      <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" d="M9 9h10v12H9zM5 15H4V3h11v1" /></svg>
      {{ copied ? 'Copied' : 'Copy page' }}
    </button>
    <a class="pa-btn" :href="mdUrl()" target="_blank" rel="noopener">View as Markdown</a>
  </div>
</template>

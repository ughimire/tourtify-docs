<script setup lang="ts">
const plans = [
  { name: 'Starter', annual: 29, monthly: 39, seats: 3, media: '10 GB', blurb: 'Everything to sell online' },
  { name: 'Growth', annual: 59, monthly: 79, seats: 8, media: '30 GB', blurb: 'Grow revenue and save time', popular: true },
  { name: 'Scale', annual: 99, monthly: 129, seats: 25, media: '100 GB', blurb: 'Distribution and integrations' },
]
</script>

<template>
  <div class="plan-grid">
    <div v-for="p in plans" :key="p.name" class="plan" :class="{ popular: p.popular }">
      <div class="plan-head">
        <strong>{{ p.name }}</strong>
        <span v-if="p.popular" class="hc-badge">Most popular</span>
      </div>
      <div class="plan-price"><span>${{ p.annual }}</span>/mo billed yearly</div>
      <div class="plan-sub">or ${{ p.monthly }} month to month</div>
      <p>{{ p.blurb }}</p>
      <ul>
        <li>{{ p.seats }} team members</li>
        <li>{{ p.media }} media storage</li>
        <li>0% booking commission</li>
      </ul>
    </div>
  </div>
</template>

import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { h } from 'vue'
import PageActions from './PageActions.vue'
import HomeCards from './HomeCards.vue'
import PlanTable from './PlanTable.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: () => h(DefaultTheme.Layout, null, { 'doc-before': () => h(PageActions) }),
  enhanceApp({ app }) {
    app.component('HomeCards', HomeCards)
    app.component('PlanTable', PlanTable)
  },
} satisfies Theme

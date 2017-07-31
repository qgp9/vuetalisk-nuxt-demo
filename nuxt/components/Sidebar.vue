<template>
  <div class="sidebar">
    <div class="container sidebar-sticky">
      <div class="sidebar-about">
        <h1>
          <nuxt-link to="/">
            {{ site.title }}
          </nuxt-link>
        </h1>
        <p class="lead"> {{site.description}} </p>
      </div>

      <nav class="sidebar-nav">
        <nuxt-link 
           v-for="item in menu.order"
           class="sidebar-nav-item" 
           active-class="active"
           :to="menu.menu[item] || ''"
           :key="item+menu[item]"
           >
           {{ item }}
        </nuxt-link>
        <a class="sidebar-nav-item" :href="(site.github||{}).repo">GitHub</a>
        <nuxt-link to="/about">About</nuxt-link>
        <span class="sidebar-nav-item">some text</span>
      </nav>
    </div>
  </div>
</template>
<script>
import {site, data} from '@/api/vuetal'
export default {
  name: 'Sidebar',
  computed: {
    site,
    data,
    menu () { return this.data('/data/menu').sidebar || {} }
  }
}
</script>

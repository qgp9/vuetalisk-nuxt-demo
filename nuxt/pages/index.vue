<template>
  <section class="container">
    <div v-html="content"></div>
    <ul>
      <li v-for="collection in site.collections" 
      v-if="collection.type === 'page'">
        <router-link :to="collection.list">
          List of {{collection.name}}
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
// @note site, current is just helper. Same as
// ...mapGetters('vuetal', ['site', 'current'])
import vuetal, {site, current, currentList} from '@/api/vuetal'

export default {
  computed: {
    path () { return this.$route.path },
    content () { return vuetal.toHtml(this.current) },
    site,
    current,
    currentList
  },
  async fetch ({route, store, params}) {
    await store.dispatch('vuetal/USE_PAGE_AS_CURRENT', '/')
      .catch(err => { throw Error(err) })
  }
}
</script>

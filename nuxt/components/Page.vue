<template>
  <div class="post">
    <h1 class="post-title">{{ page.title }}</h1>
    <span class="post-date">{{ page.date }}</span>
    <div v-html="content"></div>

    <router-link :to="currentList.url">List</router-link>
    <router-link :to="next.url">Next</router-link>
    <router-link :to="previous.url">Previous</router-link>
  </div>
</template>

<script>
import vuetal, {site, current, currentList, next, previous} from '@/api/vuetal'
export default {
  name: 'Page',
  middleware: 'page',
  computed: {
    path () { return this.$route.path },
    page () { return this.current || {} },
    content () { return vuetal.toHtml(this.current) },
    site,
    current,
    currentList,
    next,
    previous
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

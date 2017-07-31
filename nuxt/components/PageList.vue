<template>
  <div class="page-list">
    <ul>
      <li v-for="item in currentList.data"> <router-link :to="{path:item.url}">{{item.title}} - {{item.url}} </router-link></li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'PageList',
  middleware: 'page-list',
  computed: {
    ...mapGetters('vuetal', ['currentList'])
  }
}
</script>

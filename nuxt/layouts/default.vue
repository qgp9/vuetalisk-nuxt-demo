<template>
  <div>
    <sidebar/>
    <div class="content container">
      <nuxt/>
    </div>
  </div>
</template>

<script>
import Sidebar from '~/components/Sidebar'
export default {
  middleware: ['layout-default'],
  components: {
    Sidebar
  }
}
</script>

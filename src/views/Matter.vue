<template>
  <div>
    <NavBar :activeIndex="activeIndex"/>
  </div>
</template>

<script>
import NavBar from '@/views/NavBar'
export default {
  components: { NavBar },
  data () {
    return {
      activeIndex: ''
    }
  },
  created () {
    this.activeIndex = this.$route.path.replace('/', '')
    // console.log()
  }
}
</script>

<style>

</style>

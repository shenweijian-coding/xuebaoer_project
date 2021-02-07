<template>
  <div>
    <NavBar :activeIndex="activeIndex"/>
    我的
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
export default {
  components: { NavBar },
  data () {
    return {
      activeIndex: ''
    }
  }
}
</script>

<style>

</style>

<template>
  <div>
    <NavBar :activeIndex="activeIndex"/>
    <!-- <iframe width="100%" height="600px" src="https://docs.qq.com/doc/DRU9pTWJUdE1HWk9X" frameborder="0"></iframe> -->
  </div>
</template>

<script>
import NavBar from '@/views/NavBar'
export default {
  components: { NavBar },
  data () {
    return {
      activeIndex: 'about'
    }
  }
}
</script>

<style>

</style>

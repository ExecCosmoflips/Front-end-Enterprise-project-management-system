<template>
  <Layout style="height: 100%" class="main">
    <side-menu accordin ref="sideMenu">

    </side-menu>
  </Layout>
</template>

<script>
  import SideMenu from './components/side-menu/side-menu'
    export default {
        name: "Main",
      components: {
          SideMenu
      }
    }
</script>

<style scoped>

</style>

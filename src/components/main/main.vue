<template>
  <Layout style="height: 100%" class="layout">
    <HeaderBar>
      <div class="layout-logo">
        
      </div>
      <div class="layout-nav"></div>
      <header-bar>
      </header-bar>
    </HeaderBar>
    <Layout>
      <Sider hide-trigger :style="{background: '#fff'}">
      <side-menu accordin ref="sideMenu">

      </side-menu>
      </Sider>
    </Layout>
  </Layout>
</template>

<script>
  import SideMenu from './components/side-menu/side-menu'
  import HeaderBar from "./components/header-bar/header-bar";
    export default {
        name: "Main",
      components: {
        HeaderBar,
          SideMenu
      }
    }
</script>

<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }
  .layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }
</style>

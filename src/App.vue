<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
      
      <router-link to="/nft-list">NFT List</router-link> |
      <router-link to="/mint-form">Mint Form</router-link>
    </div>
    <router-view />
    <div :class="{'active': toggleActive}" class="toggle_container">
      
    </div>
  </div>
</template>
<script>


export default {
    name: 'App',

    components: {
        
    },
    data() {
        return {
            
        }
    },

    methods: {
       
    }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>

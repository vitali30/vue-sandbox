<template>
  <div id="app">
    <router-link class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" to="/">Home</router-link> |
    <router-link class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" to="/about">About</router-link>
  </div>
</template>

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

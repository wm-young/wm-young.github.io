<template>
  <div id="app">
    <div id="banner">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/career">Career</router-link> |
        <router-link to="/education">Education</router-link> |
        <router-link to="/projects">Projects</router-link> |
        <router-link to="/hobbies">Hobbies</router-link>
      </div>
      <div id="header">
        <h1>Michael Young</h1>
      </div>
    </div>
    <div id="main">
      <router-view/>
    </div>
  </div>
</template>

<style>
#main {
  padding:30px;
  justify-content: center;
  margin: auto;
  width: 75%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #E1E1E1;
  background-color: #404040;
  height: 100%;
}

html {
  background-color: #404040;
  height: 100%;
}

#nav {
  padding: 30px;
  font-size: 20px;
}

#nav a {
  font-weight: bold;
  color: #E1E1E1;
}

#banner {
  background-image: url('./assets/banner.png');
  background-size: cover;
  background-position: center center;
  height: 350px;
}

#header h1{
  text-align: center;
  font-size: 72px;
  font-weight: lighter;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: #E1E1E1;
}

a:visited {
  font-weight: bold;
  color: #E1E1E1;
}

a.sub-nav {
  color: #42b983;
}

a.sub-nav:visited {
  color: #42b983;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

h1 {
  color: #E1E1E1;
  font-size: 36px;
  margin-top: 20px;
  margin-bottom: 20px;
}

h4 {
  margin-top: 20px;
  margin-bottom: 20px;
}

p {
    text-indent: 2em;
}

p.no-indent {
    text-indent: 0em;
}
.image-txt-container {
  display: flex;
  align-items: center;
  flex-direction: row;
}

hr {
    border: 1px solid black;
    border-radius: 2px;
}

</style>

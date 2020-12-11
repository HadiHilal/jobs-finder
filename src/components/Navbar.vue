<template>
  <nav class="main-navbar">
    <div class="container">
      <div class="logo float-left">
        <span>myJobs</span>
      </div>
      <ul class="links list-unstyled float-right">
        <li><router-link to="/joblist">find job</router-link></li>
        <li><router-link to="/">about</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
.main-navbar {
  padding: 45px;
  background-color: #0a043c;
}
.main-navbar .logo {
  font-weight: 600;
  font-size: 30px;
  color: #fff;
}
.main-navbar .links li {
  display: inline;
  margin: 20px;
}
.main-navbar .links li a {
  text-transform: uppercase;
  font-size: 18px;
  color: #bbbbbb;
}
</style>

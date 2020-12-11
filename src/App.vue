<template>
  <div id="app">
    <Nav />
    <router-view />
    <Footer />
    
  </div>
</template>
<script>
import Nav from "./components/Navbar";
import Footer from "./components/Footer";
export default {
  data: function() {
    return {
      jobs: [],
      onejob:[]
    };
  },
  created() {
   
  },
  components: {
    Nav,
    Footer,
  },
};
</script>

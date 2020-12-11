<template>
  <div class="main-about mains">
    <div class="container">
      <h1 class="text-uppercase">about page</h1>
      <div class="about-box text-center">
        <h4 class="text-capitalize ">who we are ?</h4>
        <p>
          <br />
          We are company have one goal , its found to you comfortable job . not
          just in turkey , but in all the world. <br />
          lets <router-link to="/joblist"> find job to you</router-link>
        </p>
      </div>
      <div class="about-box text-center">
        <h4 class="text-capitalize ">Our privacy ?</h4>
        <p>
          our company save your privacy if you are search or post any job.
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.mains h1 {
  color: #a0a0a0;
  text-align: center;
  font-weight: bold;
  margin: 34px auto;
}
.about-box {
  margin: 50px auto;
  padding: 50px;
  box-shadow: 10px 10px 10px 10px #ccc;
}
.about-box h4 {
  color: #03506f;
}
</style>

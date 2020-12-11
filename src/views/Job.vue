<template>
  <div class="main-home mains">
    <div class="container">
      <h1 class="text-uppercase">job page</h1>
      <div class="job-box">
        <h2 class="text-uppercase">{{ onejob.positionName }}</h2>
        <h3>{{ onejob.companyName }}</h3>
        <span>
          {{ onejob.countryCode }} : {{ onejob.countryName }} ,
          {{ onejob.cityName }} , {{ onejob.townName }}</span
        >
        <p>{{ onejob.address }}</p>
        <p>{{ onejob.description }}</p>
        <button class="btn btn-success">send cv</button>
        <button class="btn btn-default">cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      id: "",
      jobs: [],
      onejob: [],
    };
  },
  created() {
    //this.$route.params.id
    Axios.get("../db.json")
      .then((data) => {
        this.jobs = data.data.result;
        const myjob = this.jobs;
        const sampleId = this.$route.params.id;
        const tekjob = myjob
          .filter((obj) => {
            return obj.jobId === sampleId;
          })
          .pop();
        this.onejob = tekjob;
      })
      .catch((erorr) => {
        console.log(erorr);
      });
  },
};
</script>

<style>
.mains h1 {
  color: #a0a0a0;
  text-align: center;
  margin: 24px auto;
}
h2{
  color: #0D143D;
}
h3{
  color: #fdb827;;
}
</style>

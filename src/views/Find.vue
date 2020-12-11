<template>
  <div class="main-find mains">
    <div class="container">
      <h1 class="text-uppercase">Find jobs</h1>
      <form class="box-form" @submit.prevent>
        <h5 class="text-left">There are 8,0000 jobs postings here for you!</h5>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <input
                list="city"
                name="cities"
                id="cities"
                v-model="location"
                class="form-control"
                placeholder="Location: for example istanbul"
              />
              <datalist id="city">
                <option value="Adana" />
                <option value="Adıyaman" />
                <option value="Afyonkarahisar" />
                <option value="Ağrı" />
                <option value="Amasya " />
                <option value="Ankara" />
                <option value="Antalya" />
                <option value="Artvin" />
                <option value="Aydın" />
                <option value="Balıkesir" />
                <option value="Bilecik" />
                <option value="Bingöl" />
                <option value="Bitlis" />
                <option value="Bolu" />
                <option value="Burdur" />
                <option value="Bursa" />
                <option value="Çanakkale" />
                <option value="Çankırı" />
                <option value="Çorum" />
                <option value="Denizli" />
                <option value="Diyarbakır" />
                <option value="Edirne" />
                <option value="Elazığ" />
                <option value="Erzincan" />
                <option value="Erzurum" />
                <option value="Eskişehir" />
                <option value="Gaziantep" />
                <option value="Giresun" />
                <option value="Gümüşhane" />
                <option value="Hakkâri" />
                <option value="Hatay" />
                <option value="Isparta" />
                <option value="Mersin" />
                <option value="İstanbul" />
                <option value="İzmir" />
                <option value="Kars" />
                <option value="Kastamonu" />
                <option value="Kayseri" />
                <option value="Kırklareli" />
                <option value="Kırşehir" />
                <option value="Kocaeli" />
                <option value="Konya" />
                <option value="Kütahya" />
                <option value="Malatya" />
                <option value="Manisa" />
                <option value="Kahramanmaraş" />
                <option value="Mardin" />
                <option value="Muğla" />
                <option value="Muş" />
                <option value="Nevşehir" />
                <option value="Niğde" />
                <option value="Ordu" />
                <option value="Rize" />
                <option value="Sakarya" />
                <option value="Samsun" />
                <option value="Siirt" />
                <option value="Sinop" />
                <option value="Sivas" />
                <option value="Tekirdağ" />
                <option value="Tokat" />
                <option value="Trabzon" />
                <option value="Tunceli" />
                <option value="Şanlıurfa" />
                <option value="Uşak" />
                <option value="Van" />
                <option value="Yozgat" />
                <option value="Zonguldak" />
                <option value="Aksaray" />
                <option value="Bayburt" />
                <option value="Karaman" />
                <option value="Kırıkkale" />
                <option value="Batman" />
                <option value="Şırnak" />
                <option value="Bartın" />
                <option value="Ardahan" />
                <option value="Iğdır" />
                <option value="Yalova" />
                <option value="Karabük" />
                <option value="Kilis" />
                <option value="Osmaniye" />
                <option value="Düzce" />
              </datalist>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                v-model="Postition"
                placeholder="Postition: for example php developer"
              />
            </div>
          </div>
        </div>
      </form>
      <h3 class="text-center">All Jobs</h3>
      <div class="job-box" v-for="job in filterSerach" :key="job.id">
        <h6 class="text-capitalize ">
          <router-link :to="{ name: 'Job', params: { id: job.jobId } }">{{
            job.positionName
          }}</router-link>
        </h6>
        <h6 class="text-capitalize company-name ">{{ job.companyName }}</h6>
        <h6 class="text-capitalize ">
          {{ job.countryName }} , {{ job.cityName }} , {{ job.townName }}
        </h6>
      </div>
    </div>
  </div>
</template>
<script>
import Axios from "axios";

export default {
  data: function() {
    return {
      jobs: [],
      location: "",
      Postition: "",
    };
  },
  created() {
    Axios.get("db.json")
      .then((data) => {
        console.log(data.data.result);
        this.jobs = data.data.result;
      })
      .catch((erorr) => {
        console.log(erorr);
      });
  },
  computed: {
    filterSerach: function() {
      return this.jobs.filter((jobs) => {
        if (
          jobs.positionName.match(this.Postition) &&
          jobs.cityName.match(this.location)
        ) {
          return jobs.positionName.match(this.Postition);
        }
      });
    },
  },
};
</script>
<style>
.mains h1 {
  color: #a0a0a0;
  text-align: center;
  font-weight: bold;
  margin: 34px auto;
}
.box-form {
  margin: 40px auto;
  padding: 40px;
  box-shadow: 8px 8px 9px 4px #ccc;
}

.box-form h5 {
  margin: 28px auto;
  color: #fdb827;
}
.box-form .find-btn {
  background-color: #fdb827;
  border: none;
  color: #fff;
}
.box-form .find-btn:hover {
  opacity: 0.9;
  color: #fff;
}
.job-box {
  margin: 40px auto;
  padding: 25px;
  box-shadow: 4px 7px 9px 1px #99a1dc;
}
.job-box:hover {
  background-color: #eee;
}
.company-name {
  color: #febd3b;
}
</style>

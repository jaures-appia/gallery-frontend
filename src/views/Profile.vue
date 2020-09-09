<template>
  <div class="index2">
    <my-header></my-header>
    <div class="container ">
        <div class="row mt-5 mb-5" v-show="seeProfile">
          <div class="col-md-8 col-lg-8 mx-auto mb-5">
      
      
            <!-- Section: Block Content -->
            <section>
      
              <!-- Card -->
              <div class="card testimonial-card ">
      
                  <!-- Background color -->
                  <div class="card-up info-color-dark p-3 white-text">
                    <span class="float-right my-icon-edit" style="cursor: pointer" v-on:click="isModifyProfile"><i class="fas fa-edit fa-2x"></i></span>
                    <p class="font-weight-normal mb-0">{{ username }}</p>
                    
                  </div>
      
                  <!-- Avatar -->
                  <div class="avatar mx-auto white">
                    <img :src="avatar" class="rounded-circle" alt="woman avatar">
                  </div>
      
                  <!-- Content -->
                  <div class="card-body px-3 py-4">
                    <div class="row">
                      <div class="col-6 text-center">
                        <p class="font-weight-bold mb-0">4300</p>
                        <p class="small text-uppercase mb-0">Photos</p>
                      </div>
                      <div class="col-6 text-center border-left border-right">
                        <p class="font-weight-bold mb-0">01-01-2020</p>
                        <p class="small text-uppercase mb-0">registration date</p>
                      </div>
                    </div>
                  </div>
      
                </div>
                <!-- Card -->
      
            </section>
            <!-- Section: Block Content -->
      
      
          </div>
        </div>

        <!-- update profile -->
        <div class="row mt-5 mb-5 rotate-vert-center" v-show="modifyProfile">
            <div class="col-lg-8 offset-lg-2">
                <!-- Default form contact -->
                <form class="text-center border border-dark border-top-0 border-right-0 p-5" action="#!">

                <p class="h4 mb-4">Edit Profile</p>

                <div class="z-depth-1-half mb-4">
                    <img :src="avatar" class="rounded-circle img-fluid"
                    alt="example placeholder">
                </div>

                <!-- Name -->
                <input type="text" id="defaultContactFormName" v-model="username" class="form-control mb-4" placeholder="Username">

                <!-- email -->
                <input type="email" id="defaultContactFormEmail" v-model="email" class="form-control mb-4" placeholder="email">

                <!-- avatar -->
                <input type="text" id="defaultContactFormAvatar" v-model="avatar" class="form-control mb-4" placeholder="avatar">

                <!-- photo -->
                <!-- <div class="input-group mb-4">
                    <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
                    </div>
                    <div class="custom-file">
                    <input type="file" class="custom-file-input form-group" id="inputGroupFile01"
                        aria-describedby="inputGroupFileAddon01">
                    <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                    </div>
                </div> -->

                <!-- password -->
                <input type="password" id="defaultContactFormPwd" v-model="password" class="form-control mb-4" placeholder="Password">

                <!-- Send button -->
                <input class="btn btn-info btn-block" type="submit" value="Validate" v-on:click.prevent="isSeeProfile">

                </form>
                <!-- Default form contact -->
            </div>
        
        </div>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header.vue'
import axios from 'axios'

export default {
  name: 'Profile',
  components: {
    "my-header": Header,
  },
  data(){
    return{
      seeProfile: true,
      modifyProfile: false,
      id: this.$route.params.userID,
      username: null,
      email: null,
      avatar: null,
      password: null,
    }
  },
  methods:{
    isModifyProfile(){
        this.seeProfile = false,
        this.modifyProfile = true
    },
    isSeeProfile(){
        this.seeProfile = true,
        this.modifyProfile = false
    },
    updateAndSeePhoto(){
      axios({
        method: 'put',
        url: 'http://localhost:3000/users/'+this.id,
        data: {
          username: this.username,
          email: this.email,
          avatar: this.avatar,
          password: this.password,
        }
      })
      .then((res) => {
        this.username = res.data.username
        this.email = res.data.email
        this.avatar = res.data.avatar
        this.password = res.data.password
        this.seeProfile = true,
        this.modifyProfile = false
      })
      .catch((e)=>console.log(e))
    
        
    },
  },
  mounted(){
    axios
    .get('http://localhost:3000/users/'+this.id)
    .then((res) => {
     console.log(res.data)
      this.username = res.data.username
      this.email = res.data.email
      this.avatar = res.data.avatar
      this.password = res.data.password
    })
    .catch((e) => {
      console.log(e)
    })
  }
}
</script>

<style scoped>
.rotate-vert-center {
  -webkit-animation: rotate-vert-center 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
          animation: rotate-vert-center 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
}
  /* ----------------------------------------------
 * Generated by Animista on 2020-8-28 12:1:4
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation rotate-vert-center
 * ----------------------------------------
 */
@-webkit-keyframes rotate-vert-center {
  0% {
    -webkit-transform: rotateY(0);
            transform: rotateY(0);
  }
  100% {
    -webkit-transform: rotateY(360deg);
            transform: rotateY(360deg);
  }
}
@keyframes rotate-vert-center {
  0% {
    -webkit-transform: rotateY(0);
            transform: rotateY(0);
  }
  100% {
    -webkit-transform: rotateY(360deg);
            transform: rotateY(360deg);
  }
}
</style>

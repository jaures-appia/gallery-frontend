<template>
  <div class="index2">
    <my-header></my-header>
    <div class="container ">
       <!-- single photo -->
        <div class="row mt-5 mb-5" v-show="seePhoto">
            <div class="col-lg-8 offset-lg-2">
                <!-- Card -->
                <div class="card booking-card">

                <!-- Card image -->
                <div class="view overlay">
                    <img class="card-img-top" :src="photo.photoUrl" alt="Card image cap">
                    <a href="#!">
                    <div class="mask rgba-white-slight"></div>
                    </a>
                </div>

                <!-- Card content -->
                <div class="card-body">

                    <!-- Title -->
                    <small class="text-sm text-muted float-right">Ajouté le {{ photo.createdAt }}</small>
                    <h4 class="card-title font-weight-bold">{{ photo.title }}</h4>
                    
                
                    <!-- Text -->
                    <p class="card-text">{{ photo.description }}</p>
                    <hr class="my-2">
                    <!-- Button -->
                    <a href="#" class="btn btn-info btn-rounded p-1 mx-0 mb-0 mr-2" v-on:click.prevent="isModifyPhoto()">Modifier</a>
                    <a href="#" @click.prevent="deletePhoto()" class="btn btn-danger btn-rounded p-1 mx-0 mb-0">Supprimer</a>

                </div>

                </div>
                <!-- Card -->
            </div>
        </div>


        <!-- update photo -->
        <div class="row mt-5 mb-5 rotate-vert-center" v-show="modifyPhoto">
            <div class="col-lg-8 offset-lg-2">
                <!-- Default form contact -->
                <form class="text-center border border-dark border-top-0 border-right-0 p-5" action="#!">
        
                    <p class="h4 mb-4">Edit Photo</p>
        
                    <div class="z-depth-1-half mb-4">
                    <img :src="photo.photoUrl" class="img-fluid"
                        alt="example placeholder">
                    </div>
        
                    <!-- Name -->
                    <input type="text" id="defaultContactFormName" class="form-control mb-4" placeholder="Title" v-model="title">
        
                    <!-- photo -->
                    <!-- <input type="text" id="defaultContactFormName" class="form-control mb-4" placeholder="Title" v-model="photoUrl" > -->
                    <div class="input-group mb-4">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
                    </div>
                    <div class="custom-file">
                        <input type="file" @change="selectedFile" value="photoUrl" class="custom-file-input form-group" id="inputGroupFile01"
                        aria-describedby="inputGroupFileAddon01">
                        <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                    </div>
                    </div>
        
                    <!-- Message -->
                    <div class="form-group">
                        <textarea class="form-control rounded-0" id="exampleFormControlTextarea2" rows="3" placeholder="Description" v-model="description"></textarea>
                    </div>
        
                    <!-- Send button -->
                    <input class="btn btn-info btn-block" type="submit" value="Validate" v-on:click.prevent="updateAndSeePhoto()">
        
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
// import Footer from '../components/Footer.vue'
import axios from 'axios'

export default {
  name: 'SinglePhoto',
  components: {
    "my-header": Header,
  },
  data(){
    return{
      seePhoto: true,
      modifyPhoto: false,
      id: this.$route.params.photoID,
      photo: {},
      title: null,
      description: null,
      photoUrl: null,
      photoName: null,
      file: null
    }
  },
  methods:{
    
    isModifyPhoto(){
        this.seePhoto = false,
        this.modifyPhoto = true
    },
    selectedFile(event){
      console.log(event)
      this.file = event.target.files[0]
      console.log(this.file)
    },
    updateAndSeePhoto(){
      let data
      if(this.file){
        const fd = new FormData()
        fd.append('image', this.file, this.file.name)
        fd.append('title', this.title)
        fd.append('description', this.description)
        fd.append('UserId', "5f60c9bc27c61a2978be4c95")
        data = fd
      }else{
        data = {
          title: this.title,
          description: this.description,
          photoUrl: this.photoUrl,
          UserId: "5f60c9bc27c61a2978be4c95"
          }
      }
      axios({
        method: 'put',
        url: 'http://localhost:8000/api/v1/photo/'+this.id,
        data: data
      })
      .then((res) => {
        console.log(res)
        // this.photo = res.data
        // this.seePhoto = true,
        // this.modifyPhoto = false
      })
      .catch((e)=>console.log(e))
    
        
    },
    deletePhoto(){
      let url = 'http://localhost:8000/api/v1/photo/' + this.id
      axios({
        method: 'delete',
        url: url,
      })
      .then(() => {
        this.$router.push({name: 'Index2'})
      })
      .catch((e)=>console.log(e))
    }
  },
  mounted(){
    axios
    .get('http://localhost:8000/api/v1/photo/'+this.id)
    .then((res) => {
      this.photo = res.data
      this.title = this.photo.title
      this.description = this.photo.description
      this.photoUrl = this.photo.photoUrl
      this.photoName = this.photo.photoUrl.split('/images/')[1]
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

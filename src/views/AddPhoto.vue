<template>
  <div class="index2">
    <my-header></my-header>
    <div class="container ">
         <div class="row mt-5 mb-5 rotate-vert-center">
            <div class="col-lg-6 offset-lg-3">
                <!-- Default form contact -->
                <form class="text-center border border-dark border-top-0 border-right-0 p-5" enctype="multipart/form-data" action="" method="post">

                <p class="h4 mb-4">Add New Photo</p>

                <div class="z-depth-1-half mb-4">
                    <img src="https://mdbootstrap.com/img/Photos/Others/placeholder.jpg" class="img-fluid"
                    alt="example placeholder">
                </div>

                <!-- Name -->
                <input type="text" id="defaultContactFormName" class="form-control mb-4" v-model="title" placeholder="Title">

                <!-- photo -->
                <div class="input-group mb-4">
                    <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
                    </div>
                    <div class="custom-file">
                    <input type="file" @change="selectedFile" class="custom-file-input form-group" id="inputGroupFile01"
                        aria-describedby="inputGroupFileAddon01">
                    <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                    </div>
                </div>
                <!-- <input type="text" id="defaultContactFormName" class="form-control mb-4" placeholder="Url de la photo" v-model="photoUrl"> -->

                <!-- Message -->
                <div class="form-group">
                    <textarea class="form-control rounded-0" id="exampleFormControlTextarea2" rows="3" v-model="description" placeholder="Description"></textarea>
                </div>

                <!-- Send button -->
                <input class="btn btn-info btn-block" type="submit" value="Validate" @click.prevent = "addPhoto()">

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
  name: 'Index2',
  components: {
    "my-header": Header,
  },
  data(){
    return{
      title: null,
      photoUrl: null,
      description: null,
      file: null
    }
  },
  methods:{

    selectedFile(event){
      console.log(event)
      this.file = event.target.files[0]
      console.log(this.file)
    },
    addPhoto(){
      const fd = new FormData()
      fd.append('image', this.file, this.file.name)
      fd.append('title', this.title)
      fd.append('description', this.description)
      fd.append('UserId', "5f60c9bc27c61a2978be4c95")
      axios({
        method: 'post',
        url: 'http://localhost:8000/api/v1/photo',
        data: fd
        // {
        //   photo: fd
        //   title: this.title,
        //   description: this.description,
        //   photoUrl: fd,
        //   UserId: "5f60c9bc27c61a2978be4c95"
        // }
      })
      .then((res) => {
        // let ID = res.data.id
        // this.$router.push({name: 'SinglePhoto', params: {photoID: ID}})
        console.log(res)
      })
      .catch((e)=>console.log(e))
    },
    
  },
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

<template>
  <div class="about">
  <div class="container my-5 py-5 z-depth-1">

    <!--Section: Content-->
    <section class="px-md-5 mx-md-5 text-center dark-grey-text">

      <!--Grid row-->
      <div class="row">

        <!--Grid column-->
        <div class="col-md-6 mb-4 mb-md-0">

          <h3 class="font-weight-bold">Pro Gallery</h3>

          <p class="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quam sapiente
            molestiae
            numquam quas, voluptates omnis nulla ea odio quia similique corrupti magnam, doloremque laborum.</p>

          <hr class="my-2">

          <p class="font-weight-bold">Contact us</p>

           <form class="" action="">

        <div class="row">
          <div class="col-12 mb-4">

            <div class="card">
              <div class="card-body px-4">

                <!-- Name -->
                <div class="md-form md-outline mt-0">
                  <input type="text" id="name" class="form-control">
                  <label for="name">Your Name</label>
                </div>
                <!-- Email -->
                <div class="md-form md-outline">
                  <input type="text" id="email" class="form-control">
                  <label for="email">Your Email Address</label>
                </div>
                <!-- Message -->
                <div class="md-form md-outline">
                  <textarea id="message" class="md-textarea form-control" rows="3"></textarea>
                  <label for="message">Your Message</label>
                </div>

                <button type="submit" class="btn btn-primary btn-md btn-block ml-0 mb-0">Submit inquiry</button>

              </div>
            </div>

          </div>
        </div>

      </form>


        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-md-5 mb-4 mb-md-0">

          <img :src="imgAbout" class="img-fluid" alt="">

        </div>
        <!--Grid column-->

      </div>
      <!--Grid row-->


    </section>
    <!--Section: Content-->

  </div>
  </div>
</template>

<script>
	import imgAbout from '../assets/undraw_online_gallery_dmv3.svg'
	export default{
		name: 'About',
		data(){
			return{
				imgAbout: imgAbout,
			}
		}
	}
</script>

<template>
    <div>
        <header>
            <!--Navbar -->
            <nav class="mb-1 navbar navbar-expand-lg navbar-dark blue">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
                aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent-333">
                <ul class="navbar-nav mr-auto">
                    
                
                </ul>
                <ul class="navbar-nav ml-auto nav-flex-icons">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/my-photos">Photos</router-link>
                        <!-- <a class="nav-link" href="index2.html">Photos</a> -->
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/add-photo">Add Photo</router-link>
                        <!-- <a class="nav-link" href="/add-photo">Add Photo</a> -->
                    </li>
                
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        
                        <i class="fas fa-user"></i>
                        user
                    </a>
                    <div class="dropdown-menu dropdown-menu-right dropdown-default"
                        aria-labelledby="navbarDropdownMenuLink-333">
                        <router-link class="dropdown-item" to="/profile">my profile</router-link>
                        <!-- <a class="dropdown-item" href="profile.html">my profile</a> -->
                        <a class="dropdown-item" href="#">Logout</a>
                    </div>
                    </li>
                </ul>
                </div>
            </nav>
            <!--/.Navbar -->
        </header>
    </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>

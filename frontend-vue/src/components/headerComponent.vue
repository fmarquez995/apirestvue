<template>

<nav class="navbar navbar-expand-md navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <router-link to="/home" class="nav-link">Inicio </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/blogComponent" class="nav-link">Blog </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/formularioComponent" class="nav-link">Formulario</router-link>
            </li>
        </ul>
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="#">Login</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Register</a>
            </li>
        </ul>
    </div>
</nav>


</template>

<script>
export default {
    name:'headerComponent'
}
</script>

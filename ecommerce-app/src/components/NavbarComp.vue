<template>
  <b-navbar toggleable="lg" type="light" variant="light" class="custom-navbar">
    <b-navbar-brand href="/" class="navbar-logo"> Cozy Threads
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/" class="nav-item">Home</b-nav-item>
        <b-nav-item href="#" class="nav-item">Shop</b-nav-item>
        <b-nav-item href="#" class="nav-item">About</b-nav-item>
        <b-nav-item href="#" class="nav-item">Contact</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/cart" class="nav-item">Cart ({{numCartItems}})</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'NavbarComp',
  computed: {
        ...mapGetters(['numCartItems']),
    },
};
</script>

<style scoped>
.custom-navbar {
  background-color: #ffffff;
  border-bottom: 1px solid #e0e0e0;
}

.navbar-logo img {
  height: 80px;
}

.nav-item {
  font-family: 'Arial', sans-serif; 
  font-weight: 500;
  color: #333333; 
  margin-left: 20px; 
}

.nav-item:hover {
  color: #ff7f7f;
}

.b-navbar-toggle {
  border: none;
}

.b-navbar-nav .nav-item {
  padding: 10px 15px;
}

.b-nav-item.active, .b-nav-item.active:hover {
  color: #ff7f7f;
}

.b-navbar-nav .nav-item {
  display: flex;
  align-items: center;
}
</style>
<template>
  <div>
    <b-navbar toggleable="lg" class="navbar" variant="light">
    <a @click.prevent="goToHome"
    >
      <img src="https://static.domainesia.com/assets/images/logo-domainesia-v4.png"
      alt="Domainesia"
      class="navbar-brand"
      >
    </a>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-button-group class="ml-auto nav-right">
        <b-button>Domain</b-button>
        <b-button router-link to="/hosting" variant="danger">Hosting</b-button>
        <b-button>Web Apps</b-button>
        <b-button>Virtual Server</b-button>
        <b-dropdown right text="Profile" variant="primary">
          <b-dropdown-item>Status</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>Log Out</b-dropdown-item>
        </b-dropdown>
      </b-button-group>
    </b-collapse>
  </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    goToHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style>
.navbar-brand{
  width: 300px;
  padding-left: 10vh;
}
.blue{
  color:cadetblue
}
.nav-right{
  padding-right: 10vh;
}
</style>

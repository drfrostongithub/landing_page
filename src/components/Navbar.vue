<template>
  <div>
    <b-navbar toggleable="lg" class="navbar" variant="light">
    <a @click.prevent="goToHome"
    itemprop="url"
    itemtype="http://schema.org/Organization"
    >
      <img src="https://static.domainesia.com/assets/images/logo-domainesia-v4.png"
      alt="Domainesia"
      class="navbar-brand"
      itemprop="logo"
      >
    </a>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-button-group class="ml-auto nav-right">
        <b-button>Domain</b-button>
        <b-button @click.prevent="goToHosting" variant="danger">Hosting</b-button>
        <b-button>Web Apps</b-button>
        <b-button>Virtual Server</b-button>
        <b-button variant="success">Sign In</b-button>
        <b-button variant="info">Sign Up</b-button>
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
    },
    goToHosting () {
      this.$router.push('/hosting')
    }
  }
}
</script>

<style>
.navbar-brand{
  width: 300px;
  padding-left: 10vh;
}
.nav-right{
  padding-right: 10vh;
}
</style>

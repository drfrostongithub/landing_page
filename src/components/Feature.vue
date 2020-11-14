<template>
  <div id="feature" class="container bg-light p-3 p-md-5">
    <div class="row" id="features">
      <div class="col-xs-12 col-sm-6 col-lg-4 features" id="features-list">
        <div class="col-xs-3 left">
          <img src="../assets/icons/ssd.svg" alt="ssd" height="120">
        </div>
        <div class="col-xs-9">
          <h4>SSD Quick Process</h4>
          <p>100% Enterprise SSD untuk performa website secepat kilat</p>
        </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-lg-4 features" id="features-list">
        <div class="col-xs-3 left">
          <img src="../assets/icons/deploy.svg" alt="deploy" height="120">
        </div>
        <div class="col-xs-9">
          <h4>Instant Deploy</h4>
          <p>Fitur eksklusif untuk membuat website dengan mudah & instant</p>
        </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-lg-4 features" id="features-list">
        <div class="col-xs-3 left">
          <img src="https://static.domainesia.com/assets/images/icons/fitur/ipv6.png" alt="ipv6" height="120">
        </div>
        <div class="col-xs-9">
          <h4>IPv6 Supported</h4>
          <p>Website dapat diakses dengan jaringan IPv6 yang lebih mutakhir</p>
        </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-lg-4 features" id="features-list">
        <div class="col-xs-3 left">
          <img src="../assets/icons/cloud.svg" alt="cloud" height="120">
        </div>
        <div class="col-xs-9">
          <h4>Cloud Backup</h4>
          <p>Backup harian ke Cloud menjamin keamanan data penting anda</p>
        </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-lg-4 features" id="features-list">
        <div class="col-xs-3 left">
          <img src="../assets/icons/bandwidth.svg" alt="bandwidth" height="120">
        </div>
        <div class="col-xs-9">
          <h4>Unlimited Bandwidth</h4>
          <p>Bandwidth tanpa batas menjamin kelancaran website anda</p>
        </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-lg-4 features" id="features-list">
        <div class="col-xs-3 left">
          <img src="../assets/icons/money.svg" alt="ssd" height="120">
        </div>
        <div class="col-xs-9">
          <h4>Guaranteed Money</h4>
          <p>Uang kembali apabila anda kurang puas dengan layanan kami*</p>
        </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-lg-4 features" id="features-list">
        <div class="col-xs-3 left">
          <img src="../assets/icons/cs.svg" alt="cs" height="120">
        </div>
        <div class="col-xs-9">
          <h4>Full Support</h4>
          <p>Pelayanan terbaik ke tiap customer, anda adalah prioritas kami</p>
        </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-lg-4 features" id="features-list">
        <div class="col-xs-3 left">
          <img src="../assets/icons/domain.svg" alt="domain" height="120">
        </div>
        <div class="col-xs-9">
          <h4>Free Domain & SSL </h4>
          <p>Pembelian minimal hosting Super 1 tahun gratis domain dan SSL</p>
        </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-lg-4 features" id="features-list">
        <div class="col-xs-3 left">
          <img src="../assets/icons/networking.svg" alt="networking" height="120">
        </div>
        <div class="col-xs-9">
          <h4>5 Server Location</h4>
          <p>Bebas pilih lokasi server di Indonesia, Singapore, Jepang, Inggris & Amerika</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Feature'
}
</script>

<style>
body{
  font-size: 1,5rem;
}
#feature{
  min-height: 40vh;
  position: relative;
}
.left{
  float: left;
  margin-right: 1vh;
}
#features-list{
  margin-bottom: 5vh;
}
p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
</style>

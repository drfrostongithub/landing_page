<template>
  <div class="promotion">
    <hr>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 centeralign">
          <div class="col-sm-6 tech">
            <h4>Technology</h4>
            <div class="techMargin">
              <div class="techLogos">
                <img src="https://static.domainesia.com/assets/images/icons/cf-optimized-partner-badge.png"
                alt="CloudFlare Optimized Partner"
                title="CloudFlare"
                class="CloudFlarelogo"
                >
              </div>
              <div class="techLogos">
                <img src="https://static.domainesia.com/assets/images/icons/php.png"
                alt="PHP"
                title="PHP"
                class="PHPlogo"
                >
              </div>
              <div class="techLogos">
                <img class="Pythonlogo"
                src="//static.domainesia.com/assets/images/icons/python.png"
                alt="Python"
                title="Python">
              </div>
              <div class="techLogos">
                <img class="Rubylogo" src="//static.domainesia.com/assets/images/icons/ruby.png"
                alt="Ruby"
                title="Ruby">
              </div>
              <br class="visible-xs-block">
              <div class="techLogos">
                <img class="nodejslogo" src="//static.domainesia.com/assets/images/icons/nodejs.png"
                alt="nodejs"
                title="NodeJS">
              </div>
              <div class="techLogos">
                <img class="letsencryptlogo" src="//static.domainesia.com/assets/images/icons/letsencrypt.png"
                alt="letsencrypt"
                title="Let's Encrypt">
              </div>
              <div class="techLogos">
                <img class="Memcached" src="//static.domainesia.com/assets/images/icons/memcached.png"
                alt="Memcached"
                title="Memcached">
              </div>
              <br>
              <div class="techLogos">
                <img class="Intellogo" src="//static.domainesia.com/assets/images/icons/intel.png"
                alt="Intel"
                title="Intel Inside">
              </div>
              <div class="techLogos">
                <img class="MySQLlogo" src="//static.domainesia.com/assets/images/icons/mysql.png"
                alt="MySQL"
                title="MySQL">
              </div>
              <div class="techLogos">
                <img class="CloudLinuxlogo" src="//static.domainesia.com/assets/images/icons/cloudlinux.png"
                alt="CloudLinux"
                title="CloudLinux">
              </div>
              <div class="techLogos">
                <img class="bitninjalogo" src="//static.domainesia.com/assets/images/icons/bitninja.png"
                alt="bitninja"
                title="BitNinja">
              </div>
              <br class="visible-xs-block">
              <div class="techLogos">
                <img class="KVMlogo" src="//static.domainesia.com/assets/images/icons/kvm.png"
                alt="KVM"
                title="KVM">
              </div>
              <div class="techLogos">
                <img class="cpanellogo" src="//static.domainesia.com/assets/images/icons/cpanel.png"
                alt="cPanel"
                title="cPanel">
              </div>
              <div class="techLogos">
                <img class="Mailchannels" src="//static.domainesia.com/assets/images/icons/mailchannels.png"
                alt="Mailchannels"
                title="MailChannels">
              </div>
            </div>
          </div>
          <div class="col-sm-6 homeDataCenter">
            <h4 class="legend">Data Center Location</h4>
            <div class="techMargin">
              <img src="https://static.domainesia.com/assets/images/icons/servermaps.png"
              alt="The Best Indonesian Hosting Site"
              class="servermap"
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr>
    <div class="customers">
      <div class="col-sm-12 centeralign">
        <h3>Our Customer</h3>
      </div>
      <div class="col-xs-12">
        <img src="../assets/customers.jpg" alt="customers">
        <div class="customers indoluxe col-md-2 col-xs-15"></div>
        <div class="customers owlnfox col-md-2 col-xs-15"></div>
        <div class="customers namwatch col-md-2 col-xs-15"></div>
        <div class="customers ieee col-md-2 col-xs-15"></div>
        <div class="customers itbcc col-md-2 col-xs-15"></div>
        <div class="customers predictlabs col-md-2 col-xs-15"></div>
      </div>
    </div>
  <hr>
  </div>
</template>

<script>
export default {
  name: 'Promotion'
}
</script>

<style scoped>
.centeralign {
  text-align: center;
}
.visible-xs-block{
  display: none! important;
}
.homeDataCenter {
  float: right;
}
.servermap {
    height: 150px;
    max-width: 100%;
}
img {
    vertical-align: middle;
}
.tech {
  float:left
}
.techLogos {
  display: inline-block;
}
.techLogos img{
  opacity: 0,5;
  width: 90%;
  height: 90%;
  transition: all .2s ease-in-out;
}

</style>

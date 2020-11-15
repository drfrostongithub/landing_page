<template>
  <div id="packet_list" class="container bg-warning p-4">
    <b-card-group deck>
      <b-card title="Basic" img-src="https://cdn.pixabay.com/photo/2017/07/29/13/17/green-2551467_960_720.jpg" img-alt="Image" img-top>
        <div class="description">
          <h3>Rp. 16.000,-/Month</h3>
          <ul>
            <li>
              <span class="left"><strong>750</strong></span>
              <span class="right">MB Space</span>
            </li>
            <li>
              <span class="left"><strong>Unlimited</strong></span>
              <span class="right">Bandwidth</span>
            </li>
            <li>
              <span class="left"><strong>5</strong></span>
              <span class="right">Website</span>
            </li>
            <li>
              <span class="left"><strong>Unlimited</strong></span>
              <span class="right">Email</span>
            </li>
            <li>
              <span class="left"><strong>Supports</strong></span>
              <span class="right">IPv4 & IPv6</span>
            </li>
          </ul>
        </div>
        <template #footer>
          <div class="wrapper">
            <a href="#"><span>Order Now!</span></a>
          </div>
        </template>
      </b-card>

      <b-card title="Standard" img-src="https://cdn.pixabay.com/photo/2015/03/21/10/26/environmental-protection-683437_960_720.jpg"
      img-alt="Image"
      img-top
      >
        <div class="ribbon-wrapper">
            <div class="ribbon">Limited</div>
        </div>
        <div class="description">
          <strike>40.000</strike>
          <h3>Rp. 32.000,-/Month</h3>
          <ul>
            <li>
              <span class="left"><strong>2</strong></span>
              <span class="right">GB Space</span>
            </li>
            <li>
              <span class="left"><strong>Unlimited</strong></span>
              <span class="right">Bandwidth</span>
            </li>
            <li>
              <span class="left"><strong>Unlimited</strong></span>
              <span class="right">Website</span>
            </li>
            <li>
              <span class="left"><strong>Unlimited</strong></span>
              <span class="right">Email</span>
            </li>
            <li>
              <span class="left"><strong>Supports</strong></span>
              <span class="right">IPv4 & IPv6</span>
            </li>
            <li>
              <span id="center">Gratis Domain!</span>
            </li>
            <li>
              <span id="center">Akses SSH</span>
            </li>
          </ul>
        </div>
        <template #footer>
          <div class="wrapper">
            <a href="#"><span>Order Now!</span></a>
          </div>
        </template>
      </b-card>

      <b-card title="Super" img-src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" img-alt="Image" img-top>
        <div class="description">
          <h3>Rp. 64.000,-/Month</h3>
          <ul>
            <li>
              <span class="left"><strong>5</strong></span>
              <span class="right">GB Space</span>
            </li>
            <li>
              <span class="left"><strong>Unlimited</strong></span>
              <span class="right">Bandwidth</span>
            </li>
            <li>
              <span class="left"><strong>Unlimited</strong></span>
              <span class="right">Website</span>
            </li>
            <li>
              <span class="left"><strong>Unlimited</strong></span>
              <span class="right">Email</span>
            </li>
            <li>
              <span class="left"><strong>Supports</strong></span>
              <span class="right">IPv4 & IPv6</span>
            </li>
            <li>
              <span id="center">Gratis Domain!</span>
            </li>
            <li>
              <span id="center">Akses SSH</span>
            </li>
          </ul>
        </div>
        <template #footer>
          <div class="wrapper">
            <a href="#"><span>Order Now!</span></a>
          </div>
        </template>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  name: 'PacketList',
  props: ['product']
  // you can then use product.something to show data
}
</script>

<style scoped>
#packet_list{
  position: center;
}
ul{
  list-style-type:none;
}
ul li{
  margin-left: -5vh;
}
.left {
  display: inline-block;
  line-height: 40px;
  margin-right: 5px;
  text-align: right;
  width: 48%;
}

.right {
  display: inline-block;
  line-height: 40px;
  text-align: left;
  width: 48%;
}
body{
  font-family: 'Lato', sans-serif;
}

/* Ribbon Mode */
  .ribbon-wrapper {
    width: 85px;
    height: 88px;
    overflow: hidden;
    position: absolute;
    top: -3px;
    right: -3px
}
.ribbon {
    font-size: 12px;
    color: rgb(214, 7, 7);
    text-transform: uppercase;
    font-family: 'Montserrat Bold', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    letter-spacing: .05em;
    line-height: 15px;
    text-align: center;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, .4);
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    position: relative;
    padding: 7px 0;
    right: -11px;
    top: 10px;
    width: 100px;
    height: 28px;
    -webkit-box-shadow: 0 0 3px rgba(0, 0, 0, .3);
    box-shadow: 0 0 3px rgba(0, 0, 0, .3);
    background-color: #dedede;
    background-image: -webkit-linear-gradient(top, #ffffff 45%, #dedede 100%);
    background-image: -o-linear-gradient(top, #ffffff 45%, #dedede 100%);
    background-image: linear-gradient(to bottom, #ffffff 45%, #dedede 100%);
    background-repeat: repeat-x;
    filter: progid: DXImageTransform.Microsoft.gradient(startColorstr='#ffffffff', endColorstr='#ffdedede', GradientType=0)
}

.ribbon:before,
.ribbon:after {
    content: "";
    border-top: 3px solid #9e9e9e;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    position: absolute;
    bottom: -3px
}

.ribbon:before {
    left: 0
}

.ribbon:after {
    right: 0
}

 /* Button Animation */
.wrapper{
  margin-left: 6vh;
  top: 50%;
  left: 50%;
}

a{
  display: block;
  width: 200px;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  font-family: sans-serif;
  text-decoration: none;
  color: #333;
  border: 2px solid #333;
  letter-spacing: 2px;
  text-align: center;
  position: relative;
  transition: all .35s;
}

a span{
  position: relative;
  z-index: 2;
}

a:after{
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: #ff003b;
  transition: all .35s;
}

a:hover{
  color: #fff;
}

a:hover:after{
  width: 100%;
}
</style>

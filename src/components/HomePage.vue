<template>
  <div id="home_page" class="full-height p-4">
    <div class="container">
        <div class="form h-100 row align-items-center">
            <h3 class="col">Search for your domain in this vast forest of web ...</h3>
            <div class="col-xs">
                <div class="input-group">
                <input v-model="text" placeholder="ex: www." class="form-control">
                <span class="input-group-btn">
                    <b-button variant="outline-primary"
                    class="button bar-button-common" type="submit"
                    ><i class="fa fa-search"></i> Search</b-button>
                </span>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
body{
    padding-top: 90px;
}
#home_page{
    background-color: #92D2F2;
    background: url('../assets/mountains.png') no-repeat center center;
    background-size: cover;
}
h3{
    display: block;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: 100;
    color: rgb(27, 44, 58);
    font-weight: 0.75;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.container {
    padding-top: 26vh;
    display: flex;
    align-items: center;
    justify-content: center
}
</style>

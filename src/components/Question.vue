<template>
  <div id="question" class="bg-info p-4">
      <hr>
      <div class="row justify-content-center mt-3 mb-3">
            <div class="col-lg-4">
                <h2>Have Any Question?</h2>
                <p>Contact us by filling out the information below</p>

                <form>
                    <div class="form-group text-left">
                        <input type="email"
                        class="form-control"
                        placeholder="Enter Your Email"
                        >
                        <textarea rows="5"
                        class="form-control mt-3"
                        placeholder="Enter Your Message"
                        ></textarea>
                    </div>
                    <div>
                        <button type="submit"
                        class="btn btn-primary"
                        >
                        Send Message
                        </button>
                    </div>
                </form>
            </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Question'
}
</script>

<style>

</style>

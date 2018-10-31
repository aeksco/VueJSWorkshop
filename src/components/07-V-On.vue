<template>
  <div class='card card-body'>
    <h4>Step 07 - The v-on directive</h4>
    <small class='text-muted'>Add event handlers to your template elements</small>

    <hr>

    <!-- Add a click handler with v-on:click -->
    <button class="btn btn-outline-dark" v-on:click="checked = !checked">
      Toggle Checked
    </button>

    <br>

    <!-- Using the same element from the computed step -->
    <!-- We can also use the @click shorthand -->
    <i :class="iconCss" @click="checked = !checked"></i>

    <br>

    <!-- Next Step -->
    <small class='text-muted'>Let's learn about adding more complex iteractions with methods</small>

  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false
    };
  },
  computed: {
    iconCss () {
      if (this.checked) {
        return 'fa fa-lg fa-check text-success'
      } else {
        return 'fa fa-lg fa-times text-danger'
      };
    }
  }
};
</script>

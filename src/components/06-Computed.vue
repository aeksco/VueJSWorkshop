<template>
  <div class='card card-body'>
    <h4>Step 06 - Computed Properties</h4>
    <small class='text-muted'>Dynamically compute properties to use in your templates</small>

    <hr>

    <!-- Change the value of 'checked' with a 'checkbox' input -->
    <label>Checked or Unchecked?</label>
    <input type="checkbox" v-model='checked'>

    <!-- Isn't that much nicer? -->
    <i :class="iconCss"></i>

    <br>

    <!-- Next Step -->
    <small class='text-muted'>Let's learn about adding interaction by clicking and hovering</small>

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

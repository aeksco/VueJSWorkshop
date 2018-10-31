<template>
  <div class='card card-body'>
    <h4>Step 05 - The v-bind Directive</h4>
    <small class='text-muted'>Dynamically change attribute values in your templates</small>

    <hr>

    <!-- Change the value of 'checked' with a 'checkbox' input -->
    <label>Checked or Unchecked?</label>
    <input type="checkbox" v-model='checked'>

    <!-- We can use the `v-bind:` directive to interpolate a statement inside an element's attribute -->
    <i v-bind:class=" checked ? 'fa fa-lg fa-check text-success' : 'fa fa-lg fa-times text-danger' "></i>

    <!-- We can use the `:` shorthand to do the same thing - see `:class="..."` -->
    <i :class=" checked ? 'fa fa-lg fa-check text-success' : 'fa fa-lg fa-times text-danger' "></i>

    <br>

    <!-- Next Step -->
    <small class='text-muted'>Let's learn how we can move this logic out of our template</small>

  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false
    };
  }
};
</script>

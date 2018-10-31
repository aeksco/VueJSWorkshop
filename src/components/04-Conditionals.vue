<template>
  <div class='card card-body'>
    <h4>Step 04 - The v-if Directive</h4>
    <small class='text-muted'>Your app will need to conditionally show different elements</small>

    <hr>

    <!-- Change the value of 'checked' with a 'checkbox' input -->
    <label>Checked or Unchecked?</label>
    <input type="checkbox" v-model='checked'>

    <!-- We can use the `v-if` directive to conditionally render an element -->
    <i class="fa fa-lg fa-check" v-if='checked'></i>

    <!-- Follow that up with a `v-else` to handle the opposite -->
    <i class="fa fa-lg fa-times" v-else></i>

    <br>

    <!-- Touch on bootstrap text helper classes - `text-danger` and `text-success` -->
    <small class='text-muted'>We can also make it nice with bootstrap text classes</small>

    <i class="fa fa-lg fa-check text-success" v-if='checked'></i>
    <i class="fa fa-lg fa-times text-danger" v-else></i>

    <br>

    <!-- Let's keep going! -->
    <small class='text-muted'>Let's learn how we can simplify some of this markup</small>

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

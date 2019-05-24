<template>
  <div class='card card-body'>
    <h4>Step 03 - The v-model Directive</h4>
    <small class='text-muted'>Your app will need to do more than display static content</small>

    <hr>

    <!-- Dynamic content -->
    <p class="lead text-danger">{{ label }}</p>

    <!-- Render content with {{ }} braces -->
    <p class="lead text-primary">{{ checked }}</p>

    <!-- We can use the `v-model` directive to bind values in data to an input element -->

    <!-- Change the value of 'label' with a 'text' input -->
    <input type="text" class='form-control' v-model='label'>

    <!-- Change the value of 'checked' with a 'checkbox' input -->
    <input type="checkbox" v-model='checked'>


    <!-- Let's keep going! -->
    <small class='text-muted'>Directives are cool - let's learn some more of them</small>

  </div>
</template>

<script>
export default {
  data() {
    return {
      label: 'Testy Test Test Baby',
      checked: approved
    };
  }
};
</script>

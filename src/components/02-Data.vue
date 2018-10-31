<template>
  <div class='card card-body'>
    <h4>Step 02 - Data</h4>
    <small class='text-muted'>Your app will need to do more than display static content</small>

    <hr>

    <!-- Dynamic content -->
    <p class="lead text-danger">{{ label }}</p>

    <!-- Render content with {{ }} braces -->
    <p class="lead text-primary">{{ checked }}</p>

    <small class='text-muted'>Let's jump into one of the most powerful features of Vue - the DIRECTIVE</small>

  </div>
</template>

<script>
export default {
  data() {
    return {
      label: 'RCOS is awesome',
      checked: false
    };
  }
};
</script>

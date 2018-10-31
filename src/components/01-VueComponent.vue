<template>
  <div class='card card-body'>
    <h4>Step 01 - The Vue Component</h4>
    <small class='text-muted'>A Vue component describes a discrete "part" of your application</small>
    <small class='text-muted'>A Vue component encapsulates HTML, JavaScript, and CSS</small>

    <hr>

    <!-- Scoped CSS Classes -->
    <p class="lead my-blue-text">Try writing some HTML here!</p>


    <!-- Font Awesome -->
    <small class='text-muted'>FontAwesome is super helpful too</small>
    <span>
      <i class="fa fa-smile-o"></i>
      <i class="fa fa-frown-o"></i>
      <i class="fa fa-meh-o fa-spin"></i>
    </span>

    <!-- Dynamic content -->
    <p class="lead my-red-text">{{ message }}</p>

    <small class='text-muted'>
      Look at the markup for the message above
      <i class="fa fa-hand-o-up"></i>
    </small>

    <small class='text-muted'>Let's talk about adding dynamic data to our components</small>

  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'RCOS is awesome'
    };
  }
};
</script>

<style scoped>
p.my-blue-text {
  color: blue;
}

p.my-red-text {
  color: red;
}
</style>

<template>
  <div class="card card-body">
    <h4>WHOA</h4>
    <small class="text-muted">Yesssssss budddyyyyyyyy</small>

    <hr>

    <!-- Change the value of 'checked' with a 'checkbox' input -->
    <label>My question is dude wait how can I do?</label>
    <input type="checkbox" v-model="checked">

    <!-- We can use the `v-bind:` directive to interpolate a statement inside an element's attribute -->
    <i
      v-bind:class=" checked ? 'fa fa-lg fa-check text-success' : 'fa fa-lg fa-times text-danger' "
    ></i>

    <!-- We can use the `:` shorthand to do the same thing - see `:class="..."` -->
    <i :class=" checked ? 'fa fa-lg fa-check text-success' : 'fa fa-lg fa-times text-danger' "></i>

    <br>

    <!-- https://www.w3schools.com/html/html_form_input_types.asp -->
    <select class="form-control" v-model="inputType">
      <option>date</option>
      <option>time</option>
      <option>number</option>
      <option>text</option>
      <option>url</option>
      <option>phone</option>
      <option>email</option>
    </select>

    <br>

    <form @submit="e => e.preventDefault()">
      <input required v-bind:type="inputType">
      <input type="submit">
    </form>
    <!-- Next Step -->
    <small class="text-muted">Let's learn this logic</small>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
      inputType: "email"
    };
  }
};
</script>

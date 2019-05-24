<template>
  <div class='card card-body'>
    <h4>Step 09 - The v-for directive</h4>
    <small class='text-muted'>Loop over arrays and collections with v-for</small>

    <hr>

    <!-- Basic v-for usage -->
    <ul class="list-group">
      <li class="list-group-item" v-for="item in todos" :key="item.label">
        <i class="fa fa-lg fa-check text-success" v-if="item.done"></i>
        <i class="fa fa-lg fa-times text-danger" v-else></i>
        {{ item.label }}
      </li>
    </ul>

    <br>

    <!-- Next Step -->
    <small class='text-muted'>Let's tie it all together and make our todo list functional!</small>

  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [
        { label: 'Eat', done: true },
        { label: 'Sleep', done: true },
        { label: 'FF', done: true },
        { label: 'Study', done: false }
      ]
    };
  }
};
</script>

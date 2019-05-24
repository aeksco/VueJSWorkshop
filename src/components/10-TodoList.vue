<template>
  <div class='card card-body'>
    <h4>Step 10 - Building a ToDo List</h4>
    <small class='text-muted'>Let's use everything we've learned to build a Todo List</small>

    <hr>

    <!-- Basic v-for usage -->
    <ul class="list-group">
      <li class="list-group-item" v-for="item in todos" :key="item.label" @click="item.done = !item.done">
        <i class="fa fa-lg fa-check text-success" v-if='item.done'></i>
        <i class="fa fa-lg fa-times text-danger" v-else></i>
        {{ item.label }}
      </li>
    </ul>

    <br>

    <div class="form-inline">
      <label>Label</label>
      <input type="text" class="form-control ml-3" placeholder="Todo" v-model='label'>

      <button class="btn btn-primary ml-3" @click="addTodo()">Submit</button>
    </div>

    <br>

    <!-- Next Step -->
    <small class='text-muted'>Let's learn about our next steps!</small>

  </div>
</template>

<script>
export default {
  data() {
    return {
      label: 'Vote',
      todos: [
        { label: 'Eat', done: true },
        { label: 'Sleep', done: true },
        { label: 'Code', done: true },
        { label: 'Study', done: false }
      ]
    };
  },
  methods: {
    addTodo () {
      if (!this.label) return
      let newTodo = { label: this.label, done: false }
      this.todos.push(newTodo)
      this.label = ""
    }
  }
};
</script>

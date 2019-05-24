<template>
  <div class='card card-body'>
    <h4>Step 08 - Methods</h4>
    <small class='text-muted'>Add more complex iteractions to your components</small>

    <hr>

    <!-- Add a click handler with v-on:click -->
    <button class="btn btn-outline-dark" @click="onToggle()">
      Toggle Checked
    </button>

    <br>

    <!-- Using the same element from the computed step -->
    <i :class="iconCss"></i>

    <!-- Adds a counter to display how many times we've toggled -->
    <small class="text-muted">We've toggled our button {{count}} times</small>

    <br>

    <!-- Next Step -->
    <small class='text-muted'>Let's learn about looping with the v-for directive</small>

  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
      count: 0
    };
  },
  methods: {
    onToggle () {
      this.checked = !this.checked
      this.count = this.count + 6
    }
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

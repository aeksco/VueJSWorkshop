<template>
  <div class="card card-body">
    <h4>Project Folder Name</h4>

    <!-- https://vuejs-tips.github.io/vue-the-mask/ -->
    <div class='form-group'>
      <label>Job ID</label>
      <small class="text-muted ml-2">Describe the Job ID here</small>
      <input
        required
        class="form-control"
        placeholder="Job ID"
        type="number"
        v-model.number="project.job_id"
      >
    </div>
    
    <input
      required
      class="form-control"
      placeholder="Client Name"
      type="text"
      v-model.trim="project.client_name"
    >
    
    <input
      required
      class="form-control mt-2"
      placeholder="Project"
      type="text"
      v-model.trim="project.project"
    >

    <br>
    <!-- <small class="text-muted">Preview</small> -->
    <!-- <pre class="bg-dark text-light">{{project}}</pre> -->

    <small class="text-muted">Project Folder Name</small>
    <pre class="bg-dark text-light">{{foldername}}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      project: {
        job_id: 666666,
        client_name: "Intello Inc.",
        project: "Intstgram Ad"
      }
    };
  },
  computed: {
    foldername () {
      // Variables for each access
      let jobId = this.project.job_id
      let clientName = this.project.client_name
      let project = this.project.project

      // Removes non-alphabetic characters, chains of whitespace characters
      clientName = clientName.replace(/[^a-zA-Z\s]/gi, '').replace(/\s\s+/g, ' ')
      clientName = clientName.replace(/\s+/g, '')

      project = project.replace(/[^a-zA-Z\s]/gi, '').replace(/\s\s+/g, ' ')
      project = project.replace(/\s+/g, '')

      // Assembles foldername
      return jobId + '_' + clientName + '_' + project
    }
  }
};
</script>

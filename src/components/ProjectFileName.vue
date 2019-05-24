<template>
  <div class="card card-body">
    <p class="lead mb-2">Select Type</p>
    <select class="form-control" v-model="type">
      <option v-for="t in types" :key="t.id" :value="t.id">{{t.label}}</option>
    </select>
    <hr>

    <h4>{{selectedType.label}}</h4>

    <div class="row">
      <div
        v-for="field in selectedType.fields"
        :key="field.type"
        :class="field.columnSpan ? `col-sm-${field.columnSpan}` : 'col-sm-12'"
      >
        <!-- Iterate over each field in the selected type -->
        <div class="form-group">
          <div class="form-group">
            <label>{{ allFields[field.type].label }}</label>
            <i class="fa fa-question-circle-o ml-2 text-muted" :title="allFields[field.type].help"/>

            <!-- Service ID Field -->
            <!-- https://getbootstrap.com/docs/4.3/components/input-group/ -->
            <div class="input-group mb-3" v-if="field.type === 'SERVICE_ID_FIELD'">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">IH-</span>
              </div>
              <select class="form-control" v-model="project.service_id">
                <option>A</option>
                <option>C</option>
                <option>ET</option>
                <option>E</option>
                <option>Z</option>
                <option>F</option>
              </select>
            </div>

            <input
              v-else-if="field.type === 'INITIALS'"
              required
              class="form-control"
              :placeholder="allFields[field.type].label"
              :type="allFields[field.type].type"
              maxlength="3"
              minlength="2"
              v-model="project[allFields[field.type].identifier]"
            >

            <!-- All other inputs -->
            <input
              v-else
              required
              class="form-control"
              :placeholder="allFields[field.type].label"
              :type="allFields[field.type].type"
              v-model="project[allFields[field.type].identifier]"
            >
          </div>
        </div>
      </div>
    </div>

    <br>
    <small class="text-muted">{{selectedType.label}}:</small>
    <pre class="bg-dark text-light" v-if="selectedType.id === 'project_folder_name'">{{folderName}}</pre>
    <pre class="bg-dark text-light p-2 rounded" v-else-if="selectedType.id === 'project_file_name'">{{fileName}}</pre>

    <!-- <small>Debugging</small> -->
    <!-- <pre>{{project}}</pre> -->
  </div>
</template>

<script>
import allTypes from "./types";
import allFields from "./fields";

export default {
  data() {
    return {
      type: "project_file_name",
      types: allTypes,
      allFields: allFields,
      project: {
        job_id: 666666,
        client: "Intello Inc.",
        project: "Intstgram Ad",
        service_id: "A",
        initials: "AS"
      }
    };
  },
  methods: {
    sanitizeText(text) {
      return text.replace(/[^a-zA-Z\s]/gi, "").replace(/\s\s+/g, " ");
    },
    removeAllWhitespace(text) {
      return text.replace(/\s+/g, "");
    },
    formatDate(date) {
      function zeroPadDate(d) {
        return (d < 10 ? "0" : "") + d;
      }
      return (
        date.getFullYear() +
        zeroPadDate(date.getMonth() + 1) +
        zeroPadDate(date.getDate())
      );
    }
  },
  computed: {
    selectedType() {
      return this.types.find(each => each.id === this.type);
    },
    folderName() {
      // Variables for each access
      let jobId = this.project.job_id;
      let client = this.project.client;
      let project = this.project.project;

      // Removes non-alphabetic characters, chains of whitespace characters
      client = this.removeAllWhitespace(this.sanitizeText(client));
      project = this.removeAllWhitespace(this.sanitizeText(project));

      // Assembles foldername
      return jobId + "_" + client + "_" + project;
    },
    fileName() {
      // Variables for each access
      let jobId = this.project.job_id;
      let client = this.project.client;
      let project = this.project.project;
      let service_id = this.project.service_id;
      let initials = this.project.initials;
      let date = new Date();

      // Removes non-alphabetic characters, chains of whitespace characters
      client = this.removeAllWhitespace(this.sanitizeText(client));
      project = this.removeAllWhitespace(this.sanitizeText(project));
      service_id = this.removeAllWhitespace(this.sanitizeText(service_id));
      initials = this.removeAllWhitespace(
        this.sanitizeText(initials)
      ).toUpperCase();
      date = this.formatDate(date);

      // Assembles filename
      return (
        jobId +
        "_" +
        client +
        "_" +
        project +
        "_" +
        "IH-" +
        service_id +
        "_" +
        initials +
        "_" +
        date
      );
    }
  }
};
</script>

}
};
</script>


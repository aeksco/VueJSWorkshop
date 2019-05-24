export default [
  {
    id: "project_folder_name",
    label: "Project Folder Name",
    fields: [
      { type: "JOB_ID_FIELD", required: true },
      { type: "CLIENT_FIELD", required: true },
      { type: "PROJECT_FIELD", required: true }
    ]
  },
  {
    id: "project_file_name",
    label: "Project File Name",
    fields: [
      { type: "JOB_ID_FIELD", required: true },
      { type: "CLIENT_FIELD", required: true, columnSpan: 6 },
      { type: "PROJECT_FIELD", required: true, columnSpan: 6 },
      { type: "SERVICE_ID_FIELD", required: true, columnSpan: 6 },
      { type: "INITIALS", required: true, columnSpan: 6 }
      // { type: "DATE", required: true, columnSpan: 6 }
    ]
  }
];

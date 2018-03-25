import {initializeApp} from 'firebase'

const app = initializeApp({
    databaseURL: "https://kanban-8c99f.firebaseio.com",
    projectId: "kanban-8c99f",
  });

  export const db = app.database()
  export const tasksRef = db.ref('task')
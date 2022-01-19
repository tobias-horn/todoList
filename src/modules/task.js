import { eventListener } from "./UI"

export const TaskMethods  = (function () {
    

    let allTasks = {
        default: [],

      
      }
      
      class Task {
          constructor(name, priority, project){
              this.name = name
              this.priority = priority
              this.project = project
          }
      }
      
      
      function newTask(taskName, taskPriority, project) {
      
          let taskProject = project
          if (taskProject === undefined){
              taskProject = "default"}
          let task = new Task (taskName, taskPriority, taskProject)
          allTasks[taskProject].push(task)
          console.table(allTasks)
      }
      
      function init (){
      eventListener.initEventlisteners(newTask)
      }

return {init, allTasks}

}) ()
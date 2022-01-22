import { UImethods } from "./UI"




export const TaskMethods  = (function () {
    
  function createAllTasks() {
    let allTasksTemp = {
      default: [],
    }
  
    window.localStorage.setItem("allTasks", JSON.stringify(allTasksTemp))
  }

  function checkForLocalStorage() {

    let check = window.localStorage.getItem("allTasks")
    
    if (window.localStorage.getItem("allTasks") === null) {
    
      createAllTasks()
    }
    
    }
    
    checkForLocalStorage()

      class Task {
          constructor(name, priority, project, dueDate){
              this.name = name
              this.priority = priority
              this.project = project
              this.dueDate = dueDate
          }
      }
      
      
      function newTask(taskName, taskPriority, project) {
      
          let taskProject = project
          if (taskProject === undefined){
              taskProject = "default"}
          let task = new Task (taskName, taskPriority, taskProject)
        
        let allTasksTemp = window.localStorage.getItem("allTasks")
        allTasksTemp = JSON.parse(allTasksTemp)

        window.localStorage.removeItem("allTasks")
        allTasksTemp[taskProject].push(task)
        window.localStorage.setItem("allTasks", JSON.stringify(allTasksTemp))
      }
      
      function init (){
      UImethods.initEventlisteners(newTask)
      }




return {init, createAllTasks}

}) ()
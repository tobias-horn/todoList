import { UImethods } from "./UI"
import { ProjectMethods } from "./projects"

export const TaskMethods  = (function () {
    
  function createAllTasks() {
    let allTasksTemp = {
      default: [],
    }
    window.localStorage.setItem("allTasks", JSON.stringify(allTasksTemp))
  }

  function checkForLocalStorage() {

    if (window.localStorage.getItem("allTasks") === null) {
      createAllTasks()
    }
    
    }

    class Task {
          constructor(name, priority, project){
              this.name = name
              this.priority = priority
              this.project = project
          }
      }
      
      
      function newTask(taskName, taskPriority) {
          
          let taskProject = localStorage.getItem('currentProject')
          if (taskProject === undefined){
              taskProject = "default"}
          let task = new Task (taskName, taskPriority, taskProject)
        
        let allTasksTemp = window.localStorage.getItem("allTasks")
        allTasksTemp = JSON.parse(allTasksTemp)

        window.localStorage.removeItem("allTasks")
        allTasksTemp[taskProject].push(task)
        window.localStorage.setItem("allTasks", JSON.stringify(allTasksTemp))
        
      }
      
      function deleteTask(index, project){
        let allTasksTemp = window.localStorage.getItem("allTasks")
        allTasksTemp = JSON.parse(allTasksTemp)
        let array = allTasksTemp[project]
        array.splice(index, 1)
        allTasksTemp[project] = array
        window.localStorage.setItem("allTasks", JSON.stringify(allTasksTemp))
      }
    
return {newTask, createAllTasks, checkForLocalStorage, deleteTask}

}) ()
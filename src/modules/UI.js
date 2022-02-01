import { TaskMethods } from "./task.js"
import { ProjectMethods } from "./projects.js"

export const UImethods  = (function () {
    
    function initEventlisteners (newTask) {

        const addTaskButton = document.getElementById("addTask")

        addTaskButton.addEventListener("click", (e) => {
            e.preventDefault()
            const taskName = document.getElementById("taskName").value
            const taskPriority = document.querySelector('input[name="priority"]:checked').value
            if (taskName === ""){
              return
            }

            newTask(taskName, taskPriority)
            renderTasks(localStorage.getItem("currentProject"))
            document.querySelector("[data-task-input]").reset()

        })

        const deleteAll = document.getElementById("deleteAll")
        deleteAll.addEventListener("click", ()=> {
            window.localStorage.removeItem("allTasks")
            renderTasks()
            TaskMethods.createAllTasks()
            ProjectMethods.renderProjects()
        })

    }   


function renderTasks (project) {

  // if no tasks saved, return
  if (window.localStorage.getItem("allTasks") === null){
    const taskContainer = document.getElementById("allTaskContainer")
    taskContainer.innerHTML = ""
    return
}

// pulling tasks from local storage
let allTasksTemp = window.localStorage.getItem("allTasks")
allTasksTemp = JSON.parse(allTasksTemp)

console.table(allTasksTemp)

// clearing field
const allTaskContainer = document.getElementById("allTaskContainer")
allTaskContainer.innerHTML = ""


if (project == "default"){

  const keys = Object.keys(allTasksTemp)
  keys.forEach(key => {
          const projectName = document.createElement("div")
          projectName.classList.add("taskNameDescription")



          
          if (key == "default"){
            projectName.innerHTML = "Inbox"
          } else {
          projectName.innerHTML = key
          }
          allTaskContainer.appendChild(projectName)
          if (allTasksTemp[key].length === 0){

            projectName.innerHTML = "No tasks in " + key
          }
          _renderTasksRecursive(key)

  })


  } else {
          const projectName = document.createElement("div")
          projectName.classList.add("taskNameDescription")
          allTaskContainer.appendChild(projectName)
          projectName.innerHTML = project

    _renderTasksRecursive(project)
  }

  deleteButtonEventListener()

      function _renderTasksRecursive(project){
        let counter = 0
        console.log("project in _renderTasks " + project)
        allTasksTemp[project].forEach(task => {
          const taskContainer = document.createElement("div")
          taskContainer.classList.add("taskContainer")
          allTaskContainer.appendChild(taskContainer)

            const taskName = task.name
            const taskPriority = task.priority

            let content = `<p>${taskName}</p>
            <input type="checkbox" class="checkbox-round taskDeleteButton"/>`  

                taskContainer.innerHTML += content
                taskContainer.dataset.index = counter
                taskContainer.dataset.project = project
                counter++


            if (taskPriority == 1){
              taskContainer.classList.add("taskPrioLow")
            } else if (taskPriority == 2){
              taskContainer.classList.add("taskPrioMedium")
            } else if (taskPriority == 3){
              taskContainer.classList.add("taskPrioHigh")
            }
        });                
    }
    // end recursive
    }
        



        function deleteButtonEventListener (){

          

          

            const taskDeleteButton = document.querySelectorAll(".taskDeleteButton")
            
            taskDeleteButton.forEach(button => {
            button.addEventListener("click",(button) => {

          

                let allTasksTemp = window.localStorage.getItem("allTasks")
                allTasksTemp = JSON.parse(allTasksTemp)
                let index = button.currentTarget.parentNode.getAttribute("data-index")
                let project = button.currentTarget.parentNode.getAttribute("data-project")
                console.log("project array " + button.currentTarget.parentNode.getAttribute("data-project"))
                let array = allTasksTemp[project]
                console.log("array: " + array)
                array.splice(index, 1)
                allTasksTemp[project] = array
                window.localStorage.setItem("allTasks", JSON.stringify(allTasksTemp))
                renderTasks(localStorage.getItem("currentProject"))
        
            })
        })
        }




        function expand() {
            slider.className = 'expanded';
            setTimeout(function() {
              input.focus();
            }, 500);
          }
          function collapse() {
            slider.className = 'collapsed';
            input.blur();
          }
          
          const projectToggle = document.getElementById("projectToggle")
          projectToggle.addEventListener("click", ()=> {
              expand()
          })

          
          input.onblur = function() {
            setTimeout(collapse, 100);
          }
          
          newProjectButton.onsubmit = function(e) {
            e.preventDefault();
            let allTasksTemp = window.localStorage.getItem("allTasks")
            allTasksTemp = JSON.parse(allTasksTemp)
            console.log("submit")
            window.localStorage.removeItem("allTasks")
            allTasksTemp[input.value] = []
            window.localStorage.setItem("allTasks", JSON.stringify(allTasksTemp))
            collapse();

            ProjectMethods.renderProjects()
          }


          function toggleTaskForm (){

            const newTaskForm = document.getElementById("newTaskForm")

              const formToggleButton = document.getElementById("createNewTask")
              formToggleButton.addEventListener("click", () =>{
                newTaskForm.style.display = "block"
                formToggleButton.style.display = "none"

                
              })

              const cancelTaskButton = document.getElementById("cancelTaskInput")
              cancelTaskButton.addEventListener("click", (e)=> {
                  e.preventDefault()
              newTaskForm.style.display = "none"
              formToggleButton.style.display = "block"
            })
            }
              

          toggleTaskForm()
         


           return {initEventlisteners, renderTasks}

}) ()







import { TaskMethods } from "./task.js"
import { ProjectMethods } from "./projects.js"

export const UImethods  = (function () {
    
    function initEventlisteners (newTask) {

        const addTaskButton = document.getElementById("addTask")

        addTaskButton.addEventListener("click", (e) => {
            e.preventDefault()
            const taskName = document.getElementById("taskName").value
            const taskPriority = document.getElementById("taskPriority").value;

            newTask(taskName, taskPriority)
            renderTasks(localStorage.getItem("currentProject"))

        })

        const deleteAll = document.getElementById("deleteAll")
        deleteAll.addEventListener("click", ()=> {
            window.localStorage.removeItem("allTasks")
            renderTasks()
            TaskMethods.createAllTasks()
            ProjectMethods.renderProjects()
        })

    }   


    function renderTasks (project, allTasksTrue) {
      


        // if no tasks saved, return
        if (window.localStorage.getItem("allTasks") === null){
            const taskContainer = document.getElementById("allTaskContainer")
            taskContainer.innerHTML = ""
            return
        } else {
        
        // pulling tasks from local storage
        let allTasksTemp = window.localStorage.getItem("allTasks")
        allTasksTemp = JSON.parse(allTasksTemp)

        // removing existing tasks from UI
        
        if (!allTasksTrue) {
          console.log("project is not default " + project)
        const allTaskContainer = document.getElementById("allTaskContainer")
        allTaskContainer.innerHTML = ""
        }
            
            let counter = 0
            console.log("all task temp: " + project)
            allTasksTemp[project].forEach(task => {
              const taskContainer = document.createElement("div")
              taskContainer.classList.add("taskContainer")
              allTaskContainer.appendChild(taskContainer)

                const taskName = task.name
                const taskPriority = task.priority

                let content = `Task Name: ${taskName} <br> Task Priority: ${taskPriority}
                <br><br><button class="taskDeleteButton"><i class="fas fa-trash"></i></button><br> <br>`  

                taskContainer.innerHTML += content
                taskContainer.dataset.index = counter
                taskContainer.dataset.project = project
                counter++
                
            });            

        
        
    
        
        }
        deleteButtonEventListener()
        }

        


        function deleteButtonEventListener (){
            const taskDeleteButton = document.querySelectorAll(".taskDeleteButton")
        taskDeleteButton.forEach(button => {
            button.addEventListener("click",(button) => {

                let allTasksTemp = window.localStorage.getItem("allTasks")
                allTasksTemp = JSON.parse(allTasksTemp)
                let index = button.currentTarget.parentNode.getAttribute("data-index")
                let project = localStorage.getItem("currentProject")
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







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
            renderTasks()
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
        ProjectMethods.renderProjects()

        if (window.localStorage.getItem("allTasks") === null){
            const taskContainer = document.getElementById("allTaskContainer")
            taskContainer.innerHTML = ""
            console.log(" all null")
            return
        } else {
        
        let allTasksTemp = window.localStorage.getItem("allTasks")
        allTasksTemp = JSON.parse(allTasksTemp)

        const allTaskContainer = document.getElementById("allTaskContainer")
        allTaskContainer.innerHTML = ""

        for (const project in allTasksTemp) {
            const projectContainer = document.createElement("div")
            projectContainer.dataset.project = project
            allTaskContainer.appendChild(projectContainer)
            
            
            let counter = 0
            allTasksTemp[project].forEach(task => {
                const taskContainer = document.createElement("div")
            taskContainer.classList.add("taskContainer")
            projectContainer.appendChild(taskContainer)

                const taskName = task.name
                const taskPriority = task.priority

                let content = `Task Name: ${taskName} <br> Task Priority: ${taskPriority}
                <br><br><button class="taskDeleteButton"><i class="fas fa-trash"></i></button><br> <br>`  

                taskContainer.innerHTML += content
                taskContainer.dataset.index = counter
                counter++
                
            });            

        } 
        
    
        
        }
        deleteEventlistener()
        }

        


        function deleteEventlistener (){
            const taskDeleteButton = document.querySelectorAll(".taskDeleteButton")
        taskDeleteButton.forEach(button => {
            button.addEventListener("click",(button) => {

                let allTasksTemp = window.localStorage.getItem("allTasks")
                allTasksTemp = JSON.parse(allTasksTemp)
                let index = button.currentTarget.parentNode.getAttribute("data-index")
                let project = button.currentTarget.parentNode.parentNode.getAttribute("data-project")
                let array = allTasksTemp[project]
                array.splice(index, 1)
                allTasksTemp[project] = array
                window.localStorage.setItem("allTasks", JSON.stringify(allTasksTemp))
                renderTasks()
        
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



         


        return {initEventlisteners, renderTasks}

}) ()







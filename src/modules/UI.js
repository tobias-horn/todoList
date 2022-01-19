import { TaskMethods } from "./task.js"

export const eventListener  = (function () {
    
    function initEventlisteners (newTask) {

        const addTaskButton = document.getElementById("addTask")
        addTaskButton.addEventListener("click", (e) => {
            e.preventDefault()
            const taskName = document.getElementById("taskName").value
            const taskPriority = document.getElementById("taskPriority").value;

            newTask(taskName, taskPriority)
            eventListener.renderTasks()
        })
    }   


    function renderTasks () {
        console.log(TaskMethods.allTasks)
        console.log("test")

        for (const project in TaskMethods.allTasks) {

            console.log("render task: " + project)
            console.log(TaskMethods.allTasks[project])


            const taskContainer = document.getElementById("taskContainer")
            taskContainer.innerHTML = ""
            TaskMethods.allTasks[project].forEach(task => {
                const taskName = task.name
                
                console.log(taskName)

                const taskPriority = task.priority

                let content = `Task Name: ${taskName} <br> Task Priority: ${taskPriority} <br><br><br>`  

                taskContainer.innerHTML += content
            });
            

            
            // console.log("task: " + TaskMethods.allTasks.project);

        }
    }

return {initEventlisteners, renderTasks}

}) ()







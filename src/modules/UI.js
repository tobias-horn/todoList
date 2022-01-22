import { TaskMethods } from "./task.js"

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
        })

    }   


    function renderTasks () {

        if (window.localStorage.getItem("allTasks") === null){
            const taskContainer = document.getElementById("taskContainer")
            taskContainer.innerHTML = ""
            console.log(" all null")
            return
        } else {
        
        let allTasksTemp = window.localStorage.getItem("allTasks")
        allTasksTemp = JSON.parse(allTasksTemp)
        console.log(allTasksTemp)
        for (const project in allTasksTemp) {

            const taskContainer = document.getElementById("taskContainer")
            taskContainer.innerHTML = ""
            allTasksTemp[project].forEach(task => {
                const taskName = task.name
                
                console.log(taskName)

                const taskPriority = task.priority

                let content = `Task Name: ${taskName} <br> Task Priority: ${taskPriority} <br><br><br>`  

                taskContainer.innerHTML += content
            });

        }
    }
    }

return {initEventlisteners, renderTasks}

}) ()







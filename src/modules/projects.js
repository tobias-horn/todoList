


export const ProjectMethods = (function (){


    function renderProjects(){

    let allTasksTemp = window.localStorage.getItem("allTasks")
    allTasksTemp = JSON.parse(allTasksTemp)
    
    const projectContainer = document.getElementById("projectWrapper")
    projectContainer.innerHTML = ""

    const allTasksButton = document.createElement("div")
    allTasksButton.innerHTML = "All Tasks"
    projectContainer.appendChild(allTasksButton)

    for (const project in allTasksTemp) {

        const projectWrapper = document.createElement("div")
        let content = `${project} <button class="projectDeleteButton"><i class="fas fa-trash"></i></button>`
        projectWrapper.innerHTML += content
        projectWrapper.dataset.project = project
        projectContainer.appendChild(projectWrapper)


    }

    const defaultProject = document.querySelector("[data-project='default']")

    defaultProject.parentNode.removeChild(defaultProject)

    deleteProjectEventListener()
    }


    function deleteProjectEventListener (){

        const projectDeleteButton = document.querySelectorAll(".projectDeleteButton")
    projectDeleteButton.forEach(button => {
        button.addEventListener("click",(button) => {

            

            let allTasksTemp = window.localStorage.getItem("allTasks")
            allTasksTemp = JSON.parse(allTasksTemp)
            let project = button.currentTarget.parentNode.getAttribute("data-project")

            if (project == "default"){
                console.log("can't be delted")
                return
            }

            console.log("project name: " + project)
            delete allTasksTemp[project]
            window.localStorage.setItem("allTasks", JSON.stringify(allTasksTemp))
            renderProjects()

    
        })
    })
    }









return {renderProjects}

}) ()
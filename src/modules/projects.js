
import { UImethods } from "./UI"

export const ProjectMethods = (function (){

    let allTasksTemp = window.localStorage.getItem("allTasks")
    allTasksTemp = JSON.parse(allTasksTemp)

    function renderProjects(){
    
    

    
    
    const projectContainer = document.getElementById("projectWrapper")
    projectContainer.innerHTML = ""

   

    for (const project in allTasksTemp) {

        const projectWrapper = document.createElement("div")
        let content = `${project} <button class="projectDeleteButton"><i class="fas fa-trash"></i></button>`
        projectWrapper.innerHTML += content
        projectWrapper.dataset.project = project
        projectWrapper.className ="projectBox"
        projectContainer.appendChild(projectWrapper)


    }

    const defaultProject = document.querySelector("[data-project='default']")
    defaultProject.innerHTML = "All Tasks"
    // defaultProject.parentNode.removeChild(defaultProject)



    markProjectAsActive()
    projectSelectionEventListener()

    deleteProjectEventListener()
    }

    function markProjectAsActive(){
        const projectButtons = document.querySelectorAll(".projectBox")
        for (var i = 0; i < projectButtons.length; i++) {
            console.log("loop active")
            console.log(projectButtons[i])
            projectButtons[i].classList.remove('projectActive')
            projectButtons[i].className = "projectBox"
            console.log("loop executed")
            

          }
    }



    function projectSelectionEventListener(){
        console.log("current project: " + localStorage.getItem("currentProject"))
        
        if (localStorage.getItem("currentProject") == "default"){
        const allTasks = document.querySelector("[data-project='default']")
        allTasks.className = "projectActive projectBox"
        console.log("executed")
        }
        const projectButtons = document.querySelectorAll(".projectBox")
        
        projectButtons.forEach(button => {
            
            


            button.addEventListener("click", ()=> {
                markProjectAsActive()

                  localStorage.setItem("currentProject", button.getAttribute("data-project"))
                  

                if (button.getAttribute("data-project") == "default"){
                    console.log("default 123")

                    const allTaskContainer = document.getElementById("allTaskContainer")
                    allTaskContainer.innerHTML = ""

                    for (const project in allTasksTemp) {

                        UImethods.renderTasks(project, true)
                        console.log("project in loop: " + project)

                
                    }

                } else {
                    UImethods.renderTasks(localStorage.getItem("currentProject"))
                }


                button.className = "projectActive projectBox"
            })
        })
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
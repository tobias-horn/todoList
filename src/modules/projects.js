
import { UImethods } from "./UI"

export const ProjectMethods = (function (){

    

    function renderProjects(){
        let allTasksTemp = window.localStorage.getItem("allTasks")
    allTasksTemp = JSON.parse(allTasksTemp)
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
    defaultProject.innerHTML = "Inbox"

    markProjectAsActive()
    projectSelectionEventListener()
    deleteProjectEventListener()

    }

    function markProjectAsActive(){
        const projectButtons = document.querySelectorAll(".projectBox")
        for (var i = 0; i < projectButtons.length; i++) {

            projectButtons[i].classList.remove('projectActive')
            projectButtons[i].className = "projectBox"

          }
    }



    function projectSelectionEventListener(){

        if (localStorage.getItem("currentProject") == "default"){
        const allTasks = document.querySelector("[data-project='default']")
        allTasks.className = "projectActive projectBox"

        }

        const projectButtons = document.querySelectorAll(".projectBox")
        
        projectButtons.forEach(button => {
            
            button.addEventListener("click", ()=> {
                
                

                  localStorage.setItem("currentProject", button.getAttribute("data-project"))
                  
                  UImethods.renderTasks(localStorage.getItem("currentProject"))
                  markProjectAsActive()
                button.className = "projectActive projectBox"
            })
        })
    }

    
    function deleteProjectEventListener (){

        const projectDeleteButton = document.querySelectorAll(".projectDeleteButton")
        projectDeleteButton.forEach(button => {
        button.addEventListener("click",(button) => {
            event.stopPropagation();
            localStorage.setItem("currentProject", "default")
            console.log("local storage set item: " + localStorage.getItem("currentProject"))

            let allTasksTemp = window.localStorage.getItem("allTasks")
            allTasksTemp = JSON.parse(allTasksTemp)
            let project = button.currentTarget.parentNode.getAttribute("data-project")


            delete allTasksTemp[project]
            window.localStorage.setItem("allTasks", JSON.stringify(allTasksTemp))

            markProjectAsActive()
            const allTasks = document.querySelector("[data-project='default']")
            allTasks.className = "projectActive projectBox"
            
            UImethods.renderTasks("default")
            renderProjects()
            

    
        })
    })
    }









return {renderProjects}

}) ()
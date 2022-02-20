import {TaskMethods} from "./modules/task.js"
import { UImethods } from "./modules/UI.js"
import { ProjectMethods } from "./modules/projects.js"
import { devMethods } from "./dev.js"
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

import Logo from './img/elephantTodoLogo.svg'

localStorage.setItem("currentProject", "default")
TaskMethods.createAllTasks()
UImethods.initEventlisteners()
UImethods.renderTasks("default")
ProjectMethods.renderProjects()   
TaskMethods.checkForLocalStorage()
UImethods.toggleTaskForm()

import './styles.css';

















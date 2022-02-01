import {TaskMethods} from "./modules/task.js"
import { UImethods } from "./modules/UI.js"
import { ProjectMethods } from "./modules/projects.js"
import { devMethods } from "./dev.js"
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

import Logo from './img/elephantTodoLogo.svg'

TaskMethods.init()
ProjectMethods.renderProjects()
UImethods.renderTasks(localStorage.getItem("currentProject"))




import './styles.css';

















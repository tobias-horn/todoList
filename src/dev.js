export const devMethods = (function (){


function seedData (){

        const seedButton = document.getElementById("seedData")
        seedButton.addEventListener("click", ()=> {

            let allTasksTemp = {
            
            
                "default": [
                  {
                    "name": "Clean Bathroom",
                    "priority": "3",
                    "project": "default"
                  },
                  {
                    "name": "Buy new dogfood",
                    "priority": "2",
                    "project": "default"
                  },
                  {
                    "name": "Call Uncle Joe",
                    "priority": "1",
                    "project": "default"
                  },
                  {
                    "name": "Cash check for insurance claim",
                    "priority": "3",
                    "project": "default"
                  }
                ],
                "Holiday Preperation": [
                  {
                    "name": "Get health insurance documents",
                    "priority": "3",
                    "project": "Holiday Preperation"
                  },
                  {
                    "name": "Order Turkey",
                    "priority": "3",
                    "project": "Holiday Preperation"
                  },
                  {
                    "name": "Put up christmas lights",
                    "priority": "3",
                    "project": "Holiday Preperation"
                  },
                  {
                    "name": "Order gifts",
                    "priority": "3",
                    "project": "Holiday Preperation"
                  }
                ],
                "Work": [
                  {
                    "name": "Message Frank for proposal",
                    "priority": "2",
                    "project": "Work"
                  },
                  {
                    "name": "Check in with Ronald for progress",
                    "priority": "1",
                    "project": "Work"
                  },
                  {
                    "name": "Plan annual sales meeting",
                    "priority": "3",
                    "project": "Work"
                  }
                ]
              


              
        }
      
        window.localStorage.setItem("allTasks", JSON.stringify(allTasksTemp))
        window.location.reload();

        })
        
        
}
seedData()
}) ()


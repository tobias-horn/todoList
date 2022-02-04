export const devMethods = (function (){


function seedData (){

        const seedButton = document.getElementById("seedData")
        seedButton.addEventListener("click", ()=> {

            let allTasksTemp = {
            
            
                "default": [
                  {
                    "name": "Clean Bathroom",
                    "priority": "1",
                    "project": "default"
                  },
                  {
                    "name": "Buy new dogfood",
                    "priority": "3",
                    "project": "default"
                  },
                  {
                    "name": "Dust the furniture",
                    "priority": "1",
                    "project": "default"
                  },
                  {
                    "name": "Change the sheets",
                    "priority": "3",
                    "project": "default"
                  }
                ],
                "Holiday Preperation": [
                  {
                    "name": "Buy christmas tree",
                    "priority": "1",
                    "project": "Holiday Preperation"
                  },
                  {
                    "name": "Order food",
                    "priority": "3",
                    "project": "Holiday Preperation"
                  },
                  {
                    "name": "Put up christmas lights",
                    "priority": "2",
                    "project": "Holiday Preperation"
                  },
                  {
                    "name": "Order gifts",
                    "priority": "1",
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


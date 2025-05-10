var h5 = document.querySelector("h5")
var addfriend = document.querySelector("#add")

var remove = 0

addfriend.addEventListener("click",function(){
    if( remove == 0){
         h5.innerHTML = "Friends"
         h5.style.color = "green"
         console.log("Add New Friend")
         add.innerHTML = "Remove Friend"
         remove = 1

    }else{
         h5.innerHTML = "Stranger"
         h5.style.color = "red"
         remove = 0 
         add.innerHTML = "Add Friend"

         
    }
   
    
})


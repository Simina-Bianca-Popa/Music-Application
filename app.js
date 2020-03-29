window.addEventListener ( "load", ()=> {                     //on load of the page execut the arrow function

    const sounds = document.querySelectorAll(".sound");
    const steps = document.querySelectorAll(".steps div"); //store all the divs with class step into constants
    const visualEfects = document.querySelector (".bubbles"); //select the div for the animations
    const colors = ["orange", "yellow", "green", "blue", "indigo", "violet",];

//console.log(sounds); //in order to see the sounds list/array
//sounds play 
   steps.forEach((step, index) => {                   // index= the sounds position in the array
       step.addEventListener("click", function(){    //normal function in order to be able to accsse this
        sounds[index].currentTime = 0;              //reset the begin of the sound, in order to be able to play the sound when we click the steps
        sounds[index].play();                      // when you click on the steps play the associated sounds
        createBubbes(index);
       });
   });


//function for creating the bubbles/balls
   const createBubbes = (index) => {            //parameter index in order to be able to change the colors
       const bubble = document.createElement("div");
       visualEfects.appendChild(bubble);
       bubble.style.backgroundColor = colors[index];
       bubble.style.animation = "jump 1s ease";

   };
});


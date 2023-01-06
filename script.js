document.querySelector('#yes-btn').addEventListener('click', function() {
    var imgContainer = document.getElementById("image-container");
    imgContainer.src = "./content/cat2.gif";
    

  });

  const element = document.getElementById("no-btn");

  element.addEventListener("mouseenter", function() {
    // Generate a random number between 0 and the width of the window
    const x = Math.floor(Math.random() * window.innerWidth/4);
    // Generate a random number between 0 and the height of the window
    const y = Math.floor(Math.random() * window.innerHeight/2);

    // Set the element's top and left positions to the random values
    element.style.top = y + "px";
    element.style.left = x + "px";
  });
  
  
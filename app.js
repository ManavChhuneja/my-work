const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

////////////////////////////////////////////////////////////////////////////////
const container = document.getElementById("typewriter-container");

// Defining the text array
const textArray = [
  "Full Stack Developer.",
  "Growth Manager.",
  "Content Creator.",
];

// Defining the index of the current element
let index = 0;

// Defining the speed of the animation in milliseconds
const speed = 50;

// Defining the function that will create the typewriter animation
function typewriter() {
  // Getting the current text
  const text = textArray[index];

  // Defining the initial length of the text
  let i = 0;

  // Defining the function that will type out the text
  function type() {
    // Adding the next character to the text
    container.innerHTML += text.charAt(i);

    // Incrementing the length of the text
    i++;

    // Check if the text is complete
    if (i < text.length) {
      // If not, wait for the speed and call the function again
      setTimeout(type, speed);
    } else {
      // If it is, wait for 3 seconds and then start the backspace animation
      setTimeout(backspace, 1500);
    }
  }

  // Defining the function that will backspace the text
  function backspace() {
    // Getting the current text
    const currentText = container.innerHTML;

    // Defining the new text as the current text minus the last character
    const newText = currentText.substring(0, currentText.length - 1);

    // Updating the container with the new text
    container.innerHTML = newText;

    // Checking if the backspace is complete
    if (newText.length > 0) {
      // If not, waiting for the defined speed and call the function again
      setTimeout(backspace, speed);
    } else {
      // If it is, moving to the next element
      index++;

      // Checking if we've reached the end of the array
      if (index == textArray.length) {
        // If we do, start the animation over
        index = 0;
      }

      // Starting the animation again with the next element
      setTimeout(typewriter, speed);
    }
  }

  // Starting the typing animation
  type();
}

// Starting the animation with the first element
typewriter();

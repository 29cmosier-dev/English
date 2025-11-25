// Scripts/script.js

// Select the elements
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navbar-list");

// Add event listener for clicks on the hamburger icon
hamburger.addEventListener("click", () => {
    // Toggle the 'active' class on both the nav links and the hamburger itself
    navLinks.classList.toggle("active");
    // Optional: Add another class if you want to animate the icon into an 'X'
    // hamburger.classList.toggle("active"); 

    // Accessibility feature: Update the aria-expanded attribute
    const expanded = hamburger.getAttribute("aria-expanded") === "true" || false;
    hamburger.setAttribute("aria-expanded", !expanded);
});

// Optional: Automatically close the menu when a link is clicked
document.querySelectorAll(".navbar-list li a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
        // hamburger.classList.remove("active"); 
    });
});


// Get references to the elements by their IDs
const iframeElement = document.getElementById('myIframe');
const loaderElement = document.getElementById('loader');

// Add an event listener for the iframe's 'load' event
iframeElement.addEventListener('load', function() {
    // Hide the loader
    loaderElement.style.display = 'none';
        
    // Make the iframe visible (using the CSS transition for a fade-in effect)
    iframeElement.style.opacity = '1';
});

document.addEventListener('DOMContentLoaded', function() {
  const iframe = document.getElementById('myIframe');
  const loadingSpinner = document.getElementById('loadingSpinner');

  // Show spinner initially (if not already visible via CSS)
  loadingSpinner.classList.remove('hidden');

  iframe.addEventListener('load', function() {
    // Hide the spinner once the iframe content loads
    loadingSpinner.classList.add('hidden');
  });

  // Optional: Handle potential errors during iframe loading
  iframe.addEventListener('error', function() {
    console.error('Error loading iframe content.');
    // You might want to hide the spinner or display an error message
    loadingSpinner.classList.add('hidden');
  });
});

function hideLoader(iframeElement) {
    // 1. Find the parent container of the iframe that was just loaded
    const container = iframeElement.closest('.iframe-container');
    
    // 2. Find the loader element inside that specific container
    const loader = container.querySelector('.loader');

    // 3. Hide the loader and show the iframe
    if (loader) {
        loader.style.display = 'none';
    }
    
    if (iframeElement) {
        // We use opacity 1 which was set up in the HTML style attribute
        iframeElement.style.opacity = '1'; 
    }
}
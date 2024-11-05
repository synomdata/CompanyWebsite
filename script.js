// script.js
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const accordionToggle = document.querySelector('.accordion-toggle');
const accordionContent = document.querySelector('.accordion-content');

menuToggle.addEventListener('change', () => {
  if (menuToggle.checked) {
    sidebar.style.right = '0';
  } else {
    sidebar.style.right = '-50%';
  }
});

accordionToggle.addEventListener('click', () => {
  // Toggle the display of the accordion content
  if (accordionContent.style.display === 'flex') {
    accordionContent.style.display = 'none';
    accordionContent.style.maxHeight = null;
  } else {
    accordionContent.style.display = 'flex';
    accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
  }
});


document.getElementById("logo").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default anchor behavior

  // Check if we're on the homepage
  if (window.location.pathname === "/" || window.location.pathname === "/index.html") {
    // Scroll to the top smoothly
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    // Redirect to the homepage
    window.location.href = "/";
  }
});

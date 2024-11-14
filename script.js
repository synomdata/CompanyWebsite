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

document.getElementById("contactButton").addEventListener("click", function() {
  // Define the recipient email address
  const email = "socialmedia@synomdata.com"; // Replace with the desired recipient email address

  // Gmail URL with only the recipient email
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;

  // Open Gmail compose page in a new tab
  window.open(gmailUrl, "_blank");
});

document.getElementById("getConsultation").addEventListener("click", function() {
  // Define the recipient email address
  const email = "socialmedia@synomdata.com"; // Replace with the desired recipient email address

  // Gmail URL with only the recipient email
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;

  // Open Gmail compose page in a new tab
  window.open(gmailUrl, "_blank");
});


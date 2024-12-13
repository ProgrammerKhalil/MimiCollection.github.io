// Alert on clicking "Shop Now" button
document.querySelector('.cta').addEventListener('click', () => {
    alert("Welcome to Mimi Collection! Enjoy exploring our range of products.");
  });
  
  // Adding smooth scrolling effect for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
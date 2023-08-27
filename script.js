const sidebar = document.getElementById('sidebar');
const content = document.querySelector('.content');

sidebar.addEventListener('mouseover', () => {
    sidebar.classList.add('expanded');
});


document.addEventListener("DOMContentLoaded", function() {
    var cordelDiv = document.getElementById("cordel");
    
    cordelDiv.addEventListener("click", function() {
      
      var url = "https://alexandrecomn.github.io/Projeto-Cordel/ ";
      window.location.href = url;
    });
  });
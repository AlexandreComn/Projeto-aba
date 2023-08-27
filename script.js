const sidebar = document.getElementById('sidebar');
const content = document.querySelector('.content');

sidebar.addEventListener('mouseover', () => {
    sidebar.classList.add('expanded');
});


document.getElementById("cordel").addEventListener("click", function() {
  window.location.href = "cordel/cordel.html";
});
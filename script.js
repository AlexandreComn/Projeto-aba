const sidebar = document.getElementById('sidebar');
const content = document.querySelector('.content');

sidebar.addEventListener('mouseover', () => {
    sidebar.classList.add('expanded');
});

sidebar.addEventListener('mouseout', () => {
    sidebar.classList.remove('expanded');
});
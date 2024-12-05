// Import toggle skills id
var togglebutton = document.getElementById('toggle-skills');
// Import skills id
var skills = document.getElementById('skills');
// Event listner wait karta ha click karne ka
togglebutton.addEventListener('click', function () {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});

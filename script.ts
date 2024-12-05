// Import toggle skills id
const togglebutton = document.getElementById('toggle-skills') as HTMLButtonElement
// Import skills id
const skills = document.getElementById('skills') as HTMLElement

// Event listner wait karta ha click karne ka
togglebutton.addEventListener('click',() =>{
    if(skills.style.display === 'none'){
        skills.style.display = 'block'
    }else{
        skills.style.display = 'none'
    }
}) 
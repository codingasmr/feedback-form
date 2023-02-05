const box = document.querySelectorAll('.emojis a');
const h3 =document.querySelector('.container h3');
const emojis = document.querySelector('.container .emojis');
const container = document.querySelector('.container');


box.forEach(elem => {
    elem.addEventListener('click', ()=>{
        h3.remove();
        emojis.remove();
        container.innerHTML = 'Thank you for the feedback .';
        container.style.justifyContent = 'center';
        container.style.fontSize = '20px';
        const icon = document.createElement('i');
        icon.className = 'fas fa-heart';
        container.appendChild(icon);
    })
});
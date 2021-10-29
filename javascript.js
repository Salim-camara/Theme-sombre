let button = document.querySelector('span');



const handleClick = () => {
    // récupération depuis le DOM
    const body = document.querySelector('body');
    const title = document.querySelector('h1');
    const paragraphe = document.querySelector('#para');
    const para = document.querySelector('#paragraphe');
    const light = document.querySelector('i');

    // changement de couleur
    body.classList.toggle('active');
    title.classList.toggle('white');
    paragraphe.classList.toggle('white');
    para.classList.toggle('white');
    light.classList.toggle('switch');
    console.log(paragraphe);

    // animation
    
}

button.addEventListener('click', handleClick);
const button = document.querySelector('button');

const buttonClickHandler = () => alert('Boop!');

button.addEventListener('click', buttonClickHandler);

setTimeout(() => {
    button.removeEventListener('click', buttonClickHandler);
}, 2000);
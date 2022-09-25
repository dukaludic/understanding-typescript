const button = document.querySelector('button');

function clickHandler(message: string) {
    console.log('click' + message)
}

if (button) {
    button.addEventListener('click', clickHandler.bind(null))
}
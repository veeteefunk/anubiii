const btn = document.querySelector('.btn');
const close = document.getElementById('close');
const container = document.getElementById('container');

btn.addEventListener('click', () => {
    document.getElementById('sound').play();
    setTimeout(showPopup,1100);
    
})

function showPopup () {
    container.classList.add('active');
}

close.addEventListener('click', () => {
    container.classList.remove('active');
})

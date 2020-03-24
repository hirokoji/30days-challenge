
window.addEventListener('keydown', (e) => {

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"`);
    const key = document.querySelector(`.button[data-key="${e.keyCode}"`);
    if(!audio) return;
    audio.play();

    key.classList.add('playing')

});

function pushButton(){
    console.log('testFunc called');
}

function main ()
{
    const keys = document.querySelectorAll('.button');
    console.log(keys);

    const removeTransition = (e) =>{
        if(e.propertyName !== 'transform') return;
        // console.log(this.classList.remove('playing'));
        const playing = document.querySelector('.playing');
        if(playing.className){
            playing.classList.remove('playing');
        }
    };

    keys.forEach(key => key.addEventListener('transitionend', removeTransition))

};

setTimeout(main, 100);

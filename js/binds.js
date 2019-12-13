let text = document.querySelector('#text');
let shiftUnPress = true;

document.addEventListener('keydown', function(event) {
    text.focus();

    // let char = document.querySelectorAll('.'+event.code+'.on');
    // console.log(char.childNodes);
    
    let key = document.querySelector('.'+event.code).parentNode;
    let keyChilds = key.childNodes;
    // console.log(key.childNodes);
    // alert(keyChilds);
    for(child of keyChilds) {
        if(child.classList.contains('down')) {
            
        }
    }
    
    if(event.code == 'CapsLock') { // CapsLock
        if(key.classList.contains('active')) {
            key.classList.remove('active');
        } else {
            key.classList.add('active');
        }
        upperCase(event, 'CapsLock');
    } else if(event.shiftKey) { // Shift
        upperCase(event, shiftUnPress);
        key.classList.add('active');
    } else if(event.ctrlKey && event.altKey) { // Смена языка
        let switchOn = document.querySelectorAll('.on');
        let switchOff = document.querySelectorAll('.off');
        for(let count = 0; count < switchOn.length; count++) {
            switchOn[count].classList.remove('on');
            switchOn[count].classList.add('off');

            switchOff[count].classList.remove('off');
            switchOff[count].classList.add('on');
        }
        key.classList.add('active');
    } else {
        key.classList.add('active');
        text.value = '';
    }
});

document.addEventListener('keyup', function(event) {
    let key = document.querySelector('.'+event.code).parentNode;
    if(event.code != 'CapsLock') {
        if(event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
            key.classList.remove('active');
            upperCase(event, !shiftUnPress);
            shiftUnPress = true;
        } else {
            key.classList.remove('active');
        }
    }
});

function upperCase(event, key=false) { // Трансформация
    if(event.code == 'CapsLock') {
        textTransform();
    } else if(key){
        textTransform();
        shiftUnPress = false;
    }
}

function textTransform() { // Верхний регистр ⇄  нижний регистр
    let downCase = document.querySelectorAll('.down');
    let upCase = document.querySelectorAll('.up');

    for(let count = 0; count < downCase.length; count++) {
        downCase[count].classList.remove('down');
        downCase[count].classList.add('up');

        upCase[count].classList.remove('up');
        upCase[count].classList.add('down');
    }
}

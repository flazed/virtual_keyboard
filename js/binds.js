let text = document.querySelector('#text');
let shiftUnPress = true;
let lang;

checkLang();

// Нажатие

document.addEventListener('keydown', function(event) {

    text.focus();
    
    let key = document.querySelector('.'+event.code).parentNode;
    
    if(event.code == 'CapsLock') { // CapsLock
        if(key.classList.contains('active')) {
            key.classList.remove('active');
        } else {
            key.classList.add('active');
        }
        upperCase(event, 'CapsLock');

    } else if(event.shiftKey) { // Shift
        upperCase(event, shiftUnPress);        
        trueText(key, event);
        key.classList.add('active');

    } else if(event.ctrlKey && event.altKey) { // Смена языка
        changeLang();
        lang = lang == 'ru' ? 'en' : 'ru'
        setLang(lang);
        key.classList.add('active');

    } else if((key.classList).length>=2 && !(key.classList.contains('space'))){
        key.classList.add('active');   

    } else if(event.ctrlKey && event.code == 'KeyA'){ // Select
        key.classList.add('active');
        text.select();

    } else {
        key.classList.add('active');
        trueText(key, event);
        event.preventDefault();
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

function trueText(key, event) {
    let keyChilds = key.childNodes;
    if(!(key.classList.contains('shift-left')) && !(key.classList.contains('shift-right'))) {
        for(child of keyChilds) {
            if(child.classList.contains('on')) {
                for(littleChild of child.childNodes) {
                    if(littleChild.classList.contains('down')) {
                        text.value = text.value + littleChild.innerHTML;
                        break;
                    }
                }
                break;
            }
        }       
        event.preventDefault();
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

// COOKIE

function getLang(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setLang(language) {
    if(language == 'ru') {
        document.cookie = 'language=ru';
    } else {
        document.cookie = 'language=en';
    }
}

function changeLang(){
    let switchOn = document.querySelectorAll('.on');
    let switchOff = document.querySelectorAll('.off');
    for(let count = 0; count < switchOn.length; count++) {
        switchOn[count].classList.remove('on');
        switchOn[count].classList.add('off');

        switchOff[count].classList.remove('off');
        switchOff[count].classList.add('on');
    }
}

function checkLang() {
    lang = getLang('language');
    
    if(lang == 'en') {
        changeLang();
    } else {
        lang = 'ru';
        setLang('ru');
    }
}

// Click

document.addEventListener('click', function(event){
    console.log(event.code);
});
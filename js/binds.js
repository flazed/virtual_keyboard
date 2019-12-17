let text = document.querySelector('#text');
let shiftUnPress = true;
let spec_words = ['Backspace','Tab','Delete','Enter','ArrowLeft','ArrowUp','ArrowDown','ArrowRight','ControlLeft','ControlRight','MetaLeft','AltLeft','AltRight'];
let lang;
checkLang();

// Нажатие
document.addEventListener('keydown', function(event) {    
    let key = document.querySelector('.'+event.code).parentNode;
    
    if(event.code == 'CapsLock') { // CapsLock
        if(key.classList.contains('active')) { key.classList.remove('active'); }
        else { key.classList.add('active'); }
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

    } else if(event.ctrlKey){ 
        key.classList.add('active');

    } else if(event.code == 'Tab'){  
        let tabPos = text.selectionStart;
        event.preventDefault();
        text.focus();
        key.classList.add('active');
        text.value = text.value.slice(0,tabPos)+'\t'+(text.value.slice(tabPos));
        text.selectionStart = tabPos+1; text.selectionEnd = tabPos+1; tabPos = text.selectionStart;

    } else if(event.altKey) {
        event.preventDefault();
        key.classList.add('active');
        text.focus();

    } else if((key.classList).length == 1 || (key.classList.contains('space'))){
        text.focus();
        key.classList.add('active');
        trueText(key, event);
        event.preventDefault();

    } else {
        text.focus();
        key.classList.add('active');
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
    let position = text.selectionStart;
    if(!(key.classList.contains('shift-left')) && !(key.classList.contains('shift-right'))) {
        if(checkWord(event.code)) {
            for(child of keyChilds) {
                if(child.classList.contains('on')) {
                    for(littleChild of child.childNodes) {
                        if(littleChild.classList.contains('down')) {
                            text.value = text.value.slice(0,position)+littleChild.innerHTML+(text.value.slice(position));
                            text.selectionStart = position+1; text.selectionEnd = position+1; position = text.selectionStart;
                            break;
                        }
                    }
                    break;
                }
            }       
            event.preventDefault();
        }
    }
}

function checkWord(word) {
    for(spec_word of spec_words) {
        if(word == spec_word) { return false; }
    }
    return true;
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

// COOKIE
function getLang(name) {
    let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setLang(language) {
    if(language == 'ru') { document.cookie = 'language=ru'; } 
    else { document.cookie = 'language=en'; }
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
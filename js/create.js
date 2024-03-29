let keys = [
[['key', 'Backquote', 'ё', 'Ё', '`', '~'], ['key', 'Digit1', '1', '!', '1', '!'], ['key', 'Digit2', '2', '"', '2', '@'], ['key', 'Digit3', '3', '№', '3', '#'], ['key', 'Digit4', '4', ';', '4', '$'], ['key', 'Digit5', '5', '%', '5', '%'], ['key', 'Digit6', '6', ':', '6', '^'], ['key', 'Digit7', '7', '?', '7', '&'], ['key', 'Digit8', '8', '*', '8', '*'], ['key', 'Digit9', '9', '(', '9', '('], ['key', 'Digit0', '0', ')', '0', ')'], ['key','Minus', '-', '_', '-', '_'], ['key', 'Equal',  '=', '+', '=', '+'],['backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace']], //первый ряд 
[['tab', 'Tab', 'Tab', 'Tab', 'Tab', 'Tab'], ['key', 'KeyQ', 'й', 'Й', 'q', 'Q'], ['key', 'KeyW', 'ц', 'Ц', 'w', 'W'], ['key', 'KeyE', 'у', 'У', 'e', 'E'], ['key', 'KeyR', 'к', 'К', 'r', 'R'], ['key', 'KeyT', 'е', 'Е', 't', 'T'], ['key', 'KeyY', 'н', 'Н', 'y', 'Y'], ['key', 'KeyU', 'г', 'Г', 'u', 'U'], ['key', 'KeyI', 'ш', 'Ш', 'i', 'I'], ['key', 'KeyO', 'щ', 'Щ', 'o', 'O'], ['key', 'KeyP','з', 'З', 'p', 'P'], ['key', 'BracketLeft','х', 'Х', '[', '{'], ['key', 'BracketRight', 'ъ', 'Ъ', ']', '}'], ['key', 'Backslash', '\\', '/', '\\', '|'], ['delete', 'Delete', 'Del', 'Del', 'Del', 'Del']], //второй ряд 
[['capslock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'], ['key', 'KeyA', 'ф', 'Ф', 'a', 'A'], ['key', 'KeyS', 'ы', 'Ы', 's', 'S'], ['key', 'KeyD', 'в', 'В', 'd', 'D'], ['key', 'KeyF', 'а', 'А', 'f', 'F'], ['key', 'KeyG',  'п', 'П', 'g', 'G'], ['key', 'KeyH', 'р', 'Р', 'h', 'H'], ['key', 'KeyJ', 'о', 'О', 'j', 'J'], ['key', 'KeyK', 'л', 'Л', 'k', 'K'], ['key', 'KeyL', 'д', 'Д', 'l', 'L'], ['key', 'Semicolon', 'ж', 'Ж', ';', ':'], ['key', 'Quote', 'э', 'Э', '\'', '"'], ['enter', 'Enter', 'Enter', 'Enter', 'Enter', 'Enter']], //третий ряд 
[['shift-left', 'ShiftLeft', 'Shift', 'Shift', 'Shift', 'Shift'], ['key', 'KeyZ', 'я', 'Я', 'z', 'Z'], ['key', 'KeyX', 'ч', 'Ч', 'x', 'X'], ['key', 'KeyC', 'с', 'С', 'c', 'C'], ['key', 'KeyV', 'м', 'М', 'v', 'V'], ['key', 'KeyB', 'и', 'И', 'b', 'B'], ['key', 'KeyN', 'т', 'Т', 'n', 'N'], ['key', 'KeyM', 'ь', 'Ь', 'm', 'M'], ['key', 'Comma', 'б', 'Б', '.', '<'], ['key', 'Period', 'ю', 'Ю', ',', '>'], ['key', 'Slash', ',', '.', '/', '?'], ['arrow', 'ArrowUp', '↑', '↑', '↑', '↑'], ['shift-right', 'ShiftRight', 'Shift', 'Shift', 'Shift', 'Shift']], //четвертый ряд 
[['control', 'ControlLeft', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'], ['windows', 'MetaLeft', 'Win', 'Win', 'Win', 'Win'], ['alt', 'AltLeft', 'Alt', 'Alt', 'Alt', 'Alt'], ['space', 'Space', ' ', ' ', ' ', ' '], ['alt', 'AltRight', 'Alt', 'Alt', 'Alt', 'Alt'], ['arrow', 'ArrowLeft', '←', '←', '←', '←'], ['arrow', 'ArrowDown', '↓', '↓', '↓', '↓'], ['arrow', 'ArrowRight', '→', '→', '→', '→'], ['control', 'ControlRight', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl']] //пятый ряд 
]

// Создание основных единичных элементов
let wrapper = document.createElement('div');
wrapper.className = 'wrapper';
document.body.append(wrapper);

let page = document.querySelector('.wrapper'); 

let area = document.createElement('textarea');
area.id = 'text';
page.append(area);

let kb = document.createElement('div');
kb.id = 'keyboard'
page.append(kb);

let keyboard = document.querySelector('#keyboard');
let textarea = document.querySelector('#text');

// Создание клавиатуры
for (rows of keys) { // Создание строки
    let row = document.createElement('div');
    row.className = 'row';
    keyboard.append(row);
    let newRow = document.querySelectorAll('.row');
    for(key of rows) { // Создание кнопок в данной строке
        let button
        if (key[0] == 'key') {
            button = document.createElement('div');
            button.className = 'key';
            newRow[newRow.length-1].append(button); 
        } else {
            button = document.createElement('div');
            button.className = 'key '+key[0];
            newRow[newRow.length-1].append(button);
        }
        let newKey = document.querySelectorAll('.key');        
        for(let i = 0; i < 2; i++) {
            let keySpan = document.createElement('span');
            if(i == 0){
                keySpan.className = key[1]+' on';
            } else {
                keySpan.className = key[1]+' off';
            }
            newKey[newKey.length-1].append(keySpan);
        }
        spanInner(button, key);
    }
}

function spanInner(button, spanName) { // Заполнение кнопок
    let span = document.querySelectorAll('.'+spanName[1]);
    if(!(spanName[1] == 'ShiftLeft' || spanName[1] == 'ShiftRight')) {
        button.onclick = function() {
             clk(span); 
        } 
    } else {
        button.addEventListener('mousedown', function(event) {
            button.classList.add('active');
            textTransform();
        });
        button.addEventListener('mouseup', function(event) {
            button.classList.remove('active');
            textTransform();
        });
    } 
    let langCount = 1;
    for(elem of span) { 
        for(let k = 0; k < 2; k++) {
            let keyInnerSpan = document.createElement('span');            
            if(k == 0) {
                keyInnerSpan.className = 'down';
                keyInnerSpan.innerHTML = key[2*langCount];
            } else {
                keyInnerSpan.className = 'up';
                keyInnerSpan.innerHTML = key[2*langCount+1];
            }
            elem.append(keyInnerSpan);
        }
        langCount++;
    }
}

function clk(key) {
    let pos = textarea.selectionStart;
    if(key[0].classList[0] == 'CapsLock') {
        if(key[0].parentNode.classList.contains('active')) {
             key[0].parentNode.classList.remove('active'); 
        } 
        else { 
            key[0].parentNode.classList.add('active'); 
        }
        textTransform();

    } else if(key[0].classList[0] == 'Backspace' || key[0].classList[0] == 'Delete') {
        key[0].parentNode.classList.add('active');
        if(key[0].classList[0] == 'Backspace') { 
            textarea.value = textarea.value.slice(0,pos-1)+(textarea.value.slice(pos)); 
            textarea.selectionStart = pos-1; 
            textarea.selectionEnd = pos;
        } else { 
            textarea.value = textarea.value.slice(0,pos)+(textarea.value.slice(pos+1)); 
            textarea.selectionStart = pos; 
            textarea.selectionEnd = pos+1;}
        setTimeout(() => key[0].parentNode.classList.remove("active"),200);

    } else if(key[0].classList[0] == 'Enter') {
        key[0].parentNode.classList.add('active');
        textarea.value = textarea.value.slice(0,pos)+'\n'+(textarea.value.slice(pos));
        textarea.selectionStart = pos+1; textarea.selectionEnd = pos+1;
        setTimeout(() => key[0].parentNode.classList.remove("active"),200);

    } else if(key[0].classList[0] == 'Tab') {
        key[0].parentNode.classList.add('active');
        text.value = text.value.slice(0,pos)+'\t'+(text.value.slice(pos));
        setTimeout(() => key[0].parentNode.classList.remove("active"),200);
        text.selectionStart = position+2; text.selectionEnd = position+2;

    } else if(checkWord(key[0].classList[0])) {
        key[0].parentNode.classList.add('active');
        for(child of key) {
            if(child.classList.contains('on')) {
                for(innerChild of child.childNodes) {
                    if(innerChild.classList.contains('down')) {
                        textarea.value = textarea.value.slice(0,pos)+innerChild.innerHTML+(textarea.value.slice(pos));
                        textarea.selectionStart = pos+1; textarea.selectionEnd = pos+1;
                    }
                }
            }
        }
        setTimeout(() => key[0].parentNode.classList.remove("active"),200);

    } else {
        key[0].parentNode.classList.add('active');
        setTimeout(() => key[0].parentNode.classList.remove("active"),200);
    }
}
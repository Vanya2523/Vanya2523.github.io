let characteristicsParent = document.getElementById('characters'),
    chosenCharacteristics = document.querySelector('.chosenCharacteristics'),
    characteristics = document.getElementById('characters').querySelectorAll('.character'),
    arrChosenCharacteristics = [];

    let objCharacteristics = {
        hard_training: false,
        easy_training: false,
        long_liver: false,
        short_liver: false,
        size_large: false,
        size_average: false,
        size_small: false
    }

    if(chosenCharacteristics.innerText == '') {
        chosenCharacteristics.style.display = 'none';
    }

characteristicsParent.addEventListener('click', (event) => {
    const target = event.target.parentElement.parentElement;

    if (target && target.classList.contains('character')) {
        chosenCharacteristics.style.display = 'flex';
        if(chosenCharacteristics.innerText.search(target.innerText) == -1) {
            chosenCharacteristics.innerHTML += target.outerHTML;
        }
        if(arrChosenCharacteristics.indexOf(target.innerText) == -1) {
            arrChosenCharacteristics.push(target.innerText);
        }
        target.style.display = 'none';
    }
    if(characteristicsParent.innerText == '') {
        characteristicsParent.style.display = 'none';
    }
})


chosenCharacteristics.addEventListener('click', (event) => {
    const target = event.target.parentElement.parentElement;

    if (target && target.classList.contains('character')) {
        characteristicsParent.style.display = 'flex';
        if(characteristicsParent.innerText.search(target.innerText) == -1) {
            characteristicsParent.innerHTML += target.outerHTML;
        }
        const index = arrChosenCharacteristics.indexOf(target.innerText);
        if (index > -1) {
            arrChosenCharacteristics.splice(index, 1);
        }
        target.style.display = 'none';
        if(chosenCharacteristics.innerText == '') {
            chosenCharacteristics.style.display = 'none';
        }
        objCharacteristics.hard_training = false;
        objCharacteristics.easy_training = false;
        objCharacteristics.long_liver = false;
        objCharacteristics.short_liver = false;
        objCharacteristics.size_large = false;
        objCharacteristics.size_average = false;
        objCharacteristics.size_small = false;
    }
})



let searchButton = document.querySelector('.site-content-content-button'),
allCharactersAnimalsParents = document.querySelectorAll('.characters');
searchButton.addEventListener('click', () => {
    document.querySelectorAll('.site_content-content-information-main-text-characteristics').forEach((elem) => {
        elem.style.display = 'none';
    })
    let str = '';
    arrChosenCharacteristics.forEach((elem) => {
        str += elem;
        if (elem == 'сложная дрессировка') {
            objCharacteristics.hard_training = true;
        }
        else if (elem == 'легкая дрессировка') {
            objCharacteristics.easy_training = true;
        }
        else if (elem == 'долгожитель') {
            objCharacteristics.long_liver = true;
        }
        else if (elem == 'краткожитель') {
            objCharacteristics.short_liver = true;
        }
        else if (elem == 'размер большой') {
            objCharacteristics.size_large = true;
        }
        else if (elem == 'размер средний') {
            objCharacteristics.size_average = true;
        }
        else if (elem == 'размер маленький') {
            objCharacteristics.size_small = true;
        }
    })
    
    function checkObject (obj1, obj2) {
        arr1 = Object.entries(obj1);
        arr2 = Object.entries(obj2);
        let z = false;
        for(i = 0; i < arr1.length; i++) {
            const x = arr1[i][1];
            const y = arr2[i][1];
            if(x == true && y == true) {
                z = true;
            }
            else if (x == true && y == false) {
                z = false;
                break;
            }
            else if (x == false && y == true) {
                continue;
            }
            else if (x == false && y == false) {
                continue;
            }
        }
        return z;
    }

    allCharactersAnimalsParents.forEach((elem) => {
        let allCharactersAnimalsObj = {
            hard_training: false,
            easy_training: false,
            long_liver: false,
            short_liver: false,
            size_large: false,
            size_average: false,
            size_small: false
        }
        for (let i = 0; i < elem.children.length; i++) {
            if (elem.children[i].innerText == 'сложная дрессировка') {
                allCharactersAnimalsObj.hard_training = true;
            }
            else if (elem.children[i].innerText == 'легкая дрессировка') {
                allCharactersAnimalsObj.easy_training = true;
            }
            else if (elem.children[i].innerText == 'долгожитель') {
                allCharactersAnimalsObj.long_liver = true;
            }
            else if (elem.children[i].innerText == 'краткожитель') {
                allCharactersAnimalsObj.short_liver = true;
            }
            else if (elem.children[i].innerText == 'размер большой') {
                allCharactersAnimalsObj.size_large = true;
            }
            else if (elem.children[i].innerText == 'размер средний') {
                allCharactersAnimalsObj.size_average = true;
            }
            else if (elem.children[i].innerText == 'размер маленький') {
                allCharactersAnimalsObj.size_small = true;
            }
        }
        if (checkObject (objCharacteristics, allCharactersAnimalsObj)) {
            elem.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.classList.remove('hidden')
        }
        else {
            elem.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add('hidden')
        }
    })
})
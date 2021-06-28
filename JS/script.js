let activeHeartButton = document.querySelectorAll('.ActiveHeart'),
    NoActiveHeartButton = document.querySelectorAll('.NoActiveHeart'),
    heartButtonParent = document.querySelectorAll('.site_content-content-information-main');
    itemName = document.querySelectorAll('.item_name'),
    outCounterFavorites = document.querySelector('.counterFavorites');
    let arrFavorites = [];

    let out_arr = document.getElementById('out_arr');
    let str = ' ';
    let counterFavorites;

function counter(counterFavorites = 0) {
    counterFavorites++
    outCounterFavorites.innerHTML = counterFavorites;
    return(counterFavorites);
}

function counterMinus(counterFavorites = 0) {
    counterFavorites--
    outCounterFavorites.innerHTML = counterFavorites;
    return(counterFavorites);
}

function returnMass(arrFavorites) {
    for (let i = 0; i< arrFavorites.length; i++  ) {
        if (arrFavorites[i]!==undefined) {
            str += arrFavorites[i] + '<br>';
        }
    }
    if (arrFavorites.length == 0) {
        str = ' ';
    }
    out_arr.innerHTML = str
}

for(elem of heartButtonParent) {
    elem.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('NoActiveHeart')) {
            counterFavorites = counter(counterFavorites);
            str = ' ';
            target.classList.add('hidden');
            target.parentElement.childNodes[3].classList.remove('hidden');
            arrFavorites.push(target.parentElement.parentElement.parentElement.childNodes[1].childNodes[1].innerHTML);
            returnMass(arrFavorites);
        }
    })

    elem.addEventListener('click', (event) => {
        str = ' ';
        const target = event.target;

        if (target && target.classList.contains('ActiveHeart')) {
            counterFavorites = counterMinus(counterFavorites);
            target.classList.add('hidden');
            target.parentElement.childNodes[1].classList.remove('hidden');
            const index = arrFavorites.indexOf(target.parentElement.parentElement.parentElement.childNodes[1].childNodes[1].innerHTML);
            if (index > -1) {
                arrFavorites.splice(index, 1);
            }
            returnMass(arrFavorites);
        }
    })
}

let characters = document.querySelectorAll('.character');

characters.forEach((elem) => {
    let str = ' ';
    if(elem.classList.contains('hard-training')) {
        str = '<a>' + '<p>' + 'сложная дрессировка' + '</p>' + '</a>';
        elem.innerHTML = str;
    }
    else if(elem.classList.contains('easy-training')) {
        str = '<a>' + '<p>' + 'легкая дрессировка' + '</p>' + '</a>';
        elem.innerHTML = str;
    }
    else if(elem.classList.contains('long-liver')) {
        str = '<a>' + '<p>' + 'долгожитель' + '</p>' + '</a>';
        elem.innerHTML = str;
    }
    else if(elem.classList.contains('short-liver')) {
        str = '<a>' + '<p>' + 'краткожитель' + '</p>' + '</a>';
        elem.innerHTML = str;
    }
    else if(elem.classList.contains('size-small')) {
        str = '<a>' + '<p>' + 'размер маленький' + '</p>' + '</a>';
        elem.innerHTML = str;
    }
    else if(elem.classList.contains('size-average')) {
        str = '<a>' + '<p>' + 'размер средний' + '</p>' + '</a>';
        elem.innerHTML = str;
    }
    else if(elem.classList.contains('size-large')) {
        str = '<a>' + '<p>' + 'размер большой' + '</p>' + '</a>';
        elem.innerHTML = str;
    }
})

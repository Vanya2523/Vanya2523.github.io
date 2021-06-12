let activeHeartButton = document.querySelectorAll('.ActiveHeart'),
    NoActiveHeartButton = document.querySelectorAll('.NoActiveHeart'),
    heartButtonParent = document.querySelectorAll('.site_content-content-information-main');
    itemName = document.querySelectorAll('.item_name');
    let arrFavorites = [];

    let out_arr = document.getElementById('out_arr');
    let str = ' ';

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

let hintsList = document.querySelector('.hints')

for (let i = 0; i < itemName.length; i++  ) {
    let str = ' ';
    if (itemName[i] !== undefined) {
        str += '<li>' + '<p class = "hint">' + itemName[i].innerText + '</p>' + '</li>';
    }
    hintsList.innerHTML += str;
    var hint = document.querySelectorAll('.hint');
}

let characters = document.querySelectorAll('.character');

characters.forEach((elem) => {
    let str = ' ';
    if(elem.classList.contains('easy-training')) {
        str = '<a href = "#">' + '<p>' + 'легкая дрессировка' + '</p>' + '</a>';
        elem.innerHTML = str;
    }
    else if(elem.classList.contains('long-liver')) {
        str = '<a href = "#">' + '<p>' + 'долгожитель' + '</p>' + '</a>';
        elem.innerHTML = str;
    }
    else if(elem.classList.contains('size-average')) {
        str = '<a href = "#">' + '<p>' + 'размер средний' + '</p>' + '</a>';
        elem.innerHTML = str;
    }
    else if(elem.classList.contains('size-large')) {
        str = '<a href = "#">' + '<p>' + 'размер большой' + '</p>' + '</a>';
        elem.innerHTML = str;
    }
})

document.querySelector('#elastic').oninput = function() {
    var val = this.value.trim();
    let elasticItems = document.querySelectorAll('.elastic li.elastic_item');
    if (val != '') {
        document.querySelector('.search-content-input-hints').style.display = 'block';
        hint.forEach((elem) => {
            if(elem.innerText.search(val) == -1) {
                elem.classList.add('hidden');
            }
            else {
                elem.classList.remove('hidden');
            }
        });
        if(elem.innerText.search(val) == -1) {
            document.querySelector('.search-content-input-hints').style.display = 'none';
        }
        elasticItems.forEach((elem) => {
            if(elem.querySelector('.item_name').innerText.search(val) == -1) {
                elem.classList.add('hidden');
            }
            else {
                elem.classList.remove('hidden');
            }
        });
    }
    else {
        document.querySelector('.search-content-input-hints').style.display = 'none';
        elasticItems.forEach((elem) => {
            elem.classList.add('hidden');
        })
    }
}
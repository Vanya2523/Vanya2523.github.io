let hintsList = document.querySelector('.hints')

for (let i = 0; i < itemName.length; i++  ) {
    let str = ' ';
    if (itemName[i] !== undefined) {
        str += '<li>' + '<p class = "hint">' + itemName[i].innerText + '</p>' + '</li>';
    }
    hintsList.innerHTML += str;
    var hint = document.querySelectorAll('.hint');
}
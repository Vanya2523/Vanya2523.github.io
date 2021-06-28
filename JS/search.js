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

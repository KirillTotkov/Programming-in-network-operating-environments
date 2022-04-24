let list_name = document.querySelectorAll('.menu_name_item')
let imgElem = document.querySelector('#photo')

list_name.forEach(function (item) {
    item.addEventListener('click', function () {
        imgElem['src'] = `../images/photo_album/${item.textContent}.jpg`
    })
})
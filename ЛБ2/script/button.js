const links = ['news.html', 'schedule.html', 'album.html']
const titlePage=['Новости','Расписание','Фотоальбом']

let button=document.getElementsByClassName('button')
for (let i = 0; i < 3; ++i) {
    button[i]
        .addEventListener('click', function (event) {
            if (document.title === 'ЛБ2') {
                window.open(`html/${links[i]}`)
            } else {
                window.open(links[i])
            }

        });


     if ((button[i].textContent).trim()===document.title){
         button[i].style.backgroundColor="#EAFF73FF";
     }
}





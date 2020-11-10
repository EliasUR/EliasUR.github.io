var id = 0

class Project{
    constructor(title, img, description, link, repo){
        this.id = id;
        id++;
        this.title = title;
        this.img = img;
        this.description = description;
        this.link = link;
        this.repo = repo;
    }
}

var vue = new Vue({
    el:'#app',
    data: {
        projects: [
            new Project('Dino Canvas', './img/dino.png', 
            'A copy of trex-chrome and my first game using canvas.', 
            'https://eliasur.github.io/Dino-Canvas/', 'https://github.com/EliasUR/Dino-Canvas'),
            new Project('NYSL WebApp', './img/nysl2.png', 
            'A Single Page App made with a team for the third module of the "Start" course using React and FireBase.', 
            'https://nysl-webapp-f42cb.firebaseapp.com/', ''), 
            new Project('TGIF', './img/tgif.png', 
            'Second module of the "Start" course. It was made by consuming a ProPublica API and using VueJs and Bootstrap.', 
            'https://eliasur.github.io/TGIF/', 'https://github.com/EliasUR/TGIF'),
            new Project('NYSL WebPage', './img/nysl.png', 
            'My first web page made in the first module of the front-end "START" course.', 
            'https://eliasur.github.io/NYSL/', 'https://github.com/EliasUR/NYSL'), 
        ]
    }
})

// Texts in spanish

// 'Una copia de trex-chrome y mi primer juego utilizando canvas.'

// 'Una Single Page App hecha de manera grupal para el tercer modulo de "Start" utilizando React y FireBase.'

// 'Segundo modulo del curso "Start". Fue hecha consumiendo un API de ProPublica y usando VueJs y Bootstrap.'

// 'Mi primer página web hecha en el primer modulo del curso "Start" de desarollo web Front-End.'


var type = new Typed('#typing',{
    stringsElement: '#texts',
    contentType: 'html',
    smartBackspace: true,
    cursorChar:'|',
    showCursor: true,
    typeSpeed: 80,
    startDelay: 500,
    backSpeed: 50,
    backDelay: 1000,
    loop: false,
})


var y = window.pageYOffset

window.onscroll = () => {
    if(window.pageYOffset >= 100){
       document.getElementById('nav').style.top = "0px";
    }
    else{
        document.getElementById('nav').style.top = "-100px";
    }
}

document.getElementById('down').onclick = () => {
    if(window.pageYOffset >= 100){
        document.getElementById('nav').style.top = "0px";
     }
}

document.getElementById('up').onclick = () => {
    document.getElementById('nav').style.top = "-100px";
}

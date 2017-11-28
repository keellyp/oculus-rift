export default class Menu {
    show() {
        const menu = document.querySelector('.burger__button')
        const button = document.querySelector('.menu__icon--right')
        const burger = document.querySelector('.burger')
        let displayed = false
     
    button.addEventListener('click', () => {

        if(displayed == false){ 
            burger.style.height = "100vh" 
            menu.src = "img/cancel.svg"  
            displayed = true
        }
        else {
            burger.style.height = "0"
            menu.src = "img/icon-bugermenu.svg"  
            displayed = false  
        }
     })
    }

    link() {

        let link = document.querySelectorAll('li.menu__link')
        const burger = document.querySelector('.burger')
        const menu = document.querySelector('.burger__button')
        let displayed = false

        link.forEach(function (link) {
            link.addEventListener('click', () => {
                burger.style.height = "0"  
                menu.src = "img/icon-bugermenu.svg"   
                displayed = false
            })
        });
    }
}

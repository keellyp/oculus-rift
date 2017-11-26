class Menu {
    
        show() {
        const menu = document.querySelector('.menu__icon--right')
        const burger = document.querySelector('.burger')
        let displayed = false
    
        
        menu.addEventListener('click', () => {
    
            if(displayed == false){
                burger.style.display = "block"
                burger.style.animationName = "open"
                displayed = true
            }
            else
            {
                burger.style.animationName = "close"
                setTimeout(() => {
                    burger.style.display = "none"
                  }, 500)
                
                displayed = false
            }
        })
    
        }
    }
    
    export default Menu
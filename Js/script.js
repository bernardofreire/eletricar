function disableScroll(){
    document.body.style.overflow = 'hidden'
    document.getElementById('sidebar').style.overflow = 'auto'  
}

function enableScroll(){
    document.body.style.overflow = 'overlay'
    
}

const openMenu = () => {
    document.querySelector('.backdrop').className = 'backdrop active'
    document.querySelector('aside').className = 'active'
    disableScroll()
}
const closeMenu = () => {
    document.querySelector('.backdrop').className = 'backdrop'
    document.querySelector('aside').className = ''
    enableScroll()
}

document.getElementById('menuBtn').onclick = e => {
    e.preventDefault()
    openMenu()
}


document.querySelector('aside button.close').onclick = e => {
    closeMenu()
}

document.querySelector('.backdrop').onclick = e => {
    closeMenu()
}

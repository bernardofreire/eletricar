const abrirMenu = () =>{
    document.querySelector('.backdrop').className = 'backdrop active'
   document.querySelector('aside').className = 'active'
}
const fecharMenu = () =>{
    document.querySelector('.backdrop').className = 'backdrop'
    document.querySelector('aside').className = ''

}   

document.getElementById('menuBtn').onclick = e =>{
    e.preventDefault()
    abrirMenu()
}


document.querySelector('aside button.close').onclick = e =>{
    fecharMenu()
}

document.querySelector('.backdrop').onclick = e =>{
    fecharMenu()
}

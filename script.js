
document.addEventListener('DOMContentLoaded', () => {
    const bars = document.querySelector('#bars');
    const hams = document.querySelector('#hamburger');

    let flag = 1;
    let flag2 = 1;

    const sicon = document.querySelector('#search-icon');
    const head = document.querySelector('#head');
    const sbox = document.querySelector('#search-box');
    const larrow = document.querySelector('#left-arrow');

    hams.style.cursor = "pointer";
    sicon.style.cursor = "pointer";
    


    sicon.addEventListener('click',()=>{
            sbox.style.display = "flex";
            head.style.display="none"     
    })
    larrow.addEventListener('click',()=>{
        sbox.style.display="none" 
        head.style.display="flex"
          
       
    })
    hams.addEventListener('click', () => {
        const menu = document.querySelector('#menu');
        const close =document.querySelector('#close')
        if (flag === 1) {
            bars.style.display="none"
            close.style.display="block"

            menu.style.display = 'block';
            flag--;
        } else {
            menu.style.display = 'none';  // Corrected to 'none' for hiding the menu
            close.style.display="none"
            bars.style.display="block"

            flag++;
        }
    });
    console.log('hello')
});

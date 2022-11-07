let listElements = document.querySelectorAll('.list__button--click');

listElements.forEach(listElement => {
    listElement.addEventListener('click', ()=>{
        
        listElement.classList.toggle('arrow');

        let height = 0;
        let menu = listElement.nextElementSibling;
        if(menu.clientHeight == "0"){
            height=menu.scrollHeight;
        }

        menu.style.height = `${height}px`;
        
    })
});


let     elementoID = document.getElementById('sizeimage');

function SizeImage(){
  
 if (screen.width<700) {
    elementoID.removeAttribute('style')
 } else{
 
  if(screen.width>700){
   elementoID.setAttribute('style', 'width: 35%; height: auto;');

 }

 }
}




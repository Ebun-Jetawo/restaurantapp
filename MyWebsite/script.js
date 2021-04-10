function navigation(){
    var navbtn = document.getElementsByClassName("navbtn");
    for(var i = 0; i<navbtn.length; i++){
        navbtn[i].addEventListener("click",function(){
            var current = document.getElementsByClassName("active");
            if(current.length > 0){
                current[0].className = current[0].className.replace("active","")
            }
            this.className += " active";
        });
    }

    window.onload = navigation;

}

let openClicked = document.getElementById('clicked');
let closeClicked = document.getElementById('closed');
let overlay = document.getElementById('overlay')
let modal = document.getElementById('modal');

openClicked.addEventListener('click',function(){
    openModal();
})
closeClicked.addEventListener('click',function(){
    closeModal();
})

function openModal(){
    overlay.classList.add('active');
    modal.classList.add('active')
}
function closeModal(){
    modal.classList.remove('active')
    overlay.classList.remove('active');
}

function mymenubar(){
    var navbtn = document.getElementById('menu');
    navbtn.addEventListener('click',function(){
    var div = document.createElement()
    })
}
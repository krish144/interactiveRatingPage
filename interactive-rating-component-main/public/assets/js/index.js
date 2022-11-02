let submit=document.getElementById('submit');

let reset=document.getElementById('reset');

let message=document.getElementById('message');

let value=document.getElementById('value');

let rating=document.querySelectorAll('.rating-item');

let ratings;

rating.forEach((item,iterate)=>
item.addEventListener('click',itm=>{
    ratings=iterate+1;
}))



submit.addEventListener('click',()=>{
    if(ratings==undefined){
        alert('Please Select the Rating');
    }
    else{
            value.textContent=ratings;
            message.style.zIndex="1";
        }
        console.log(ratings);
})

reset.addEventListener('click',()=>{
    message.style.zIndex="-1";
    
})




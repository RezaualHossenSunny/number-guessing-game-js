let boxone=document.querySelector('.box-one');
console.log(boxone);

let input1=document.querySelector('.input1');
console.log(input1);

let btn1=document.querySelector('.btn1');
console.log(btn1);


let boxtwo=document.querySelector('.box-two');
console.log(boxtwo);

let input2=document.querySelector('.input2');
console.log(input2);

let btn2=document.querySelector('.btn2');
console.log(btn2);

let boxthree=document.querySelector('.box-three');
console.log(boxthree);

let input3=document.querySelector('.input3');
console.log(input3);

let btn3=document.querySelector('.btn3');
console.log(btn3);

 let count =5;
let chance=document.querySelector('.chance');
console.log(chance);

let error =document.querySelector('.error');
console.log(error);



btn1.addEventListener('click', function(){

    if(input1.value ==''){
        error.innerHTML="please input your value";
        error.style.display='block';
    }else{
        console.log(input1.value)
        error.style.display='none';
        boxtwo.style.display='block'
        boxone.style.display='none'

    }
})

btn2.addEventListener('click', function(){
    if(input2.value <1 || input2.value >10){
        error.innerHTML="please enter a number 1-10";
        error.style.display='block';
    }else{
        console.log('col');
        if(input2.value - 10){
            console.log('number');
            boxthree.style.display='block';
            boxtwo.style.display='none';
            error.style.display='none';
            
        }else{
            console.log('string');
            error.innerHTML="please enter a number 1-10";
            error.style.display='block';
        }
    }
})
btn3.addEventListener('click', function(){
    if(input2.value == input3.value){
        console.log('ki khobor')
        error.innerHTML='player 2 win'
        error.style.display='block'
        error.style.color='#00FF00'

    }else{
        count --;
       chance.innerHTML = count ;

        if(count ==0){
        error.innerHTML='player 1 win'
        error.style.display='block'
        error.style.color='#E25D5D'
        }

    }
})

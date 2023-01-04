

let scoreInDom=document.getElementById('score')
let count =0
let numberInDOM=document.getElementById("number")
setInterval(()=>{
 
    let numerRandom=Math.floor(Math.random()*100)
    numberInDOM.innerHTML=numerRandom
    count++
    if(count>10){
        alert("your score : "+scoreInDom.innerHTML+"/10")
        count=0;
        scoreInDom.innerHTML=0
        numberInDOM.innerHTML=""
    }
    
},500)

const CheckNumber=()=>{
    
  if (numberInDOM.innerHTML%2==0) {
    return 1
  }else{
    return 0
  }
}

let pair=document.getElementById('pair')
let impair=document.getElementById('impair')

pair.addEventListener('click',()=>{
  
    if(CheckNumber()==1){
        scoreInDom.innerHTML=+scoreInDom.innerHTML+1
    }
   
})

impair.addEventListener('click',()=>{
  
    if(CheckNumber()==0){
        scoreInDom.innerHTML=+scoreInDom.innerHTML+1
    } 
    
    
})








let scoreInDom=document.getElementById('score')

let numberInDOM=document.getElementById("number")
setInterval(()=>{
 
    let numerRandom=Math.floor(Math.random()*100)
    numberInDOM.innerHTML=numerRandom
    
},5000)

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
    if ( scoreInDom.innerHTML>10) {
        scoreInDom.innerHTML=0
    }
})

impair.addEventListener('click',()=>{
  
    if(CheckNumber()==0){
        scoreInDom.innerHTML=+scoreInDom.innerHTML+1
    } 
    if ( scoreInDom.innerHTML>10) {
        scoreInDom.innerHTML=0
    }
    
})




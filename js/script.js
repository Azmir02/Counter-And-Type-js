//Counter-up js
let count = document.querySelectorAll(".counter")
console.log(count)

let convert = Array.from(count)
console.log(convert)

convert.map(function(e){
    let counterNumber = 0
    function counterup(){
        counterNumber++
        e.innerHTML = counterNumber
        if(counterNumber == e.dataset.number){
            clearInterval(timing)
        }
    }

    let timing = setInterval(function(){
        counterup()
    },e.dataset.time)
})

let type = document.querySelectorAll(".text")
let convertType = Array.from(type)

convertType.map((itemType)=>{
    let countType= 0 
    let typeNow = itemType.innerHTML.split(" ")
    function letsType(){
       if(countType == itemType.dataset.text.length){
        typeNow.pop()
        itemType.innerHTML = typeNow.join("")
        if(typeNow.length == 0){
            itemType.innerHTML += itemType.dataset.text.charAt(countType)
            countType = 0
        }
       }
       else{
        itemType.innerHTML += itemType.dataset.text.charAt(countType)
        typeNow = itemType.innerHTML.split("")
        countType++

       }
     
       
    }

    let timingType = setInterval(()=>{
        letsType()
    },itemType.dataset.typetime)
})




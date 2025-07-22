const fs=require("fs").promises

function chooseRandom(array){
    let arrayLength=array.length
    return array[Math.floor(Math.random()*arrayLength)]
}
function dice(number){
    return Math.floor(Math.random()*number)
}
function syllableGenerator(){
    const firstSounds=",p,t,ch,c,b,d,j,g,m,n,f,s,h,pr,tr,cr,br,dr,gr,fr,sp,st,sc,spr,str,scr,r,l,w".split(",")
    const secondSounds="a,e,i,o,u,y".split(",")
    const thirdSounds=",m,n,f,s,ll".split(",")
    let result=chooseRandom(firstSounds)+chooseRandom(secondSounds)+chooseRandom(thirdSounds)
    return result
}
function wordGenerator(length=2){
    let result=""
    for(let i=0;i<length;i++){
        result+=syllableGenerator()
    }
    return result
}
function capitalize(word){
    let result=""
    let word2=word.split("")
    word2[0]=word2[0].toUpperCase()
    result=word2.join("")
    return result
}
function fullNameGenerator(length=2){
    let result=[]
    for(let i=0;i<length;i++){
        result.push(capitalize(wordGenerator()))
    }
    return result.join(" ")
}
function passwordGenerator(length=8){
    const charlist=" ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890.-,;!@#$%^&*()"
    let result=""
    for(let i=0;i<length;i++){
        result+=chooseRandom(charlist)
    }
    return result
}
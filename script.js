"use strict"


var vardas=document.getElementsByTagName("input")[0]
var pavarde=document.getElementsByTagName("input")[1]
var amzius=document.getElementsByTagName("input")[2]
var prideti=document.getElementsByTagName("input")[3]
var istrintiPirma=document.getElementsByTagName("input")[4]
var istrintiPaskutini=document.getElementsByTagName("input")[5]
var table=document.getElementsByTagName("table")[0]
var tr=document.getElementsByTagName("tr")



prideti.addEventListener("click", function(){
    if(vardas.value && pavarde.value && amzius.value>0 ){
       
       
       var newElement = document.createElement("tr")
       table.append(newElement)
        var newElement = document.createElement("td")
        newElement.innerText = vardas.value
         tr[tr.length-1].append(newElement)

         var newElement = document.createElement("td")
        newElement.innerText = pavarde.value
         tr[tr.length-1].append(newElement)

         var newElement = document.createElement("td")
        newElement.innerText = amzius.value
         tr[tr.length-1].append(newElement)

         vardas.value= ""
         pavarde.value= ""
         amzius.value= ""
    }
    else {
        alert("Iveskite duomenis")
    }
} )

istrintiPirma.addEventListener("click", function(){
    if(tr[1]){
    tr[1].remove()}

    else{
        alert("nera ko triniti")
    }
})

istrintiPaskutini.addEventListener("click", function(){
    if(tr[1]){
    tr[tr.length-1].remove()}

    else{
        alert("nera ko triniti")
    }
})

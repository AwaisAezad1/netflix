let slide = document.getElementById("row0")
let slide1 = document.getElementById("row1")
let slide2 = document.getElementById("row2")
let xcordinate0=0
let xcordinate1=0
let xcordinate2=0
let btnright0 = document.getElementById("btnr0")
let btnleft0 = document.getElementById("btnl0")
let btnright1 = document.getElementById("btnr1")
let btnleft1 = document.getElementById("btnl1")
let btnright2 = document.getElementById("btnr2")
let btnleft2 = document.getElementById("btnl2")


btnright0.addEventListener("click", () =>{
  xcordinate0+=250
slide.scroll(xcordinate0,0)
} )
btnleft0.addEventListener("click", () =>{
  xcordinate0+=-250
slide.scroll(xcordinate0,0)
} )


btnright1.addEventListener("click", () =>{
  xcordinate1+=250
slide1.scroll(xcordinate1,0)
} )
btnleft1.addEventListener("click", () =>{
  xcordinate1+=-250
slide1.scroll(xcordinate1,0)
} )
btnright2.addEventListener("click", () =>{
  xcordinate2+=250
slide2.scroll(xcordinate2,0)
} )
btnleft2.addEventListener("click", () =>{
  xcordinate2+=-250
slide2.scroll(xcordinate2,0)
} )
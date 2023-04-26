
const genBtn = document.querySelector(".generate");
const colorContainer = document.querySelector(".color-container")
let color = "0123456789ABCDEF";
let deginf = document.getElementById("deg")
let degrees = document.querySelector(".degrees");
let degreeVal;
degreeVal = degrees.value
let Color1;
let Color2
let colorInfo = document.querySelector(".color-info")
let ranomNum = () => Math.floor(Math.random()*color.length)

lop()
colochnge()
genBtn.addEventListener("click",()=>{
    lop()
    colochnge()
})

degrees.addEventListener("input",()=>{
    degreeVal = degrees.value 
    
    colochnge()
    
})
function lop(){
    Color1 = "#"
    Color2 = "#"
   for (i=0; i<2; i++){
   for(i=0; i<6; i++){
       Color1 += color[ranomNum()]
       Color2 += color[ranomNum()]
   }
   }
}
function colochnge(){
    if(degreeVal<9){
        degreeVal = "0" + degrees.value
    }else{
        degreeVal = degrees.value
    }
    colorContainer.style.background = `linear-gradient(${degreeVal}deg,${Color1} , ${Color2})`
    colorInfo.innerText = `background : linear-gradient(${degreeVal}deg,${Color1} , ${Color2})`
    deginf.innerText = `${degreeVal}degree`
}


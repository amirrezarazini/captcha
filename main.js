
let fuctionn = ()=>{

    let number_random = "ABCEGHIEZLMNORXTVWXVZ1678sdmnfsnfsmlsdksdl!F22919UV"
    let javab  = ""
    console.log(number_random.length)
    let ttrunc = Math.trunc(Math.random()*20);
    let ttrunc1 = Math.trunc(Math.random()*20 +10);
    let ttrunc2 = Math.trunc(Math.random()*20 +20);
    let ttrunc3 = Math.trunc(Math.random()*20 +30);
    javab += number_random[ttrunc]+number_random[ttrunc1]+number_random[ttrunc3]+number_random[ttrunc2];
    return javab;
}
let Refresh = document.getElementById("button-refresh")
let Title = document.getElementById("title");
let Input2 = document.getElementById("input1")
let Button = document.getElementById("button-input");
let Dark  = document.getElementById("dark")
let Light = document.getElementById("light")
let Parent_Input = document.getElementById("div_input_parent")

Title.innerText = fuctionn()

Input2.value = ""

Button.addEventListener("click", () => {
    if(Title.innerText === Input2.value){
        alert("Welcome")
        Input2.value = "";
        Title.innerText = fuctionn()
    }else{
        alert("Try again")
        Input2.value = "";
        Title.innerText = fuctionn()
    }

})
Refresh.addEventListener("click", () => {
    Title.innerText = ""
    Title.innerText = fuctionn()
})
Dark.addEventListener("click",()=>{
    Title.style.backgroundColor="black";
    Title.style.color="white"
})
Light.addEventListener("click",()=>{
    Title.style.backgroundColor="white"
    Title.style.color="black"
})
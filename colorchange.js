const btn = document.querySelector("button");

const colorcode = document.querySelector("h1")


const colorgenrate = function(){
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const rgb = `RGB(${red},${green},${blue})`;
    navigator.clipboard.writeText(rgb);
    
    return rgb;
    
}

btn.addEventListener("click",()=>{
const colorchange = colorgenrate();

document.body.style.backgroundColor=colorchange;
colorcode.textContent=colorchange;
});





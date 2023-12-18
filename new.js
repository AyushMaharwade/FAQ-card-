let btns = document.querySelectorAll(".btn");
let texts = document.querySelectorAll(".text");

texts.forEach(texts =>{
    texts.style.display = "none";
})

function btndisplay(index) {
    if (texts[index].style.display === "none"){
        texts[index].style.display = "block";
    } 
    else{
        texts[index].style.display = "none";
    }
}

btns.forEach((button, index) => {
    button.onclick = () =>{
        btndisplay(index);
    }
});


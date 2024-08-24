// setting red color here
const boxes = document.querySelectorAll(".box")
boxes.forEach((box)=>{
    box.addEventListener('click',(e)=>{
        document.body.style.backgroundColor = e.target.id
    })
})

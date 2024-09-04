const acordeon = document.querySelectorAll(".acordeon")

for (let i = 0; i < acordeon.length; i++) { acordeon[i].addEventListener("click", function() {
this.classList.toggle("active")
const desc = this.nextElementSibling
    
if(desc.style.maxHeight) {
    desc.style.maxHeight = null
}

else {
    desc.style.maxHeight = desc.scrollHeight + "px"
}

})
}


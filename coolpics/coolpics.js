const menuButton = document.querySelector(".menu-button button");
const menu = document.querySelector(".menu");

function toggleMenu() {
  menu.classList.toggle("hide");
}


function handleResize() {
    const menu = document.querySelector(".menu");

    if (window.innerWidth > 1000) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");
    }
}

handleResize();
window.addEventListener("resize", handleResize);


menuButton.addEventListener("click", toggleMenu);



function viewHandler(event) {
    
    const clickedElement = event.target;

   
    if (clickedElement.tagName === "IMG") {
       
        let srcParts = clickedElement.src.split("/");
        let filename = srcParts[srcParts.length - 1]; 

       
        let nameParts = filename.split("-");
        let baseName = nameParts[0]; 

        
        let fullImage = baseName + "-full.jpeg";

        
        document.body.insertAdjacentHTML("afterbegin", viewerTemplate(fullImage, clickedElement.alt));

        
        document.querySelector(".viewer").classList.add("show");

       
        document.querySelector(".close-viewer").addEventListener("click", closeViewer);
    }
}


function viewerTemplate(pic, alt) {
    return `<div class="viewer show">
        <button class="close-viewer">X</button>
        <img src="${pic}" alt="${alt}">
    </div>`;
}


function closeViewer() {
    document.querySelector(".viewer").remove();
}


document.querySelector(".gallery").addEventListener("click", viewHandler);

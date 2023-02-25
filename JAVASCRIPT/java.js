document.getElementById("botonocultar").addEventListener("click", function(){
    document.getElementById("datospersonales").style.display="none"
    
    })
    document.getElementById("botonomostrar").addEventListener("click", function(){
        document.getElementById("datospersonales").style.display="block";      
})


document.getElementById("botonocultar2").addEventListener("click", function(){
    document.getElementById("explab").style.display="none"
    
    })
    document.getElementById("botonomostrar2").addEventListener("click", function(){
        document.getElementById("explab").style.display="block";      
})

document.getElementById("botonocultar3").addEventListener("click", function(){
    document.getElementById("ACADEMICA").style.display="none"
    
    })
    document.getElementById("botonomostrar3").addEventListener("click", function(){
        document.getElementById("ACADEMICA").style.display="block";      
})

document.getElementById("fullscreen"),
document.getElementById("fulImg");

function openFulImg(reference){
    fullscreen.style.display = "flex";
    fulImg.src = reference 
    }
function closeImg(){
    fullscreen.style.display = "none";
}
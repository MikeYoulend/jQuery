//per eseguire il codice dopo che il DOM è stato caricato
$(document).ready();
//Metodo sporco
$("button").css("font-size", "40px")
//metodo pulito
$("h1").addClass("big-title margin-50")
//puoi prendere anche solo il testo con .text
$("button").html("<h2>Click me</h2>")
//Dare attributo
$("a").attr("href", "https://www.yahoo.com")
//Dare un eventListener
$("h1").click(function(){
    $("h1").css("color", "red")
});

//aggiungere un eventLister a tutti i bottoni
//for(let i = 0; i < 5; i++){
   //document.querySelectorAll("button")[i].addEventListener("click", function(){
     //   document.querySelector("h1").style.color = "purple"
        
    //})
//}
$("button").click(function(){
    $("h1").css("color", "purple")
    //.hide
});

//Input keypress
$("input").keypress(function(e) {
    console.log(e.key);
})

//input keypress su h1
$(document).keypress(function(e){
    $("h1").html(e.key)
    console.log(e.key);
})

//Input mouseover
$("h1").on("mouseover", function() {
    $("h1").css("color", "black")
})

//before-after-prepend-append
$("h1").before("<button>Sopra</button>")
$("h1").after("<button>Sotto</button>")
$("h1").prepend("<button>Prima</button>")
$("h1").append("<button>Dopo</button>")

//remove
//$("button").remove();
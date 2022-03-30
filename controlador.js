alert("Tardes, porque bueno estoy yo")
let boton=document.getElementById("boton")
boton.addEventListener("click",function(event){

    alert("hiciste click")
    let selector=document.getElementById("selector").value
    alert("usted eligio el:"+ selector)
    switch(selector){
        case "1":
            alert("Elegiste el #1")
            break

        case "2":
            alert("Elegiste el #2")
            break

        case "3":
                alert("Elegiste el #3")
                break

                case "4":
            alert("Elegiste el #4")
            break

            case "5":
            alert("Elegiste el #5")
            break

            case "6":
            alert("Elegiste el #6")
            break

            case "7":
            alert("Elegiste el #7")
            break

            case "8":
            alert("Elegiste el #8")
            break

            case "9":
            alert("Elegiste el #9")
            break

            case "10":
            alert("Elegiste el #10")
            break

    }

})

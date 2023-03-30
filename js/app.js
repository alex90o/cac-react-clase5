/*class Button {
    constructor(parentID, text) {
        this.parentID = parentID;
        this.text = text;
        // completa this.text
    }

    // Invente yo diseño mio...
    render() {
        let myApp = document.getElementById(this.parentID);

        const myButtonHTML = myApp.innerHTML + "<button>" + this.text + "</button>";

        myApp.innerHTML = myButtonHTML; // VAmos a escribir el html para que se 
        // dibuje un boton con el texto de this.text
    }
}

class Input {
    constructor(parentID, type) {
        this.parentID = parentID;
        // if type != opciones validas... entonces poner un valor por default.
        this.type = type;
    }

    render() {
        let myApp = document.getElementById(this.parentID);

        const myInputHTML = myApp.innerHTML + "<input type=" + this.type + ">";

        myApp.innerHTML = myInputHTML; // VAmos a escribir el html para que se 

    }
}

let mySuperArrayofStrings = ["Login", "Signup", "Reset", "Cancel"];

function RenderButton(text) {
    let myButton = new Button("app", text);
    myButton.render();
}

function RenderInput(type) {

    let input_type = "none"

    switch (type) {
        case "Password":
            input_type = "password"
            break;
        case "E-mail":
            input_type = "email";
            break;
        default:
            input_type = "text"
            break;
    }

    let myInput = new Input("app", input_type);
    myInput.render();
}


///////////////////////////
mySuperArrayofStrings.forEach(element => {
    RenderButton(element)
});

// Defino una funcion con el nombre que quiero..
function MySuperFuncion(x, y, z) {

}

MySuperFuncion();// Invocamos...

// Puede asignar a una constante una funcion que NO tiene nombre
const MySuperFuncionDefinida = function () {

}

MySuperFuncionDefinida();

// definir funciones asignando otras..
const MySegundaSuperFuncion = MySuperFuncion;

/// Otro tipo de funcion anonima
const MySuperFuncionSiNombre = (x) => {
    return x + 1
}


const MySuperArrowFunction = x => x + 1


////// 
// resolvemos el ejercicio del dia
let inputArray = ["Username", "Surname", "E-mail", "Password"];

let inputArrayFiltered = inputArray.filter( element => element=="Username");

inputArrayFiltered.forEach(function (element) {
    RenderInput(element);
});
*/
//mi js anterior
class Button {
    constructor(parentID, text) {
        this.parentID = parentID;
        // completa this.text
        this.text = text;
    }

    render(){
    let myApp = document.getElementById(this.parentID);
    const myButtonHTML = myApp.innerHTML + "<button> " + this.text + "</button>"
    myApp.innerHTML = myButtonHTML;

    }
    

}

// Construir el objeto boton
// y llamar al metodo render de ese objeto.
let myButon = new Button("app", "Button Creado...");
myButon.render();




class Input {
   constructor(parentID, type) {
         this.parentID = parentID;
    
     this.type = type;
    }

    render() {
       let myApp = document.getElementById(this.parentID);

       const myInputHTML = myApp.innerHTML + "<input type="+ this.type + ">";

     myApp.innerHTML = myInputHTML; 
       
   }   
 }

let myInput = new Input("inputs1", "checkbox");
 myInput.render();

let myInput2 = new Input("inputs2", "date");
myInput2.render();

let myInput3 = new Input("inputs3", "password");
 myInput3.render();

 let myInput4 = new Input("inputs4", "text");
 myInput4.render();

 let myInput5 = new Input("inputs5", "range");
 myInput5.render();

 let myInput6 = new Input("inputs6", "color");
 myInput6.render();

 class Select {
    constructor(parentID) {
        this.parentID = parentID;
        // completa this.text
    }

    render(){
    let myApp = document.getElementById(this.parentID);
    const mySelectHtml = myApp.innerHTML +  "<select name="+"select>"+
    "<option value="+"disnable"+ "selected>Selecione un opción</option>"+
    "<option value="+"checkbox"+">checkbox</option>"+
    "<option value="+"date"+">date</option>"+
    "<option value="+"password"+">password</option>"+
    "<option value="+"text"+">text</option>"+
    "<option value="+"color"+">color</option>"+
    "</select>";

    myApp.innerHTML = mySelectHtml;

    }
    

}
let mySelect = new Select("filtro");
mySelect.render();
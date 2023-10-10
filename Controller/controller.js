import Lampak from "../View/Lampak.js";

class Controller{
    constructor(){
        new Lampak($(".jatekter"));

        $(window).on("kapcsolva", (event) => {
            console.log(event.detail);
        }); 
    }
}

export default Controller;
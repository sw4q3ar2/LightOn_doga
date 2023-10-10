import { LampaElem } from "../View/LampaElem.js";

class LampaModel{
    #allapot;
    #list = [];

    constructor(){
        this.#allapot = false;
        for (let index = 1; index <= 9; index++) {
            this.#list.push(this.#allapot);
        }
    }
    
    setAllapot() {
        if (this.#allapot == 1) {
          this.#allapot = 0;  
        }else{
          this.#allapot = 1;
        } 
      }
}

export default LampaModel;
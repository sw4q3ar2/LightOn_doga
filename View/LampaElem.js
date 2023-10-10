class LampaElem{
    #allapot;
    #divELEM
    #index;
    constructor(szuloELEM, index){
        this.szuloELEM = szuloELEM;
        this.#index = index;
        this.#allapot = false;
        this.#elemLetrehozas(this.#index);
        this.#divELEM = $(".LampaElem:last-child");
        this.#divELEM.on("click", () => {
            this.#kattTrigger("kapcsolva");
            this.#allapot = true;
            this.#setSzin(this.#allapot);
        });
        this.#setSzin(this.#allapot);
    }

    #kattTrigger(esemenyNev) {
        const esemeny = new CustomEvent(esemenyNev, { detail: this });
        window.dispatchEvent(esemeny);
      }
    
    #setSzin() {
        if (this.#allapot == false) {
          this.#divELEM.css("background-color", "gray");
        } else {
          this.#divELEM.css("background-color", "yellow");
        }
    }
    

    #elemLetrehozas(index){
        let txt = "";
        txt += `<div id="${index}" class="LampaElem"> </div>`
        this.szuloELEM.append(txt);
    }
}

export default LampaElem;
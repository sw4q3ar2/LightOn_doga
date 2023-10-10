import LampaElem from "./LampaElem.js";


class Lampak{
    #index;
    constructor(szuloELEM){
        for (let index = 0; index < 9; index++) {
            new LampaElem(szuloELEM);
        }
    }
}

export default Lampak;
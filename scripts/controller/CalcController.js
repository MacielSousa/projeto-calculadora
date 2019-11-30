class CalcController{
    
    constructor(){ 

        this._displayCalc = "0";
        this.currentDate;
        this.initialize();
    }

    initialize(){

        let displayCalcEl = document.querySelector("#display");
        let dateEl = document.querySelector("#data");
        let timeEl = document.querySelector("#hora");
        
        displayCalcEl.innerHTML = "4567";
        dateEl.innerHTML = new Date().toLocaleDateString("pt-BR");
        timeEl.innerHTML = "12:00";
    }

    get displayCalc(){
        return this._displayCalc;
    }

    set displayCalc(valor){
        this._displayCalc = valor;
    }

}
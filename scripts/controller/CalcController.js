class CalcController{
    
    constructor(){ 
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this.currentDate;
        this.initialize();
    }

    initialize(){
        this.setDisplayDataTime();
        let interval = setInterval(() =>{
            this.setDisplayDataTime();
        }, 1000);

    }

    iniButtonsEvents(){

        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

    }

    setDisplayDataTime(){

        this.displayDate = this.currentDate.toLocaleDateString(this._locale,{
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);

    }

    get displayTime(){
        return this._timeEl.innerHTML;
    }

    set displayTime(value){
        return this._timeEl.innerHTML = value;
    }

    get displayDate(){
        return this._dateEl.innerHTML;
    }

    set displayDate(value){
        return this._dateEl.innerHTML =  value;
    }

    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value){
        return this._displayCalcEl.innerHTML = valor;
    }

    get currentDate(){
        return new Date();
    }

}
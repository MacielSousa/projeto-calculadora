class CalcController{
    
    constructor(){ 

        this._operation = [];
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this.currentDate;
        this.initialize();
        this.iniButtonsEvents();
    }

    initialize(){
        this.setDisplayDataTime();
        let interval = setInterval(() =>{
            this.setDisplayDataTime();
        }, 1000);

    }

    addEventListenerAll(element ,events, fn){
        events.split(' ').forEach(event => {
            element.addEventListener(event, fn, false);
        });
    }

    clearAll(){

        this._operation = [];

    }

    clearEntry(){

        this._operation.pop();

    }


    addOpration(value){

        this._operation.push(value);
        console.log( this._operation);

    }
    

    setError(){
        this.displayCalc = "Error";
    }

    execBtn(value){
        switch(value){
            case 'ac':
                this.clearAll();
            break;
            case 'ce':
                this.clearEntry();
            break;
            case 'soma':
                
            break;
            case 'subtracao':
                
            break;
            case 'divisao':
                
            break;
            case 'multiplicacao':
                
            break;
            case 'porcento':
                
            break;
            case 'igual':
                
            break;
            
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOpration(parseInt(value));
            break;
            default:
                console.log(value);
                this.setError();
            break;
        }
    }

    iniButtonsEvents(){
        let buttons = document.querySelectorAll("#buttons > g, #parts > g");
        
        buttons.forEach((btn, index)=>{
            this.addEventListenerAll(btn, 'click drag', e => {
                let textBtn = btn.className.baseVal.replace("btn-","");

                this.execBtn(textBtn);

            });

            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e => {
                btn.style.cursor = "pointer";
            });

        });
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
        return this._displayCalcEl.innerHTML = value;
    }

    get currentDate(){
        return new Date();
    }

}
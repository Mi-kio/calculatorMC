function calculatorController(){
    var dispID = displayController();
    var IDarr = mainButtonController();
    calculatorView(IDarr,dispID);
}
calculatorController();
function numberButtonView(){
    var numbersArr = numberModel();

    let parentElement = document.getElementsByTagName("BODY")[0];
    let parentDiv = document.createElement("div");
    parentDiv.setAttribute('id','number-div');
    for(let i = 0; i < numbersArr.length; i++){
        let numberButtons = document.createElement("button");
        numberButtons.setAttribute('id','btn-'+numbersArr[i]);
        if(numberButtons.id == 'btn-4'){
            console.log(" ID is set")
        }
        numberButtons.textContent = numbersArr[i];
         parentDiv.appendChild(numberButtons);
    }  
    parentElement.appendChild(parentDiv) 
    return parentDiv.id;
   
}
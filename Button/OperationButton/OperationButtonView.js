function operationButtonView(){
    var operationArr = operationModel();
    let parentElement = document.getElementsByTagName("BODY")[0];
    let parentDiv = document.createElement("div");
    parentDiv.setAttribute('id','operation-div');
    for(let i = 0; i < operationArr.length; i++){
        let operationButtons = document.createElement("button");
        operationButtons.setAttribute('id','btn-'+operationArr[i]);
        operationButtons.textContent = operationArr[i];
        parentDiv.appendChild(operationButtons);
    }  
    parentElement.appendChild(parentDiv); 
    return parentDiv.id; 
}
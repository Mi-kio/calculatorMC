
function functionButtonView(model){
    var functionsArr = functionModel();
    
   let parentElement=document.getElementsByTagName("BODY")[0];
   let parentDiv = document.createElement("div");
   parentDiv.setAttribute('id','function-div');
    for(let i = 0; i < functionsArr.length; i++){
        let functionButtons = document.createElement("button");
        functionButtons.setAttribute('id','btn-'+functionsArr[i]);
        functionButtons.textContent = functionsArr[i];
        parentDiv.appendChild(functionButtons);
    }
    parentElement.appendChild(parentDiv);
    return parentDiv.id;
}


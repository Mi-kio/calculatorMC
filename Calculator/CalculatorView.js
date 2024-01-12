function calculatorView(IDarr,dispID){
    let parentElement = document.getElementsByTagName("BODY")[0];
    let parentDiv = document.createElement("div");
    parentDiv.setAttribute('id','calc-div');
    let childDiv = document.createElement("div");
    childDiv.setAttribute('id','child-div');
    parentElement.appendChild(parentDiv);

    var display = document.getElementById(dispID);
    parentDiv.appendChild(display);
    
    for(let i = 0; i < IDarr.length; i++){
        console.log(IDarr[i])
        var id = document.getElementById(IDarr[i]);
        childDiv.appendChild(id)
    }
    parentDiv.appendChild(childDiv);
}
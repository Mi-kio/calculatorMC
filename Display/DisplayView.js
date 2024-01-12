function displayView(){
    let parentElement = document.getElementsByTagName("BODY")[0];
    let parentDiv = document.createElement("div");
    // let display = document.createElement("div");
    parentDiv.setAttribute('id','display-div');
    // parentDiv.appendChild(display);  recently changed
    parentElement.appendChild(parentDiv);
    return parentDiv.id;
}
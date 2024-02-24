//create input box
let create = document.createElement("input");

create.placeholder = "Schedule your work";

document.getElementById("box#").append(create);

create.setAttribute("class", "inp-box");
//kam halne ko box kko class deko xa yax

//create add button

let create1 = document.createElement("button");

create1.innerHTML = "+";

document.getElementById("box#").append(create1);

create1.setAttribute("class", "inp-botton");

function work() {
    function remov() {
        create2.remove();
        check.remove();
    }
    let task = create.value;

    let check = document.createElement("input");
    check.type = "checkbox";
    check.addEventListener("click", remov);

    let create2 = document.createElement("div");
    create2.innerHTML = task;

    document.getElementById("box2").append(create2, check);


    check.setAttribute("class", "check");

    create2.setAttribute("class", "note");

}
create1.addEventListener("click", work);


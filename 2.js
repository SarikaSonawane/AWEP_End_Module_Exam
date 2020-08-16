function submit() {
    let a = document.getElementById("inp1").value;
    let b = document.getElementById("inp2").value;

    let c = /^[A-Za-z0-9]{3,7}$/
    let d = /^ ([A-Z]{1,1} [A-Z0-9#@]{3,10})    $/

    if (c.test(a)) {
        alert("valid");
    }

    else {
        alert("Password Must Contain A-Za-z0-9");
    }

    if (d.test(b)) {
        alert("valid");
    }

    else {
        alert("Password must contain A-Za-z0-9")
    }

    let showEle = getElementById("show");
    let LA = document.createElement('div');

    LA.innerHTML = a;


    let LB = document.createElement('div');

    LB.innerHTML = b;
    showEle.appendChild(LA);
    showEle.appendChild(LB);

    document.getElementById("inp1").value = "";
    document.getElementById("inp2").value = "";

}
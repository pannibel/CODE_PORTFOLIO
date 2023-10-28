
document.querySelector("#basic01").classList.add("hidden");
document.querySelector("#basic02").classList.add("hidden");
document.querySelector("#basic03").classList.add("hidden"); 
document.querySelector("#basic04").classList.add("hidden");


/* see BASIC WEB */

function click_01() {
    console.log("BASICWEB");
    document.querySelector("#basic01").classList.remove("hidden");
    window.scrollTo(0, 0);
}

document.querySelector("#web").addEventListener("click", click_01);

function unclick_01() {
    console.log("BYEBASICWEB");
    document.querySelector("#basic01").classList.add("hidden");
    window.scrollTo(0, 0);
}

document.querySelector("#back1").addEventListener("click", unclick_01);


/* see BASIC UX */

function click_02() {
    console.log("BASICUX");
    document.querySelector("#basic02").classList.remove("hidden");
    window.scrollTo(0, 0);
}

document.querySelector("#ux").addEventListener("click", click_02);

function unclick_02() {
    console.log("BYEBASICUX");
    document.querySelector("#basic02").classList.add("hidden");
    window.scrollTo(0, 0);
}

document.querySelector("#back2").addEventListener("click", unclick_02);


/* see BASIC ANIM */

function click_03() {
    console.log("BASICANIM");
    document.querySelector("#basic03").classList.remove("hidden");
    window.scrollTo(0, 0);
}

document.querySelector("#anim").addEventListener("click", click_03);

function unclick_03() {
    console.log("BYEBASICANIM");
    document.querySelector("#basic03").classList.add("hidden");
    window.scrollTo(0, 0);
}

document.querySelector("#back3").addEventListener("click", unclick_03);


/* see BASIC CONTENT */

function click_04() {
    console.log("BASICCONTENT");
    document.querySelector("#basic04").classList.remove("hidden");
    window.scrollTo(0, 0);
}

document.querySelector("#content").addEventListener("click", click_04);

function unclick_04() {
    console.log("BYEBASICCONTENT");
    document.querySelector("#basic04").classList.add("hidden");
    window.scrollTo(0, 0);
}

document.querySelector("#back4").addEventListener("click", unclick_04);

"use strict";
let mName = localStorage.getItem("name");
window.addEventListener("load", () => {
    let desig = localStorage.getItem("desig");
    let phone = localStorage.getItem("phone");
    let email = localStorage.getItem("email");
    let add = localStorage.getItem("add");
    let deg = localStorage.getItem("deg");
    let uni = localStorage.getItem("uni");
    let pass1 = localStorage.getItem("pass1");
    let deg2 = localStorage.getItem("deg2");
    let uni2 = localStorage.getItem("uni2");
    let pass2 = localStorage.getItem("pass2");
    let deg3 = localStorage.getItem("deg3");
    let uni3 = localStorage.getItem("uni3");
    let pass3 = localStorage.getItem("pass3");
    let skill1 = localStorage.getItem("skill1");
    let skill2 = localStorage.getItem("skill2");
    let skill3 = localStorage.getItem("skill3");
    let inp_lang = localStorage.getItem("inp_lang");
    let inp_lang2 = localStorage.getItem("inp_lang2");
    let company = localStorage.getItem("company");
    let comLocation = localStorage.getItem("comLocation");
    let jobTitle = localStorage.getItem("jobTitle");
    let stYear = localStorage.getItem("stYear");
    let endYear = localStorage.getItem("endYear");
    let achv1 = localStorage.getItem("achv1");
    let achv2 = localStorage.getItem("achv2");
    let achv3 = localStorage.getItem("achv3");
    let picture = localStorage.getItem("profile_pic");
    let resName = document.getElementById("resName");
    resName.textContent = mName;
    let resDesig = document.getElementById("resDesig");
    resDesig.textContent = desig;
    let resPhone = document.getElementById("resPhone");
    resPhone.textContent = phone;
    let resEmail = document.getElementById("resEmail");
    resEmail.textContent = email;
    let resAdd = document.getElementById("resAdd");
    resAdd.textContent = add;
    let resDeg = document.getElementById("resDeg");
    resDeg.textContent = deg;
    let resUni = document.getElementById("resUni");
    resUni.textContent = uni;
    let resPass = document.getElementById("resPass");
    resPass.textContent = pass1;
    let resDeg2 = document.getElementById("resDeg2");
    resDeg2.textContent = deg2;
    let resUni2 = document.getElementById("resUni2");
    resUni2.textContent = uni2;
    let resPass2 = document.getElementById("resPass2");
    resPass2.textContent = pass2;
    let resDeg3 = document.getElementById("resDeg3");
    resDeg3.textContent = deg3;
    let resUni3 = document.getElementById("resUni3");
    resUni3.textContent = uni3;
    let resPass3 = document.getElementById("resPass3");
    resPass3.textContent = pass3;
    let resSkill1 = document.getElementById("resSkill1");
    resSkill1.textContent = skill1;
    let resSkill2 = document.getElementById("resSkill2");
    resSkill2.textContent = skill2;
    let resSkill3 = document.getElementById("resSkill3");
    resSkill3.textContent = skill3;
    let resLang = document.getElementById("resLang");
    resLang.textContent = inp_lang;
    let resLang2 = document.getElementById("resLang2");
    resLang2.textContent = inp_lang2;
    let resCompny = document.getElementById("resCompny");
    resCompny.textContent = company;
    let resLoc = document.getElementById("resLoc");
    resLoc.textContent = comLocation;
    let resJobTitle = document.getElementById("resJobTitle");
    resJobTitle.textContent = jobTitle;
    let resStyear = document.getElementById("resStyear");
    resStyear.textContent = stYear;
    let resEndyear = document.getElementById("resEndyear");
    resEndyear.textContent = endYear;
    let resAchv1 = document.getElementById("resAchv1");
    resAchv1.textContent = achv1;
    let resAchv2 = document.getElementById("resAchv2");
    resAchv2.textContent = achv2;
    let resAchv3 = document.getElementById("resAchv3");
    resAchv3.textContent = achv3;
    let resImg = document.getElementById("resImg");
    resImg.src = picture;
});
//Print Button
let print_btn = document.getElementById("print_btn");
print_btn?.addEventListener("click", () => {
    window.print();
});
//Edit Button
let edit_btn = document.getElementById("edit_btn");
edit_btn?.addEventListener("click", () => {
    window.history.back();
});
//Shareable Link Button
let share_btn = document.getElementById("share_btn");
let anc = document.getElementById("anc");
let userName;
if (mName) {
    userName = mName.toLowerCase().replace(/\s+/g, "-");
}
else {
    userName = "user";
}
let baseUrl = "http://127.0.0.1:5500/Resume/resume.html";
let uniqueUrl = `${baseUrl}?/${mName}`;
share_btn?.addEventListener("click", () => {
    anc?.setAttribute("href", uniqueUrl);
});
//Copy Link Button
let copy_btn = document.getElementById("copy_btn");
copy_btn?.addEventListener("click", () => {
    navigator.clipboard.writeText(uniqueUrl).then(() => {
        alert("Copy Successfull");
    });
});

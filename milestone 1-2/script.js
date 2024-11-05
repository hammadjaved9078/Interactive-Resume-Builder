"use strict";
//Contact Section
let cont_section = document.getElementById("cont");
let cont_btn = document.getElementById("cont_btn");
cont_btn === null || cont_btn === void 0 ? void 0 : cont_btn.addEventListener("click", () => {
    cont_section === null || cont_section === void 0 ? void 0 : cont_section.classList.toggle("hide");
});
//Education Section
let educ_section = document.getElementById("educ");
let educ_btn = document.getElementById("educ_btn");
educ_btn === null || educ_btn === void 0 ? void 0 : educ_btn.addEventListener("click", () => {
    educ_section.classList.toggle("hide");
});
// Expertise Section
let expt_section = document.getElementById("expt");
let expt_btn = document.getElementById("expt_btn");
expt_btn === null || expt_btn === void 0 ? void 0 : expt_btn.addEventListener("click", () => {
    expt_section.classList.toggle("hide");
});
// Language Section
let lang_section = document.getElementById("lang");
let lang_btn = document.getElementById("lang_btn");
lang_btn === null || lang_btn === void 0 ? void 0 : lang_btn.addEventListener("click", () => {
    lang_section.classList.toggle("hide");
});
// Reference Section
let ref_section = document.getElementById("ref");
let ref_btn = document.getElementById("ref_btn");
ref_btn === null || ref_btn === void 0 ? void 0 : ref_btn.addEventListener("click", () => {
    ref_section.classList.toggle("hide");
});
// Experience Section
let exp_section = document.getElementById("exp");
let exp_btn = document.getElementById("experience_btn");
exp_btn === null || exp_btn === void 0 ? void 0 : exp_btn.addEventListener("click", () => {
    exp_section.classList.toggle("hide");
});
//Print Button
let print_btn = document.getElementById("print_btn");
print_btn === null || print_btn === void 0 ? void 0 : print_btn.addEventListener("click", () => {
    window.print();
});

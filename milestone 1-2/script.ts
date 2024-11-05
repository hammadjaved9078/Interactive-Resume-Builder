//Contact Section

let cont_section = document.getElementById("cont");
let cont_btn = document.getElementById("cont_btn");
cont_btn?.addEventListener("click", () => {
  cont_section?.classList.toggle("hide");
});

//Education Section

let educ_section = document.getElementById("educ");
let educ_btn = document.getElementById("educ_btn");
educ_btn?.addEventListener("click", () => {
  educ_section!.classList.toggle("hide");
});
// Expertise Section

let expt_section = document.getElementById("expt");
let expt_btn = document.getElementById("expt_btn");

expt_btn?.addEventListener("click", () => {
  expt_section!.classList.toggle("hide");
});

// Language Section

let lang_section = document.getElementById("lang");
let lang_btn = document.getElementById("lang_btn");

lang_btn?.addEventListener("click", () => {
  lang_section!.classList.toggle("hide");
});

// Reference Section

let ref_section = document.getElementById("ref");
let ref_btn = document.getElementById("ref_btn");

ref_btn?.addEventListener("click", () => {
  ref_section!.classList.toggle("hide");
});
// Experience Section
let exp_section = document.getElementById("exp");
let exp_btn = document.getElementById("experience_btn");

exp_btn?.addEventListener("click", () => {
  exp_section!.classList.toggle("hide");
});

//Print Button

let print_btn = document.getElementById("print_btn");

print_btn?.addEventListener("click", () => {
  window.print();
});

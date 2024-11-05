window.addEventListener("load", () => {
  let name = localStorage.getItem("name");
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

  let resName: any = document.getElementById("resName");
  resName.textContent = name;

  let resDesig: any = document.getElementById("resDesig");
  resDesig.textContent = desig;

  let resPhone: any = document.getElementById("resPhone");
  resPhone.textContent = phone;

  let resEmail: any = document.getElementById("resEmail");
  resEmail.textContent = email;

  let resAdd: any = document.getElementById("resAdd");
  resAdd.textContent = add;

  let resDeg: any = document.getElementById("resDeg");
  resDeg.textContent = deg;

  let resUni: any = document.getElementById("resUni");
  resUni.textContent = uni;

  let resPass: any = document.getElementById("resPass");
  resPass.textContent = pass1;

  let resDeg2: any = document.getElementById("resDeg2");
  resDeg2.textContent = deg2;

  let resUni2: any = document.getElementById("resUni2");
  resUni2.textContent = uni2;

  let resPass2: any = document.getElementById("resPass2");
  resPass2.textContent = pass2;

  let resDeg3: any = document.getElementById("resDeg3");
  resDeg3.textContent = deg3;

  let resUni3: any = document.getElementById("resUni3");
  resUni3.textContent = uni3;

  let resPass3: any = document.getElementById("resPass3");
  resPass3.textContent = pass3;

  let resSkill1: any = document.getElementById("resSkill1");
  resSkill1.textContent = skill1;

  let resSkill2: any = document.getElementById("resSkill2");
  resSkill2.textContent = skill2;

  let resSkill3: any = document.getElementById("resSkill3");
  resSkill3.textContent = skill3;

  let resLang: any = document.getElementById("resLang");
  resLang.textContent = inp_lang;

  let resLang2: any = document.getElementById("resLang2");
  resLang2.textContent = inp_lang2;

  let resCompny: any = document.getElementById("resCompny");
  resCompny.textContent = company;

  let resLoc: any = document.getElementById("resLoc");
  resLoc.textContent = comLocation;

  let resJobTitle: any = document.getElementById("resJobTitle");
  resJobTitle.textContent = jobTitle;

  let resStyear: any = document.getElementById("resStyear");
  resStyear.textContent = stYear;

  let resEndyear: any = document.getElementById("resEndyear");
  resEndyear.textContent = endYear;

  let resAchv1: any = document.getElementById("resAchv1");
  resAchv1.textContent = achv1;

  let resAchv2: any = document.getElementById("resAchv2");
  resAchv2.textContent = achv2;

  let resAchv3: any = document.getElementById("resAchv3");
  resAchv3.textContent = achv3;

  let resImg: any = document.getElementById("resImg");
  resImg.src = picture;
});

//Print Button

let print_btn = document.getElementById("print_btn");

print_btn?.addEventListener("click", () => {
  window.print();
});

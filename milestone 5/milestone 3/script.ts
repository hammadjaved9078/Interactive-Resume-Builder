let myName: any = document.getElementById("name");
let desig: any = document.getElementById("desig");
let phone: any = document.getElementById("phone");
let email: any = document.getElementById("email");
let add: any = document.getElementById("add");
let deg: any = document.getElementById("deg");
let uni: any = document.getElementById("uni");
let pass1: any = document.getElementById("pass1");
let deg2: any = document.getElementById("deg2");
let uni2: any = document.getElementById("uni2");
let pass2: any = document.getElementById("pass2");
let deg3: any = document.getElementById("deg3");
let uni3: any = document.getElementById("uni3");
let pass3: any = document.getElementById("pass3");
let skill1: any = document.getElementById("skill1");
let skill2: any = document.getElementById("skill2");
let skill3: any = document.getElementById("skill3");
let inp_lang: any = document.getElementById("inp_lang");
let inp_lang2: any = document.getElementById("inp_lang2");
let company: any = document.getElementById("company");
let comLocation: any = document.getElementById("comLocation");
let jobTitle: any = document.getElementById("jobTitle");
let stYear: any = document.getElementById("stYear");
let endYear: any = document.getElementById("endYear");
let achv1: any = document.getElementById("achv1");
let achv2: any = document.getElementById("achv2");
let achv3: any = document.getElementById("achv3");
let pic: any = document.getElementById("pic");

let submitBtn = document.getElementById("submitBtn");
let form = document.getElementById("form");

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  localStorage.setItem("name", myName.value);
  localStorage.setItem("desig", desig.value);
  localStorage.setItem("phone", phone.value);
  localStorage.setItem("email", email.value);
  localStorage.setItem("add", add.value);
  localStorage.setItem("deg", deg.value);
  localStorage.setItem("uni", uni.value);
  localStorage.setItem("pass1", pass1.value);
  localStorage.setItem("deg2", deg2.value);
  localStorage.setItem("uni2", uni2.value);
  localStorage.setItem("pass2", pass2.value);
  localStorage.setItem("deg3", deg3.value);
  localStorage.setItem("uni3", uni3.value);
  localStorage.setItem("pass3", pass3.value);
  localStorage.setItem("skill1", skill1.value);
  localStorage.setItem("skill2", skill2.value);
  localStorage.setItem("skill3", skill3.value);
  localStorage.setItem("inp_lang", inp_lang.value);
  localStorage.setItem("inp_lang2", inp_lang2.value);
  localStorage.setItem("company", company.value);
  localStorage.setItem("comLocation", comLocation.value);
  localStorage.setItem("jobTitle", jobTitle.value);
  localStorage.setItem("stYear", stYear.value);
  localStorage.setItem("endYear", endYear.value);
  localStorage.setItem("achv1", achv1.value);
  localStorage.setItem("achv2", achv2.value);
  localStorage.setItem("achv3", achv3.value);

  if (pic.files && pic.files[0]) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      let textImg: any = reader.result;
      localStorage.setItem("profile_pic", textImg);
    });
    reader.readAsDataURL(pic.files[0]);
  }

  window.location.href = "./Resume/resume.html";
});

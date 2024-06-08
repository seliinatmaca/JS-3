const buton = document.querySelector("#buton");
const veriInput = document.querySelector("#veri");
const select = document.querySelector("select");
const checkbox = document.querySelector("#check");

//eventListener > olay izleyici
//1 - hangi olayı izleyecek
//2- olay gerçekleşince çalışacak fonk.
// buton.addEventListener("click", alertVer);

// function alertVer() {
//   alert("Butona Tıklandı");
// }

//iputları izleme yol-1
veriInput.addEventListener("change", isimYaz);

function isimYaz(event) {
  console.log(event);
  alert(event.target.value);
}

//inputları izleme yol-2
buton.addEventListener("click", ismiAl);
function ismiAl() {
  alert(veriInput.value);
}

//event listener 2.yol

select.addEventListener("change", (e) => {
  alert(e.target.value);
});

//checkbox kontrol etme
checkbox.addEventListener("change", (e) => {
  console.dir(e.target.checked);
  const izinVarMi = e.target.checked;

  if (izinVarMi) {
    buton.disabled = false;
  } else {
    buton.disabled = true;
  }
});

//onclick, onmouseenter, onmouseout, onload, onblur, onfocus,onchange

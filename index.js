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

//inputları izleme yol-1
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

//! LOCAL STORAGE >
//BİLMEMİZ GEREKEN 2 FARKLI METHOD VAR
//Örneğin localstorage içerisine veri eklemek istiyorsak

//! Local Storage >> veriler biz silene kadar durur
//! Session Storage >> veriler sekme kapatınca silini

//setItem(anahtar,değer). >> veriyi depolama alanına koyar

localStorage.setItem("deneme", "denemelik veri");

//veri çekeceksem >>>yalnızca anahtar >> veriyi alıp getirir
const localVeri = localStorage.getItem("deneme");
console.log(localVeri);

//bu da demek oluyor ki istediğim veriyi setıtem ile ekleyebiliyorum
//ve istediğim zaman da getıtem metodu ile çekebiliyorum

//removeItem() denemelik verinin anhatar değerini silmek olacak
localStorage.removeItem("deneme");

//her girdiğinde ismini vermek istiyorsak localstorage kaydedriz.

//projeye dön
//15.satır inputun içerisine
id = "name-input";

//javada
const nameInput = document.querySelector("#name-input");

// 3- kullnıcın girdiği ismi tarayıca depolamasında saklama
nameInput.addEventListener("change", (e) => {
  console.log(e.target.value);
  //şimdi localstorage ekle
  localStorage.setItem("name", e.target.value);
});

//4- tarayıcadan ismi alma
const username = localStorage.getItem("name") || "";
//ekelemk için
nameInput.value = username;

//javasc. hemde java frameworklarınde çokça kullanılan bir kelime var this anlamına gelen
//!THIS
//bit objenin içerisinde kendi değerlerine erişmek için kullanılır
const car = {
  marka: "BMW",
  model: "M5",
  year: 2016,
  start: function () {
    return this.model + " " + this.marka + " çalıştı...";
    return `${this.marka}, ${this.model} çalıştı...`;
  },
};

console.log(car.start());

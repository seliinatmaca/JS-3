const buttons = document.querySelectorAll("button");

const resultEl = document.getElementById("result");

const playerScoreEl = document.getElementById("user-score");

const computerScoreEl = document.getElementById("computer-score");

let playerScore = 0; //: Oyuncunun ve bilgisayarın skorlarını saklamak için değişkenler oluşturur ve başlangıçta her ikisi de 0 olarak ayarlanır.
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const result = playRound(button.id, computerPlay());
    resultEl.textContent = result;
  });
}); //Tıklanan düğmenin kimliğini (button.id) ve bilgisayarın rastgele seçtiği hamleyi (computerPlay()) kullanarak bir tur oynar ve sonucu result değişkenine atar.

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
} //Bilgisayarın rastgele bir hamle yapmasını sağlar. "taş", "kağıt" veya "makas" gibi rastgele bir seçim döndürür.

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    playerScoreEl.textContent = playerScore;
    return "You win! " + playerSelection + " beats " + computerSelection;
  } else {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    return "You lose! " + computerSelection + " beats " + playerSelection;
  }
}
//Bir tur oynamak için bir fonksiyon tanımlar. Oyuncunun seçimini ve bilgisayarın seçimini alır ve kazananı belirler. Skorları günceller ve sonucu döndürür.

("use strict"); //katı mod javascprittin bize getirdiği yeni kurallar getiriyor.b
//bizim yazdığımız kodlara yeni kodlara yeni kurallar ekliyor

//değişken tanımlama
//yasak
//x = 100;
//olması gereken
const x = 100;

function islemYap() {
  // "use strict";
  // z = 40;
}
islemYap();

//aynı isme sahip parametreler yasak

//function deneme(a, a) {
//aynı iki parametreyi yazamıyoruz
//}

// değişken veya fonksiyon isimlerken kullanamıyoruz
// yasaklı kelimleer
//public > static > package > interface kullanamıyoruz

//let public;

//proje de dikktsizlikten kkaynaklı hataları en aza indirmemize yarayan ve kurallar koyan yazım stili

//KATI MOD BU KADAR

//!ECMASCRIPT (ES 1 ) > ilk sürüm 1997
//Javasc.köklü bir dil 1997 de ilk versiyonu çıkmış,daha sonra güncellenerek gelişmiş bugun
//ki nıktaya gelmiş.java.versiyonlarına ecmasc.deniyor

// ES 1 > ES 2 >ES 3 > ES 4 >ES 5> ES 6 ---2015 de çıkmış.

let text =
  "Selamlar \
Merhaba \
";
let dizi = ["a", "b"];
console.log(text[4]);

console.log(Array.isArray(text));

console.log(Array.isArray(dizi));

//Spread Operator

let dizi2 = [1, 2, 3, 4, 5, 6, 7];

console.log(Math.max(3, 5, 6, 9));

console.log(Math.max(dizi)); //sayı istiyor dizi üzerinde işlem yapamıyor peki nasıl

console.log(Math.max(...dizi2)); //spread operatörü çalışıyor

function topla(a, b, c, d, e, f, g) {
  return a + b + c + d + e + f + g;
}

//topla([1,3,5])
topla(...dizi2);
console.log(topla(...dizi2));

//!OBJE METOTLARI

const person = {
  name: "selin",
  lastname: "atmaca",
  yas: 10,
};

//entries ve values

//entries----anahtar ve değer çiftlerini verir
console.log(Object.entries(person)); //bana bir dizi var.anahatar ve değer çiftlerinin olduğu ve bunların herbirine dizi gibi davrandığı donuç çıkardı bana karşıma

//values ----sadece değerler
console.log(Object.values(person));

//! ASYNC > Gerçekleşmesi belirli bir zaman alan işlemler >Ağ istekleri >> veri tabanı işlemleri

//normla şartlarda java senkron bi dildir.sırayla devam edir.basit bir clg gelir ama ağ isteği anaında olmaz bu işlemlere asenlron işlemler diyoruz.
function ekranaBas() {
  console.log("Adım 2");
}

console.log("Adım 1");
//bir kere
setTimeout(ekranaBas, 2000);

//belirli bir zaman aralığında
setInterval(ekranaBas, 2000);

console.log("Adım 3");

//!PROMISE >>YA BAŞARILI OLUR YA BAŞARISIZ OLUR HATA DÖNDÜRÜR. THEN CATCH
//ATTIĞIMIZ İSTEK BİZE PROMİSE ADINI VERDİĞİMİZ SONUÇ DÖNDÜRÜR.BAŞARILI OLUR VERİYİ DATAYI VERİR
//HATA VERİR ERROR MESAJI DÖNDÜRÜR(RESOLVE, REJECT).BAŞARILI VEYA BAŞARILI OLMADIĞI BELLİ OLMAYAN İSTEKLERDE .THEN VEYA .CATCH İLE ELE ALMALIYIZ.İÇLERİNE DE ARROW FUNCTION OLUŞTURUYORUZ.

function veriyiCek() {
  console.log("veri başarıyla çekildi");
}
setTimeout(veriyiCek, 2000);
//.then((data) => {})
//.catch((error) => {});

//setTimeout fonksiyonu native olarak bir Promise döndürmez, bu nedenle then ve catch metotlarını kullanamazsınız. Bu hatayı düzeltmek için setTimeout fonksiyonunu bir Promise içinde sarmanız gerekir.
function veriyiCek() {
  console.log("veri başarıyla çekildi");
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms)); //delay Fonksiyonu: Bu fonksiyon, belirli bir süre sonra (milisaniye cinsinden) resolve edilen bir Promise döndürür. setTimeout fonksiyonu bu süre geçtikten sonra resolve fonksiyonunu çağırır.
}

delay(2000) // 2000 milisaniye (2 saniye) bekle
  .then(veriyiCek) // Süre bitince veriyiCek fonksiyonunu çağır
  .catch((error) => {
    console.error("Bir hata oluştu", error);
  });

//then ve catch metotlarını kullanmak için, evet, genellikle bir Promise ile çalışmanız gerekecek. Promise'ler, JavaScript'te asenkron işlemleri daha yönetilebilir ve okunabilir hale getirmek için kullanılan bir yapıdır. Promise'lerle nasıl çalışılacağını daha iyi anlamak için farklı örnekler vereyim.

function veriyiCek1() {
  return fetch("https://jsonplaceholder.typicode.com/posts/1") // Örnek bir API
    .then((response) => response.json());
}
// fetch ile bir GET isteği gönderiyoruz
// Yanıtı JSON olarak döndürüyoruz
// (    .then(response => {
//         console.log('Response nesnesi:', response); // response nesnesini konsola yazdırır
//         if (!response.ok) { //response.ok, Response nesnesinin bir özelliğidir ve HTTP yanıtının başarılı olup olmadığını belirtir. Başarılı bir yanıt, HTTP durum kodunun 200 ile 299 arasında olduğu anlamına gelir. Bu özellik true ise yanıt başarılı, false ise yanıt başarısızdır.
//           // Yanıt başarılı değilse hata mesajı ile Promise.reject çağrılır
//           return Promise.reject(`HTTP hata durumu: ${response.status}`);
//         }
//         return response.json(); // Yanıtı JSON formatına dönüştürür
//       });
//   }
// }
// )

// veriyiCek fonksiyonunu çağırıyoruz
veriyiCek1()
  .then((data) => {
    // Veri başarıyla çekildiğinde konsola yazdırıyoruz
    console.log("Veri başarıyla çekildi:", data);
  })
  .catch((error) => {
    // Hata oluşursa hatayı yakalayıp konsola yazdırıyoruz
    console.error("Bir hata oluştu:", error);
  });

//Template Literal Kullanımı

//let isim = "Ahmet";
//let mesaj = `Merhaba, ${isim}! Nasılsın?`;
//console.log(mesaj); // Çıktı: Merhaba, Ahmet! Nasılsın?

//Geleneksel String Birleştirme
// let isim = "Ahmet";
// let mesaj = "Merhaba, " + isim + "! Nasılsın?";
// console.log(mesaj); // Çıktı: Merhaba, Ahmet! Nasılsın?

function getData(data) {
  return new Promise((resolve, reject) => {
    console.log("veri çekilmeye başlandı");

    if (data) {
      resolve("veri başarıyla alındı");
    } else {
      reject("hata oluştu");
    }
  });
}
// İşlev, bir veri almak için tasarlanmıştır. Eğer gelen data değeri varsa, işlev başarıyla alındığını belirten bir mesajla resolve ile sonuç döner. Eğer data değeri yoksa, bir hata olduğunu belirten bir mesajla reject ile hata döner.

// İşte adım adım açıklama:

// getData(data): getData adında bir fonksiyon tanımlanır. Bu fonksiyon, bir data parametresi alır.

// new Promise((resolve, reject) => {...}): Bu, bir Promise döndüren bir anonim fonksiyon tanımlar. Bu fonksiyon, iki parametre alır: resolve ve reject. resolve, başarı durumunda sonucu döndürmek için kullanılır; reject, bir hata durumunda hata mesajını döndürmek için kullanılır.

// console.log("veri çekilmeye başlandı");: Bu satır, veri çekilmeye başlandığını belirten bir mesajı konsola yazdırır. Bu, işlemin başladığını gösterir.

// if (data) {...} else {...}: Bu satırlar, gelen data değerini kontrol eder. Eğer data varsa (yani true ise), resolve çağrılır ve "veri başarıyla alındı" mesajı ile birlikte bir sonuç döndürülür. Eğer data yoksa (yani false ise), reject çağrılır ve "hata oluştu" mesajı ile birlikte bir hata döndürülür.

// return new Promise(...): Fonksiyon, oluşturulan Promise'i döndürür. Bu Promise, içindeki işlem tamamlandığında sonucu veya hatayı döndürür.

// Bu kod, bir asenkron işlemi simüle eder ve asenkron işlem tamamlandığında bir sonuç veya hata döndürür. Bu tür fonksiyonlar genellikle ağ çağrıları veya dosya işlemleri gibi uzun süren işlemlerle kullanılır.

// THEN > CATCH
getData(true)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    alert(error);
  });

// ASYNC > AWAİT. DİĞER YÖNTEM >>>>>>

async function datayıCek() {
  const gelenData = await getData(true);
  console.log(gelenData);
}

datayıCek();

async function datayıCek() {
  try {
    const gelenData = await getData();
    console.log(gelenData);
  } catch (err) {
    alert(err);
  }
}

datayıCek();

//! DOM > JAVASC.ÜZERİNDEN İŞLEMLER YAPABİLECEĞİMİZ İŞLEMLER YAPABİLECEĞİMİZ HALİNE DOCUMENT OBJECT MODEL DEMİŞLER.

//YAPAILACAK HER MÜDAHALE DOCUMENT OBJESİNDEN GEÇİYOR.HTML YAPISNIB TAMAMI DOCUMENT OBJESİNİN İÇERİSİNDE.
//BÜTÜN ELEMANLARA ERİŞİLEBİLİYORUZ.İSTEDİĞİM GİNİ MANİPÜLE EDEBİLRİİR.

console.log(document);
// DOM Methodları
const baslik = document.getElementById("baslik");
const paragraf = document.getElementById("paragraf");

console.dir(baslik);

baslik.innerText = "<b>JS</b> tarafından değiştirildi.";
paragraf.innerText = "Burayı da js den yönetiyorum";

paragraf.innerHTML = "Burayı da  <b>JS</b> den yönetiyorum";

//DOM elemanlarını çekme methodları
// getElementById > id ye göre çeker
document.getElementById("baslik");

//getElementsByClassName
const listeElemanları = document.getElementsByClassName("list");
console.log(listeElemanları);

//getElementsByTagName > o etikete sahip olan bütün elemanlar
const liste = document.getElementsByTagName("ul");
console.log(liste);
console.log(liste[0]);

//querySelector > yukarıda ki üç methodunda işini yapar
const buton = document.querySelector("button");
console.log(buton);

const butonlar = document.querySelectorAll("button");
console.log(butonlar);

//classlist > elemanın classlarından oluşna bir dizi
const etütSınıfı = document.querySelector(".baslik");

console.log(etütSınıfı.classList);

// classlist.add > yeni class ekler
etütSınıfı.classList.add("kirmizi");

// classlist.remove > varolan clası çıkarır
etütSınıfı.classList.remove("buyuk");

//classlist.toggle > verilen class varsa çıkarır yoksa ekler
etütSınıfı.classList.toggle("kirmizi");
etütSınıfı.classList.toggle("kirmizi");

//style üzerinde işlem yapma
const yeniButon = document.querySelector(".yesilbuton");

console.log(yeniButon.style);

yeniButon.style.backgroundColor = "red";
yeniButon.style.padding = "10px 20px";
yeniButon.style.color = "white";

//js de html elemanları ouşturma
//createElement > html elemanı oluşturma
const item = document.createElement("li");
item.innerText = "Adım 5";
liste[0].appendChild(item);

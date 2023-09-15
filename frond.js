const form = document.querySelector (".form")
const ID = document.querySelector (".ID")
const AD = document.querySelector (".AD")
const SOYAD = document.querySelector (".SOYAD")
const PAROL = document.querySelector (".PAROL")
const ADRESS = document.querySelector (".ADRESS")

form.addEventListener ("submit", function (e) {

    e.preventDefault ();

        let obj = {};
        obj.ID = ID.value;
        obj.AD = AD.value;
        obj.SOYAD = SOYAD.value;
        obj.PAROL = PAROL.value;
        obj.ADRESS = ADRESS.value;
      
        console.log (obj);
})
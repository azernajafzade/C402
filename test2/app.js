const form = document.querySelector (".form")
const ad = document.querySelector (".ad")
const soyad = document.querySelector(".soyad")
const Email = document.querySelector (".Email")
const Hobbiler = document.querySelector (".Hobbiler")
const Şifrə = document.querySelector (".Şifrə")
const data = document.querySelector (".data")

let database = [
{
    ad:"Azer",
    soyad:"Necefzade",
},
{
    ad:"Aqil",
    soyad:"Necefov",
},
];

for (let i = 0; i < database.length; i++) {
    console.log(database[i]);
    // console.log("Ad:", database[i].ad);
    // console.log("Soyad:", database[i].soyad);
  }


   form.addEventListener ("submit", function (e) {

        e.preventDefault ();
        if (ad.value.length > 3  && soyad.value.length > 3) {

            let obj = {};
            obj.ad = ad.value;
            obj.soyad = soyad.value;

            // obj.Email = Email.value;
            // obj.Şifrə = Şifrə.value;
            // obj.Hobbiler = Hobbiler.value;


            database.push (obj);
            console.log (database);


            // her defe inputlar daxil edildikde ici temizlensin.

           ad.value="";
           soyad.value ="";

           Email.value="";
           Hobbiler.value="";
           Şifrə.value="";


         }else{

            console.log ("ugursuz emeliyyat");
            alert ("ad ve ya soyad tam deil");

            ad.value="";
            soyad.value= "";

            Email.value="";
            Hobbiler.value="";
            Şifrə.value="";

          }

})



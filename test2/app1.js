
// eyni zamanda 2 reqemin toplanmasi, cixilmas, vurulmasi ve bolunme emeliyyatinin edilmesi. (1 funksiya ile )

function performOperations (num1, num2) {

const toplama = num1 + num2;
const cixma = num1 - num2;
const vurma = num1 * num2;
const bolme = num1 / num2;

 console.log ("toplama: "+toplama);
 console.log ("cixma: "+cixma);
 console.log ("vurma: "+vurma);
 console.log ("bolme: "+bolme);
}

performOperations(20, 5);



// ededin tek ve ya cut olmasini yoxlamaq ucun funksiya


function number (x){
    if ( x%2===0 )
    console.log("eded cutdur");
else 
console.log ("tekdir");
}


number (7)

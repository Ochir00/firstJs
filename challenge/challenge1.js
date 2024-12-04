let text = "Hello world! I am Fullstack Developer";
let textarray = text.split(" ");
// console.log("text", text);
// console.log("text array", textarray);
let maxlenhth = "" ;
textarray.map((str) => {
    if(str.length > maxlenhth.length) {
        maxlenhth =str;
    }
})
// console.log(maxlenhth);

//challenge 2
let bb = "";

textarray.map((i) => {
    if (i == textarray[0]) {
        bb = bb + " " + textarray[textarray.length-1];
    }
    else if (i == textarray[textarray.length-1]) {
        bb = bb + " " + textarray[0];
    } else {
        bb += " " + i ;
    }
});
// console.log (bb);
let replaced = text.replace( textarray[textarray.length-1] , textarray[0] ); // gnts useg solin
let replaced1 = replaced.replace( textarray[0],textarray[textarray.length-1] );
console.log(replaced1);



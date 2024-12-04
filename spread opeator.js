let number = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];
let number1 = [ 5, 6, 7, 8, 9, 10, 11, 12];
let allnumber1 = [...number, ...number1];
let max = allnumber1.sort((a, b)=>{
    if( a < b ){
        return 1;
    }else {
        return -1;
    }
})
console.log( max[max.lenght-1 ]);

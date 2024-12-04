const names = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 25 },
    { name: "John", age: 30 },
    { name: "Jane", age: 35 },
    { name: "Joe", age: 40 },
  ];
  const name2 = [
    { name: "Andy", age: 20 },
    { name: "Bilguun", age: 25 },
    { name: "Jargalmaa", age: 30 },
    { name: "Anguuch", age: 35 },
    { name: "Mah", age: 40 },
    { name: "Chinguun", age: 45 },
  ];
  let allname = [...names, ...name2];
  let allname1 = allname.sort((a, b)=>{
    if( a.name < b.name ){
        return -1;
    }else {
        return 1;
    }
});
    //   console.log(allname1);
    let findname = allname1.find((usertag)=>{
        return usertag.name[0] === "C";
    })
    console.log(findname);
    let manAge = allname.find((usertag) => {
        return usertag.age >= 25;
    })
    console.log(manAge);
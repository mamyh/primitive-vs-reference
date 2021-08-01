var a = 5;
var b = a;
a = 7;
console.log(a);
console.log(b);
var arr = ['shakib', 'tamim'];
var arr1 = arr;
arr.push('mahmudullah');//change or mutate;
arr = [];//assignment

console.log(arr);
console.log(arr1);

//immutably=change na kore 
var language = {
    name: "javascript",
    estd: 1995,
    libraries: ['react', 'vue', 'jquery']
}
var language2 = _.cloneDeep(language)// { ...language };//one level reference copy
language.founder = "Brender Erich";
language.libraries.push('angular');
console.log(language);
console.log(language2)

var sa = 'sakib';
console.dir(sa);
var sa1 = new String('sakib');
console.log(sa1);

// primitive values can not be mutable
var mutable = 'sakib';
mutable.test = 'tamim' //just ignore this line ,there will be no error
console.log(mutable);

// pass by reference /value 
let pass = 1;
let change = (val) => {
    console.log(val);//1
    val = 2;
    console.log(pass);//1
    console.log(val);//2
}
change(pass);//seems like pass by value
console.log(pass);//1
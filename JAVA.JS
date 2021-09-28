const seria = 'ab34344141' .substring(0,2);
const passNumber = 'ab4355674'.substr(2);

const data = 'Farux#Texron#Suxrob#Asad';

const names = data.split('#');

names.forEach((item,index) => {
    if(item.toLocaleLowerCase() === 'texron'){
        console.log(index);
    }
})
console.log(names);

//  bu teg chiziqlarni olib tashidi
'884-55-21'.replaceAll('-','');
"884 55 21"
 
// join
// replace
// replaceAll
// toLocaleLowerCase
// toUppercase
// substring


const carsString = 'matiz;nexiya;kaptiva;malibu;lexus'

const cars = carsString.replaceAll('nexiya','mers').replaceAll('kaptiva','hunda').split(';');

console.log(cars);



cars.forEach((item,index) =>{
    if(item.toLocaleLowerCase() ==='kaptiva'){
        console.log(index);
    }
})



const students = 'toxir davron sherzot rovshan doston moxir dinor'.toLocaleLowerCase();

const studentsArry = students.split(' ');

studentsArry.forEach((item) => {
    if(item.startsWith('d')){
        console.log(item);
    }
})
studentsArry.forEach((item) => {
    if(item.endsWith('n')){
        console.log(item);
    }
})

// bu raqamlarni qoldiqlarini neshta xoxlasak qilib beradi
const raqam = (10.333333).toFixed(2); 
console.log(raqam);

// strin raqamlar o'tqazadiganmetidlar metidlar
// Number("10") => 10
// +"10" => 10
// perseInt("10.333") => 10
// parseFloat("10.333") => 10.333


const today = new Date();

console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());
console.log(today.getDay());
console.log(today.getMonth());
console.log(today.getFullYear());

const days = ['yakshanba','Seshnba','chorshanba','payshanba','juma','shanba','yakshanba']

console.log(`bugungi kuni: ${days[today.getDay()]}`);
console.log(`vaqt: ${today.getHours()}:${today.getMinutes()}: ${today.getSeconds()}`);

const hour = today.getHours();

if (hour - 12 > 0) {
    console.log(`time ${hour} Am`);
} else {
    console.log(`Time ${hour - 12} pm`);
}



// function Person(name,surname,age) {
//     this.Name=name;
//     this.Surname=surname;
//     this.Age= age;
// }

// let Hesen = new Person('Hesen', 'Eliyev', 24);



// function CustomMap() {
//     this.keys = [];
//     this.values = {};

//     this.Add=function (key ,value) {
//         if(this.keys.indexOf(key)==-1){
//             this.keys.push(key); 
//         }
//         this.values[key]=value;
//     }

//     this.Remove = function (key) {
//         let index= this.keys.indexOf(key);
//         this.keys.splice(index,1);
//     }
// }


// let map= new CustomMap();
// map.Add('list1',['a','b']);
// map.Add('list2',['d','j']);
// map.Add('list1',['z','f']);

// console.log(map);


// function Car(model,color,engine,fuel,maxspeed) {
//     this.Model=model;
//     this.Color = color;
//     this.Engine= engine;
//     this.Fuel= fuel;
//     this.Maxspeed=maxspeed;
//     this.IsSportCar = function () { 
//         if(this.Maxspeed > 180){
//             console.log("Is sport car");
//         }else{
//             console.log("Is not sport car");
//         }
//     }

// }

// let BMW= new Car('BMW', 'White', '2.5','Electric',200);
// let Mercedes= new Car('Mercedes', 'White', '2.4','Electric',180);


// BMW.IsSportCar();


// for (const key in BMW) {
//     if (BMW.hasOwnProperty(key)) {
//         const element= BMW[key];
//         console.log( element);   
//     }
// }




//
// function CustomMap() {
//     this.keys = [];
//     this.values = {};

//     this.Add=function (key ,value) {
//         if(this.keys.indexOf(key)==-1){
//             this.keys.push(key); 
//         }
//         this.values[key]=value;
//     }

//     this.AddElement = function (key,element) {
//         if(this.keys.indexOf(key)==-1){
//             this.keys.push(key); 
//         }
//         this.values[key].push(element);
//     }

//     this.Remove = function (key) {
//         let index= this.keys.indexOf(key);
//         this.keys.splice(index,1);
//     }
// }



// let list1=document.querySelectorAll('.list1');
// let list2=document.querySelectorAll('.list2');

// let map= new CustomMap();

// list1Arr = [];
// listKey=list1[0].classList[0];

// list1.forEach(e => {
//     list1Arr.push(e.innerText);
// });


// list2Arr = [];
// list2Key=list2[0].classList[0];

// list2.forEach(e => {
//     list2Arr.push(e.innerText);
// });


// map.Add(listKey,list1Arr);
// map.Add(list2Key,list2Arr);
// map.AddElement(list2Key,'z');

// console.log(map);


//rectangle
// function Rectangle(x,y) {
//     this.X=x;
//     this.Y = y;
//     this.Area = function () { 
//         console.log("Area : " + this.X * this.Y); 
//     }
//     this.Perimetr= function () {
//         console.log("Perimetr : " +(this.X + this.Y)*2); 
//     }
// }

// let rectangle= new Rectangle(3,4);
// rectangle.Area();
// rectangle.Perimetr();


//shopping
// function Product(price,name,color,picture) {
//     if(price>=0){
//       this.Price=price;  
//     }
//     this.Color = color;
//     this.Name= name;
//     this.Picture=picture;
// }

// let Iphone=new Product(2300,'Iphone 11pro' , 'gold', 'asserts/images.jpg');
// let Samsung=new Product(1900,"Samsung S9+" , "black","asserts/Samsung-Galaxy-S9-Plus.jpg");
// let HP=new Product(2000,"HP" , "metallic","asserts/HP.jpg");

// let products=[];

// products.push(Iphone);
// products.push(Samsung);
// products.push(HP);


// let body=document.querySelector('body')

// let container=document.createElement('div');
// container.classList.add('container');
// for (let i = 0; i < products.length; i++) {
//     let content=document.createElement('div');
//     content.classList.add('content');
//     let imgtag=document.createElement('img');
//     imgtag.src=products[i].Picture;
//     let ptag=document.createElement('p');
//     ptag.innerText=products[i].Name + "  " + products[i].Color;
//     let pricetag=document.createElement('p');
//     pricetag.innerText=products[i].Price;

//     content.appendChild(imgtag);
//     content.appendChild(ptag);
//     content.appendChild(pricetag);
//     container.appendChild(content);
// }

// body.appendChild(container);


//dropdown
let obj = {};
let selected = document.querySelector('select');
let input = document.querySelector('input');
let list1 = document.querySelector('.list1');
let list2 = document.querySelector('.list2');

let button = document.querySelector('button');
let list = selected.value;
selected.addEventListener('change', function () {
    list = selected.value;
})
input.addEventListener('keyup', function () {
    if (obj[list] == undefined) {
        obj[list] = [];
    }
    obj[list].push(input.value);
    document.querySelector('.' + list).innerText += " " + input.value;
    console.log(obj);

    //second method
    // document.querySelector('.'+list).innerText += " " + input.value;

    input.value = '';
})

button.addEventListener('click', function () {
    let result = JSON.stringify(obj);
    localStorage.setItem('data', result);
})

button.addEventListener('click', function () {
    let result = localStorage.getItem('data');
    obj = JSON.parse(result);
    backup(obj)
})

function backup(obj) {
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            const element = object[key];
            element.forEach(e => {
                document.querySelector('.' + key).innerText += " " + e;
            });
        }
    }
}
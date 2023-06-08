const wrapper = document.querySelector(".sliderWrapper")
const menuItem = document.querySelectorAll(".menuItem")

const product = [
    {
        id:1,
        title:"AIRFORCE",
        price: 119,
        colors: [
            {
                code:"black",
                img: "./img/blazers1.png",
            },
            {
                code:"darkblue",
                img:",/img/blazers2.png"
            },
        ],
    },
    {
        id:2,
        title:"JORDAN",
        price: 114,
        colors: [
            {
                code:"purple",
                img: "./img/blazers3.png",
            },
            {
                code:"lightgray",
                img:",/img/blazers4.png"
            },
        ],
    },
    {
        id:3,
        title:"BLAZERS",
        price: 125,
        colors: [
            {
                code:"black",
                img: "./img/jordan1.png",
            },
            {
                code:"darkblue",
                img:",/img/jordan2.png"
            },
        ],
    },
    {
        id:4,
        title:"CRATER",
        price: 110,
        colors: [
            {
                code:"red",
                img: "./img/jordan3.png",
            },
            {
                code:"skyblue",
                img:",/img/jordan4.png"
            },
        ],
    },
    {
        id:5,
        title:"HIPIE",
        price: 109,
        colors: [
            {
                code:"yellow",
                img: "./img/jordan5.png",
            },
            {
                code:"pink",
                img:",/img/crater1.png"
            },
        ],
    },
]



let choosenProduct = product[0]


const currentProductImg= document.querySelector(".productImg");
const currentProductTitle= document.querySelector(".productTitle");
const currentProductPrice= document.querySelector(".productPrice");
const currentProductColor= document.querySelectorAll(".color");
const currentProductSizes= document.querySelectorAll(".size");


menuItem.forEach((item,index)=>{
    item.addEventListener("click", ()=>{
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
   //change the choosen the product
   choosenProduct = product[index]

   //change text of currentProduct
currentProductTitle.textContent =choosenProduct.title
currentProductPrice.textContent = "$" + choosenProduct.price
currentProductImg.src=choosenProduct.colors[0].img


//assigning new colors
currentProductColor.forEach((color,index) => {
    color.style.backgroundColor = choosenProduct.colors[index].code
   });
});
});

currentProductColor.forEach((color,index) => {
    color.addEventListener("click", ()=>{
        currentProductImg.src=choosenProduct.colors[index].img 
    });
});

currentProductSizes.forEach((size,index) => {
    size.addEventListener("click", ()=>{
        currentProductSizes.forEach((size) => { 
            size.style.backgroundColor="white"
            size.style.color="black" 
        })
        size.style.backgroundColor="black"
        size.style.color="white"
    });
   
});
const wrapper = document.querySelector(".sliderwrapper");

const menuItems = document.querySelectorAll(".menuItems");

// change color dinamically
const products = [
    {
        id: 1,
        title: "Air Force",
        price: 110,
        colors: [
            {
                code: "gray",
                img: "./img/AIR.png",
            },
            {
                code: "black",
                img: "./img/air_black.png",
            },
        ],
    },

    {
        id: 2,
        title: "Jordan",
        price: 100,
        colors: [
            {
                code: "black",
                img: "./img/JORDAN.png",
            },
            {
                code: "darkblue",
                img: "./img/jordan_blue.png",
            },
        ],
    },

    {
        id: 3,
        title: "Blazer",
        price: 90,
        colors: [
            {
                code: "white",
                img: "./img/blazer.png",
            },
            {
                code: "red",
                img: "./img/blazer_red.png",
            },
        ],
    },

    {
        id: 4,
        title: "Carter",
        price: 130,
        colors: [
            {
                code: "white",
                img: "./img/carter.png",
            },
            {
                code: "black",
                img: "./img/carter_black.png",
            },
        ],
    },

    {
        id: 5,
        title: "Hippie",
        price: 80,
        colors: [
            {
                code: "maroon",
                img: "./img/hippie.png",
            },
            {
                code: "#EDB43A",
                img: "./img/hippie_brown.png",
            },
        ],
    },
]

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".ProTitle");
const currentProductPrice = document.querySelector(".proPrice");
const currentProductColor = document.querySelectorAll(".color");
const currentProductSize = document.querySelectorAll(".size");

menuItems.forEach((item,index )=> {
    item.addEventListener("click", ()=>{
        //change the current slides
        wrapper.style.transform =`translateX(${-100*index}vw)`;

        //change the chosen product
        choosenProduct = products[index]

        //chenge texts of current product
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent ="$"+ choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        //assing color
        currentProductColor.forEach((color,index) =>{
            color.style.backgroundColor = choosenProduct.colors[index].code;
        })
    });
    
});

currentProductColor.forEach((color,index)=>{
    color.addEventListener("click", ()=>{
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});

currentProductSize.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSize.forEach((size)=>{
            size.style.backgroundColor = "white";
        size.style.color = "black"; 
        })
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

const probutton = document.querySelector(".proButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

probutton.addEventListener("click",()=>{
    payment.style.display="flex";
});

close.addEventListener("click",()=>{
    payment.style.display="none";
});
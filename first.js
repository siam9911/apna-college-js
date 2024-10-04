const penName = document.getElementById("penName");
const penRating = document.getElementById("penRating");
const penOffer = document.getElementById("penOffer");
const penPrice = document.getElementById("penPrice");
const product ={
    name:"ball pen",
    rating:4,
    offer:5,
    price:300
};
penName.innerText = product.name;
penRating.innerText = product.rating;
penOffer.innerText = product.offer;
penPrice.innerText = product.price;

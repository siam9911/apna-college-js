//chapter 1
//question no:1
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
//question no:2
penName.innerText = product.name;
penRating.innerText = product.rating;
penOffer.innerText = product.offer;
penPrice.innerText = product.price;

const userName = document.getElementById("userName");
const isFollowing = document.getElementById("isFollowing");
const Followers = document.getElementById("Followers");
const profile = {
    username:"@siam69",
    isfollow: false,
    follower: 420,  
};
userName.innerText = profile.username;
isFollowing.innerText = profile.isfollow;
Followers.innerText = profile.follower;

//Artithmetic operator
let a = 7;
let b = 4;
//You can also do this
let c = a+b

document.getElementById("operator1").innerHTML = "a + b = "+ (a + b);
document.getElementById("operator2").innerHTML ="a - b ="+ (a - b);
document.getElementById("operator3").innerHTML ="a + b ="+ (c);
document.getElementById("operator4").innerHTML x="a % b ="+ (a % b); //Modulus
console.log("a ** b =", a ** b);//Exponentiation
//unary operator
a++
console.log("a =", a); //Increment

a--
console.log("a =", a); //Decrement

//Assignment operator
let d = 5;
let e = 4;

d += 5;
console.log("a =", d);
e **= 2;
console.log("a =", e);






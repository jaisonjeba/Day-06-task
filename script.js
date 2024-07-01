// Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
// 1. Get all the countries from Asia continent /region using Filter method

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var res = JSON.parse(request.response);
    console.log(res);
    var country = res.filter((ele)=>ele.region.includes("Asia"));
    var country1 = country.map((ele)=>ele.name.common);
    console.log(country1);
}

// 2. Get all the countries with a population of less than 2 lakhs using Filter method

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var res = JSON.parse(request.response);
    console.log(res);
var popu = res.filter((ele)=>ele.population <200000);
var popu_res = popu.map((ele)=>ele.name.common);
console.log(popu_res);
}

// 3. Print the following details name, capital, flag, using forEach method

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var res = JSON.parse(request.response);
    console.log(res);
res.forEach((ele)=>(`{console.log(${ele.name.common} ${ele.capital} ${ele.flag})}`))
}

// 4. Print the total population of countries using reduce method

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var res = JSON.parse(request.response);
    console.log(res);
var total = res.reduce((acc,cv)=>acc+cv.population,0);
console.log(total); 
}

// 5. Print the country that uses US dollars as currency.

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var res = JSON.parse(request.response);
    console.log(res);
var total = res.reduce((acc,cv)=>acc+cv.population,0);
console.log(total); 
var curr = res.filter((ele)=>{
    for ( let key in ele.currencies)
    {
        if(ele.currencies[key].code==="USD")
        console.log(ele.name);
    }
 })
}




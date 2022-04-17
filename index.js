const british=document.getElementById("british");
const chinese=document.getElementById("chinese");
const european=document.getElementById("european");
const french=document.getElementById("french");
const greek=document.getElementById("greek");
const indian=document.getElementById("indian");
const italian=document.getElementById("italian");
const japanese = document.getElementById("japanese");
const korean = document.getElementById("korean");
const mexican = document.getElementById("mexiacn");
const search= document.getElementById("searchbtn");


const cusinesearch = document.getElementById("cusinesearch");
const cusinetype=document.getElementById("cusinetype");
const cusinedetails=document.getElementById("cusinedetails");


const api= "04ea0a1c13d3402fbfd0711a9c8953d6";

var cusinedata=[];

british.addEventListener("click",function(){
    const fetchdish=async()=>{
        const response=await fetch("https://api.spoonacular.com/recipes/complexSearch?cuisine=British&apiKey=04ea0a1c13d3402fbfd0711a9c8953d6&addRecipeInformation=true&addRecipeNutrition=true");
        cusinedata=[];
        if(response.status>=200 && response.status<300){
               const a=await response.json();
               console.log(a);
               cusinedata=a.results;
    
        }else{
            console.log(response.status,response.statustext);
        }
    
        display();
    
    }
    fetchdish()

});
chinese.addEventListener("click",function(){
    const fetchdish=async()=>{
        const response=await fetch("https://api.spoonacular.com/recipes/complexSearch?cuisine=Chinese&apiKey="+api+"&addRecipeInformation=true&addRecipeNutrition=true");
        cusinedata=[];
        if(response.status>=200 && response.status<300){
               const a=await response.json();
               console.log(a);
               cusinedata=a.results;
    
        }else{
            console.log(response.status,response.statustext);
        }
    
        display();
    
    }
    fetchdish()

});
european.addEventListener("click",function(){
    const fetchdish=async()=>{
        const response=await fetch("https://api.spoonacular.com/recipes/complexSearch?cuisine=european&apiKey="+api+"&addRecipeInformation=true&addRecipeNutrition=true");
        cusinedata=[];
        if(response.status>=200 && response.status<300){
               const a=await response.json();
               console.log(a);
               cusinedata=a.results;
    
        }else{
            console.log(response.status,response.statustext);
        }
    
        display();
    
    }
    fetchdish()

});
french.addEventListener("click",function(){
    const fetchdish=async()=>{
        const response=await fetch("https://api.spoonacular.com/recipes/complexSearch?cuisine=french&apiKey="+api+"&addRecipeInformation=true&addRecipeNutrition=true");
        cusinedata=[];
        if(response.status>=200 && response.status<300){
               const a=await response.json();
               console.log(a);
               cusinedata=a.results;
    
        }else{
            console.log(response.status,response.statustext);
        }
    
        display();
    
    }
    fetchdish()

});
greek.addEventListener("click",function(){
    const fetchdish=async()=>{
        const response=await fetch("https://api.spoonacular.com/recipes/complexSearch?cuisine=greek&apiKey="+api+"&addRecipeInformation=true&addRecipeNutrition=true");
        cusinedata=[];
        if(response.status>=200 && response.status<300){
               const a=await response.json();
               console.log(a);
               cusinedata=a.results;
    
        }else{
            console.log(response.status,response.statustext);
        }
    
        display();
    
    }
    fetchdish()

});
indian.addEventListener("click",function(){
    const fetchdish=async()=>{
        const response=await fetch("https://api.spoonacular.com/recipes/complexSearch?cuisine=indian&apiKey="+api+"&addRecipeInformation=true&addRecipeNutrition=true");
        cusinedata=[];
        if(response.status>=200 && response.status<300){
               const a=await response.json();
               console.log(a);
               cusinedata=a.results;
    
        }else{
            console.log(response.status,response.statustext);
        }
    
        display();
    
    }
    fetchdish()

});
italian.addEventListener("click",function(){
    const fetchdish=async()=>{
        const response=await fetch("https://api.spoonacular.com/recipes/complexSearch?cuisine=italian&apiKey="+api+"&addRecipeInformation=true&addRecipeNutrition=true");
        cusinedata=[];
        if(response.status>=200 && response.status<300){
               const a=await response.json();
               console.log(a);
               cusinedata=a.results;
    
        }else{
            console.log(response.status,response.statustext);
        }
    
        display();
    
    }
    fetchdish()

});
japanese.addEventListener("click",function(){
    const fetchdish=async()=>{
        const response=await fetch("https://api.spoonacular.com/recipes/complexSearch?cuisine=japanese&apiKey="+api+"&addRecipeInformation=true&addRecipeNutrition=true");
        cusinedata=[];
        if(response.status>=200 && response.status<300){
               const a=await response.json();
               console.log(a);
               cusinedata=a.results;
    
        }else{
            console.log(response.status,response.statustext);
        }
    
        display();
    
    }
    fetchdish()

});
korean.addEventListener("click",function(){
    const fetchdish=async()=>{
        const response=await fetch("https://api.spoonacular.com/recipes/complexSearch?cuisine=korean&apiKey="+api+"&addRecipeInformation=true&addRecipeNutrition=true");
        cusinedata=[];
        if(response.status>=200 && response.status<300){
               const a=await response.json();
               console.log(a);
               cusinedata=a.results;
    
        }else{
            console.log(response.status,response.statustext);
        }
    
        display();
    
    }
    fetchdish()

});
mexican.addEventListener("click",function(){
    const fetchdish=async()=>{
        const response=await fetch("https://api.spoonacular.com/recipes/complexSearch?cuisine=mexican&apiKey="+api+"&addRecipeInformation=true&addRecipeNutrition=true");
        cusinedata=[];
        if(response.status>=200 && response.status<300){
               const a=await response.json();
               console.log(a);
               cusinedata=a.results;
    
        }else{
            console.log(response.status,response.statustext);
        }
    
        display();
    
    }
    fetchdish()

});
const search_cusine = "https://api.spoonacular.com/recipes/complexSearch?apiKey=04ea0a1c13d3402fbfd0711a9c8953d6&addRecipeInformation=true&addRecipeNutrition=true";
search.addEventListener("click",function(){
    cusinetype.innerHTML="<h4>Search : "+cusinesearch.value+"</h4>";
    fetchsearch();
});
const fetchsearch = async () => {

    if(cusinesearch.value == null)
        return;

    const response = await fetch(search_cusine+"&cuisine"+cusinesearch.value);
    cusinedata = [];
    if(response.status >= 200 && response.status < 300) {
        const a = await response.json()
        console.log(a);
        cusinedata = a.results;
    } else {
        //error handle
        console.log(response.status, response.statusText);
        cusinedetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    display();
}


function display(){

    cusinedetails.innerHTML= "";
   
    cusinedata.forEach(results =>{
        var col=document.createElement("div");
        col.className="col col-lg-4 col-sm-12 col-md-6 col-11 ";

        var card=document.createElement("div");
        card.className=" card h-100 p-2 mb-2 card";

        var image = document.createElement('img');
        image.className="img";
        image.setAttribute("width","100%");
        image.src=results.image;

        var cardbody=document.createElement("div")

        var title=document.createElement("h4")
        title.className="dish-title"
        title.innerHTML=results.title;

        var healthscore=document.createElement("h5");
        var healtscoredes=document.createElement("h5")
        healthscore.className="text-primary";
        healtscoredes.className="text-sec";
        healtscoredes.innerHTML+="Healthscore =";
        healthscore.innerHTML=results.healthScore;

        var calories=document.createElement("h5");
        var caloriesdes=document.createElement("h5")
        calories.className="text-primary";
        caloriesdes.className="text-sec";
        caloriesdes.innerHTML+="Calories=";
        calories.innerHTML=results.nutrition.nutrients[0].amount;

        var Carbohydrates=document.createElement("h5");
        var Carbohydratesdes=document.createElement("h5")
        Carbohydrates.className="text-primary";
        Carbohydratesdes.className="text-sec";
        Carbohydratesdes.innerHTML+="Carbohydrates=";
        Carbohydrates.innerHTML=results.nutrition.nutrients[3].amount;
    
        cardbody.appendChild(title);
        cardbody.appendChild(healtscoredes);
        cardbody.appendChild(healthscore);
        cardbody.appendChild(caloriesdes);
        cardbody.appendChild(calories);
        cardbody.appendChild( Carbohydratesdes);
        cardbody.appendChild( Carbohydrates);

        card.appendChild(image);
        card.appendChild(cardbody);

        col.appendChild(card);

        cusinedetails.appendChild(col);
});
}

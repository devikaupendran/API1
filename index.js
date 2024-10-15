const API_URL = 'https://dummyjson.com/recipes';
const dishList = document.getElementById('dish-list');

async function getData(){
    const response = await fetch(API_URL)
    const responseData = await response.json()    
    updateDOM(responseData)
}

function updateDOM(data){
    data.recipes.forEach((dish) => {
        const li = document.createElement('li');
        li.innerHTML = `
        <img src = '${dish.image}' />
        <h2>${dish.name}</h2>
        <h4>${dish.cuisine} <span>${dish.rating}</span></h4>`;

        dishList.appendChild(li);
    });
}
getData();
// fetch(API_URL)
//     .then((response) => {
//         return response.json()
//     })
//     .then((data) => {
//         console.log(data);
//         updateDOM(data)
//     })

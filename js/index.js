//let devices = "https://eliuscaleb.github.io/json-api/products.json"
let devices =  " http://localhost:3000/sellingProducts";
document.addEventListener("DOMContentLoaded", () => {
    let showsproducts= document.querySelector('#showproducts')
    showsproducts.addEventListener('click',showHide)
     //display the products from the json server
    function showHide(event){
        event.preventDefault();
        console.log('hello')
        const deviceImages = document.querySelector("#collection");

        if (deviceImages.style.display === "none") {
            // Currently hidden, make it visible   
              deviceImages.style.display = "flex";
        } else {
            // Currently visible, make it hidden
            deviceImages.style.display = "none";
        }

    }  
    
    //comments section of the customer
      let  form= document.querySelector('.customer')
      form.addEventListener('submit',(e) =>{
        e.preventDefault()
        handleComments(e.target.input.value)
        form.reset();
      })
      

})
 // function to show comments and  delete them

function handleComments(comments){
    let p = document.createElement('p')
    let x = document.createElement('button')
    x.addEventListener('click',deleteComments)
    x.textContent= 'x'
    p.textContent=  `${comments}`
    p.appendChild(x)
    document.querySelector('#list').appendChild(p)    
}

function deleteComments(e){
    e.target.parentNode.remove()
}

// fetching the products from a local host server

function renderProducts(sellingProducts){
    let card= document.createElement('div')
    card.className= 'card col'
    card.innerHTML= `
    <img src="${sellingProducts.image}">
    <div class= "Content">
      <h3> ${sellingProducts.name}</h3>
      <p>
          ${sellingProducts.description} features
      </p>
      <p>${sellingProducts.price}</p>
    </div>`
    
    document.querySelector('#collection').appendChild(card)
}  


function loadingData(){
   
     fetch(devices)
     .then(res=> res.json())    
    .then(re => re.forEach(sellingProducts=>renderProducts(sellingProducts))) 
}



function  initialize(){
    loadingData()    
}
initialize();
 
 


  




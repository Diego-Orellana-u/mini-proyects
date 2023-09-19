const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "dinner steak",
    category: "dinner",
    price: 39.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];


//dynamic version

const sectionCenter = document.querySelector(".section-center") //selects the section where we are going to paste HTML
const btnContainer = document.querySelector(".btn-container")

window.addEventListener("DOMContentLoaded", function(){ //once DOM is loaded, it triggers the functions that display menu items
  displayMenuItems(menu)
  displayMenuBtns()
})

function displayMenuItems(menuItems){
  let displayMenu = menuItems.map(function(Item){  
    return `<article class="menu-item">
    <img src="${Item.img}" class="photo" alt="${Item.title}">
    <div class="item-info">
      <header>
      <h4>${Item.title}</h4> 
      <h4 class="price">${Item.price}</h4>
      </header>
      <p>${Item.desc}</p>
    </div>
  </article>`
  })
  displayMenu = displayMenu.join("")
  sectionCenter.innerHTML = displayMenu
}

function displayMenuBtns(){
  const categories = menu.reduce(function(values, item){ //used reduce to create an array with unique categories.
    if(!values.includes(item.category)){
      values.push(item.category)
    }
    return values
  },["all"])
  
  const categoryBtns = categories.map(function(category){ //we use map to create an array with each unique category. Then we use join and paste it into the DOM
    return`<button class="filter-btn" type="button" data-id="${category}">${category}</button>`
  }).join("")
  btnContainer.innerHTML = categoryBtns
  const filterBtns = document.querySelectorAll(".filter-btn") //since buttons are being added dynamically, we have to target them after being created

  filterBtns.forEach(function(btn){
    btn.addEventListener("click", function(event){
      const category = event.currentTarget.dataset.id //we receive the information of the filter button being used
      const menuCategory = menu.filter(function(menuItem){ //we create a filter that returns an array of the elements that have the same category
        if(category === menuItem.category){                //than the filter button being used
          return menuItem
        }
      })
      if(category === "all"){  //we create an exception for the "all" button because it won't match the elements category
        displayMenuItems(menu)
      }
      else{
        displayMenuItems(menuCategory) //we give the function the filtered array with only the items that matches
      }
    })
  })
}






//partially dynamic version. The problem with this solution is that when you want to add a new item that doesn't have an existing category
//it will not appear in the filter buttons, only in the all section

// const sectionCenter = document.querySelector(".section-center") //selects the section where we are going to paste HTML
// const filterBtns = document.querySelectorAll(".filter-btn") //selects the filter buttons

// window.addEventListener("DOMContentLoaded", function(){ //once DOM is loaded, it triggers the functions that display menu items
//   displayMenuItems(menu)
// })

// filterBtns.forEach(function(btn){
//   btn.addEventListener("click", function(event){
//     const category = event.currentTarget.dataset.id //we receive the information of the filter button being used
//     const menuCategory = menu.filter(function(menuItem){ //we create a filter that returns an array of the elements that have the same category
//       if(category === menuItem.category){                //than the filter button being used
//         return menuItem
//       }
//     })
//     if(category === "all"){  //we create an exception for the "all" button because it won't match the elements category
//       displayMenuItems(menu)
//     }
//     else{
//       displayMenuItems(menuCategory) //we give the function the filtered array with only the items that matches
//     }
//   })
// })


// //we map through the menu array and for each element of the array we return the HTML of an item with template literal syntax to introduce the 
// //values of each menu item. The final return that map does it's an array with all the HTML for every menu item
// //Then we use join("") method to convert the array to a string and finally we use innerHTML to paste it into the DOM

// function displayMenuItems(menuItems){
//   let displayMenu = menuItems.map(function(Item){  
//     return `<article class="menu-item">
//     <img src="${Item.img}" class="photo" alt="${Item.title}">
//     <div class="item-info">
//       <header>
//       <h4>${Item.title}</h4> 
//       <h4 class="price">${Item.price}</h4>
//       </header>
//       <p>${Item.desc}</p>
//     </div>
//   </article>`
//   })
//   displayMenu = displayMenu.join("")
//   sectionCenter.innerHTML = displayMenu
// }





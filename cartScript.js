let shop = document.querySelector(".Featured_Products");

// Featured Product Data
let shopItemsData = [
  {
    id: "Featured_product_1",
    name: "Campus shoes",
    price: 499,
    desc: "lorem ipsum doloar sit amet",
    img: "Image/2.jpg",
    category: "men",
  },
  {
    id: "Featured_product_2",
    name: "Boat Watch",
    price: 999,
    desc: "lorem ipsum doloar sit amet",
    img: "Image/29.png",
    category: "Accessories",
  },
  {
    id: "Featured_product_3",
    name: "Vivo Pro 5G",
    price: 17000,
    desc: "lorem ipsum doloar sit amet",
    img: "Image/mobile_1.png",
    category: "Accessories",
  },
  {
    id: "Featured_product_4",
    name: "Sparky T-Shirt",
    price: 799,
    desc: "lorem ipsum doloar sit amet",
    img: "Image/33.png",
    category: "men",
  },
  {
    id: "Featured_product_5",
    name: "Alarm Clock",
    price: 299,
    desc: "lorem ipsum doloar sit amet",
    img: "Image/32.png",
    category: "Accessories",
  },
  {
    id: "Featured_product_6",
    name: "Noice Watch",
    price: 849,
    desc: "lorem ipsum doloar sit amet",
    img: "Image/30.png",
    category: "Accessories",
  },
  {
    id: "Featured_product_7",
    name: "Sparky Jeans",
    price: 499,
    desc: "lorem ipsum doloar sit amet",
    img: "Image/3.jpg",
    category: "men",
  },
  {
    id: "Featured_product_8",
    name: "Sports Shoes",
    price: 649,
    desc: "lorem ipsum doloar sit amet",
    img: "Image/47.jpg",
    category: "Women",
  },
  {
    id: "Featured_product_9",
    name: "Casual watch",
    price: 799,
    desc: "lorem ipsum doloar sit amet",
    img: "Image/45.png",
    category: "Accessories",
  },
  {
    id: "Featured_product_10",
    name: "Campus shoes",
    price: 399,
    desc: "lorem ipsum doloar sit amet",
    img: "Image/28.png",
    category: "men",
  },
  {
    id: "Featured_product_11",
    name: "Syska Iron",
    price: 849,
    desc: "lorem ipsum doloar sit amet",
    img: "Image/52.png",
    category: "Accessories",
  },
  {
    id: "Featured_product_12",
    name: "Crompton Iron",
    price: 999,
    desc: "lorem ipsum doloar sit amet",
    img: "Image/51.png",
    category: "Accessories",
  },
  {
    id: "Featured_product_13",
    name: "Electric Mixer",
    price: 649,
    desc: "lorem ipsum doloar sit amet",
    img: "Image/53.png",
    category: "Accessories",
  },
  {
    id: "Featured_product_14",
    name: "Sports Shoes",
    price: 799,
    desc: "lorem ipsum doloar sit amet",
    img: "Image/55.png",
    category: "Accessories",
  },
  {
    id: "Featured_product_15",
    name: "Campus shoes",
    price: 399,
    desc: "lorem ipsum doloar sit amet",
    img: "Image/28.png",
    category: "men",
  },
  {
    id: "Featured_product_16",
    name: "Noice Watch",
    price: 849,
    desc: "lorem ipsum doloar sit amet",
    img: "Image/30.png",
    category: "Accessories",
  },
  {
    id: "Featured_product_17",
    name: "Gaming Mouse",
    price: 699,
    desc: "lorem ipsum doloar sit amet",
    img: "Image/58.png",
    category: "Accessories",
  },
  {
    id: "Featured_product_18",
    name: "Logitech Mouse",
    price: 349,
    desc: "lorem ipsum doloar sit amet",
    img: "Image/57.png",
    category: "Accessories",
  },
  {
    id: "Featured_product_19",
    name: "Casual watch",
    price: 799,
    desc: "lorem ipsum doloar sit amet",
    img: "Image/45.png",
    category: "Accessories",
  },
  {
    id: "Featured_product_20",
    name: "Campus shoes",
    price: 399,
    desc: "lorem ipsum doloar sit amet",
    img: "Image/8.jpg",
    category: "men",
  },
];

let basket = JSON.parse(localStorage.getItem("data")) || []; // to remove error we use || [] , i.e if data is not present in local storage than [] will use.

// Generate Featured Shop
let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, price, desc, img, category } = x;
      let search = basket.find((x) => x.id === id) || [];
      return `
    <div id = product-id-${id} class="product_catagory product-box">
            <div class="product_catagory_img image_bg">
              <img
                class="product_catagory_img product-img"
                src="${img}"
                alt=""
              />
            </div>
            <h4 class="product-title">${name}</h4>
            <div style="display: none;" class="plus_minus_container">
            <i onclick = "decrement(${id})" class="plus_minus_icon fa-solid fa-minus"></i>
            <div id = ${id} class="total_quantity">
            ${search.item === undefined ? 0 : search.item}
            </div>
            <i onclick = "increament(${id})" class="plus_minus_icon fa-solid fa-plus"></i>
          </div> 
            <p class="para_catagory">${category}</p>
            <p class="para_price price">₹ ${price}</p>
            <a  style="cursor: pointer" class="add_to_cart_item add-cart" onclick = "AddToCart(${id})"
              >Add to Cart</a
            >
          </div>
    `;
    })
    .join(""));
};
generateShop();

let AddToCart = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    // if don't find
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }
  // console.log(basket);
  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
  generateCartItems();
};

// increament
let increament = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    // if don't find
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }
  // console.log(basket);
  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
  generateCartItems();
};
// decrement
let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(selectedItem.id);
  basket = basket.filter((x) => x.item !== 0);
  // console.log(basket);
  localStorage.setItem("data", JSON.stringify(basket));
  generateCartItems();
};

// update
let update = (id) => {
  let search = basket.find((x) => x.id === id);
  console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  generateCartItems();
  localStorage.setItem("data", JSON.stringify(basket));
  calculation();
  TotalAmount();
};

// calculation
let calculation = () => {
  let cartIcon = document.getElementById("cartIcon");
  let total_items = basket.map((x) => x.item).reduce((x, y) => x + y, 0); // 0 is default initial value
  cartIcon.innerHTML = total_items;
};
calculation();

// cart page
let label = document.getElementById("label");
let shopping_Cart_Items = document.getElementById("shopping_Cart_Items");

let generateCartItems = () => {
  if (basket.length !== 0) {
    return (shopping_Cart_Items.innerHTML = basket
      .map((x) => {
        let { id, item } = x;
        let search = shopItemsData.find((y) => y.id === id) || [];

        return `
    <div class="cart-box">
    <div class="img_box">
    <img class="cart-img" src="${search.img}" alt="" />
  </div>
  <div class="titile_trash_container">
    <div class="cart-title">${search.name}
    <span class="price_per_item">₹ ${search.price}</span>
    </div>
    <div><i onclick = "RemoveCartItems(${id})" class="cart-remove fa-solid fa-trash"></i></div>
    <div class="detail-box">
      <div class="plus_minus_container cart_plus_minus">
        <div class="total_quantity cart_quan">${item}</div>
      </div>
      <div class="cart-price cart_item_price">₹ ${search.price * item}</div>
    </div>
  </div>
    </div>
      `;
      })
      .join("")); // to remove comma
  } else {
    label.innerHTML = `
    <h3>Cart is Empty</h3>
        <a href="index.html"> <button class="HomeBtn">Back to Home</button></a>
    `;
  }
};
generateCartItems();

// remove cart items
let RemoveCartItems = (id) => {
  let selectedItem = id;
  console.log(selectedItem.id);
  basket = basket.filter((x) => x.id !== selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
  generateCartItems();
  calculation();
  TotalAmount();
};

let Total_cart_price = document.getElementById("Total_cart_price");

// total amount
let TotalAmount = () => {
  if (basket.length !== 0) {
    let amount = basket
      .map((x) => {
        let { item, id } = x; // from local storage
        let search = shopItemsData.find((y) => y.id === id) || [];
        return item * search.price;
      })
      .reduce((x, y) => x + y, 0);
    // console.log(amount);
    Total_cart_price.innerHTML = `₹  ${amount}   /-`;
  } else return;
  generateCartItems();
};
TotalAmount();

// clear cart
let clearCart = () => {
  basket = [];
  TotalAmount();
  calculation();
  localStorage.setItem("data", JSON.stringify(basket));
  generateCartItems();
};

// make payment
function continue_payment() {
  document.querySelector(".overlayBackground").style.display = "block";
  document.querySelector(".success_container").style.display = "block";
}

function ClearAllItems() {
  clearCart();
  location.replace("/index.html");
}

// If cart is empty
let checkout = document.getElementById("checkout");
let cart_is_empty = document.querySelector(".cart_is_empty");

checkout.addEventListener("click", () => {
  if (basket.length == 0) {
    cart_is_empty.style.display = 'block';
  }
  if (basket.length != 0) {
    location.replace("/Your_Address.html");
  }
 
});

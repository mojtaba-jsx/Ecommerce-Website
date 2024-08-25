// ! ///////////////////////////////////////////////////////////////////////////
let sideMenuItems = document.querySelectorAll(".side-menu__list input");
let shopProductsWrapper = document.querySelector(".shop-products__wrapper");


// ! ///////////////////////////////////////////////////////////////////////////

// const checkboxes = document.querySelectorAll('.side-menu__item-checkbox');
// checkboxes.forEach(checkbox => {
//   checkbox.addEventListener('change', () => {
//     getAllProducts();
//   });
// });

// function getAllProducts() {
//   // دریافت دسته‌بندی‌های انتخاب شده
//   const selectedCategories = Array.from(checkboxes)
//     .filter(checkbox => checkbox.checked)
//     .map(checkbox => checkbox.dataset.category);

//   // درخواست به سرور
//   fetch(`http://localhost:3000/products`)
//     .then((res) => res.json())
//     .then((products) => {
//       // فیلتر کردن محصولات بر اساس دسته‌بندی‌های انتخاب شده
//       if (selectedCategories.length > 0) {
//         products = products.filter(product => selectedCategories.includes(product.category));
//       }

//       // پاک کردن محصولات قبلی
//       shopProductsWrapper.innerHTML = '';

//       // افزودن محصولات فیلتر شده به DOM
//       products.forEach((product) => {
//         shopProductsWrapper.insertAdjacentHTML(
//           "beforeend",
//           `
//             <div class="shop-product">
//               <div class="shop-product__top">
//                 <img src="${product.images[0]}" alt="product" class="shop-product-image" />
//               </div>

//               <div class="shop-product__bottom">
//                 <span class="shop-product__bottom-title">${product.name}</span>
//                 <a href="#" class="shop-product__bottom__link">
//                   مشاهده محصول
//                   <svg class="shop-product__bottom__link-icon">
//                     <use href="#eye"></use>
//                   </svg>
//                 </a>
//                 <div class="shop-product__bottom__infos">
//                   <span class="shop-product__bottom__infos-price">
//                     ${product.price.toLocaleString() + " تومان"}
//                   </span>
//                   <span class="shop-product__bottom__infos-stock">
//                     ${product.stock ? "موجود" : "ناموجود"}
//                   </span>
//                 </div>
//               </div>

//               <button class="shop-product__btn">
//                 افزودن به سبد خرید
//                 <svg class="shop-product__btn-icon">
//                   <use href="#basket"></use>
//                 </svg>
//               </button>
//             </div>
//           `
//         );
//       });
//     });
// }

// ! ///////////////////////////////////////////////////////////////////////////


// دریافت همه چک‌باکس‌ها و اسلایدر قیمت
const checkboxes = document.querySelectorAll('.side-menu__item-checkbox');
const priceSlider = document.querySelector('.side-menu__price-input');
const priceDisplay = document.querySelector('.side-menu__price-price');

// افزودن Event Listener به چک‌باکس‌ها
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    getAllProducts();
  });
});

// Event Listener برای اسلایدر قیمت
priceSlider.addEventListener('input', () => {
  // تبدیل مقدار اسلایدر به تومان
  const selectedPrice = parseInt(priceSlider.value) * 10000;
  
  // به‌روزرسانی مقدار نمایش داده شده در span
  priceDisplay.textContent = selectedPrice.toLocaleString() + ' تومان';
  
  // به‌روزرسانی محصولات فیلتر شده
  getAllProducts();
});

// تابع برای بارگذاری اولیه محصولات
function loadInitialProducts() {
  // تنظیم مقدار پیش‌فرض اسلایدر قیمت
  const initialPrice = parseInt(priceSlider.value) * 10000;
  priceDisplay.textContent = initialPrice.toLocaleString() + ' تومان';

  // بارگذاری محصولات اولیه
  getAllProducts();
}

function getAllProducts() {
  // دریافت دسته‌بندی‌های انتخاب شده
  const selectedCategories = Array.from(checkboxes)
    .filter(checkbox => checkbox.checked)
    .map(checkbox => checkbox.dataset.category);

  // دریافت مقدار قیمت از اسلایدر
  const maxPrice = parseInt(priceSlider.value) * 1000000; // تبدیل مقدار اسلایدر به تومان

  // درخواست به سرور
  fetch(`http://localhost:3000/products`)
    .then((res) => res.json())
    .then((products) => {
      // فیلتر کردن محصولات بر اساس دسته‌بندی‌های انتخاب شده
      if (selectedCategories.length > 0) {
        products = products.filter(product => selectedCategories.includes(product.category));
      }

      // فیلتر کردن محصولات بر اساس قیمت
      products = products.filter(product => product.price <= maxPrice);

      // پاک کردن محصولات قبلی
      shopProductsWrapper.innerHTML = '';

      // افزودن محصولات فیلتر شده به DOM
      products.forEach((product) => {
        shopProductsWrapper.insertAdjacentHTML(
          "beforeend",
          `
            <div class="shop-product">
              <div class="shop-product__top">
                <img src="${product.images[0]}" alt="product" class="shop-product-image" />
              </div>

              <div class="shop-product__bottom">
                <span class="shop-product__bottom-title">${product.name}</span>
                <a href="#" class="shop-product__bottom__link">
                  مشاهده محصول
                  <svg class="shop-product__bottom__link-icon">
                    <use href="#eye"></use>
                  </svg>
                </a>
                <div class="shop-product__bottom__infos">
                  <span class="shop-product__bottom__infos-price">
                    ${product.price.toLocaleString() + " تومان"}
                  </span>
                  <span class="shop-product__bottom__infos-stock">
                    ${product.stock ? "موجود" : "ناموجود"}
                  </span>
                </div>
              </div>

              <button class="shop-product__btn">
                افزودن به سبد خرید
                <svg class="shop-product__btn-icon">
                  <use href="#basket"></use>
                </svg>
              </button>
            </div>
          `
        );
      });
    });
}

// بارگذاری محصولات اولیه
loadInitialProducts();

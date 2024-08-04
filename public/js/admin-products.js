let adminProductsSection = document.querySelector(".admin-products");
let adminAddProductsSection = document.querySelector(".admin-add-products");
let adminAddProductBtn = document.querySelector(".admin-products__top-btn");
let adminAddProductsFormBtn = document.querySelector(
  ".admin-add-products__form-btn"
);

adminAddProductBtn.addEventListener("click", () => {
  adminProductsSection.style.display = "none";
  adminAddProductsSection.style.display = "block";
});

adminAddProductsFormBtn.addEventListener("click", () => {
  adminProductsSection.style.display = "block";
  adminAddProductsSection.style.display = "none";
});

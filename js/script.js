//
let totalPrice = 0;

function cart(target) {
  const productName = target.childNodes[5].innerText;
  const price = target.childNodes[7].innerText.split(" ")[0];
  const totalPriceElement = document.getElementById("total-price");
  totalPrice = totalPrice + parseInt(price);
  totalPriceElement.innerText = totalPrice.toFixed(2);
  const productNameArea = document.getElementById("product-name");
  const count = productNameArea.childElementCount;
  const p = document.createElement("p");
  p.classList.add("text-2xl", "font-medium", "my-3");
  p.innerText = `${count + 1}. ${productName}`;
  productNameArea.appendChild(p);

  // Purchase Button Function
  const purchaseBtn = document.getElementById("purchase-btn");
  if (totalPrice > 0) {
    purchaseBtn.removeAttribute("disabled");
  } else {
    purchaseBtn.setAttribute("disabled", "true");
  }

  // coupon function
  const couponBtn = document.getElementById("coupon-btn");
  if (totalPrice >= 200) {
    couponBtn.removeAttribute("disabled");
  } else {
    couponBtn.setAttribute("disabled", "true");
  }
  // Total Price Before Coupon Code Apply
  const total = document.getElementById("total");
  total.innerText = totalPrice;
  couponCode();
}

// coupon function
function couponCode() {
  const couponInput = document.getElementById("coupon").value;
  const discountElement = document.getElementById("discount");
  const total = document.getElementById("total");
  if (couponInput === "SELL200") {
    const discount = totalPrice * 0.2;
    discountElement.innerText = discount.toFixed(2);
    total.innerText = totalPrice - discount;
  }
}

// Alert if coupon code is wrong
document.getElementById("coupon-btn").addEventListener("click", function () {
  const couponInput = document.getElementById("coupon").value;
  if (couponInput !== "SELL200") {
    alert("Invalid Code. Please check and try again");
  }
});

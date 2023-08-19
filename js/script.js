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
}

// coupon function
document.getElementById("coupon").addEventListener("keyup", function () {
  const couponCode = document.getElementById("coupon").value;
  const couponBtn = document.getElementById("coupon-btn");
  if (couponCode === "SELL200") {
    couponBtn.removeAttribute("disabled");
  } else {
    couponBtn.setAttribute("disabled", "true");
  }
});

// Purchase Button Function
const purchaseBtn = document.getElementById("purchase-btn");
const newTotalPrice = document.getElementById("total-price").innerText;
if (totalPrice >= "200") {
  purchaseBtn.removeAttribute("disabled");
}

console.log(newTotalPrice);

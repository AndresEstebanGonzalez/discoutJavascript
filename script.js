function submit() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let discount = parseInt(document.getElementById("discount").value);
  let price = parseInt(document.getElementById("price").value);
  let finalPrice = calculateDiscount(discount, price);

  document.getElementById("fullName").innerText = firstName + " " + lastName;
  document.getElementById("discountDetalle").innerText =
    "The total with a " + discount + "% discount is: " + finalPrice;
}

document.addEventListener("keyup", function (event) {
  if (event.keyCode == 13) {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let discount = parseInt(document.getElementById("discount").value);
    let price = parseInt(document.getElementById("price").value);
    let finalPrice = calculateDiscount(discount, price);

    document.getElementById("fullName").innerText = firstName + " " + lastName;
    document.getElementById("discountDetalle").innerText =
      "The total with a " + discount + "% discount is: " + finalPrice;
  }
});

function calculateDiscount(discount, price) {
  let finalPrice = (price / 100) * discount;
  finalPrice = price - finalPrice;

  return finalPrice;
}

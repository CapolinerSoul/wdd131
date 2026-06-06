 // Provided product array
  const products = ["Widget A", "Widget B", "Widget C"];
  const selectElement = document.getElementById("product-select");

  // Dynamically create and append options
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product;
    option.textContent = product;
    selectElement.appendChild(option);
     });
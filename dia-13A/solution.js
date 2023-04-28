const groupProducts = (products, category) => {
  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  const productNames = filteredProducts.map((product) => product.name);

  const totalPrice = filteredProducts.reduce(
    (total, product) => total + product.price,
    0
  );

  return {
    products: productNames.join(", "),
    totalPrice,
  };
};

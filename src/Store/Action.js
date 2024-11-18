

export const addToCart = (products) => ({
  type: "ADD",
  payload: products,
});

export const RemoveToCart = (productid) => ({
  type: "Remove",
  payload: productid,
});

export const updateCartQuntity = (productid, quntity) => ({
  type: "UpdateCart",
  payload: { productid, quntity },
});

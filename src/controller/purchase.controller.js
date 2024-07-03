import asyncHandler from '../utils/asyncHandler.js';
import Purchase from '../models/purchase.model.js';
import Cart from '../models/cart.model.js';

const createPurchase = asyncHandler(async (req, res) => {
  const {
    address,
    payment,
    delivery,
    itemsCount,
    purchaseTotal
  } = req.body;

  const userId = req.user._id;
  const userCart = await Cart.findOne({ owner: userId }).populate('items.book');

  if(!userCart){
    return res.status(404).json({ message: "Cart not found" });
  }

  const newPurchase = new Purchase({
    owner: userId,
    items: userCart.items.map(item => item._id),
    address,
    payment,
    delivery,
    itemsCount,
    purchaseTotal
  });

  const savedPurchase = await newPurchase.save();
  if (!savedPurchase) {
    return res.status(500).json({ message: "Failed to create purchase" });
  }

  userCart.items = [];
  await userCart.save();

  res.status(201).json({
    message: "Purchase created successfully",
    data: savedPurchase
  });
});

const getPurchase = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const purchases = await Purchase.find({ owner: userId }).populate('items');
  if (!purchases) {
    return res.status(404).json({ message: "No purchases found" });
  }

  res.status(200).json({
    message: "Purchases fetched successfully",
    data: purchases
  });
})

export { 
  createPurchase,
  getPurchase
};

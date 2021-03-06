const express = require("express");
const router = express.Router();

const chatbotRoutes = require("./chatbot.api");
router.use("/chats", chatbotRoutes);


// var authRouter = require("./auth.api");
// router.use('/auth', authRouter)

const userRoutes = require("./user.api");
router.use("/users", userRoutes);

const productRoutes = require("./product.api");
router.use("/products", productRoutes);

const cartRoutes = require("./cart.api");
router.use("/carts", cartRoutes);

const commentRoutes = require("./comment.api");
router.use("/comments", commentRoutes);

const emailRoutes = require("./email.api");
router.use("/emails", emailRoutes);


const stripeRoutes = require("./stripe");
router.use("/checkout", stripeRoutes);

const orderRoutes = require("./order.api");
router.use("/orders", orderRoutes);



module.exports = router;

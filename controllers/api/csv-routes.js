const router = require('express').Router();
const { Product } = require("../../models");



router.get("/", async (req, res) => {
    try {
      const productData = await Product.findAll({
      });
  
      const products = productData.map((post) => post.get({ plain: true }));
      console.log(products);
      res.render("homepage", {
        products: products,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;
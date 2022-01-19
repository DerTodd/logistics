const router = require("express").Router();
const { Category, Product } = require("../models");

router.get("/", async (req, res) => {
  try {
    const productData = await Product.findAll({
        include: [{ model: Category }],
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


router.get('/product/:id', async (req, res) => {
    try {
      const productData = await Product.findByPk(req.params.id, {
    
        include: [
          Category,
        ]
  
      });
      
      const product = productData.get({ plain: true });
      console.log(product)
      res.render('product', {
        ...product,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/edit/:id', async (req, res) => {
    try {
      const productData = await Product.findByPk(req.params.id, {
        include: [
          Category,
          
        ]
      });
      const product = productData.get({ plain: true });
    console.log(product)
    res.render('edit', {
      ...product,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

  module.exports = router;
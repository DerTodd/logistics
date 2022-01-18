const router = require('express').Router();
const { Product } = require('../../models');


router.post('/', async (req, res) => {
  try {
    const newProduct = await Product.create({
      ...req.body,
    });

    res.status(200).json(newProduct);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/edit/:id', async (req, res) => {
  try {
    console.log(req.body)
    const updateProduct = await Product.update(
     
      { product_name: req.body.product_name,
        price: req.body.price,
        stock: req.body.stock,
        category_id: req.body.category_id
    },

    { where: { id: req.body.id } }
    );

    res.status(200).json(updateProduct);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const productData = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!productData) {
      res.status(404).json({ message: 'No product found with this id!' });
      return;
    }

    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
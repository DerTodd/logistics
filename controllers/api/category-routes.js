const router = require('express').Router();
const { Category } = require('../../models');

router.post('/', async (req, res) => {
    // create a new category
    try {
      const kitten = await Category.create({
       category_name: req.body.category_name, 
      });
      res.status(200).json(kitten);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.put('/:id', async (req, res) => {
    // update a category by its `id` value
    try {
      const categoriesData = await Category.update(req.body, {
        where: {
          id: req.params.id,
        },
  });
  if (!categoriesData[0]) {
    res.status(404).json({ message: 'Meow! No cat with this id!' });
    return;
  }
  res.status(200).json(categoriesData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.delete('/:id', async (req, res) => {
    // delete a category by its `id` value
    try {
      const categoriesData = await Category.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!categoriesData) {
        res.status(404).json({ message: "No Cat found with that id.  Try the local shelter!" });
        return;
      }
  
      res.status(200).json(categoriesData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
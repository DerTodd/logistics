const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const csvRoutes = require('./csv-routes');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/csv', csvRoutes);

module.exports = router;
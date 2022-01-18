const sequelize = require('../config/connection');
const { Category, Product } = require('../models');

const categoryData = require('./categoryData.json');
const productData = require('./productData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Category.bulkCreate(categoryData);
  
  await Product.bulkCreate(productData);


  process.exit(0);
};

seedDatabase();
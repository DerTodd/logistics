const Product = require('./Product');
const Category = require('./Category');

Category.hasMany(Product, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE',
  });

  module.exports = {
    Product,
    Category,
  };
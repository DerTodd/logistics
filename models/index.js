const Product = require('./Product');
const Category = require('./Category');

Category.hasMany(Product, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE',
  });

  Product.belongsTo(Category, {
    foreignKey: 'category_id',
  });

  module.exports = {
    Product,
    Category,
  };
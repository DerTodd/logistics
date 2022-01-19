const { Product } = require("../models");

const CsvParser = require("json2csv").Parser;

    const download = (req, res) => {
      Product.findAll().then((objs) => {
        let products = [];
    
        objs.forEach((obj) => {
          const { id, product_name, price, stock, category_id } = obj;
          products.push({ id, product_name, price, stock, category_id });
        });
    
        const csvFields = ["ID", "Product Name", "Price", "Stock", "Category ID"];
        const csvParser = new CsvParser({ csvFields });
        const csvData = csvParser.parse(products);
    
        res.setHeader("Content-Type", "text/csv");
        res.setHeader("Content-Disposition", "attachment; filename=inventory.csv");
    
        res.status(200).end(csvData);
      });
    };
    

module.exports = {
  download
};
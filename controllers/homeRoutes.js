const router = require("express").Router();
const { Category, Product } = require("../models");

const download = function(data) {
    alert("download")
    const blob = new Blob([data], { type: 'text/csv'});
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', 'download.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a)

};

const objectToCsv = function(data) {
alert("object")
    const csvRows = [];
    const headers = Object.keys(data[0]);
    csvRows.push(headers.join(','));

    for (const row of data) {
        const values = headers.map(header => {
            const escaped = (''+row[header]).replace(/"/g, '\\"');
            return `"${escaped}"`;
        });
        csvRows.push(values.join(','));
    }
    return csvRows.join('\n');
};

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

router.get("/csv", async (req, res) => {
    try {
        const productData = await Product.findAll({
            //include: [{ model: Category }],
        });
    
        const products = productData.map((post) => post.get({ plain: true }));
        console.log(products);
        console.log("Ugh")
        const csvData = objectToCsv(products);
        download(csvData)
        res.render("homepage", {
          products: products,
        });
      } catch (err) {
        res.status(500).json(err);
      }
    });

router.get("/dashboard", async (req, res) => {
    try {
      const productData = await Product.findAll({
          include: [{ model: Category }],
      });
  
      const products = productData.map((post) => post.get({ plain: true }));
      console.log(products);
      res.render("dashboard", {
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
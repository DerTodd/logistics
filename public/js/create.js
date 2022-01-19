const newFormHandler = async (event) => {
    event.preventDefault();
    alert("Creating New Product")
    const product_name = document.querySelector('#product_name').value.trim();
    const price = document.querySelector('#price').value.trim();
    const stock = document.querySelector('#stock').value.trim();
    const category_id = document.querySelector('#category_id').value.trim();
  alert(product_name)
  // alert(price)
  // alert(stock)
  // alert(category_id)
    if (product_name && price && stock && category_id) {
      const response = await fetch(`/api/products/`, {
        method: 'POST',
        body: JSON.stringify({ product_name, price, stock, category_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to create post');
      }
    }
  };
  
  document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newFormHandler);

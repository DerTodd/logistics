const newFormHandler = async (event) => {
    event.preventDefault();
    alert("working")
    const id = document.getElementById('productUpdate').innerHTML
    const product_name = document.querySelector('#product_name').value.trim();
    const price = document.querySelector('#price').value.trim();
    const stock = document.querySelector('#stock').value.trim();
    const category_id = document.querySelector('#category_id').value.trim();
    alert(id)
  alert(product_name)
  alert(price)
  alert(stock)
  alert(category_id)
    if (product_name && price && stock && category_id) {
      const response = await fetch(`/api/products/edit/${id}`, {
        method: 'POST',
        body: JSON.stringify({ id, product_name, price, stock, category_id }),
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
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/products/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to delete post');
      }
    }
  };
  
  document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.project-list')
    .addEventListener('click', delButtonHandler);
  
  
  
import React, { useState } from 'react';

function ClothingShop() {
  const [inventory, setInventory] = useState([
    { 
      id: 1, 
      name: "Men's Casual T-Shirt", 
      price: 29.99, 
      stock: 10,
      category: "Men",
      size: "M",
      imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Comfortable cotton t-shirt for everyday wear"
    },
    { 
      id: 2, 
      name: "Women's Denim Jacket", 
      price: 49.99, 
      stock: 5,
      category: "Women",
      size: "S",
      imageUrl: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Classic denim jacket with stylish wash"
    },
    { 
      id: 3, 
      name: "Kids Graphic Hoodie", 
      price: 19.99, 
      stock: 15,
      category: "Kids",
      size: "XS",
      imageUrl: "https://images.unsplash.com/photo-1566678124698-45ee90fce5a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Fun hoodie with colorful graphic print"
    },
  ]);
  
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    price: "",
    stock: "",
    category: "Men",
    size: "M",
    imageUrl: "",
    imageFile: null,
    description: ""
  });
  
  const [isEditing, setIsEditing] = useState(false);
  const [useFileUpload, setUseFileUpload] = useState(false);
  const [previewUrl, setPreviewUrl] = useState("");
  
  const categoryOptions = ["Men", "Women", "Kids", "Accessories"];
  const sizeOptions = ["XS", "S", "M", "L", "XL", "XXL"];
  
  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    
    if (type === "file") {
      const file = files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewUrl(reader.result);
        };
        reader.readAsDataURL(file);
        setFormData({
          ...formData,
          imageFile: file,
          imageUrl: ""
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: type === "number" ? parseFloat(value) || "" : value
      });
    }
  };
  
  // Toggle between URL and file upload
  const toggleImageInputMethod = () => {
    setUseFileUpload(!useFileUpload);
    setPreviewUrl("");
    setFormData({
      ...formData,
      imageFile: null,
      imageUrl: ""
    });
  };
  
  // Add new item or update existing
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create the product object
    let productToSave = {
      ...formData,
      price: parseFloat(formData.price),
      stock: parseInt(formData.stock)
    };
    
    // If using file upload and we have a preview URL
    if (useFileUpload && previewUrl) {
      productToSave.imageUrl = previewUrl;
      productToSave.imageFile = null; // We don't need to store the actual file
    }
    
    if (isEditing) {
      // Update existing item
      setInventory(inventory.map(item => 
        item.id === formData.id ? productToSave : item
      ));
      setIsEditing(false);
    } else {
      // Add new item
      const newId = inventory.length > 0 ? Math.max(...inventory.map(item => item.id)) + 1 : 1;
      setInventory([...inventory, { ...productToSave, id: newId }]);
    }
    
    // Reset form
    setFormData({
      id: null,
      name: "",
      price: "",
      stock: "",
      category: "Men",
      size: "M",
      imageUrl: "",
      imageFile: null,
      description: ""
    });
    setPreviewUrl("");
  };
  
  // Edit an item
  const handleEdit = (item) => {
    setFormData({
      ...item,
      imageFile: null
    });
    setPreviewUrl(item.imageUrl);
    setIsEditing(true);
    setUseFileUpload(false);
  };
  
  // Delete an item
  const handleDelete = (id) => {
    setInventory(inventory.filter(item => item.id !== id));
  };
  
  // Cancel editing
  const handleCancel = () => {
    setFormData({
      id: null,
      name: "",
      price: "",
      stock: "",
      category: "Men",
      size: "M",
      imageUrl: "",
      imageFile: null,
      description: ""
    });
    setPreviewUrl("");
    setIsEditing(false);
  };
  
  return (
    <div className="page shop-page">
      <h1>Clothing Inventory Management</h1>
      
      <div className="inventory-container">
        <div className="inventory-form">
          <h2>{isEditing ? "Edit Clothing Item" : "Add New Clothing Item"}</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Product Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-control"
                placeholder="e.g. Women's Summer Dress"
              />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="form-control"
                >
                  {categoryOptions.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label>Size</label>
                <select
                  name="size"
                  value={formData.size}
                  onChange={handleChange}
                  className="form-control"
                >
                  {sizeOptions.map(size => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>Price ($)</label>
                <input
                  type="number"
                  step="0.01"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  className="form-control"
                  min="0"
                />
              </div>
              
              <div className="form-group">
                <label>Stock</label>
                <input
                  type="number"
                  name="stock"
                  value={formData.stock}
                  onChange={handleChange}
                  required
                  className="form-control"
                  min="0"
                />
              </div>
            </div>
            
            <div className="form-group">
              <label>Product Image</label>
              <div className="image-input-toggle">
                <button 
                  type="button" 
                  className={`btn btn-sm ${!useFileUpload ? 'btn-primary' : 'btn-outline'}`}
                  onClick={toggleImageInputMethod}
                >
                  Image URL
                </button>
                <button 
                  type="button" 
                  className={`btn btn-sm ${useFileUpload ? 'btn-primary' : 'btn-outline'}`}
                  onClick={toggleImageInputMethod}
                >
                  Upload Image
                </button>
              </div>
              
              {useFileUpload ? (
                <input
                  type="file"
                  name="imageFile"
                  onChange={handleChange}
                  accept="image/*"
                  className="form-control"
                />
              ) : (
                <input
                  type="url"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="https://example.com/image.jpg"
                />
              )}
              
              {(previewUrl || formData.imageUrl) && (
                <div className="image-preview">
                  <img 
                    src={previewUrl || formData.imageUrl} 
                    alt="Product preview" 
                    className="preview-image"
                  />
                </div>
              )}
            </div>
            
            <div className="form-group">
              <label>Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="form-control"
                rows="3"
                placeholder="Describe the clothing item"
              ></textarea>
            </div>
            
            <div className="form-buttons">
              <button type="submit" className="btn btn-primary">
                {isEditing ? "Update Item" : "Add Item"}
              </button>
              
              {isEditing && (
                <button type="button" className="btn btn-secondary" onClick={handleCancel}>
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>
        
        <div className="inventory-table">
          <h2>Current Inventory</h2>
          {inventory.length === 0 ? (
            <p>No clothing items in inventory</p>
          ) : (
            <div className="products-grid">
              {inventory.map(item => (
                <div key={item.id} className="product-card">
                  <div className="product-image">
                    <img src={item.imageUrl} alt={item.name} />
                  </div>
                  <div className="product-details">
                    <h3>{item.name}</h3>
                    <div className="product-meta">
                      <span className="product-category">{item.category}</span>
                      <span className="product-size">Size: {item.size}</span>
                    </div>
                    <p className="product-price">${item.price.toFixed(2)}</p>
                    <p className="product-stock">In stock: {item.stock}</p>
                    {item.description && (
                      <p className="product-description">{item.description}</p>
                    )}
                    <div className="product-actions">
                      <button
                        className="btn btn-sm btn-edit"
                        onClick={() => handleEdit(item)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-sm btn-delete"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ClothingShop;
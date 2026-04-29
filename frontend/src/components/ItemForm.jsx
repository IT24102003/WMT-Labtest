import { useState } from "react";

function ItemForm({ initialValues, onSubmit, submitText }) {
  const [formData, setFormData] = useState(
    initialValues || {
      name: "",
      category: "",
      price: "",
      description: "",
      imageUrl: "",
      discountPercentage: "",
      stockQuantity: "",
      warrantyPeriod: "",
      availabilityStatus: "In Stock",
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      price: Number(formData.price),
      discountPercentage: Number(formData.discountPercentage) || 0,
      stockQuantity: Number(formData.stockQuantity) || 0,
    });
  };

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <h2>{submitText}</h2>

      <label>Item Name</label>
      <input name="name" value={formData.name} onChange={handleChange} required />

      <label>Category</label>
      <input name="category" value={formData.category} onChange={handleChange} required />

      <label>Price</label>
      <input
        type="number"
        name="price"
        value={formData.price}
        onChange={handleChange}
        required
      />

      <label>Description</label>
      <textarea
        name="description"
        rows="4"
        value={formData.description}
        onChange={handleChange}
        required
      />

      <label>Image URL</label>
      <input name="imageUrl" value={formData.imageUrl} onChange={handleChange} />

      <label>Discount Percentage</label>
      <input
        type="number"
        name="discountPercentage"
        value={formData.discountPercentage}
        onChange={handleChange}
        min="0"
        max="100"
      />

      <label>Stock Quantity</label>
      <input
        type="number"
        name="stockQuantity"
        value={formData.stockQuantity}
        onChange={handleChange}
        min="0"
      />

      <label>Warranty Period</label>
      <input
        type="text"
        name="warrantyPeriod"
        value={formData.warrantyPeriod}
        onChange={handleChange}
        placeholder="e.g., 12 months"
      />

      <label>Availability Status</label>
      <select name="availabilityStatus" value={formData.availabilityStatus} onChange={handleChange}>
        <option value="In Stock">In Stock</option>
        <option value="Out of Stock">Out of Stock</option>
        <option value="Pre-order">Pre-order</option>
      </select>

      <br />

      <button className="btn primary" type="submit">{submitText}</button>
    </form>
  );
}

export default ItemForm;
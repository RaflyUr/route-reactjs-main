import React, { useState } from "react";

// Data tiruan untuk dropdown
const suppliers = [
  "Aux joyeux ecclésiastiques",
  "Exotic Liquid",
  "Leka Trading",
  "Bigfoot Breweries",
  "Pavlova, Ltd."
];

const categories = [
  "Beverages",
  "Condiments",
  "Confections",
  "Dairy Products",
  "Grains/Cereals"
];

// Style simpel untuk meniru gambar
const formStyle = {
  // --- PERUBAHAN DI SINI ---
  fontFamily: 'sans-serif', // Menggunakan font sans-serif seperti di gambar List Data
  padding: '10px',
};

const inputStyle = {
  margin: '2px 0',
};

const labelStyle = {
  paddingRight: '10px', // Jarak antara label dan input
};

const buttonStyle = {
  border: '2px outset #ccc',
  background: '#f0f0f0',
  padding: '2px 8px',
  cursor: 'pointer',
  marginTop: '10px',
};

export default function ProductForm() {
  const [formData, setFormData] = useState({
    productName: "",
    unit: "",
    price: "",
    supplierName: "Aux joyeux ecclésiastiques",
    categoryName: "Beverages",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Data Disimpan:
      Product Name: ${formData.productName}
      Unit: ${formData.unit}
      Price: ${formData.price}
      Supplier: ${formData.supplierName}
      Category: ${formData.categoryName}
    `);
  };

  return (
    <div style={formStyle}>
      {/* Menghapus fontWeight: 'normal' agar judulnya tebal */}
      <h2 style={{ margin: '0 0 10px 0' }}>Form</h2>

      <form onSubmit={handleSubmit}>
        {/* Menggunakan tabel untuk perataan (alignment) */}
        <table>
          <tbody>
            {/* Product Name */}
            <tr>
              <td style={labelStyle}>
                <label htmlFor="productName">Product Name:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="productName"
                  name="productName"
                  value={formData.productName}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </td>
            </tr>

            {/* Unit */}
            <tr>
              <td style={labelStyle}>
                <label htmlFor="unit">Unit:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="unit"
                  name="unit"
                  value={formData.unit}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </td>
            </tr>

            {/* Price (Label "Proce:" disesuaikan dari gambar) */}
            <tr>
              <td style={labelStyle}>
                <label htmlFor="price">Proce:</label>
              </td>
              <td>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </td>
            </tr>

            {/* Supplier Name */}
            <tr>
              <td style={labelStyle}>
                <label htmlFor="supplierName">Supplier Name:</label>
              </td>
              <td>
                <select
                  id="supplierName"
                  name="supplierName"
                  value={formData.supplierName}
                  onChange={handleChange}
                  style={inputStyle}
                >
                  {suppliers.map((supplier) => (
                    <option key={supplier} value={supplier}>
                      {supplier}
                    </option>
                  ))}
                </select>
              </td>
            </tr>

            {/* Category Name */}
            <tr>
              <td style={labelStyle}>
                <label htmlFor="categoryName">Category Name:</label>
              </td>
              <td>
                <select
                  id="categoryName"
                  name="categoryName"
                  value={formData.categoryName}
                  onChange={handleChange}
                  style={inputStyle}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </td>
            </tr>

          </tbody>
        </table>

        {/* Tombol Simpan */}
        <button type="submit" style={buttonStyle}>
          Simpan
        </button>
      </form>
    </div>
  );
}
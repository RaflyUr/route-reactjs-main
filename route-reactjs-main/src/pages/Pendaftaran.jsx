import { useState } from "react";

// Menggunakan sedikit style inline untuk meniru background abu-abu dan padding
const containerStyle = {
  backgroundColor: '#f0f0f0',
  padding: '20px',
  fontFamily: 'sans-serif'
};

const formStyle = {
  backgroundColor: '#f0f0f0',
  padding: '15px',
};

const inputStyle = {
  padding: '5px',
  margin: '5px 0'
};

const buttonContainerStyle = {
  paddingTop: '10px',
};

export default function Registrasi() {
  // 1. State disesuaikan dengan field pada gambar
  const initialFormData = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    emailId: "",
    mobileNumber: "",
  };
  
  const [formData, setFormData] = useState(initialFormData);

  // Fungsi ini tetap sama, karena bekerja secara dinamis
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 2. Logika submit disederhanakan
  const handleSubmit = (e) => {
    e.preventDefault();
    // Menampilkan semua data yang di-submit
    alert(`Form Submitted!\n
      First Name: ${formData.firstName}
      Last Name: ${formData.lastName}
      Date of Birth: ${formData.dateOfBirth}
      Email id: ${formData.emailId}
      Mobile Number: ${formData.mobileNumber}`);
    
    // Reset form setelah submit
    setFormData(initialFormData);
  };

  // 3. Fungsi untuk handle tombol reset
  const handleReset = () => {
    setFormData(initialFormData);
  };

  return (
    <div style={containerStyle}>
      <h2>HTML Form</h2>

      {/* Menambahkan onReset pada form */}
      <form onSubmit={handleSubmit} onReset={handleReset} style={formStyle}>
        {/* 4. Menggunakan tabel untuk layout yang rapi */}
        <table>
          <tbody>
            <tr>
              <td><label htmlFor="firstName">First Name :</label></td>
              <td>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  style={inputStyle}
                  required
                />
              </td>
            </tr>
            <tr>
              <td><label htmlFor="lastName">Last Name :</label></td>
              <td>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  style={inputStyle}
                  required
                />
              </td>
            </tr>
            <tr>
              <td><label htmlFor="dateOfBirth">Date of Birth :</label></td>
              <td>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  style={inputStyle}
                  required
                />
              </td>
            </tr>
            <tr>
              <td><label htmlFor="emailId">Email id :</label></td>
              <td>
                <input
                  type="email"
                  id="emailId"
                  name="emailId"
                  value={formData.emailId}
                  onChange={handleChange}
                  style={inputStyle}
                  required
                />
              </td>
            </tr>
            <tr>
              <td><label htmlFor="mobileNumber">Mobile Number :</label></td>
              <td>
                <input
                  type="tel"
                  id="mobileNumber"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  style={inputStyle}
                  required
                />
              </td>
            </tr>
          </tbody>
        </table>

        {/* 5. Tombol Submit dan Reset */}
        <div style={buttonContainerStyle}>
          <button type="submit">SUBMIT</button>
          <button type="reset" style={{ marginLeft: '10px' }}>RESET</button>
        </div>
      </form>
    </div>
  );
}
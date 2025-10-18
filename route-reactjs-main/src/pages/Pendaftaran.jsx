import { useState } from "react";

export default function Registrasi() {
  const [formData, setFormData] = useState({
    nama: "",
    username: "",
    email: "",
    telepon: "",
    password: "",
    ulangiPassword: "",
    gender: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.ulangiPassword) {
      alert("Password dan konfirmasi password tidak sama!");
      return;
    }
    alert(`Pendaftaran berhasil!\nNama: ${formData.nama}`);
    setFormData({
      nama: "",
      username: "",
      email: "",
      telepon: "",
      password: "",
      ulangiPassword: "",
      gender: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 via-purple-400 to-indigo-500 p-6">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-3xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Form Pendaftaran
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Nama */}
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">Nama Lengkap</label>
            <input
              type="text"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2.5 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
              placeholder="Masukkan nama lengkap"
            />
          </div>

          {/* Username */}
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2.5 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
              placeholder="Masukkan username"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2.5 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
              placeholder="Masukkan email"
            />
          </div>

          {/* Nomor Telepon */}
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">Nomor Telepon</label>
            <input
              type="tel"
              name="telepon"
              value={formData.telepon}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2.5 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
              placeholder="Masukkan nomor telepon"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2.5 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
              placeholder="Masukkan password"
            />
          </div>

          {/* Ulangi Password */}
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">Ulangi Password</label>
            <input
              type="password"
              name="ulangiPassword"
              value={formData.ulangiPassword}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2.5 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
              placeholder="Masukkan ulang password"
            />
          </div>

          {/* Jenis Kelamin */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              Jenis Kelamin
            </label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 text-gray-700">
                <input
                  type="radio"
                  name="gender"
                  value="Pria"
                  checked={formData.gender === "Pria"}
                  onChange={handleChange}
                  required
                />
                Pria
              </label>
              <label className="flex items-center gap-2 text-gray-700">
                <input
                  type="radio"
                  name="gender"
                  value="Wanita"
                  checked={formData.gender === "Wanita"}
                  onChange={handleChange}
                />
                Wanita
              </label>
              <label className="flex items-center gap-2 text-gray-700">
                <input
                  type="radio"
                  name="gender"
                  value="Lainnya"
                  checked={formData.gender === "Lainnya"}
                  onChange={handleChange}
                />
                Lainnya
              </label>
            </div>
          </div>

          {/* Tombol */}
          <div className="md:col-span-2 mt-4">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2.5 rounded-lg shadow-md hover:opacity-90 transition"
            >
              Daftar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

import React from "react";

// 1. Data untuk tabel (tidak berubah, sudah OK)
const listData = [
  { id: 1, productName: "Chais", unit: "10 boxes x 20 bags", price: 18, supplier: "Exotic Liquid", category: "Beverages" },
  { id: 2, productName: "Chang", unit: "24 - 12 oz bottles", price: 19, supplier: "Exotic Liquid", category: "Beverages" },
  { id: 3, productName: "Chartreuse verte", unit: "750 cc per bottle", price: 18, supplier: "Aux joyeux ecclésiastiques", category: "Beverages" },
  { id: 4, productName: "Côte de Blaye", unit: "12 - 75 cl bottles", price: 264, supplier: "Aux joyeux ecclésiastiques", category: "Beverages" },
  { id: 5, productName: "Guaraná Fantástica", unit: "12 - 355 ml cans", price: 5, supplier: "Refrescos Americanas LTDA", category: "Beverages" },
  { id: 6, productName: "Ipoh Coffee", unit: "16 - 500 g tins", price: 46, supplier: "Leka Trading", category: "Beverages" },
  { id: 7, productName: "Lakkalikööri", unit: "500 ml", price: 18, supplier: "Karkki Oy", category: "Beverages" },
  { id: 8, productName: "Laughing Lumberjack Lager", unit: "24 - 12 oz bottles", price: 14, supplier: "Bigfoot Breweries", category: "Beverages" },
  { id: 9, productName: "Outback Lager", unit: "24 - 355 ml bottles", price: 15, supplier: "Pavlova, Ltd.", category: "Beverages" },
];

export default function ListData() {

  const handleHapus = (id) => {
    alert(`Fungsi HAPUS untuk ID: ${id}`);
  };

  const handleEdit = (id) => {
    alert(`Fungsi EDIT untuk ID: ${id}`);
  };

  return (
    <div className="p-6 font-serif">
        
      <h2 className="text-2xl font-bold mb-2">
        List Data
      </h2>

      {/* PERUBAHAN:
        - 'border-collapse' untuk menggabungkan border sel
        - 'border border-black' untuk border luar tabel
      */}
      <table className="w-full text-left border-collapse border border-black">
        
        <thead className="bg-green-700 text-white">
          <tr>
            {/* 1. Menambahkan 'border border-black' ke setiap header (th) */}
            <th scope="col" className="px-2 py-1 border border-black">Product Name</th>
            <th scope="col" className="px-2 py-1 border border-black">Unit</th>
            <th scope="col" className="px-2 py-1 border border-black text-right">Price ($)</th>
            <th scope="col" className="px-2 py-1 border border-black">Supplier Name</th>
            <th scope="col" className="px-2 py-1 border border-black">Category Name</th>
            <th scope="col" className="px-2 py-1 border border-black text-center">#</th>
          </tr>
        </thead>
        
        <tbody>
          {listData.map((item, index) => (
            // Warna baris genap digelapkan agar border lebih kontras
            <tr 
              key={item.id} 
              className="odd:bg-white even:bg-gray-200"
            >
              {/* 2. Menambahkan 'border border-black' ke setiap sel data (td) */}
              <td className="px-2 py-1 border border-black whitespace-nowrap">{item.productName}</td>
              <td className="px-2 py-1 border border-black whitespace-nowrap">{item.unit}</td>
              <td className="px-2 py-1 border border-black text-right">{item.price}</td>
              <td className="px-2 py-1 border border-black whitespace-nowrap">{item.supplier}</td>
              <td className="px-2 py-1 border border-black whitespace-nowrap">{item.category}</td>
              
              <td className="px-2 py-1 border border-black whitespace-nowrap text-center">
                <button
                  onClick={() => handleHapus(item.id)}
                  className="font-medium text-blue-600 underline mr-3"
                >
                  Hapus
                </button>
                <button
                  onClick={() => handleEdit(item.id)}
                  className="font-medium text-blue-600 underline"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}
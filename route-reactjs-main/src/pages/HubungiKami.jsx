import React from 'react';

const HubungiKami = () => {
  const dummyMapEmbed = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.7196621375997!2d106.84077867499105!3d-6.302381093693245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f2e4e1e1d3e1%3A0x67a3f4e3c9c9f2c1!2sUniversitas%20Indonesia!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid";

  return (
    <div style={{ padding: '20px' }}>
      <h2>Hubungi Kami</h2>
      <hr />
      <div style={{ marginBottom: '30px', display: 'flex', gap: '50px' }}>
        
        <div style={{ flex: 1 }}>
          <h3>Informasi Kontak</h3>
          <p>
            Alamat Istana: Istana Negara Jl. Veteran, RT.2/RW.3, Gambir, Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10110
          </p>
          <p>
            Telepon: (021) 0123456789
          </p>
          <p>
            Email:<a href="mailto:raflyur506@gmail.com">raflyur506@gmail.com</a>
          </p>
          <p>
            Jam Kerja: Senin - Jumat, 08:00 - 17:00 WIB
          </p>
        </div>

        <div style={{ flex: 1 }}>
          <h3>Lokasi Kami</h3>
          <div 
            style={{ 
              width: '100%', 
              height: '350px', 
              border: '1px solid #ccc', 
              borderRadius: '8px'
            }}
          >
            <iframe 
              src={dummyMapEmbed}
              width="100%" 
              height="100%" 
              style={{ border: 0, borderRadius: '8px' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Kantor Dummy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HubungiKami;
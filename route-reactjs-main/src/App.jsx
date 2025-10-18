import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <nav style={{padding:12,display:"flex",gap:12,borderBottom:"1px solid #eee"}}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profil">Profil</Link>
        <Link to="/galeri">Galeri</Link>
        <Link to="/hubungi-kami">Hubungi Kami</Link>
        <Link to="/pendaftaran">Pendaftaran</Link>
      </nav>
      <main style={{padding:24}}>
        <Outlet />
      </main>
    </div>
  );
}

import React, { useState } from 'react'
import Home from './page/Home'
import { FaRegFileAlt, FaRegFileArchive } from 'react-icons/fa';
import { FaHouse, FaBars, FaRegCircleUser, FaCar, FaRepeat } from "react-icons/fa6";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Error from './page/Error';
import Tabel from './template/Tabel';
import Siswa from './page/Siswa';
import Ortu from './page/Ortu';
import ForumSiswa from './page/ForumSiswa';
import ForumOrtu from './page/ForumOrtu';
import ForumSiswa2 from './page/ForumSiswa2';
import Medical from './page/Medical';
import ForumMedical from './page/ForumMedical';
import Invoice from './page/Invoice';
import HasilSiswa from './page/Hasil/HasilSiswa';
import HasilMedical from './page/Hasil/HasilMedical';
import HasilOrtu from './page/Hasil/HasilOrtu';

const App = ({title}) => {
  const data = [
    {
        name: 'Home',
        ic: <FaHouse />,
        to: '/home'
    },
    {
        name: 'Pengetahuan',
        ic: <FaCar />,
        to: '/kendaraan'
    },
    {
        name: 'Orang Tua',
        ic: <FaRegCircleUser />,
        to: '/user'
    },
    {
        name: 'Siswa',
        ic: <FaRegFileArchive />,
        to: '/peminjaman'
    },
    {
        name: 'Staf / Guru',
        ic: <FaRegFileAlt />,
        to: '/pengembalian'
    },

]

function tanggal() {
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let currentDate = `${day}-${month}-${year}`;
    return currentDate

}
const [showProfile, setShowProfile] = useState(false)
const [showSide, setShowSide] = useState(false)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/siswa" element={<Siswa />} />
      <Route path="/ortu" element={<Ortu />} />
      <Route path="/forumSiswa" element={<ForumSiswa />} />
      <Route path="/forumSiswa2" element={<ForumSiswa2 />} />
      <Route path="/forumOrtu" element={<ForumOrtu/>} />
      <Route path="/forumMedical" element={<ForumMedical/>} />
      <Route path="/medical" element={<Medical/>} />
      <Route path="/invoice" element={<Invoice/>} />
      <Route path="/hasilSiswa" element={<HasilSiswa/>} />
      <Route path="/hasilMedical" element={<HasilMedical/>} />
      <Route path="/hasilOrtu" element={<HasilOrtu/>} />
      <Route path="*" element={<Error/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App

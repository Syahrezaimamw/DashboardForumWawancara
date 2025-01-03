import React, { useState } from 'react'
import Dashboard from '../template/Dashboard'
import Tabel from '../template/Tabel'
import { FaAngleRight,FaAngleLeft } from "react-icons/fa6";
import Modal from '../template/Modal';

const Siswa = () => {
    const headTable = [
        { judul: "Nama" },
        { judul: "Kelas" },
        { judul: "Jurusan" },
        { judul: "Nomer HP" },
        { judul: "NIS" },
        { judul: "Orang Tua" },
        { judul: "Asal Sekolah" },
        { judul: "status" },

    ]
    const [openModalSiswa, setModalSiswa] = useState(false)
      // <button onClick={()=>setModalSiswa(true)}>Pendaftaran</button>
    // <button onClick={()=>setModalOrtu(true)}>Orang Tua</button>
    const [openModalOrtu, setModalOrtu] = useState(false)

    return (
        <Dashboard title={'Siswa'}>

            <div className='flex flex-col justify-between w-full  min-h-[700px] xl:min-h-[calc(100vh-130px)]'>


                <Tabel title='Siswa' to='/forumSiswa' headers={headTable} handle={()=>setModalSiswa(true)}>
                    {
                        [1, 2, 3, 4, 5, 6].map((e, i) => (

                            <tr className="bg-white border-b " key={i}>
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                                >

                                    Apip Kece
                                </th>
                                <td className="px-6 py-4 text-gray-900">
                                    XII
                                </td>
                                <td className="px-6 py-4 text-gray-900">
                                    Multimedia
                                </td>

                                <td className="px-6 py-4 text-gray-900">
                                    0895375874137
                                </td>

                                <td className="px-6 py-4 text-gray-900">
                                    032112333
                                </td>
                                <td className="px-6 py-4 text-gray-900">
                                    Joseph
                                </td>
                                <td className="px-6 py-4 text-gray-900">
                                    SMP 22 Tangsel
                                </td>
                                <td className="px-6 py-4 text-gray-900">
                                    Active
                                </td>




                            </tr>
                        ))
                    }
                </Tabel>

                <div className='w-full '>
                    <>
                        {/* Pagination */}
                        <nav
                            className="flex items-center justify-between gap-x-1"
                            aria-label="Pagination"
                        >
                            <button
                                type="button"
                                className="min-h-[38px] min-w-[38px] py-2 px-2.5 group inline-flex jusify-center items-center gap-x-2 text-sm  text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none "
                                aria-label="Previous"
                            >
                              <FaAngleLeft className='group-hover:text-maroon'/>
                                <span aria-hidden="true" className="hidden group-hover:text-maroon sm:block">
                                    Previous
                                </span>
                            </button>
                            <div className="flex items-center gap-x-1">
                                <button
                                    type="button"
                                    className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-900 hover:bg-gray-100 py-2 px-3 text-sm  focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none "
                                >
                                    1
                                </button>
                                <button
                                    type="button"
                                    className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-900 border-t-2 border-maroon hover:bg-gray-100 py-2 px-3 text-sm  focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none "
                                >
                                    2
                                </button>
                                <button
                                    type="button"
                                    className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-900 hover:bg-gray-100 py-2 px-3 text-sm  focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none "
                                >
                                    3
                                </button>
                                <button
                                    type="button"
                                    className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-900 hover:bg-gray-100 py-2 px-3 text-sm  focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none "
                                >
                                    4
                                </button>
                            </div>
                            <button
                                type="button"
                                className="min-h-[38px] min-w-[38px] group py-2 px-2.5 inline-flex jusify-center items-center gap-x-2 text-sm  text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none "
                            >
                                <span aria-hidden="true" className="hidden group-hover:text-maroon sm:block">
                                    Next
                                </span>
                                   <FaAngleRight className='group-hover:text-maroon'/>
                              
                            </button>
                        </nav>


                    </>

                </div>
            </div>
        </Dashboard>
    )
}

export default Siswa

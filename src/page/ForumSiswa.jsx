import React from 'react'
import Forum from '../template/Forum'
import FromSiswa from '../template/FromSiswa'
import FromSiswa2 from '../template/FromSiswa2'
import { Link } from 'react-router-dom'

const ForumSiswa = ({ }) => {
    return (
        <div>
            <Forum title={'Forum Data Peserta Didik'}>
                <div className='max-w-5xl px-4 mx-auto mt-5'>

                    <div className='flex items-center justify-center w-full font-medium '>
                        <div className='flex items-center justify-center gap-2 px-4 py-2 text-sm border-2 rounded-full sm:py-2 border-maroon'> <span className='size-[20px] flex items-center justify-center border-2 rounded-full border-maroon'>1</span> <span>Kompetisi Keahlian </span></div>
                        <div className='border-2'></div>

                        <div className="hidden sm:flex w-[40px] bg-gray-200 h-0.5 dark:bg-gray-300" />

                        <div className='flex items-center justify-center gap-2 px-4 py-2 text-sm text-gray-600 border-2 border-gray-300 rounded-full'> <span className='size-[20px] flex items-center justify-center border-2 rounded-full border-gray-300'>2</span> <span>Tentang Sekolah </span></div>
                    </div>
                    <div className='w-full pb-4 mt-12 border-b-2'>
                        <p className='text-lg font-medium text-gray-600'> Bagian 1</p>
                        <h1 className='mt-1 text-xl font-semibold'>Kompetisi Keahlian</h1>
                    </div>


                    <div className='mt-5'>

                        <from className='w-full text-gray-600 mt-7 '>
                            <div className="mb-4">
                                <label
                                    htmlFor="alasan"
                                    className="block mb-2 font-medium text-md e"
                                >
                                    Alasan Memilih Kompetisi
                                </label>
                                <input
                                    type="text"
                                    id="alasan"
                                    className="shadow-sm bg-white border-[2px] border-gray-300 outline-none  text-sm rounded-md focus:ring-maroon focus:border-maroon block w-full p-2.5 h-12"
                                    placeholder="Pilih Alasan"
                                    required=""
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="pengetahuan"
                                    className="block mb-2 font-medium text-md e"
                                >
                                    Pengetahuan Tentang Kompetisi
                                </label>
                                <input
                                    type="text"
                                    id="pengetahuan"
                                    className="shadow-sm bg-white border-[2px] border-gray-300 outline-none  text-sm rounded-md focus:ring-maroon focus:border-maroon block w-full p-2.5 h-12"
                                    placeholder="Pengetahuan Tentang Kompetisi"
                                    required=""
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="karya kompetisi"
                                    className="block mb-2 font-medium text-md e"
                                >
                                    Apakah Pernah Memiliki Karya Kompetisi
                                </label>
                                <input
                                    type="text"
                                    id="karya kompetisi"
                                    className="shadow-sm bg-white border-[2px] border-gray-300 outline-none  text-sm rounded-md focus:ring-maroon focus:border-maroon block w-full p-2.5 h-12"
                                    placeholder="  Apakah Pernah Memiliki Karya Kompetisi"
                                    required=""
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="motivasi memilih"
                                    className="block mb-2 font-medium text-md e"
                                >
                                    Apa Motivasi Memilih kompetensi tersebut
                                </label>
                                <input
                                    type="text"
                                    id="motivasi memilih"
                                    className="shadow-sm bg-white border-[2px] border-gray-300 outline-none  text-sm rounded-md focus:ring-maroon focus:border-maroon block w-full p-2.5 h-12"
                                    placeholder="  Apa Motivasi memilih kompetensi tersebut"
                                    required=""
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="harapan di kompetensi"
                                    className="block mb-2 font-medium text-md e"
                                >
                                   Apa Harapanmu di Kompetensi Tersebut
                                </label>
                                <input
                                    type="text"
                                    id="harapan di kompetensi"
                                    className="shadow-sm bg-white border-[2px] border-gray-300 outline-none  text-sm rounded-md focus:ring-maroon focus:border-maroon block w-full p-2.5 h-12"
                                    placeholder=" Apa harapanmu di kompetensi tersebu"
                                    required=""
                                />
                            </div>
                            <div className='flex justify-end w-full gap-3 mt-8'>

                                <Link to={'/siswa'}
                                    type="submit"
                                    className="px-5 py-2 text-sm font-semibold text-center bg-white border-2 rounded-md text-maroon border-maroon active:scale-95 focus:outline-none "
                                >
                                    Previous
                                </Link>
                                <Link
                                    to={'/forumSiswa2'}
                                    type="submit"
                                    className="px-5 py-2 text-sm font-semibold text-center text-white rounded-md bg-maroon hover:bg-red-900 active:scale-95 focus:outline-none "
                                >
                                    Next
                                </Link>
                            </div>


                        </from>
                    </div>
                </div>

            </Forum>
        </div>
    )
}

export default ForumSiswa

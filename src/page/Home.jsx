import React, { useState } from 'react'
import Dashboard from '../template/Dashboard'
import Modal from '../template/Modal'
import { FaArrowRight, FaBagShopping, FaBandage, FaBookOpenReader, FaCalendar, FaClock, FaFile, FaLocationPin, FaMap } from "react-icons/fa6";
import img from '../images/isolotion.png'
import Headers from '../components/Headers';
import { FaUser } from 'react-icons/fa';
const Home = () => {

  
    const dataCard = [
        {
            title: 'Graphic Fundamentals - ART101',
            warna: '#E1D2FF'
        },
        {
            title: 'Graphic Fundamentals - ART101',
            warna: '#FDE1AC'
        },
        {
            title: 'Graphic Fundamentals - ART101',
            warna: '#BAE5F5'
        },
        {
            title: 'Graphic Fundamentals - ART101',
            warna: '#CCEFBF'
        },
    ]
    const datas = [
        {
            title: 'Graphic Fundamentals',
            warna: 'rgb(242, 153, 74)',
            warna2: 'rgba(242, 153, 74 ,0.3)',
        },
        {
            title: 'Advanced Web Design',
            warna: 'rgb(104, 175, 78)',
            warna2: 'rgba(104, 175, 78 ,0.3)'
        },
        {
            title: 'Advanced Web Design',
            warna: 'rgb(187, 107, 217)',
            warna2: 'rgba(187, 107, 217 ,0.3)',
        },
        {
            title: 'Digital Photography',
            warna: 'rgb(186, 229, 245)',
            warna2: 'rgba(186, 229, 245 ,0.3)',
        },
        {
            title: '3D Animation',
            warna: 'rgb(242, 153, 74)',
            warna2: 'rgba(242, 153, 74 ,0.3)',

        },
    ]

    return (
        <div>
            <Dashboard title={'Home'}>
                <div className='flex flex-col min-h-screen xl:flex-row lg:w-full'>
                    <div className='w-full xl:w-[70%] h-full xl:pe-5'>
                        <div className='flex items-end w-full px-5 bg-gray-100'>
                            <div className='py-5 space-y-4 ' >
                                <h1 className='text-xl font-semibold'>Get Involved – Join a Club Today!</h1>
                                <p className='text-base text-gray-700'>Explore your interests and meet like-minded students by joining one of our many clubs. Whether you're into sports, arts, or academics, there's a club for you. Find your community!</p>
                                <button className='flex items-center gap-2 px-4 py-[6px] font-medium text-white rounded-sm bg-maroon'>Learn More  <FaArrowRight className='' /></button>
                            </div>
                            <img src={img} alt="" className='hidden lg:block' />
                        </div>
                        <div className='mt-6'>
                            <Headers logo={<FaBookOpenReader />} title='Enrolled Course' />
                            <div className='w-full mt-6'>

                                <div className='flex flex-wrap justify-between gap-4 xl:gap-3 '>
                                    {dataCard.map((e, i) => (
                                        <div key={i} className={`w-full sm:w-[48%] 2xl:w-[200px] rounded-sm  p-4`} style={{backgroundColor:e.warna}}>
                                            <h1 className='text-sm font-semibold text-gray-900 pb-2 border-b-[1px] border-gray-800'>{e.title}</h1>
                                            <ul className='mt-3 space-y-2 text-sm text-gray-700'>
                                                <li className='flex items-center gap-2'><FaUser /> Prof-Smith</li>
                                                <li className='flex items-center gap-2'><FaCalendar /> Monday & Wednesday</li>
                                                <li className='flex items-center gap-2'><FaClock /> 9.00 - 10.30 AM</li>
                                                <li className='flex items-center gap-2'><FaLocationPin /> Design Studio A</li>
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='mt-6'>
                            <Headers logo={<FaFile />} title='Exam Board' />
                            <div className='w-full mt-6'>
                                <div className="relative overflow-x-auto">
                                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                        <table className="w-full text-sm text-left text-gray-500 rtl:text-right ">
                                            <thead className="text-xs text-gray-700 uppercase bg-gray-100 ">
                                                <tr>
                                                    <th scope="col" className="px-6 py-3">
                                                        EXAM NAME
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Course
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        date
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Location
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Status
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className='text-sm text-gray-900 whitespace-nowrap'>
                                                <tr className="border-b odd:bg-white even:bg-[#F4F6F7] ">
                                                    <td
                                                        scope="row"
                                                        className="px-6 py-4 text-gray-900 whitespace-nowrap "
                                                    >
                                                        Graphic Design Fundamentals
                                                    </td>
                                                    <td className="px-6 py-4">ART101</td>
                                                    <td className="px-6 py-4">Jan 25, 2024</td>
                                                    <td className="px-6 py-4">Computer Lab 2</td>
                                                    <td className="px-6 py-4">
                                                        <a
                                                            href="#"
                                                            className="px-1 bg-[#D9EED1] text-[#61A249] hover:underline"
                                                        >
                                                            Completed
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr className="border-b odd:bg-white even:bg-[#F4F6F7] ">
                                                    <td
                                                        scope="row"
                                                        className="px-6 py-4 text-gray-900 whitespace-nowrap "
                                                    >
                                                        Digital Illustration
                                                    </td>
                                                    <td className="px-6 py-4">ART103</td>
                                                    <td className="px-6 py-4">Jan 25, 2024</td>
                                                    <td className="px-6 py-4">Computer Lab 2</td>
                                                    <td className="px-6 py-4">
                                                        <a
                                                            href="#"
                                                            className="px-1 bg-[#D9EED1] text-[#61A249] hover:underline "
                                                        >
                                                            Completed
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr className="border-b odd:bg-white even:bg-[#F4F6F7] ">
                                                    <td
                                                        scope="row"
                                                        className="px-6 py-4 text-gray-900 whitespace-nowrap "
                                                    >
                                                        History of Design Essay
                                                    </td>
                                                    <td className="px-6 py-4">ART101</td>
                                                    <td className="px-6 py-4">Jan 25, 2024</td>
                                                    <td className="px-6 py-4">Computer Lab 2</td>
                                                    <td className="px-6 py-4">
                                                        <a
                                                            href="#"
                                                            className="px-1 bg-[#CBE6F0] text-[#406978] hover:underline "
                                                        >
                                                            Upcoming
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr className="border-b odd:bg-white even:bg-[#F4F6F7] ">
                                                    <td
                                                        scope="row"
                                                        className="px-6 py-4 text-gray-900 whitespace-nowrap "
                                                    >
                                                        UX/UI Design Principles
                                                    </td>
                                                    <td className="px-6 py-4">ART103</td>
                                                    <td className="px-6 py-4">Jan 25, 2024</td>
                                                    <td className="px-6 py-4">Computer Lab 2</td>
                                                    <td className="px-6 py-4">
                                                        <a
                                                            href="#"
                                                            className="px-1 bg-[#CBE6F0] text-[#406978] hover:underline "
                                                        >
                                                            Upcoming
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td
                                                        scope="row"
                                                        className="px-6 py-4 text-gray-900 whitespace-nowrap "
                                                    >
                                                        Product Design Prototype
                                                    </td>
                                                    <td className="px-6 py-4">ART101</td>
                                                    <td className="px-6 py-4">Jan 25, 2024</td>
                                                    <td className="px-6 py-4">Computer Lab 2</td>
                                                    <td className="px-6 py-4">
                                                        <a
                                                            href="#"
                                                            className="px-1 bg-[#CBE6F0] text-[#406978] hover:underline "
                                                        >
                                                            Upcoming
                                                        </a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='w-full xl:w-[30%] mt-6 xl:mt-0 '>

                        <div className='w-full h-[208px]  bg-gray-100 mb-6'>

                        </div>
                        <Headers logo={<FaBagShopping />} title='Home Works' />
                        <div className='w-full mt-6 space-y-3'>
                            {datas.map((e, i) => (
                                <div key={i} className={`p-3  border-[1.8px] rounded-sm`} style={{borderColor:e.warna}}>
                                    <div className='flex items-center justify-between gap-2 pb-2 border-b-2'>

                                        <h1 className='font-medium'>{e.title}</h1>
                                        <div className={`p-2 py-0 text-[10px] `} style={{backgroundColor:e.warna2,color:e.warna}}>Completed</div>
                                    </div>
                                    <div className='mt-2 space-y-2'>

                                    <h1>
                                        Assignment: <span className='font-medium'> Design Project 1</span>
                                    </h1>
                                    <h1>
                                        Due Date: <span className='font-medium'> March 5, 2024</span>
                                    </h1>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </Dashboard>
        </div>
    )
}

export default Home

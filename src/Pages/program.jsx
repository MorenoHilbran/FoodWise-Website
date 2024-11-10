/**
 * Komponen Program menampilkan tiga program utama dari Food Wise
 * Program diwakili oleh komponen ProgramTitle, ProgramWise, dan ProgramDescript
 * ProgramTitle menampilkan judul program
 * ProgramWise menampilkan tiga program utama
 * ProgramDescript menampilkan deskripsi program
 *
 * Komponen ini menggunakan komponen Navbar dan Footer untuk menampilkan navigasi
 * dan informasi footer
 */
import React from 'react'
import ProgramWise from '../components/ProgramWise'
import ProgramDescript from '../components/ProgramDescript'
import ProgramTitle from '../components/ProgramTitle'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';



export function Program(){
    return (
      <div>
        <Navbar />
        <ProgramTitle ProgramName = "Food Wise Program"/>
        <ProgramWise />
        <ProgramDescript />
        <Footer />
       </div>
    )
  }

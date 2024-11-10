import React from 'react'
import Cardwas from './Cardwas'
import Form from '../assets/form.png'
import Location from '../assets/location.png'
import Trash from '../assets/trash.png'
import report from '../assets/report.png'

const Plot = () => {
  return (
    <div className='flex space-between w-3/4 m-auto'>
        <Cardwas
        image={Form}
        title="Mengisi Form"
        description="Pengguna mengisi form yang kami sediakan dengan detail."
        />
        <Cardwas
        image={Location}
        title="Konfirmasi Lokasi"
        description="Pengguna menandai maps yang tersedia dan akan mendapatkan pesan SMS/WA."
        />
        <Cardwas
        image={Trash}
        title="Penangkutan Sampah"
        description="Proses tracking pengangkutan sampah dari lokasi pengguna hingga tempat pembuangan."
        />
        <Cardwas
        image={report}
        title="Laporan Selesai"
        description="Pengguna akan diberitahu bahwa proses pengangkutan telah selesai dan dapat melihat laporan."
        />
    </div>
  )
}

export default Plot;
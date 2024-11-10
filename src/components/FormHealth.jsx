import React from 'react'
import Button from './Button'
const FormHealth=() =>{
    return(
        <div className='w-1/2 m-auto'>

            <label for="umur">Umur</label>
            <input type="number" name="umur" id="umur" className='w-full border-2 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400' />
            <label for="gender">Jenis Kelamin</label>
            <input type="text" name="gender" id="gender" className='w-full border-2 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400' />
            <label for="weight">Berat Badan</label>
            <input type="number" name="weight" id="weight" className='w-full border-2 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400' />
            <label for="height">Tinggi Badan</label>
            <input type="number" name="height" id="height" className='w-full border-2 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400' />
            <label for="activity">Aktivitas Fisik</label>
            <select name="activity" id="activity" className='w-full border-2 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400'>
                <option value="jarang">Aktivitas Jarang (1 minggu 1x)</option>
                <option value="sedang">Aktivitas Sedang (1 minggu 2x)</option>
                <option value="sering">Aktivitas Sering (1 minggu 3x-5x)</option>
            </select>

            <Button 
            nameButton="Submit" 
            />
        </div>
    )
}

export default FormHealth
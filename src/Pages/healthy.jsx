import React from 'react'
import Navbar from '../components/Navbar'
import Stats from '../components/Stats'
import Suggestion from '../components/Suggestion'
import Footer from '../components/Footer';
import FormHealth from '../components/FormHealth';
import { Program } from './program';
import ProgramTitle from '../components/ProgramTitle';

export function Healthy(){
  return (
    <div>
      <Navbar />
      <ProgramTitle ProgramName = "Healthy Form" />
      <FormHealth /> 
      {/* <Stats /> */}
      {/* <Suggestion /> */}
      <Footer /> 
    </div>

  )
}


import { useState } from 'react'
import image from '../assets/disneyLogo.png'
import Btn from './Btn'

export default function header() {
  return (
    <header className='bg-blueDark w-full p-4 flex justify-between items-center'>
      <span>
        <img src={image} className='w-20'></img>
      </span>
      <Btn />
    </header>
  )
}
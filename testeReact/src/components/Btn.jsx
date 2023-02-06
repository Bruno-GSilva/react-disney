import { useState } from 'react'

export default function Btn (){
    return(
        <div className='flex gap-4'>
            <button className='py-2 px-4 bg-blueWhite text-fontWhite rounded-sizebtn text-lg font-semibold'>ASSINE AGORA</button>
            <button className='py-2 px-10 rounded-sizebtn bg-black text-fontWhite text-lg font-sans font-semibold border'>ENTRAR</button>
        </div>
    )
}
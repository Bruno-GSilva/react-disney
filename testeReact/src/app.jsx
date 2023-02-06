import { app } from 'react'
import Header from './components/header'
import TemplateGrid from './components/templateGrid'

export default function App(props){
    return(
    <div className='bg-blueDark w-screen h-screen'>
        <Header/>
        <h1 className='text-fontWhite text-4xl text-center p-4'>Originais Disney+ exclusivos</h1>
        <p className='text-gray-500 text-center mt-2'>Só no Disney+ você vê os melhores filmes, séries, curtas e outros conteúdos inéditos.</p>
        <TemplateGrid/>
    </div>
    )
}
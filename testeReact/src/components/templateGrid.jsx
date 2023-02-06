import image from '../assets/image1.png'
import image1 from '../assets/image2.png'
import image2 from '../assets/image3.png'
import image3 from '../assets/image4.png'
import image4 from '../assets/image5.png'
import image5 from '../assets/image6.png'
import image6 from '../assets/image7.png'
import image7 from '../assets/image8.png'
import image8 from '../assets/image9.png'

export default function templateGrid() {
    return (
        <div className="grid grid-cols-3 gap-6 p-10">
                <img src={image} className='rounded-sizebtn'></img>
                <img src={image1} className='rounded-sizebtn'></img>
                <img src={image2} className='rounded-sizebtn'></img>
                <img src={image3} className='rounded-sizebtn'></img>
                <img src={image4} className='rounded-sizebtn'></img>
                <img src={image5} className='rounded-sizebtn'></img>
                <img src={image6} className='rounded-sizebtn'></img>
                <img src={image7} className='rounded-sizebtn'></img>
                <img src={image8} className='rounded-sizebtn'></img>
        </div>
    )
}
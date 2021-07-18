import React from 'react'
import teaImage from '../../image/awesome-feature.png'
import './Business.css'

export default function Business() {
    return (
        <div className="grid-cols-2" style={{display:'grid'}}>
            <div>
                <h1 className='text'>Lets take your <span style={{color:"#24cdd5"}}>Business</span> to Next Level</h1>
                <p className='details text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad deleniti beatae, dolor hic sit aliquam amet placeat sapiente ab animi aut doloribus tempora minima iure! Tempora maxime quasi quo voluptatibus!</p>

                <button className='btn'>Learn More</button>
            </div>
            <div className='image'>
                <img src={teaImage} alt="" />
            </div>
        </div>
    )
}

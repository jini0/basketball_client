import React from 'react'
import ZoomImage from './ZoomImage'

// 이미지확대
const PZoomImage = ({imgsrc}) => {
    // console.log(imgsrc);
    return (
        // <ZoomImage zoomRate={5} width={350} height={300}/>
        <ZoomImage zoomRate={3} width={560} height={560} imgsrc={imgsrc}/>
    )
}

export default PZoomImage
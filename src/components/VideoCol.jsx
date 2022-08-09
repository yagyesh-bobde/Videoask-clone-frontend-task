import React from 'react'
import video1 from '../assets/video3.mp4'


const VideoCol = () => {
  return (

      <div className='col' style={{ backgroundColor: 'black' }}>
        <video autoPlay loop muted playsInline className='video' >
          <source type='video/mp4' src={video1} />
        </video>

        <div className='play' style={{}}>
          <div className="btn" >
            <img width={150} src='https://spng.pngfind.com/pngs/s/180-1803855_png-file-svg-play-button-svg-transparent-png.png' alt='alskdfjl' />
          </div>
        </div>

      </div>

  )
}

export default VideoCol

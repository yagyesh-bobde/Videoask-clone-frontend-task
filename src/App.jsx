import React, { useEffect, useRef, useState } from 'react'
import './App.css'
import Forum from './components/Forum';
import VideoCol from './components/VideoCol';



const App = () => {

        const [showForum, setshowForum] = useState(false);

        const page1 = useRef(null);
        const page2 = useRef(null);
        const page3 = useRef(null);
        const buttonValues = [
        {
            circle: 'A',
            text: 'Campaign Structure',
            ref: page2
        },
        {
            circle: 'B',
            text: 'Learn Facebook Basics',
            ref: page3
        }
    ]
        const scrolltoele = (ele) => ele.current.scrollIntoView();
        
        useEffect(() => {
            scrolltoele(page1)
        }, []);
        
        return (
       <div ref={page1} className='main-body' id='page1'>
          {/* FIRST PAGE */}
          <div className='main-page'>
            <VideoCol />
              <div  className='col buttonPage' >
                  <div  style={{ width: '50%', marginLeft: '25%', marginTop: '45%' }} >
                      {buttonValues.map((obj) => {
                          const ele =obj.ref
                          return (
                              <div onClick={() => scrolltoele(ele)} className='btn d-flex button my-4' style={{ fontSize: '1.5rem', borderRadius: '200px', backgroundColor: '#ddddde', alignItems: 'center', padding: '2%' }}>
                                  <div className='circle d-inline'>
                                      {obj.circle}
                                  </div>
                                  <div >
                                      <p>{obj.text}</p>
                                  </div>
                              </div>
                          )
                      })}
                  </div>
              </div>
          </div>
          
          <div className='main-page' ref={page2}>
            <VideoCol />
              <div  className='col buttonPage' >
                        {!showForum && <div style={{ width: '50%', marginLeft: '25%', marginTop: '45%' }} >
                            <div className='btn d-flex button newButton' onClick={() => setshowForum(true)}>
                                <p>Download "Campaign Structure Guide"</p>
                            </div>
                        </div>}
                  
                    {showForum &&
                        
                        <Forum />
                    }
                    </div>
          </div>
          
          <div className='main-page' ref={page3}>
            <VideoCol />
            <div  className='col buttonPage' >
               { !showForum && <div style={{ width: '50%', marginLeft: '25%', marginTop: '45%' }} >
                    <div className='btn d-flex button newButton' onClick={() => setshowForum(true)}>
                        <p>Sign up for free webinar</p>
                    </div>
                </div>}
                { showForum && 
                            
                                <Forum />
                                }
            </div>
          </div>
        </div>
          )

  
}

export default App

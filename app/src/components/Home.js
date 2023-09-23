import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchJets } from '../redux/jetfuel/jetfuelSlice'
import JetCard from './JetCard';

const Home = () => {

  const dispatch = useDispatch()

  const { jets, fetch } = useSelector(store => store.jets)
  
  useEffect(() => {
    if(fetch) dispatch(fetchJets())
  }, [dispatch, jets])


  return (
    <div className='home'>
      <div className="search">
        <p>thePlug.app</p>
        <div className='refresh'><i className="fa-solid fa-rotate-right"></i></div>
      </div>
      <hr />
      <div className="row2">
        <p className='menu'><i className="fa-solid fa-bars"></i></p>
        <div className='android'><p className='green-plug'><i className="fa-solid fa-plug"></i></p></div>
      </div>
      <hr />
      {jets && jets.map((jet, index) => (
        <div className='jet' key={index}>
           <JetCard jet={jet} />
        </div>
         ))}
      

    </div>
    
  )
}

export default Home
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
// import { useSelector, useDispatch } from 'react-redux';
// import { setcwidth } from '../redux/jetfuel/jetfuelSlice';

const Carousel = ({ media }) => {
    // console.log(media)
  const carouselRef = useRef();
//   const dispatch = useDispatch();
  const [width, setWidth] = useState(0);
//   const { cwidth } = useSelector((store) => store.jets);

const handleClick = (link) => {
    navigator.clipboard.writeText(link)
    alert('Link copied to clipboard!')
}

const handleDownload = (link) => {
    window.open(link, '_blank')
}


  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
  }, []);

  return (
    <motion.div ref={carouselRef} className='carousel' whileTap={{cursor: "grabbing"}}>
        <motion.div drag='x' dragConstraints={{right: 0, left: -width}} className="inner-carousel">
            {media.map((item, index) => (
                <motion.div key={index} className="item" >
                    <motion.div className="item-top" style={{backgroundImage: `url(${item.cover_photo_url})`}}>
                        <div className="dark">{item.media_type==='video' ? <i className="fa-solid fa-play"></i> : null}</div>
                    </motion.div>
                    <div className="actions">
                        <div className="first"
                        onClick={() => handleClick(item.tracking_link)}
                        title='Copy Link'
                        ><i className="fa-solid fa-link"></i></div>
                        <div className="second"
                        onClick={()=>handleDownload(item.download_url)}
                        title='download'><i className="fa-solid fa-download"></i></div>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    </motion.div>
  );
};

export default Carousel;

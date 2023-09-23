import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { setcwidth } from '../redux/jetfuel/jetfuelSlice';

const Carousel = ({ media }) => {
  const carouselRef = useRef();
  const dispatch = useDispatch();
  const { cwidth } = useSelector((store) => store.jets);

  useEffect(() => {
    if (carouselRef.current) {
      dispatch(setcwidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth));
    }
  }, [dispatch]);

  return (
    <div className="carousel">
      <div
        ref={carouselRef}
        className="outer-carousel"
        onTouchMove={(e) => e.preventDefault()} // Disable default scroll behavior on touch devices
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -cwidth }}
          className="inner-carousel"
        >
          {media &&
            media.map((item, index) => {
              const { cover_photo_url, media_type } = item;
              return (
                <div key={index} className="item">
                  <motion.img src={cover_photo_url} alt={media_type} className="item-image" />
                </div>
              );
            })}
        </motion.div>
      </div>
    </div>
  );
};

export default Carousel;

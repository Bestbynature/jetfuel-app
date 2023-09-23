import React from 'react'
import Carousel from './Carousel'

const JetCard = ({jet}) => {
  return (
    <>
    <div className="row3" >
              <div className="campaign-icon">
                <img src={jet.campaign_icon_url} alt="Campaign Icon" />
              </div>
              <div className="campaign-name">
                <h3>{jet.campaign_name}</h3>
                <p>{jet.pay_per_install} per install</p>
              </div>
            </div>

            <div className="media">
                <Carousel media={jet.medias} />
            </div>
    </>
  )
}

export default JetCard
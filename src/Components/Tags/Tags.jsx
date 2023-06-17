import React from 'react'
import cipa from "../../assets/Medpharm logo Final/certification/cipa_seal.jpg";
import EMS from "../../assets/Medpharm logo Final/certification/EMS.png";
import FDA from "../../assets/Medpharm logo Final/certification/FDA.png";
import mcAfee from "../../assets/Medpharm logo Final/certification/mCafe.png";
import mipa from "../../assets/Medpharm logo Final/certification/mipalogo.png";
const Tags = () => {
  return (
    <div className='mt-5 p-5 w-full flex justify-around'>
        <hr></hr>
        <img className="w-20 h-10" src={cipa} alt="cipa-tag"/>
        <img className="w-26 h-12" src={EMS} alt="EMS-tag"/>
        <img className="w-20 h-10" src={FDA} alt="FDA-tag" />
        <img className="w-20 h-14" src={mcAfee} alt="mcAfee-tag"/>
        <img className="w-20 h-10" src={mipa} alt="mcAfee-tag"/>
        <hr></hr>
    </div>
  )
}

export default Tags
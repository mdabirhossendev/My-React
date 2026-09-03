import React from 'react'
import MiniLink from '../../ui/MiniLink'
import Paragraph from '../../ui/Paragraph'
import Image from '../../ui/Image'
import { ServiceBox } from '../../../dammyData/serviceBox'
import { serviceTeam } from '../../../dammyData/ServiceTeam'
import { serviceRating } from '../../../dammyData/ServiceRating'

const Service = () => {
  return (
      <section>
        <div className="container">
            <div className='flex flex-wrap gap-6 relative -top-35'>
              {
                ServiceBox.map((item,index)=>(
                  <div key={index} className='w-102.5 '>
                    <div className='w-full'>
                      <Image sourch={item.img} />
                    </div>
                  <h5 className='text-[20px] text-[#161C2D] mt-4 mb-3.25 font-semibold font-Quicksand leading-8'>{item.label}</h5>
                  <Paragraph className="text-lg font-normal font-opensans text-[#707070]" text={item.desc} />
                  </div>
                ))
              }
            </div>
            <div>
              <div className=' text-center flex gap-11.25 '>
                {
                  serviceTeam.map((item,index)=>(
                <div key={index} className='flex flex-col  items-center'>
                  <div>
                    <Image sourch={item.logo}/>
                  </div>
                  <h4 className='font-Quicksand font-semibold text-[20px] text-[#161C2D] leading-8'>{item.level}</h4>
                  <Paragraph className="font-normal font-opensans text-[16px] text-[#707070 leading-7]" text={item.desc}/>
                </div>
                  ))
                }
              </div>
            </div>
            <div>
              <div className='my-18.5 flex items-center justify-around w-full h-43.5 bg-[#FEE74A] rounded-xl'>
                {
                  serviceRating.map((item,index)=>(
                <div key={item.id} className='text-center'>
                  <h2 className='text-[#161C2D] font-semibold font-Quicksand text-[40px]'>{item.label}</h2>
                  <Paragraph className="font-normal pt-1 text-[15px] text=[#707070] leading-7 font-opensans" text={item.desc}/>
                </div>
                  ))
                }
              </div>
            </div>
            <div>
              
            </div>
        </div>
      </section>
  )
}

export default Service

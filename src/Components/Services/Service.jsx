import React from 'react'
import Title from '../../UI/Title'
import Container from '../../UI/Container';
import ServiceCard from './ServiceCard';
import { carsInfo } from '../../constants';
const Service = () => {
  return (
   <section className='p-5 md:p-16 dark:bg-slate-700'>
       <Container>
       <Title title="Our Services" subtitle="We offers a wide range of services to help you to find the perfect car for your needs." />

        <div className='flex flex-col md:flex-row gap-5'>
      { 
      carsInfo.map((data,index) => (
                <ServiceCard key={index} data={data}/>
            ))}
       </div>
     </Container>
   </section>
  )
}

export default Service;
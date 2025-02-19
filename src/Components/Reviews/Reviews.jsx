import React from 'react'
import Container from '../../UI/Container'
// import Container from '../../UI/Container'
 import Title from '../../UI/Title'
import ReviewList from './ReviewList'
const Reviews = () => {
  return (
   <section className='mt-7 bg-slate-300 p-5 dark:bg-slate-700 md:p-16'>
         <Container>
            <Title title="What Our Customers Says"  
            subtitle="We're proud of our customer's satisfication."/>
         </Container>
         <ReviewList/>
   </section>
  )
}

export default Reviews
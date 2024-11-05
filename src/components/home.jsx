import React from 'react'
import Leftside from './homepage/leftcomponents/leftside'
import Rightside from './homepage/rightcomponents/rightside'

const Home = () => {
  return (
    <div className='h-[92%] w-[92%] flex bg-[url(https://us.images.westend61.de/0001162942pw/woman-working-on-laptop-at-home-office-top-view-MOMF00640.jpg)]'>
        <Rightside />
        <Leftside />
    </div>
  )
}

export default Home
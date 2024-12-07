import React from 'react'
import Heading from './Heading'
import Card from './Card'


const data = [
    {
      id: 0,
      title: "Calculator",
      disc: "An Html,CSS & Javascript based App for Mathematical operations",
      img: "/project1.png",
      tags: ["Html", "Css", "Javascript"],
    },
]

const Project = () => {
  return (
    <div id='Project' className='container pt-32' >
      <Heading title='My Projects'/>
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) =>(<Card 
        key={el.id}
        title={el.title}
        desc= {el.disc}
        img= {el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default Project

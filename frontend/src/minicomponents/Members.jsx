import React from 'react'

const Members = () => {
    const members = [
        {
            id:1,
            image:"/m1.jpg",
            title:"Alexa",
        },
        {
            id:2,
            image:"/m2.jpg",
            title:"Jon",
        },
        {
            id:3,
            image:"/m3.jpg",
            title:"Michael",
        },
        {
            id:4,
            image:"/m4.jpg",
            title:"Rober",
        },
        {
            id:5,
            image:"/m5.jpg",
            title:"Siri",
        },
        {
            id:6,
            image:"/m6.jpg",
            title:"Tobey",
        },
        {
            id:7,
            image:"/m7.jpg",
            title:"Jhon Mick",
        },
    ]
  return (
    <>
      <section className="members">
        <div className="container">
            <div className="heading_section">
                <h2 className="heading">MEMBERS</h2>
                <p>As the sun dipped below the horizon, casting hues of orange and pink across the sky, the old lighthouse stood sentinel against the crashing waves. Seabirds circled overhead, their cries carried by the salty breeze. Far below, the rugged cliffs gave way to a sandy beach, where children played and dogs chased after sticks. 
                </p>
            </div>
            <div className="members_container">
                {
                    members.map(element=>(
                        <div className="card" key={element.id}>
                            <img src={element.image} alt={element.title}/>
                            <h3>{element.title}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
      </section>
    </>
  )
}

export default Members

import React from 'react'

type Iprops = {
    show: boolean;
}
function Home({show}: Iprops) {

  return (
    <div className={`mt-20 ${show?'ml-72':'ms-3'} transition-all duration-300`}>
      <h1>Home</h1>
    </div>
  )
}

export default Home

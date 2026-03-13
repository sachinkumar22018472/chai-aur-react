import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
  // const [data, setData] = useState([])
  // useEffect(() => {
  //   fetch('https://api.github.com/users/sachinkumar22018472')
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data)
  //     setData(data)
  //   })
  // })


  const data = useLoaderData()

  return (
    <div className='text-center bg-gray-600 text-white p-4 text-3xl'>Github Followers: {data.followers} 
    <img src="https://avatars.githubusercontent.com/u/223615430?v=4" alt="Git Picture" />
    </div>
  )
}

export default Github


export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/sachinkumar22018472")
  return response.json()
}
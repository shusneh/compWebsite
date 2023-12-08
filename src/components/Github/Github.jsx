import React,{useState,useEffect} from 'react'

function GitHub() {
  const [data,setData]=useState([])

  useEffect(()=>{
    fetch(fetch('https://api.github.com/users/shusneh')
    .then(res=>res.json())
    .then(res=>setData(res))
    )

  },[])
    return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )

}

export default GitHub













































// import React, { useEffect, useState } from 'react'


// function Github() {
//     // const data = useLoaderData()
//      const [data, setData] = useState([])
//     useEffect(() => {
//      fetch('https://api.github.com/users/hiteshchoudhary')
//      .then(response => response.json())
//      .then(data => {
//         console.log(data);
//         setData(data)
//      })
//     }, [])
    
//   return (
//     <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
//     <img src={data.avatar_url} alt="Git picture" width={300} />
//     </div>
//   )
// }

// export default Github

// // export const githubInfoLoader = async () => {
// //     const response = await fetch('https://api.github.com/users/hiteshchoudhary')
// //     return response.json()
// // }
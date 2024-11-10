import React from 'react'
import JobListCards from './JobListCards'
import { useState, useEffect } from 'react'

const JobList = ({fullList = false}) => {
//   const jobDetails = fullList ? jobs: jobs.slice(0,3)
  const [jobs, setJobs] = useState([])
  const [showLoading, setShowLoading] = useState(true)
  const limit = fullList ? ``: `?_limit=3`
  useEffect(()=>{
    (async function(){
       const res = await fetch(`http://localhost:8000/jobs${limit}`)
       const fetchData = await res.json()
       setJobs(fetchData)
       setShowLoading(false)
   })()
  },[])

  return (
    <>
    <section className="bg-blue-50 px-4 py-10">
    <div className="container-xl lg:container m-auto">
      <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
       { fullList ? "Browse Jobs" : "Recent Jobs"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {showLoading? (<h2>loading...</h2>) : (<>{jobs.map((job)=>(
        <JobListCards job = {job} key = {job.id}/>
        ))}</>)
        }
        
      </div>
    </div>
  </section>
  </>
  )
}

export default JobList
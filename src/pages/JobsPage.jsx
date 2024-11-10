import React from 'react'
import JobList from '../components/JobList'
const JobsPage = () => {
  const showFullList = true
  return (
    <>
    <JobList fullList = {showFullList}/>
    </>
  )
}

export default JobsPage
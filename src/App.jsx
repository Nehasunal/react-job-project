import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import JobsPage from './pages/JobsPage'
import NotFoundPage from './pages/NotFoundPage'
import JobPage from './pages/JobPage'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '' element = {<MainLayout/>}>
    <Route index element = {<HomePage/>}></Route>
    <Route path = '/jobs' element = {<JobsPage/>}></Route>
    <Route path = '/jobs/:id' element = {<JobPage/>}></Route>
    <Route path = '*' element = {<NotFoundPage/>}></Route>
    </Route>
  )
)

const App = () => {
  return <RouterProvider router = {router} />
}

export default App
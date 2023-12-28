import React , {useEffect}from 'react'
import { Outlet } from 'react-router-dom'

const PresLayout = () => {
  useEffect(() => {
    document.title = 'President | Home'
  }, [])
  return (
    <Outlet/>
  )
}

export default PresLayout
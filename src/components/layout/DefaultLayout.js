import React from 'react'
import CustomCard from '../customCard/CustomCard'
import { Footer } from './Footer'
import { Header } from './Header'

export const DefaultLayout = ({children}) => {
  return (
    <div>
        <Header/>
        <div className="main">{children}</div>
        
        <Footer/>
    </div>
  )
}

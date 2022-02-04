
import { Navbar } from '../navbar/navbar'
import { Outlet } from 'react-router-dom'
import './homelayout.scss'
import {Footer} from '../footer/footer'
import {Suspense} from 'react'
import {Spinner} from '../../tools/spinner/spinner'
export const HomeLayout =() =>{


    return (
      <div className="appMainContainer">
          <Navbar/>
          <Suspense fallback={ <Spinner />}>
            <Outlet/>
          </Suspense>
          <Footer/>
      </div>
    )
}
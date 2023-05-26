import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import './index.scss'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tag top-tags"></span>

        <Outlet />

        <span className="tag bottom-tags"></span>
        <br />
        <span className="bottom-tag-html"></span>
      </div>
    </div>
  )
}

export default Layout

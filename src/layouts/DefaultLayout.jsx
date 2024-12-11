import { Outlet } from "react-router-dom"
import Header from "./Header"

export default function DefaultLayout() {
  return (

    <div>
      <Header />
      <p>Default layout</p>
      <Outlet />
    </div>
  )
}
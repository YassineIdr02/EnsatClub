import LoginForm from "./components/LoginForm"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
//Layouts
import RootLayout from "./layouts/RootLayout"
import PresLayout from "./layouts/PresLayout"
import AdminLayout from "./layouts/AdminLayout"

//Pages
import PageNotFound from "./layouts/PageNotFound"
import RequireAuth from "./components/RequireAuth"
import Test from "./components/test"
import PresidantHome from "./components/CludAdmin/PresidantHome"
import AdminHome from "./components/Admin/AdminHome"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<LoginForm />} />
      <Route element={<RequireAuth />}>
        <Route path="presidant" element={<PresLayout />}>
          <Route index element={<PresidantHome />} />
        </Route>
        <Route path="test" element={<Test />} />
      </Route>
      {/* This route should be protected */}
      <Route path="admin" element={<AdminLayout />}> 
        <Route index element={<AdminHome />} />
          {/*  */}
        <Route />
      </Route>
        <Route path='*' element={<PageNotFound />}/>
    </Route>
  )
)
function App() {
  return (
    <div className="bg-[#DEF2F1] ">
      <RouterProvider router={router} />
    </div>
  )
}

export default App

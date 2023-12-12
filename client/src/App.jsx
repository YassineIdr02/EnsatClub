import LoginForm from "./components/LoginForm"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
//Layouts
import RootLayout from "./layouts/RootLayout"
import PresLayout from "./layouts/PresLayout"

//Pages
import PageNotFound from "./layouts/PageNotFound"
import RequireAuth from "./components/RequireAuth"
import Test from "./components/test"
import AdminHome from "./components/CludAdmin/AdminHome"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<LoginForm />} />
      <Route element={<RequireAuth />}>
        <Route path="presidant" element={<PresLayout/>}>
          <Route index element={<AdminHome/>}/>
        </Route>
        <Route path="test" element={<Test />} />
      </Route>
      <Route path='*' element={<PageNotFound />}></Route>
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

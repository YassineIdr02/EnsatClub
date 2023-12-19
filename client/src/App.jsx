import LoginForm from "./components/LoginForm"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

//Layouts
import RootLayout from "./layouts/RootLayout"
import PresLayout from "./layouts/PresLayout"
import AdminLayout from "./layouts/AdminLayout"


//Pages
import PageNotFound from "./layouts/PageNotFound"
import RequireAuth from "./components/RequireAuth"
import PresidantHome from "./components/CludAdmin/PresidantHome"
import ClubCard from "./components/Admin/ClubCards"
import ClubPage from "./components/Admin/ClubPage"

const ROLES = {
  adm: 'ADMIN',
  pres: 'PRESIDANT',
  us: 'USER'
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<LoginForm />} />

      <Route element={<RequireAuth />} allowedRoles={['PRESIDANT']}>
        <Route path="presidant" element={<PresLayout />}>
          <Route index element={<PresidantHome />} />
        </Route>
      </Route>

      {/* This route should be protected */}
      <Route element={<RequireAuth />} allowedRoles={['ADMIN']}>
        <Route path="admin" element={<AdminLayout />}>
          <Route index  element={<ClubCard />} />
          <Route path="clubs/:clubId" element={<ClubPage />} />
        </Route>
      </Route>

      <Route path='*' element={<PageNotFound />} />
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

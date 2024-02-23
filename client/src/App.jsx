import LoginForm from "./components/LoginForm"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

//Layouts
import RootLayout from "./layouts/RootLayout"
import PresLayout from "./layouts/PresLayout"
import AdminLayout from "./layouts/AdminLayout"
import Unauthorized from "./components/Unauthorized"


//Pages
import PageNotFound from "./layouts/PageNotFound"
import RequireAuth from "./components/RequireAuth"
import PresidentHome from "./components/CludAdmin/PresidentHome"
import ClubCard from "./components/Admin/ClubCards"
import ClubPage from "./components/Admin/ClubPage"
import Members from "./components/Admin/Members"
import SinglePostPage from "./components/Admin/SinglePostPage"
import GuestHome from "./components/Guest/GuestHome"
import Dashboard from "./components/Admin/Dashboard"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<LoginForm />} />

      {/* <Route path="/" element={<GuestHome />}>
        <Route path="clubs" element={<ClubCard />} />
        <Route path="clubs/:clubId" element={<ClubPage />} />
        <Route path="clubs/:clubId/members" element={<Members />} />
        <Route path="clubs/:clubId/:postId" element={<SinglePostPage />} />
      </Route> */}
      
      <Route element={<RequireAuth allowedRoles={["ADMINCLUB"]} />} >
        <Route path="president/:clubId" element={<PresLayout />}>
          <Route index element={<PresidentHome />} />
        </Route>
      </Route>

      {/* This route should be protected */}
      <Route element={<RequireAuth allowedRoles={["ADMIN"]} />} >
        <Route path="admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route index element={<ClubCard />} />
          <Route path="clubs/:clubId" element={<ClubPage />} />
          <Route path="clubs/:clubId/members" element={<Members />} />
          <Route path="clubs/:clubId/:postId" element={<SinglePostPage />} />
        </Route>
      </Route>

      <Route path="unauthorized" element={<Unauthorized />} />
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

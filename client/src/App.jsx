import LoginForm from "./components/LoginForm"
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import RootLayout from "./layouts/RootLayout"
import PageNotFound from "./layouts/PageNotFound"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<LoginForm/>}/>

      <Route path='*' element={<PageNotFound/>}></Route>
    </Route>
  )
)

function App() {
  

  return (
    <div className="bg-[#DEF2F1] ">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App

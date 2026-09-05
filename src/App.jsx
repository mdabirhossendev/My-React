import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider, Routes } from "react-router-dom"
import HomeIndex from "./pages/homepage/Index"
import AboutIndex from "./pages/AboutPage/AboutIndex"
import ServiceIndex from "./pages/ServicePage/ServiceIndex"
import BlogIndex from "./pages/Blogpage/BlogIndex"
import RootLayout from "./components/layout/RootLayout"
import RootError from "./components/common/RootError"
import DashBoradLayout from "./components/layout/DashBoradLayout"
import Dashboard from "./pages/Dashboard"

// const routes = createRoutesFromElements(
//   <>
//       <Route element={<RootLayout />}>
//         <Route path="/" element={<HomeIndex />} />
//         <Route path="/about" element={<AboutIndex />} />
//         <Route path="/services" element={<ServiceIndex />} />
//         <Route path="/blog" element={<BlogIndex />} />
//     </Route>
//   </>
// );
// const router = createBrowserRouter (Routes);


// function App () {
//   return(
//     <RouterProvider router={Router}/>
//   )
// }

// export default App



// const routes = createRoutesFromElements(
//   <>
//       <Route element={<RootLayout />}>
//         <Route path="/" element={<HomeIndex />} />
//         <Route path="/about" element={<AboutIndex />} />
//         <Route path="/services" element={<ServiceIndex />} />
//         <Route path="/blog" element={<BlogIndex />} />
//     </Route>
//   </>
// );
const router = createBrowserRouter(createRoutesFromElements(
  <>
      <Route element={<RootLayout />}>
        <Route path="/" element={<HomeIndex />} />
        <Route path="/about" element={<AboutIndex />} />
        <Route path="/services" element={<ServiceIndex />} />
        <Route path="/blog" element={<BlogIndex />} />
    </Route>
    <Route element={<DashBoradLayout/>}>
      <Route path="/dashboard" element ={<Dashboard/>}/>
    </Route>
         <Route path="/*" element={<RootError/>}/>
  </>
));

function App() {

  return (
     <RouterProvider router={router} />
  )
}

export default App




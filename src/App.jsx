import { Route, Routes } from "react-router-dom"
import HomePage from "./components/home/HomePage"
import BlogPages from "./components/blog/BlogPages"
import AuthorPages from "./components/author/AuthorPages"
import Layout from "./components/layout"
import ScrollToTop from "./components/shared/ScrollToTop"


function App() {
  return (
    <Layout>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/blogs/:slug" element={<BlogPages/>}/>
      <Route path="/authors/:slug" element={<AuthorPages/>}/>
    </Routes>
    </Layout>
  )
}

export default App

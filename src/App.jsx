import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Info from './pages/Info'
import List from './pages/List'
import DefaultLayout from './layouts/DefaultLayout'
import NotFound from './pages/NotFound'
import BlankLayout from './layouts/BlankLayout'
import Index from './pages/posts/Index'
import Show from "./pages/posts/Show"
import Create from './pages/posts/Create'
import { GlobalProvider } from './context/GlobalContext'

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/info" element={<Info />} />
            <Route path="/list" element={<List />} />
            <Route path="posts">
              <Route index element={<Index />} />
              <Route path=":id" element={<Show />} />
              <Route path="create" element={<Create />} />
            </Route>
          </Route>
          <Route element={<BlankLayout />}>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;


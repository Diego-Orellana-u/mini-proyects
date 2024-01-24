import { Suspense, lazy } from 'react'
import './App.css'
import HomePage from './pages/Home'
import { Router } from './Router.jsx'
import Page404 from './pages/404.jsx'
import SearchPage from './pages/Search.jsx'
import { Route } from './Route.jsx'

const LazyAboutPage = lazy(() => import('./pages/About.jsx'))

const appRoutes = [
  {
    path: '/search/:query',
    Component: SearchPage
  }
] 


export default function App() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path='/' Component ={HomePage} />
          <Route path='/about' Component ={LazyAboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}

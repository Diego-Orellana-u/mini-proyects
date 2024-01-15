import { useEffect } from "react"
import { useState } from "react"

const NAVIGATION_EVENT = 'pushstate'

function navigate(href) {
    window.history.pushState({}, '', href)
    const navigationEvent = new Event(NAVIGATION_EVENT)
    window.dispatchEvent(navigationEvent)
}

function HomePage() {
    return (
        <>
            <h1>Home</h1>
            <p>This is an example page to create a React Router from scratch</p>
            <button onClick={() => navigate('/about')}>Go to About Us</button>
        </>
    )
}

function AboutPage() {
    return (
        <>
            <h1>About</h1>
            <img src="https://pbs.twimg.com/profile_images/1613612257015128065/oA0Is67J_400x400.jpg" />
            <p>This is an example page to create a React Router from scratch</p>
            <button onClick={() => navigate('/')}>Go to Home </button>
        </>
    )
}

export default function App() {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)

    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname)
        }

        window.addEventListener(NAVIGATION_EVENT, onLocationChange)
        window.addEventListener('popstate', onLocationChange)
        return () => {
            window.removeEventListener(NAVIGATION_EVENT, onLocationChange)
            window.removeEventListener('popstate', onLocationChange)
        }
    },[])
    return (
        <main>
            {currentPath === '/' && <HomePage />}
            {currentPath === '/about' && <AboutPage />}
        </main>
    )
}
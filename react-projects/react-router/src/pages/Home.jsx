import { Link } from "../Link.jsx"

export default function HomePage () {
    return (
      <div>
        <h1>Home</h1>
        <p>Welcome to the home of this React Router!</p>
        <Link to='/about'>Go To About</Link>
      </div>
    )
  }
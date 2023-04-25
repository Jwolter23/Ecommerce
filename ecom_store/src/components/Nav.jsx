import { Link } from 'react-router-dom'
export default function Nav () {

    return (
        <div className="navBar">
            <Link to="/" className='links'> Home </Link>
            <Link to="/men" className='links'> Men </Link>
            <Link to="/women" className='links'> Women </Link>
            <Link to="/account" className='links'> Account </Link>

        </div>
    )
}
import { NavLink, Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import searchIcon from "../NavBar/img/searchIcon.svg"


const NavBar = () => {
    return (
        <nav>
            <div className="NavBar">
            <img src={searchIcon} alt="search Icon" className="searchIcon" />
            <Link to='/'>
            <h3 className="NavTitle">{'BeautyBrand'}</h3>
            </Link>
            <Link to='/Cart' className="cartIcon"><CartWidget/></Link>
            </div>
            <div className="NavBarOptions">
                <NavLink to={`/category/skincare`} className={({isActive}) => isActive ? 'NavBarOptionsButtonActive' : 'NavBarOptionsButton'}>SkinCare</NavLink>
                <NavLink to={`/category/haircare`} className={({isActive}) => isActive ? 'NavBarOptionsButtonActive' : 'NavBarOptionsButton'}>HairCare</NavLink>
                <NavLink to={`/category/bodycare`} className={({isActive}) => isActive ? 'NavBarOptionsButtonActive' : 'NavBarOptionsButton'}>BodyCare</NavLink>
            </div>
        </nav>
    )
}

export default NavBar
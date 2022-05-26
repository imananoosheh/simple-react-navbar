import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar(){
    return (<nav className="navbar">
        <Link className="site-title" to="/">HOME</Link>
        <ul>
            <CustomLink to={"/about"}>ABOUT</CustomLink>
            <CustomLink to={"/projects"}>PROJECTS</CustomLink>
        </ul>
    </nav>)
}

function CustomLink({to, children, ...props}:{to:string; children:string;}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end:true})
    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )

}
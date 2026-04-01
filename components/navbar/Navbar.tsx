import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import { ActiveLink } from "../active-link/ActiveLink";

const navItems = [
  { path: '/about', text: 'About' },
  { path: '/pricing', text: 'Pricing' },
  { path: '/contact', text: 'Contact' },
];

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
        <Link href={'/'} className="flex items-center">
          <HomeIcon className="mr-2" />
          <span>Home</span>
        </Link>
        <div className="flex flex-1"></div>
        {/* reemplzar <a> por <Link> */}
        {/* de esta forma se evita refresh de la pagina, porque el Link se traduce en una etiqueta <a> pero le adicion código JS */}
        {
          navItems.map(navItem => (
            <ActiveLink key={ navItem.path } { ...navItem } />
          ))
        }
    </nav>
  )
}

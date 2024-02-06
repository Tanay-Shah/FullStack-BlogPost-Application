import React from 'react'
import Link from 'next/link'
import styles from './navbar.module.css'
import Sitetheme from '../siteTheme/Sitetheme';


const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/Contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];


const Navbar = () => {
  return (
<div className={styles.container}> 
     <Link href="/" className={styles.logo}>Navbar</Link>
     <div className={styles.links}>
     <Sitetheme/>
     {links.map((e)=>{
      return(<Link key={e.id} href={e.url}>{e.title}</Link>)
     })}
     <button className={styles.logout}>LOGOUT</button>
     </div>     
    </div>
    
  )
}

export default Navbar
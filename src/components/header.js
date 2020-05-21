import React from "react"
import { Link,graphql,useStaticQuery} from "gatsby"
import headerStlyes from './header.module.scss'
export default function Header() {
	const data = useStaticQuery(graphql`{
    	site {
      		siteMetadata {
        		title
      		}
    	}
  	}
  `)

  return (
  	<header className={headerStlyes.header}>
  	<h1>
  		<Link className={headerStlyes.title} to="/">
  			{data.site.siteMetadata.title}
  		</Link>
  	</h1>
    <nav>
    	<ul className={headerStlyes.navList}>
    		<li>
	     		<Link className={headerStlyes.navItem} activeClassName={headerStlyes.activeNavItem} to="/">Home</Link>
	     	</li>
	      	<li>
	      		<Link className={headerStlyes.navItem} activeClassName={headerStlyes.activeNavItem} to="/blog/">Blog</Link>
	      	</li>
	      	<li>
	      		<Link className={headerStlyes.navItem} activeClassName={headerStlyes.activeNavItem} to="/about/">About</Link>
	      	</li>
	      	<li>
	      		<Link className={headerStlyes.navItem} activeClassName={headerStlyes.activeNavItem} to="/contact/">Contact</Link>
	      	</li>
      	</ul>
    </nav>
    </header>
  )
}


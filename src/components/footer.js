import React from "react"
import { Link,graphql,useStaticQuery} from "gatsby"

const Footer = () => {
const data = useStaticQuery(graphql`{
    	site {
      		siteMetadata {
        		author
      		}
    	}
  	}
  `)

  return (
    	<div>
      	<p>Created By {data.site.siteMetadata.author}c 2020</p>
    	</div>
  	)
}

export default Footer
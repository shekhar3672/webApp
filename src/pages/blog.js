import React from "react"
import Layout from "../components/layout"
const Blog = () => {
  return (
    	<Layout>
	      	<h1>First Blog !</h1>
	      	<p>This is our first blog.</p>
	      	<p>Now you can spot the use of the 'react' import! But wait. You’re writing JSX, not pure HTML and JavaScript. How does the browser read that? The short answer: It doesn’t. Gatsby sites come with tooling already set up to convert your source code into something that browsers can interpret.</p>
    	</Layout>
  	)
}

export default Blog
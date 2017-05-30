import React from "react"

import LatestPosts from "../../components/LatestPosts"
import Page from "../Page"

const Homepage = (props) => {
  return (
    <Page { ...props }>
      <LatestPosts layout="Lesson" />
    </Page>
  )
}

export default Homepage

import React, { PropTypes } from "react"

import LatestPosts from "../../components/LatestPosts"
import Page from "../Page"

import styles from "./index.css"

const Post = (props) => {
  // it's up to you to choose what to do with this layout ;)
  const pageDate = props.head.date ? new Date(props.head.date) : null

  return (
    <Page
      { ...props }
      header={
        <div>
          <header className={ styles.header }>
            {
              pageDate &&
              <time key={ pageDate.toISOString() }>
                { pageDate.toDateString() }
              </time>
            }
          </header>
        </div>
      }
    >
      { props.children }
      <hr />
      { props.feature }
    </Page>
  )
}

Post.propTypes = {
  head: PropTypes.object.isRequired,
  children: PropTypes.node,
  feature: PropTypes.node,
}

Post.defaultProps = {
  feature: <LatestPosts />
}

export default Post

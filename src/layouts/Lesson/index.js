import React from "react"
import PropTypes from "prop-types"
import Post from "../Post"
import LatestPosts from "../../components/LatestPosts"
import defaultHero from "./default-hero.jpg"

const OtherResources = ({ links }) => {
  if (links.length > 0) {
    const linkElements = links.map((link) =>
      <li key={ link }><a href={ link }>{ link }</a></li>
    )

    return (
      <div>
        <h2>Other Resources</h2>
        <ul>{ linkElements }</ul>
      </div>
    )
  }

  return null
}

OtherResources.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string).isRequired
}

OtherResources.defaultProps = {
  links: []
}

const LessonLink = ({ lesson }) => {
  return (
    <div>
      <h2>Lesson</h2>
      <a href={ lesson } >{ lesson }</a>
    </div>
  )
}

LessonLink.propTypes = {
  lesson: PropTypes.string.isRequired
}

const Lesson = (properties) => {
  const feature = <LatestPosts layout="Lesson" />
  properties.head.hero = defaultHero;

  return (
    <Post { ...properties } feature={ feature } >
      <LessonLink lesson={ properties.head.lesson } />
      <OtherResources links={ properties.head.links } />
    </Post>
  )
}

Lesson.propTypes = {
  head: PropTypes.object.isRequired
}

export default Lesson

import React from "react"
import Course from "./Course"
import { graphql, useStaticQuery } from "gatsby"
import styles from "../../css/courses.module.css"
import Title from "../Title"

const query = graphql`
  {
    allStrapiCourse(sort: { fields: published, order: DESC }) {
      nodes {
        id
        title
        url
        size
        published
        image {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

const Courses = () => {
  const {
    allStrapiCourse: { nodes: courses },
  } = useStaticQuery(query)
  console.log(courses)
  return (
    <section className={styles.courses}>
      <Title title="all" subtitle="courses" />
      <div className={styles.center}>
        {courses.map(item => {
          return <Course key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}

export default Courses

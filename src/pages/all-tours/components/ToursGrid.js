import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"
import { graphql, useStaticQuery, Link } from "gatsby"

const ToursGrid = () => {
  const data = useStaticQuery(graphql`
    query AllTours {
      allHygraphItemTours {
        nodes {
          id
          slug
          tourTitle
          tourStatus
          tourPrice
          tourImage {
            imageAltText
            galleryImage {
            url
              gatsbyImageData(
                quality: 60
                
               
              )
            }
          }
        }
      }
    }
  `)

  return (
    <div className="tours">
      <div className="gallery">
        <Container id="max">
          <Row>
            {data.allHygraphItemTours.nodes.map(tour => {
             

              return (
                <Col sm={4} key={tour.id}>
                  <div className="data-wrapper">
                    <Link to={`/${tour.slug}`}>
                      <div className="image">
                       
                          <img
                            src={tour.tourImage.galleryImage.url}
                            alt={tour.tourImage.imageAltText || tour.tourTitle}
                            className="gatsby-image-wrapper-constrained"
                          />
                     

                        <div className="absolute">
                          <h3>{tour.tourTitle}</h3>
                          <h4>{tour.tourPrice}</h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                </Col>
              )
            })}
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default ToursGrid

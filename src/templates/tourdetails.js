import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Row, Col, Carousel } from "react-bootstrap"
import { graphql } from "gatsby"
import "./details.scss"

import Layout from "../components/layout"
import Seo from "../components/seo"

export const query = graphql`
  query ToursDeferredQuery($slug: String!) {
    hygraphItemTours(slug: { eq: $slug }) {
      id
      slug
      tourTitle
      tourStatus
      tourPrice
      tourLocation

      tourDescription {
        html
      }

      descPrice {
        html
      }

      tourGallery {
        id
        imageAltText
        imageTitleText
        galleryImage {
        url
          gatsbyImageData(
            quality: 70
            placeholder: DOMINANT_COLOR
            
          )
        }
      }

      tourDuration {
        html
      }

      tourUtilities {
        html
      }

      tourIncludes {
        html
      }
    }
  }
`

const ToursDeferred = ({ data }) => {
  const tour = data.hygraphItemTours

  return (
    <Layout>
      <Seo title={`${tour.tourTitle} at ${tour.tourLocation}`} />

      <div className="tours-deferred">
        <Row>
          {/* IMAGE GALLERY */}
          <Col sm={{ span: 7, order: "first" }} xs={{ order: "first" }} id="right">
            <div className="image-gallery">
              <Carousel fade>
                {(tour.tourGallery || []).map(item => {
                 

                  return (
                    <Carousel.Item key={item.id}>
                     
                        <img
                          src={item.galleryImage.url}
                          alt={item.imageAltText || tour.tourTitle}
                          title={item.imageTitleText}
                          className="gatsby-image-wrapper"
                        />
                     
                    </Carousel.Item>
                  )
                })}
              </Carousel>
            </div>
          </Col>

          {/* TOUR CONTENT */}
          <Col sm={{ span: 5, order: "last" }} xs={{ order: "last" }} id="left">
            <div className="text-field">
              <h2>{tour.tourTitle}</h2>
              <h4>{tour.tourLocation}</h4>

              <div
                dangerouslySetInnerHTML={{
                  __html: tour.tourDescription.html,
                }}
              />
            </div>

            <div className="contact-cta tours">
              <h3>Tour Prices</h3>
              <div dangerouslySetInnerHTML={{ __html: tour.descPrice.html }} />
            </div>

            <div className="contact-cta tours">
              <h3>Tour Duration</h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: tour.tourDuration.html,
                }}
              />
            </div>

            <div className="contact-cta tours">
              <h3>Tour Includes</h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: tour.tourIncludes.html,
                }}
              />
            </div>

            <div className="contact-cta tours">
              <h3>What to Bring</h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: tour.tourUtilities.html,
                }}
              />
            </div>
               <div className="contact-cta tours">
              <h3>Book This Tour</h3>
              <div>
                  <div class="elfsight-app-b6fb1f22-8dcd-4251-90dc-4f61508e8e1e" data-elfsight-app-lazy></div>
                 </div>
              
            </div>
          </Col>
        </Row>
      </div>
    </Layout>
  )
}

export default ToursDeferred

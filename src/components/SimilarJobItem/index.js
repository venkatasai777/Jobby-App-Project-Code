import {Link, withRouter} from 'react-router-dom'

import {BsFillBriefcaseFill, BsStarFill} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'
import './index.css'

const SimilarJobItem = props => {
  const {jobDetails, onclickLinkSimilarJobs} = props
  const {
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    rating,
    title,
    id,
  } = jobDetails

  const onclickLink = async () => {
    onclickLinkSimilarJobs()
    window.scrollTo(0, 0)
  }

  return (
    <li className="similar-job-item">
      <Link
        to={`/jobs/${id}`}
        onClick={onclickLink}
        style={{
          outline: 'none',
          border: 'none',
          backgroundColor: 'transparent',
          textDecoration: 'none',
        }}
      >
        <div className="logo-title-location-container">
          <div className="logo-title-container">
            <img
              src={companyLogoUrl}
              alt="similar job company logo"
              className="company-logo"
            />
            <div className="title-rating-container">
              <h1 className="title-heading">{title}</h1>
              <div className="rating-container">
                <BsStarFill className="rating-icon" />
                <p className="rating-heading">{rating}</p>
              </div>
            </div>
          </div>
          <h1 className="description-heading">Description</h1>
          <p className="description-text">{jobDescription}</p>
          <div className="location-employee-container">
            <div className="location-container">
              <MdLocationOn className="location-icon" />
              <p className="location-heading">{location}</p>
            </div>
            <div className="employee-type-container">
              <BsFillBriefcaseFill className="brief-case-icon" />
              <p className="employee-type-heading">{employmentType}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}
export default withRouter(SimilarJobItem)

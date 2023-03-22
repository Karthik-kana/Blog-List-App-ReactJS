// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props
  console.log(blogsList)
  return (
    <div className="user-details-bloglist-container">
      <div className="user-details-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
          className="profile"
          alt="profile"
        />
        <h1 className="user-name">Wade Warren</h1>
        <p className="user-designation">Software Developer at UK</p>
      </div>
      <ul className="unordered-booklists">
        {blogsList.map(eachBlog => (
          <BlogItem blogDetails={eachBlog} key={eachBlog.id} />
        ))}
      </ul>
    </div>
  )
}

export default BlogList

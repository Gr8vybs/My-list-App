
const ListComponent = ({ posts }) => {
  
  return (
    <div className="list-component">
      <div className="post-wrapper">
        {posts && posts.map(post => (
        <div key={post.id} className="post-container">
         <h3 className="post-title"> {post.title}</h3>
         <p className="post-body"> {post.body}</p>
        </div>
        ))}
      </div>
    </div>
    
    )
}

export default ListComponent;
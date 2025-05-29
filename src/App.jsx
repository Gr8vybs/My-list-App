
import useFetch from './UseFetch';

import ListComponent from './ListComponent';

function App() {
  
  const { error, isLoading, data: posts } = useFetch('https://jsonplaceholder.typicode.com/posts');
  
  return (
    <div className="App">
     <h2 className="title">List of post from jsonplaceholder</h2>
        {isLoading && <h3 className="loading">loading...</h3>}
        {error && <h3 className="error">Error: { error }</h3>}
        {posts && <ListComponent posts={posts} />}
    </div>
  )
}

export default App;
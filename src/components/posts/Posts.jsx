import './posts.scss';
import { posts } from '../../mockData';
import Post from '../post/Post';

function Posts() {


  return (
    <div className='posts'>
      {posts.map(post => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  )
}

export default Posts

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchComments } from '../features/postsSlice';

const Posts = () => {
  const posts = useSelector(state => state.posts.posts);
  const dispatch = useDispatch();

  return (
    <div className='posts'>
      <h3>Posts</h3>
      {posts.map(post => (
        <div key={post.id} className='post-item'>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
          <button onClick={() => dispatch(fetchComments(post.id))}>Ver Comentarios</button>
          {post.comments.length > 0 && (
            <ul>
              {post.comments.map(comment => (
                <li key={comment.id}>{comment.body}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Posts;

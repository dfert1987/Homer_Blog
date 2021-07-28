import React, {useState, useEffect} from 'react';
import './CommentsSection.css';

export default function Comments(props) {
  const [currentBlogComments, setCurrentBlogComments] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/remarks', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((response) => response.json())
      .then((result) => setAllComments(result));
  }, []);

  const setAllComments = (result) => {
    const allComments = result.filter(
      (comment) => comment.blogID === props.comments.blog.id
    );
    setCurrentBlogComments(allComments);
  };

  // const displayComments = () => {
  //   currentBlogComments.forEach((remark) => {
  //     console.log(remark.comment);
  //     return (
  //       <div>
  //         <p>{remark.comment}</p>
  //       </div>
  //     );
  //   });
  // };

  return (
    <div className='all-comments'>
      {currentBlogComments.map((remark) => {
        console.log(remark.comment)
        return <p>{`${remark.comment}`}</p>;
      })}
    </div>

    /* these are going to need to be their own component 'comment' to render optimistically */
    /* <button className={uv_button_class} onClick={setUVColor}>
            <i className='far fa-thumbs-up'></i>
            {upvote}
          </button>
          <button className={dv_button_class} onClick={setDVColor}>
            <i class='far fa-thumbs-down'></i>
            {downvote}
          </button>
        </div> */
    /* this is going to have to be it's own component 'replies' inwith component*/
    /* {showReplyInput === true ? (
          <div className='reply-container'>
            <form className='reply-form'>
              <textarea
                className='reply-input'
                name='reply'
                rows='3'
                placeholder='Reply to user...'
              ></textarea>
              <div className='reply-submit-container'>
                <Button className='submit-reply'>REPLY</Button>
              </div>
            </form>
          </div>
        ) : null}
      </div> */
  );
}

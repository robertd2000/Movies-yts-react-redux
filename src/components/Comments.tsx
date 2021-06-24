import { useState } from 'react';

type CommentsType = {
  id: number | string;
};

type CommentObj = {
  id: string;
  comments: CommentListItem[];
};

type CommentListItem = {
  id: number;
  text: string;
  date: string;
};

export const Comments: React.FC<CommentsType> = ({ id }) => {
  const lsList: any = localStorage.getItem('comments') || [];
  let list = lsList.length > 0 ? JSON.parse(lsList) : [];
  const [commentsList, setCommentsList] = useState(list);
  const [value, setValue] = useState('');
  const currentMovieComments = commentsList.find(
    (c: CommentObj) => c.id === id
  ) || {
    id,
    comments: [],
  };

  const setNewComments = (text: string) => {
    const newComment = {
      id: id,
      comments: [
        ...currentMovieComments.comments,
        {
          id: Math.floor(Math.random() * 1000),
          text,
          date: new Date().toJSON().slice(0, 10).replace(/-/g, '/'),
        },
      ],
    };
    const newCommentsList = commentsList.filter((c: CommentObj) => {
      console.log(c);
      return c.id !== id;
    });
    setCommentsList([...newCommentsList, newComment]);
    localStorage.setItem(
      'comments',
      JSON.stringify([...newCommentsList, newComment])
    );
    setValue('');
  };

  const deleteComment = (commentId: number) => {
    const newCommentsList = commentsList.filter((c: CommentObj) => c.id !== id);
    let comList = newCommentsList ? newCommentsList : { id: id, comments: [] };
    const newCurrentCommentList = currentMovieComments.comments.filter(
      (c: CommentListItem) => c.id !== commentId
    );

    setCommentsList([...comList, { id, comments: newCurrentCommentList }]);
    localStorage.setItem(
      'comments',
      JSON.stringify([...comList, { id, comments: newCurrentCommentList }])
    );
  };

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const enterChange = (e: any) => {
    if (e.key === 'Enter') {
      return setNewComments(value);
    }
  };

  return (
    <div className="comments">
      <div className="webflow-style-input">
        <input onChange={inputHandler} onKeyPress={enterChange} type="text" />
        <button
          className="send-comment-button"
          onClick={() => setNewComments(value)}
        >
          Send
        </button>
      </div>

      {currentMovieComments
        ? currentMovieComments.comments.map((comment: CommentListItem) => {
            return (
              <div className={'comment'} key={comment.id + Math.random()}>
                <div className="comment-header">
                  <div> {comment.date} </div>
                  <div
                    onClick={() => deleteComment(comment.id)}
                    className="close-span"
                  >
                    X
                  </div>{' '}
                </div>
                comment #{comment.id}
                <div>{comment.text}</div>
              </div>
            );
          })
        : 'No comments'}
    </div>
  );
};

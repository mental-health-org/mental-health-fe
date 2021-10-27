import React, {useState} from 'react';
import '../../styles/comment.scss'
import { Response } from '../../interfaces';
import PersonIcon from '@mui/icons-material/Person';

interface CommentProps {
  responseText: Response;
}

const Comment: React.FC<CommentProps> = ({ responseText }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  return (
    <div className='Comment--container'>
    {!isEditing && (
      <>
        {(<span className="user--span"><PersonIcon/><p className="detail person-title"> {responseText.user && <p>{responseText.user.title}</p> }
        </p></span>)}
        <p>{responseText['created_at'].slice(0,10)}</p>
        <p className='CommentText--p'>{responseText.body}</p>
      </>
      )
    }
  </div>
    )

}

export default Comment;


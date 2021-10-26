import {Link} from 'react-router-dom';

interface ErrorPageProps {
  type: number
}

const Error: React.FC<ErrorPageProps> = (props) => {
  let message;
  if (props.type === 404) {
    message = (
      <div className="ErrorPage">
        <h2 className='ErrorMessage--h2'>Page Not Found</h2>
        <Link to='/'>
          <button className='HomeButton--button'>Home</button>
        </Link>
      </div>
    );
  } else if (props.type > 400) {
    message = (
      <div className="ErrorPage">
        <h2 className='ErrorMessage--h2'>Oops something went wrong, please try again later.</h2>
        <Link to='/'>
          <button className='HomeButton--button'>Home</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="Error">
      <p>{message}</p>
    </div>
  );
};

export default Error;
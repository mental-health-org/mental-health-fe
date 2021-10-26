import {Link} from 'react-router-dom';
import somethingIsWrong from '../../images/something_is_wrong.png'
import pageNotFound from '../../images/page_not_found.png'
import '../../styles/ErrorPage.scss'

interface ErrorPageProps {
  type: number
}

const Error: React.FC<ErrorPageProps> = (props) => {
  let message;
  if (props.type === 404) {
    message = (
      <div className="ErrorPage">
        <img className='PageNotFound--image' src={pageNotFound} alt="Page not found Icon" />
        <h2 className='ErrorMessage--h2'>Page Not Found</h2>
        <Link to='/'>
          <button className='HomeButton--button'>Home</button>
        </Link>
      </div>
    );
  } else if (props.type > 400) {
    message = (
      <div className="ErrorPage">
        <img className='SomethingWrong--image' src={somethingIsWrong} alt="Something is wrong icon" />
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
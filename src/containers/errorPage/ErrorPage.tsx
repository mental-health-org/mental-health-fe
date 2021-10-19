interface ErrorPageProps {
  type: number
}

const Error: React.FC<ErrorPageProps> = (props) => {
  let message;
  if (props.type === 404) {
    message = (
      <div className="ErrorPage">
        <h2>Page Not Found</h2>
      </div>
    );
  } else if (props.type > 400) {
    message = (
      <div className="ErrorPage">
        <h2>Oops something went wrong.</h2>
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
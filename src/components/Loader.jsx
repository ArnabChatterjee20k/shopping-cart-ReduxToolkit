import Spinner from 'react-bootstrap/Spinner';

function Loader() {
  return (
    <div>    
        <Spinner animation="border" role="status" style={{marginTop:"5rem",marginInline:"auto"}}>
        <span className="visually-hidden">Loading...</span>
        </Spinner>
    </div>
  );
}

export default Loader;
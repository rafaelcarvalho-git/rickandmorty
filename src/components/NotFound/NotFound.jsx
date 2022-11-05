import './NotFound.css';
import { BsExclamationCircle } from 'react-icons/bs';

function NotFound() {
    return (
      <div className="not-found mx-auto my-5 rounded shadow align-items-center d-flex">
        <p className="my-auto mx-auto align-self-center"><BsExclamationCircle className="me-2" />No characters found!</p>
      </div>
    )
}

export default NotFound;
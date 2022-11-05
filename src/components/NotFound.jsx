import './NotFound.css'

function NotFound() {
    return (
      <div className="alert alert-warning alert-dismissible fade show mx-auto" role="alert">
        No characters found!
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    )
}

export default NotFound;
import './NotFound.css'

function NotFound() {
    return (
      <div class="alert alert-warning alert-dismissible fade show mx-auto" role="alert">
        No characters found!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    )
}

export default NotFound;
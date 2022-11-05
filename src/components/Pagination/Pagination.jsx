import './Pagination.css'
import ReactPaginate from 'react-paginate';

function Pagination({info, pageNumber, setPageNumber}) {
    return (
        <ReactPaginate className="pagination justify-content-center mx-auto gap-1" 
            pageCount={info?.pages} 
            nextLabel = "Next"
            nextClassName ="btn btn-pg"
            previousLabel = "Prev"
            previousClassName ="btn btn-pg"
            pageClassName ="btn-pg rounded"
            pageLinkClassName ="hid btn text-white rounded"
            activeClassName = "link-active"
            nextLinkClassName = "link"
            previousLinkClassName = "link"
            pageRangeDisplayed={2}
            marginPagesDisplayed={2}
            onPageChange={(data)=>{
                setPageNumber(data.selected + 1);
            }}
            forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        />
    );
}
export default Pagination;
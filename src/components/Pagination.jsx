import ReactPaginate from 'react-paginate';

function Pagination({info, pageNumber, setPageNumber}) {
    return (
        <ReactPaginate className='pagination justify-content-center gap-1' 
            pageCount={info?.pages} 
            nextLabel = "Next"
            nextClassName ='btn btn-info'
            previousLabel = "Prev"
            previousClassName ='btn btn-info'
            pageClassName ='page-item rounded'
            pageLinkClassName ='page-link rounded'
            activeClassName = 'active'
            onPageChange={(data)=>{
                setPageNumber(data.selected + 1);
            }}
            forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        />
    );
}
export default Pagination;
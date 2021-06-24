import { useDispatch, useSelector } from 'react-redux';
import { getMoviesList } from '../redux/reducer';
import { RootReducer } from '../type';

const Pagination = () => {
  const dispatch = useDispatch();
  const pageSize: number = 20;
  const searchedMovie = useSelector(
    (state: RootReducer) => state.reducer.searchedMovie
  );
  const currentPage = useSelector(
    (state: RootReducer) => state.reducer.currentPage
  );

  const totalPages = useSelector((state: RootReducer) =>
    Math.ceil(state.reducer.totalPages / pageSize)
  );

  const changePage = (page: number) => {
    dispatch(getMoviesList({ title: searchedMovie, page }));
  };

  const prevPage = () => {
    if (currentPage === 1 || currentPage < 1) return false;
    dispatch(getMoviesList({ title: searchedMovie, page: currentPage - 1 }));
  };

  const nextPage = () => {
    if (currentPage > totalPages || currentPage === totalPages) return false;
    dispatch(getMoviesList({ title: searchedMovie, page: currentPage + 1 }));
  };

  const toStartPage = () => {
    dispatch(getMoviesList({ title: searchedMovie, page: 1 }));
  };

  const toEndPage = () => {
    dispatch(getMoviesList({ title: searchedMovie, page: totalPages }));
  };

  let startPage: number, endPage: number;
  if (totalPages <= 10) {
    // less than 10 total pages so show all
    startPage = 1;
    endPage = totalPages;
  } else {
    // more than 10 total pages so calculate start and end pages
    if (currentPage <= 6) {
      startPage = 1;
      endPage = 10;
    } else if (currentPage + 4 >= totalPages) {
      startPage = totalPages - 9;
      endPage = totalPages;
    } else {
      startPage = currentPage - 5;
      endPage = currentPage + 4;
    }
  }

  // create an array of pages to ng-repeat in the pager control
  const pages: number[] = [...Array(endPage + 1 - startPage).keys()].map(
    (i) => startPage + i
  );

  const pageItem = pages.map((page: number) => {
    return (
      <li key={page}>
        <span
          onClick={() => changePage(page)}
          className={currentPage === page ? 'active' : ''}
        >
          {page}
        </span>
      </li>
    );
  });

  return (
    <ul className="pagination">
      <li>
        <span onClick={toStartPage}>To start</span>
      </li>
      <li>
        <span onClick={prevPage}>Prev</span>
      </li>
      {pageItem}
      <li>
        <span onClick={nextPage}>Next</span>
      </li>
      <li>
        <span onClick={toEndPage}>To end</span>
      </li>
    </ul>
  );
};

export { Pagination };

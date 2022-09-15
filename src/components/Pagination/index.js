import React from 'react';

import './pagination.css';
import usePagination from '../../hooks/usePagination';

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

const rangeValues = (start, end) => {
  let i = start;
  const range = [];

  while (i <= end) {
    range.push(i);
    i += 1;
  }

  return range;
}

const Pagination = props => {
  const { currentPage, setCurrentPage } = usePagination();
  const { totalCount, pageSize, pageNeighbours, onPageChange } = props;

  const getPageNumbers = () => {
    const totalPages = Math.round(totalCount / pageSize);

    const totalNumbers = (pageNeighbours * 2) + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbours);
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);
      let pages = rangeValues(startPage, endPage);


      const shouldShowLeftDots = startPage > 2;
      const shouldShowRightDots = (totalPages - endPage) > 1;
      const countHiddenPages = totalNumbers - (pages.length + 1);

      if (shouldShowLeftDots && !shouldShowRightDots) {
        const extraPages = rangeValues(startPage - countHiddenPages, startPage - 1);
        pages = [LEFT_PAGE, ...extraPages, ...pages];
      }

      if (!shouldShowLeftDots && shouldShowRightDots) {
        const extraPages = rangeValues(endPage + 1, endPage + countHiddenPages);
        pages = [...pages, ...extraPages, RIGHT_PAGE];
      }

      if (shouldShowLeftDots && shouldShowRightDots) {
        pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
      }

      return [1, ...pages, totalPages];
    }

    return rangeValues(1, totalPages);
  }

  const handleMoveLeft = evt => {
    evt.preventDefault();
    setCurrentPage(currentPage - 1)
    onPageChange(currentPage - 1)
  }

  const handleMoveRight = evt => {
    evt.preventDefault();
    setCurrentPage(currentPage + 1)
    onPageChange(currentPage + 1)
  }

  const handleClick = page => evt => {
    evt.preventDefault();
    setCurrentPage(page)
    onPageChange(page)
  }

  return (
    <>
      <nav aria-label="Pokemon Pagination">
        <ul className="pagination">
          {getPageNumbers().map((page, index) => {

            if (page === LEFT_PAGE) return (
              <li key={index} className="page-item">
                <a className="page-link" href={index} aria-label="Previous" onClick={handleMoveLeft}>
                  <span aria-hidden="true">&laquo;</span>
                  <span className="sr-only"> Previous</span>
                </a>
              </li>
            );

            if (page === RIGHT_PAGE) return (
              <li key={index} className="page-item">
                <a className="page-link" href={index} aria-label="Next" onClick={handleMoveRight}>
                  <span aria-hidden="true">&raquo;</span>
                  <span className="sr-only"> Next</span>
                </a>
              </li>
            );

            return (
              <li key={index} className={`page-item${currentPage === page ? ' active' : ''}`}>
                <a className="page-link" href={index} onClick={handleClick(page)}>{page}</a>
              </li>
            );

          })}

        </ul>
      </nav>
    </>
  );

};

export default Pagination;
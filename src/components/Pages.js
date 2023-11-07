import React from "react";
import ReactPaginate from "react-paginate";

const Pages = ({ fetchPage, searchCount }) => {
  const handlePageClick = (page) => {
    fetchPage(page.selected + 1);
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="التالي >"
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={4}
      pageCount={searchCount[1] === true ? searchCount[0] : 500}
      renderOnZeroPageCount={null}
      previousLabel="< السابق"
      containerClassName="pagination justify-content-center mt-4"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      nextClassName="page-item"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextLinkClassName="page-link"
      breakClassName="page-item"
      breakLinkClassName="page-link"
      activeClassName="active"
      activeLinkClassName="text-dark"
    />
  );
};

export default Pages;

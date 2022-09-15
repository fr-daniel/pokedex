import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const usePagination = () => {
  const { page } = useParams();

  const [currentPage, setCurrentPage] = useState(page ? Number(page) : 1);

  useEffect(() => {
    setCurrentPage(page ? Number(page) : 1)
  }, [page]);


  return { setCurrentPage, currentPage }
};

export default usePagination;
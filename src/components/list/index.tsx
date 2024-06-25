import { ChangeEvent, useState, useEffect } from "react";
import "./styles.scss";
import Item from "../item";
import PaginationSection from "../pagination";
import {  CONSTANT, DEFAULT_ITEMS_PER_PAGE } from "../../utils/constants";
import { useLocation } from "react-router-dom";
import queryString from "query-string"; 
import { useDispatch } from "react-redux";
import { setCharacterItem } from "src/store/components/characterItem/characterItemSlice";

const classNamePrefix = "list";

const List = (props: {
  results: any[];
}) => {
  const { results } = props;

  const dispatch = useDispatch();
  const location = useLocation();

  const queryParams = queryString.parse(location.search);
  const currentPageParam = queryParams.currentPage ? parseInt(queryParams.currentPage as string, 10) : 1;
  const itemsPerPageParam = queryParams.itemsPerPage ? parseInt(queryParams.itemsPerPage as string, 10) : DEFAULT_ITEMS_PER_PAGE;

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState<any[]>([]);
  const [currentPageNumber,setCurrentPageNumber] = useState<number>(Number(currentPageParam || "0"))

  const indexOfLastItem = currentPageNumber * itemsPerPageParam;
  const indexOfFirstItem = indexOfLastItem - itemsPerPageParam;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => {
    setCurrentPageNumber(pageNumber);
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("currentPage", String(pageNumber));
  };

  const filterResults = () => {
    const filteredResults = Array.isArray(results)
      ? results.filter(
          (item) =>
            item.name &&
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : [];

      setCurrentPageNumber(1);
    setFilteredItems(filteredResults);
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleItemSelect = (item:any) => {
    dispatch(setCharacterItem(item))
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      filterResults();
    }, 200);
    return () => clearTimeout(timer);
  }, [searchTerm, results]);
  
  return (
    <div
      className={`${classNamePrefix} d-flex flex-column justify-content-between`}
    >
      <div>
        <input
          className={`${classNamePrefix}__search-input`}
          type="text"
          placeholder={CONSTANT.search_placeholder}
          value={searchTerm}
          onChange={handleSearchChange}
        />

        <div className={`${classNamePrefix}__item-container my-2`}>
          {currentItems.map((item, index) => (
            <Item key={index} item={item} onItemClick={() => handleItemSelect(item)} />
          ))}
        </div>
      </div>

      <PaginationSection
        itemsPerPage={itemsPerPageParam}
        totalItems={filteredItems.length}
        paginate={paginate}
        current={currentPageParam}
      />
    </div>
  );
};

export default List;

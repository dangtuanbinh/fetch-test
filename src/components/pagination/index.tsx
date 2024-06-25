import { IPaginationProps } from "../../utils/types/commonTypes";
import "./styles.scss";
import { Pagination } from "antd";

const classNamePrefix = "pagination-section";

const PaginationSection: React.FC<IPaginationProps> = ({
  current,
  itemsPerPage,
  totalItems,
  paginate,
}) => {
  
  return (
    <div className={`${classNamePrefix} d-flex flex-direction-row justify-content-center`}>
      <Pagination
        defaultCurrent={1}
        current={current}
        total={totalItems}
        defaultPageSize={itemsPerPage}
        onChange={(pageNumber) => paginate(pageNumber)}
        size="small"
        pageSizeOptions={["10", "20", "50"]}
      />
    </div>
  );
};

export default PaginationSection;

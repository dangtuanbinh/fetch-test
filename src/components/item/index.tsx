import { GitlabFilled } from "@ant-design/icons";
import "./styles.scss";

const classNamePrefix = "item";

const Item = (props: { item: any, onItemClick: (item: any) => void }) => {
  const { item, onItemClick } = props;

  return (
    <div className={`${classNamePrefix} d-flex flex-row align-items-center`} onClick={() => onItemClick(item)}>
      <div className="mr-2">
        <GitlabFilled />
      </div>

      <span className={`${classNamePrefix}__title`}>{item.name}</span>
    </div>
  );
};

export default Item;

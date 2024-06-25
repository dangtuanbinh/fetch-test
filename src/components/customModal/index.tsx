import "./styles.scss";

import { useSelector } from "react-redux";
import {
  modalData,
  modalSize,
  modalStatus,
  modalTemplate,
} from "../../store/rootSelector";
import { useDispatch } from "react-redux";
import { closeModal } from "../../store/components/customModal/modalSlice";
import { Modal } from "antd";

import { CONSTANT } from "src/utils/constants";
import Character from "../../views/character/character";
import HomeWorld from "src/views/homeWorld/homeWorld";

const classNamePrefix = "custom-modal";

function CustomModal() {
  const dispatch = useDispatch<any>();

  const isOpen = useSelector(modalStatus);
  const template = useSelector(modalTemplate);
  const size = useSelector(modalSize);
  const data = useSelector(modalData);

  const renderSize = (modalSize: string) => {
    switch (modalSize) {
      case "event":
        return 1084;
      case "large":
        return 713;
      case "normal":
        return 460;
      default:
        return 550;
    }
  };

  const generateContent = (template: string) => {
    switch (template) {
      case CONSTANT.character:
        return <Character data={data}/>;
        case CONSTANT.homeworld:
          return <HomeWorld data={data}/>;
      default:
        return;
    }
  };

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <Modal
      title=""
      open={isOpen}
      closable={false}
      onCancel={handleClose}
      wrapClassName="wrapper"
      style={{ width: renderSize(size) }}
      width={renderSize(size)}
      footer={null}
      centered={true}
      zIndex={2000}
      className={classNamePrefix}
    >
      {generateContent(template)}
    </Modal>
  );
}

export default CustomModal;

import React, { useState, useEffect } from "react";
import { CONSTANT, noti } from "../../utils/constants";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "src/store/components/customModal/modalSlice";
import { getCharacterItem } from "src/store/rootSelector";

const classNamePrefix = "item-detail";

const ItemDetail = () => {
  const dispatch = useDispatch()

  const chatacterItem = useSelector(getCharacterItem)
  
  const [characterHomeworld, setCharacterHomeworld] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  console.log(characterHomeworld);

  const handleOpenCharacterDetail = () => {
    dispatch(
      openModal({
        template: CONSTANT.character,
        data: chatacterItem
      })
    );
  };

  const handleOpenCharacterHomeWorld = () => {
    dispatch(
      openModal({
        template: CONSTANT.homeworld,
        data: characterHomeworld
      })
    );
  };

  const fetchCharacterDetails = async () => {
    if (chatacterItem && chatacterItem.homeworld) {
      setIsLoading(true);
      try {
        const response = await fetch(chatacterItem.homeworld);
        if (response.ok) {
          const data = await response.json();
          setCharacterHomeworld(data);
        } else {
          console.error(noti.FETCHING_DATA_FAIL);
        }
      } catch (error) {
        console.error(`${noti.FETCHING_DATA_FAIL}`, error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchCharacterDetails();
  }, [chatacterItem]);

  return (
    <div className={`${classNamePrefix}`}>
      {isLoading ? (
        <div>{noti.LOADING_DATA}</div>
      ) : (
        <div>
          {chatacterItem ? (
            <div>
              <h2 onClick={handleOpenCharacterDetail}>{chatacterItem.name}</h2>

              <span onClick={handleOpenCharacterHomeWorld}>{characterHomeworld?.name}</span>
            </div>
          ) : (
            <div>
              <span>{noti.NO_ITEM_SELECTED}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ItemDetail;

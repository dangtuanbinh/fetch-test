import "./styles.scss";
import Logo from "../../components/logo";
import List from "../../components/list";
import ItemDetail from "../../components/itemDetail";
import { useGetCharacterListQuery } from "../../store/components/characterList/characterApis";
import { useState } from "react";

const classNamePrefix = "home-page";

const HomePage = () => {
  const {data} = useGetCharacterListQuery();

  const results = data?.results || [];

  return (
    <div className={`${classNamePrefix}`}>
      <Logo />

      <div className="col-12 d-flex flex-column-reverse flex-md-row justify-content-between align-items-center pb-5">
        <div className="col-12 col-md-7 px-3 ">
          <ItemDetail />
        </div>

        <div className="col-12 col-md-5 px-3 mb-4 mb-md-0">
          <List results={results} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

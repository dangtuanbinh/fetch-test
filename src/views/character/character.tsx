import React, { useState } from "react";
import "./styles.scss";
import { CONSTANT } from "src/utils/constants";

const classNamePrefix = "character";

interface ICharacterProps {
  data: any;
}

const Character: React.FC<ICharacterProps> = (props) => {
  const { data } = props;

  return (
    <div className={classNamePrefix}>
      <h3>{data?.name}</h3>
      <div className=" d-flex flex-column align-items-start">
        <span>{CONSTANT.height}: {data?.height} {CONSTANT.meter}</span>
        <span>{CONSTANT.mass}: {data?.mass} {CONSTANT.kg}</span>
        <span>{CONSTANT.birth_year}: {data?.birth_year}</span>
        <span>{CONSTANT.gender} {data?.gender}</span>
      </div>
    </div>
  );
};

export default Character;

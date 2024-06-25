import React, { useState } from "react";
import "./styles.scss";
import { CONSTANT } from "src/utils/constants";

const classNamePrefix = "homeWorld";

interface IHomeWorldProps {
  data: any;
}

const HomeWorld: React.FC<IHomeWorldProps> = (props) => {
  const { data } = props;

  return (
    <div className={classNamePrefix}>
      <h3>{data?.name}</h3>
      <div className=" d-flex flex-column align-items-start">
        <span>{CONSTANT.rotation}: {data?.rotation_period}</span>
        <span>{CONSTANT.orbital}: {data?.orbital_period}</span>
        <span>{CONSTANT.diameter}: {data?.diameter}</span>
        <span>{CONSTANT.climate}: {data?.climate}</span>
      </div>
    </div>
  );
};

export default HomeWorld;

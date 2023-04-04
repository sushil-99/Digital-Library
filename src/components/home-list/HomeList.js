import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CustomCard } from "../customCard/CustomCard";

export const HomeList = ({ display }) => {
  return (
    <div className="d-flex gap-4 flex-wrap justify-content-center">
      {display?.map((item) => (
        <CustomCard key={item.id} {...item} />
      ))}
    </div>
  );
};

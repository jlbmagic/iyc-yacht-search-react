import React, { useState } from "react";

import Button from "../components/Button";
import Card from "../components/Card";
import { Delayed } from "../components/Delayed";
import { sample } from "./utils";

console.log(sample);
const text = [
  "This is the button to press",
  "Second one",
  "Third One",
  "Fourth one",
  "fith one",
  "sixth one",
  "seventh one",
  "eighth one",
];
const MyApp = ({ props }) => {
  const data = props.data;
  console.log(data[0].fieldData);
  const itemsPerPage = 18;
  const [page, setPage] = useState(1);
  console.log(page);
  const pages = Math.ceil(data.length / itemsPerPage);
  const thisPage = data.slice((page - 1) * itemsPerPage, page * itemsPerPage);
  return (
    <>
      <div className="w-1/3 grid grid-cols-3 gap-3">
        <Button
          status={page === 1 ? "disabled" : "enabled"}
          text="Previous"
          setBtn={() => {
            if (page === 1) return;
            setPage(page - 1);
          }}
        ></Button>
        <Button
          status={page === pages ? "disabled" : "enabled"}
          text="Next"
          setBtn={() => {
            setPage(page + 1);
          }}
        ></Button>
        <div className="cols-span-1 text-center italic text-red-500  font-light py-2 px-4 rounded">
          <div>{page.toString() + "/" + pages.toString()}</div>
          <div> {`${data.length} items`}</div>
        </div>
      </div>
      <div className="p-1 px-1 flex flex-wrap">
        {thisPage.map((one, i) => {
          return <Card key={i} data={one.fieldData} />;
        })}
      </div>
    </>
  );
};

export default MyApp;

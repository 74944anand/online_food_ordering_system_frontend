import React from "react";
import { categories } from "./data/data";
const Category = () => {
  return (
    <div className="categoryContiner">
      <h1 className="categoryContiner">Top Rated Menu Items</h1>
      {/*Categories*/}
      <div>
        <div className="gridView">
          {categories.map((item, index) => (
            <div key={index} className="border shadow-lg rounded-lg  ">
              <img src={item.image} alt={item.name} />
              <div className="flex justify-between px-2 py-4">
                <p className="font-bold">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;

import React, { useEffect, useState } from "react";
import { data } from "./data/data";
interface food {
  id: Number;
  name: string;
  category: string;
  image: string;
  price: string;
}
const Food = () => {
  const [foods, setFood] = useState<food[]>(data);

  //Filter by Type
  const filterType = (category: string) => {
    setFood(
      data.filter((item) => {
        return item.category == category;
      })
    );
  };
  //Filter By Price
  const filterPrice = (price: string) => {
    setFood(
      data.filter((item) => {
        return item.price == price;
      })
    );
  };
  return (
    <div className="foodContainer">
      <h1>Top Rated Food Items</h1>
      {/*Filter Row*/}
      <div className="filterRow">
        {/*Filter Type*/}
        <div>
          <p className="filterHeading">Filter Type</p>
          <div className=" filterBtnDiv">
            <button onClick={() => setFood(data)} className="filterBtn ">
              All
            </button>
            <button onClick={() => filterType("burger")} className="filterBtn ">
              Burgers
            </button>
            <button onClick={() => filterType("pizza")} className="filterBtn ">
              Pizzas
            </button>
            <button onClick={() => filterType("salad")} className="filterBtn ">
              Salads
            </button>
            <button
              onClick={() => filterType("chicken")}
              className="filterBtn "
            >
              Chicken
            </button>
          </div>
        </div>
        {/*Filter Price */}
        <div>
          <p className="filterHeading">Filter Price</p>
          <div className="filterBtnDiv">
            <button onClick={() => filterPrice("100")} className="filterBtn">
              100
            </button>
            <button onClick={() => filterPrice("300")} className="filterBtn">
              300
            </button>
            <button onClick={() => filterPrice("500")} className="filterBtn">
              500
            </button>
            <button onClick={() => filterPrice("700")} className="filterBtn">
              700
            </button>
          </div>
        </div>
      </div>
      <div className="gridView">
        {foods.map((item, index) => (
          <div key={index} className=" foodDiv">
            <img src={item.image} alt={item.name} />
            <div className="foodName">
              <p>{item.name}</p>
              <p>
                <span>${item.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;

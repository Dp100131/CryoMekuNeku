import storeItems from '../datajuegos/products.json';
import React from "react";
import { Item } from "./Item";

export const ItemList = () => {
  return (
    <div className="items-list">
      {storeItems.map((product, idx) => {
        return <Item key={product.id} {...product} />;
      })}
    </div>
  );
};

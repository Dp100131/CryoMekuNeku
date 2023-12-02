import React, { useContext } from "react";
import { CartContext } from "./ShoppingCartContext";
import zelda from "../imgs/TloZ.jpg";
import amogus from "../imgs/amongus.jpg";
import botw from "../imgs/botw.jpg";
import spider from "../imgs/spiderman.avif";
import cuphead from "../imgs/cuphead.avif";
import resident from "../imgs/resident.jpg";
import baldurs from "../imgs/baldurs.jpg";
import mk from "../imgs/mk.jpg";

const imagenes = {
  1: { src: amogus, alt: "Amongus"},
  2: { src: baldurs, alt: "Baldur's gate 3" },
  3: { src: resident, alt: "Resident Evil 4" },
  4: { src: botw, alt: "Botw" },
  5: { src: cuphead, alt: "Cuphead" },
  6: { src: spider, alt: "Spiderman 2" },
  7: { src: zelda, alt: "TOTK" },
  8: { src: mk, alt: "Mortal Kombat 11" },
};

export const Item = ({ name, price, id, imgUrl }) => {
  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    setCart((currItems) => {
      const isItemsFound = currItems.find((item) => item.id === id);
      if (isItemsFound) {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [...currItems, { id, quantity: 1, price }];
      }
    });
  };

  const removeItem = (id) => {
    setCart((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getQuantityById = (id) => {
    return cart.find((item) => item.id === id)?.quantity || 0;
  };

  const quantityPerItem = getQuantityById(id);

  return (
    <div className="item-box">
      <div class="flex flex-col">
      {quantityPerItem > 0 && (
        <div className="item-quantity">{quantityPerItem}</div>
      )}
      <div>{name}</div>
      <img class="w-auto h-auto object-cover" src={imagenes[id].src} alt={imagenes[id].alt}/>
      <div className="item-price">${price}</div>
      </div>

      {quantityPerItem === 0 ? (
        <button className="item-add-button" onClick={() => addToCart()}>
          + Add to cart
        </button>
      ) : (
        <button className="item-plus-button" onClick={() => addToCart()}>
          + add more
        </button>
      )}

      {quantityPerItem > 0 && (
        <button className="item-minus-button" onClick={() => removeItem(id)}>
          subtract item
        </button>
      )}
    </div>
  );
};
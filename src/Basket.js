import { useGlobalContext } from "./context";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

function Basket() {
  const { items, increaseItem, decreaseItem, removeItem, clearCart, total } = useGlobalContext();

  return (
    <div className="basket-center">
      <article className="basket">
        <h1>YOUR BAG</h1>

        {items.length > 0 &&
          <>
            {items.map(data => {
              const { id, title, price, img, amount } = data;

              return (
                <section className="details" key={id}>
                  <div className="content">
                    <img src={img} alt={title} />
                    <div className="price">
                      <h5>{title}</h5>
                      <p className="item-price">${price}</p>
                      <button type="button" onClick={() => removeItem(id)}>remove</button>
                    </div>
                  </div>

                  <div className="number">
                    <button type="button" onClick={() => increaseItem(id)}><IoIosArrowUp /></button>
                    <p>{amount}</p>
                    <button type="button" onClick={() => decreaseItem(id)}><IoIosArrowDown /></button>
                  </div>
                </section>
              )
            }
            )}

            <section className="footer">
              <div className="total-price">
                <p>Total</p>
                <p>${total.totalPrice.toFixed(2)}</p>
              </div>
              <div className="clear-cart">
                <button type="button" onClick={clearCart}>CLEAR CART</button>
              </div>
            </section>
          </>

        }

        {
          items.length == 0 &&
          <p className="empty">is currently empty</p>
        }


      </article>
    </div>
  )
};

export default Basket;
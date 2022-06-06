import { createContext, useContext, useEffect, useState } from "react";

const url = 'https://course-api.com/react-useReducer-cart-project';
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState({ totalPrice: 0, amount: 0 });
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    const response = await fetch(url);
    const result = await response.json();
    setItems(result);
    setLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  const increaseItem = (id) => {
    setItems(items.map(item => {
      if (item.id === id) {
        return { ...item, amount: item.amount + 1 }
      };
      return item;
    }));
  };

  const decreaseItem = (id) => {
    setItems(items.map(item => {
      if (item.id === id) {
        return { ...item, amount: item.amount - 1 }
      }
      return item;
    }).filter(item => item.amount > 0));
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setItems([]);
  };

  const sum = items.reduce((acc, item) => {
    acc.totalPrice += (item.price * item.amount);
    acc.amount += item.amount;
    return acc;
  }, { totalPrice: 0, amount: 0 });

  useEffect(() => {
    setTotal(sum);
  }, [items]);

  const values = {
    items,
    increaseItem,
    decreaseItem,
    removeItem,
    clearCart,
    total,
    loading
  }

  return (
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  )
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
import { useState, useEffect } from "react";
import axios from "axios";

const MenuData = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/menu")
      .then((response) => {
        setMenu(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return menu;
};

export default MenuData;

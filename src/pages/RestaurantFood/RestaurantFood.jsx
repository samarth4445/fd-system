import React, { useEffect, useState, useContext } from "react";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";
import RestaurantDisplay from "../../components/RestaurantDisplay/RestaurantDisplay";
import { useParams } from "react-router-dom";
import axios from "axios";
import { StoreContext } from "../../Context/StoreContext";

const RestaurantFood = () => {
  const [category, setCategory] = useState("All");
  const [foodListRestaurant, setFoodListRestaurant] = useState([]);
  const [restaurantName, setResrauranrName] = useState("Restaurant");
  const { restaurant, setRestaurant } = useContext(StoreContext);

  const { id } = useParams();
  const url2 = "http://localhost:8000";

  useEffect(() => {
    console.log(id);
    const fetchFoodListByRestaurant = async () => {
      const response = await axios.get(url2 + "/swiggy/items/" + id);
      setFoodListRestaurant(response.data.items);
      setResrauranrName(response.data.name);
    };
    setRestaurant(id);
    fetchFoodListByRestaurant();
  }, []);

  return (
    <>
      <FoodDisplay
        foodListRestaurant={foodListRestaurant}
        restaurantName={restaurantName}
        category={category}
      />
      <AppDownload />
    </>
  );
};

export default RestaurantFood;

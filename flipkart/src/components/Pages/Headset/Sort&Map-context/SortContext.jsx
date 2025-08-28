import { createContext, useContext, useState, useEffect } from "react";

const sortContext = createContext();

export default function SortContext({ children }) {

  const [headset, setHeadset] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/Headsets.json");
        const data = await response.json();
        setHeadset(data.headsets)
      } catch (error) {
        console.log("error fetching data:", error);
      }
    }
   fetchData()
  },[]);

  const [sortType, setSortType] = useState("popularity");

  const getSortedData = () => {
    const sortedData = [...headset].sort((a, b) => {
      console.log('a',a,"b",b)
      const priceA = a.discountPrice.replace(/,/g,'')
      const priceB = b.discountPrice.replace(/,/g,'')
      console.log(priceA)
      if (sortType === "popularity") return b.rating - a.rating;
      if (sortType === "lowToHigh") return priceA - priceB;
      if (sortType === "highToLow") return priceB - priceA;
      if (sortType === "newest") return b.id - a.id;
      if (sortType === "discount")
        return b.discountPercentage - a.discountPercentage;
      return 0;
    });
    return sortedData;
  };

  

  return (
    <sortContext.Provider value={{ sortType, setSortType, getSortedData, headset }}>
      {children}
    </sortContext.Provider>
  );
}
export function useSort() {
  return useContext(sortContext);
}

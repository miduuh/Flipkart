import { createContext, useContext } from "react";

const sortContext = createContext();

export function SortContext({ children }) {
  const [sortType, setSortType] = useState("popularity");
  const getSortedData = () => {
    const sortedData = [...data].sort((a, b) => {
      if (sortType === "popularity") return a.rating - b.rating;
      if (sortType === "lowToHigh") return a.discountPrice - b.discountPrice;
      if (sortType === "highToLow") return b.discountPrice - a.discountPrice;
      if (sortType === "newest") return b.id - a.id;
      if (sortType === "discount")
        return a.discountPercentage - b.discountPercentage;
      return 0;
    });
    return sortedData;
  };

  return (
    <sortContext.Provider value={{ sortType, setSortType, getSortedData }}>
      {children}
    </sortContext.Provider>
  );
}
export function useSort() {
  return useContext(sortContext);
}

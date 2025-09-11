import { createContext, useContext, useState, useEffect } from "react";

const sortContext = createContext();

export default function SortContext({ children }) {
  const [headset, setHeadset] = useState([]);
  const [filter, setFilter] = useState([]);
  const [product, setProduct] = useState([]);
  const [sortType, setSortType] = useState("popularity");
  const [filtered, setFiltered] = useState([]);

  const [checkedFilters, setCheckedFilters] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/Headsets.json");
        const data = await response.json();
        setHeadset(data.headsets);
        setProduct(data.headsets);
        setFiltered(data.headsets);
        setFilter(data.filters);
      } catch (error) {
        console.log("error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleCheck = (mainFilter, subFilter) => {
    setCheckedFilters((prev) => {
      const current = prev[mainFilter] || [];

      const updated = current.includes(subFilter)
        ? current.filter((item) => item !== subFilter)
        : [...current, subFilter];

      return { ...prev, [mainFilter]: updated };
    });
  };

  const clearFilters = () => setCheckedFilters({});

  const filterApply = () => {
    const filteredProducts = headset.filter((headset) => {
      const price = Number(headset.actualPrice.replace(/,/g, ""));

      const brandOk =
        checkedFilters.Brand?.length === 0 ||
        checkedFilters.Brand?.includes(headset.brand);

      const fAssured = checkedFilters.fAssured?.length === 0 || checkedFilters.fAssured?.includes(headset.isAssured === true)

      return brandOk || fAssured
    });
    return filteredProducts;
  };

  const applySorting = (data) => {
    const sortedData = [...data].sort((a, b) => {
      const priceA = a.discountPrice.replace(/,/g, "");
      const priceB = b.discountPrice.replace(/,/g, "");
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

  useEffect(() => {
    const filtered = filterApply();
    const sorted = applySorting(filtered);
    setProduct(sorted);
  }, [checkedFilters, sortType]);

  return (
    <sortContext.Provider
      value={{
        sortType,
        setSortType,
        filter,
        checkedFilters,
        handleCheck,
        clearFilters,
        product,
      }}
    >
      {children}
    </sortContext.Provider>
  );
}
export function useSort() {
  return useContext(sortContext);
}

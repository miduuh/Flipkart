import { useState } from "react";
import "./Filters.css";
import { useSort } from "../Sort&Map-context/SortContext";

const Filters = ({ handleModal, filterVisible }) => {
  if (filterVisible == true) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "scroll";
  }

  const { filter, checkedFilters, handleCheck, clearFilters, product } =
    useSort();
  const [filterIndex, setFilterIndex] = useState(0);

  return (
    <div className="filter-container">
      <div className="headset-head">
        <div className="back-arrow" onClick={handleModal}>
          <svg
            width="19"
            height="16"
            viewBox="0 0 19 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.556 7.847H1M7.45 1L1 7.877l6.45 6.817"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            ></path>
          </svg>
        </div>
        <div className="filter-head">
          <span style={{ width: "100%" }}>Filters</span>
          <span onClick={clearFilters} className="filter-head-txt">
            Clear Filters
          </span>
        </div>
      </div>

      <div className="apply-filter">
        <div
          style={{ height: "1px", backgroundColor: "rgba(135,135,135,0.2" }}
        ></div>
        <div className="apply-div">
          <div className="count-div">
            <div>{product.length}</div>
            <div className="filter-count">products found</div>
          </div>

          <div className="apply-button">
            <div className="aply-but" onClick={handleModal}>
              Apply
            </div>
          </div>
        </div>
      </div>

      <div className="filter-category-options">
        <div className="filter-categories">
          {filter.length > 0 &&
            filter?.map((item, index) => {
              return (
                <div className="options-div" key={index}>
                  <div
                    onClick={() => setFilterIndex(index)}
                    style={
                      filterIndex === index
                        ? { backgroundColor: "#fff", color: "#2874f0" }
                        : {}
                    }
                    className="options"
                  >
                    {item.mainFilter}
                  </div>
                </div>
              );
            })}
        </div>

        <div className="category-options">
          <div>
            {filter[filterIndex]?.subFilter.map((filt, index) => {
              const main = filter[filterIndex].mainFilter;
              const isChecked = checkedFilters[main]?.includes(filt || false);

              return (
                <div
                  className="ctgry-optn"
                  key={index}
                  onClick={() => handleCheck(main, filt)}
                >
                  <img
                    className="unchecked"
                    src={
                      isChecked
                        ? "/src/assets/headset/checked.png"
                        : "/src/assets/headset/unchecked.png"
                    }
                    alt="Checkbox"
                  />
                  <div>{filt}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;

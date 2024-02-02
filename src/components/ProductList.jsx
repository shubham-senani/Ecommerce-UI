import React, { useEffect, useState, useContext } from "react";
import Contextpage from "../pages/ContextPage";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { items, fetchItems, setItems, loader } = useContext(Contextpage);
  const [selectedOption, setSelectedOption] = useState("");
  const [selected, setSelected] = useState([]);
  console.log(selectedOption);

  function handleCbClick(e) {
    const { checked, name } = e.target;
    if (checked) {
      setSelected([...selected, name]);
    } else {
      setSelected([
        ...selected.filter((selectedName) => selectedName !== name),
      ]);
    }
  }

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const filter = (items, selected) => {
    if (selected.length === 0) {
      return items;
    }
    const temp_items = items.filter((item) => {
      return selected.includes(item.category);
    });
    return temp_items;
  };

  const sort = (items, selectedOption) => {
    if (selectedOption === "rating") {
      return items.sort((a, b) => b.rating - a.rating);
    }
    if (selectedOption === "price_lowToHigh") {
      return items.sort((a, b) => a.price - b.price);
    }
    if (selectedOption === "price_highToLow") {
      return items.sort((a, b) => b.price - a.price);
    }
    return items;
  };

  useEffect(() => {
    const temp_items = filter(items, selected);
    setItems(temp_items);
  }, [selected]);

  useEffect(() => {
    const temp_items2 = sort(items, selectedOption);
    setItems(temp_items2);
  }, [selectedOption]);

  console.log(items);

  return (
    
    <div> { loader? <div className="position-fixed fw-bold" style={{top: "50vh", left: "50vw"}}><div class="spinner-border" role="status">
  </div></div> : null}
      <div className="fs-4 fw-bold m-3">All Products</div>
      <div className="row m-0 p-0">
        <div className="col-2 m-0 p-0">
          <div className="fw-bold mx-3 mb-2">FILTERS</div>
          <div className="border-top pe-1" style={{ }}>
            <div className="d-flex flex-column pt-3 px-4">
              <div className="fw-medium">CATEGORIES</div>
              <label className="mt-1">
                <input
                  type="checkbox"
                  className="me-1"
                  checked={selected.includes("smartphones")}
                  name="smartphones"
                  onChange={handleCbClick}
                />
                Smartphones
              </label>
              <label>
                <input
                  type="checkbox"
                  className="me-1"
                  checked={selected.includes("laptops")}
                  name="laptops"
                  onChange={handleCbClick}
                />
                Laptops
              </label>
              <label>
                <input
                  type="checkbox"
                  className="me-1"
                  checked={selected.includes("fragrances")}
                  name="fragrances"
                  onChange={handleCbClick}
                />
                Fragrances
              </label>
              <label>
                <input
                  type="checkbox"
                  className="me-1"
                  checked={selected.includes("skincare")}
                  name="skincare"
                  onChange={handleCbClick}
                />
                Skin Cares
              </label>
              <label>
                <input
                  type="checkbox"
                  className="me-1"
                  checked={selected.includes("groceries")}
                  name="groceries"
                  onChange={handleCbClick}
                />
                Groceries
              </label>
              <label>
                <input
                  type="checkbox"
                  className="me-1"
                  checked={selected.includes("home-decoration")}
                  name="home-decoration"
                  onChange={handleCbClick}
                />
                Home Decorations
              </label>
            </div>
            <hr />
            <div className="d-flex flex-column mt-1 px-4">
              <div className="fw-medium">Brand</div>
              <label className="mt-1">
                <input
                  type="checkbox"
                  className="me-1"
                  checked={selected.includes("Apple")}
                  name="Apple"
                  onChange={handleCbClick}
                />
                Apple
              </label>
              <label>
                <input
                  type="checkbox"
                  className="me-1"
                  checked={selected.includes("Samsung")}
                  name="Samsung"
                  onChange={handleCbClick}
                />
                Samsung
              </label>
              <label>
                <input
                  type="checkbox"
                  className="me-1"
                  checked={selected.includes("OPPO")}
                  name="OPPO"
                  onChange={handleCbClick}
                />
                OPPO
              </label>
              <label>
                <input
                  type="checkbox"
                  className="me-1"
                  checked={selected.includes("Huawei")}
                  name="Huawei"
                  onChange={handleCbClick}
                />
                Huawei
              </label>
              <label>
                <input
                  type="checkbox"
                  className="me-1"
                  checked={selected.includes("HP Pavilion")}
                  name="HP Pavilion"
                  onChange={handleCbClick}
                />
                HP Pavilion
              </label>
            </div>
          </div>
        </div>
        <div className="col m-0 p-0">
          <div className="d-flex justify-content-end me-5 mb-2">
            <span className="border border-dark">
              <label htmlFor="dropdown" className="px-2">
                Sort by :{" "}
              </label>
              <select
                id="dropdown"
                className="px-2 border-0"
                value={selectedOption}
                onChange={handleSelectChange}
              >
                <option className="border-0 p-2" value="all">
                  Recommended
                </option>
                <option value="rating">Best Rating</option>
                <option value="price_lowToHigh">Price: Low to High</option>
                <option value="price_highToLow">Price: High to Low</option>
              </select>
            </span>
          </div>
          <div className="border d-flex flex-wrap">
            {items.map((item) => {
              return <ProductCard key={item.id} item={item}></ProductCard>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;

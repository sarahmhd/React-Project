import "./searchForm.sass";

import React, { useEffect, useState } from "react";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";
import Select from "react-select";

const SearchForm = ({
  handleSearch,
  filteredData,
  filteration,
  handleSelect,
}) => {
  const [query, setQuery] = useState("");

  const searchMovies = (event) => {
    setQuery(event.target.value);
    handleSearch(event.target.value);
  };

  const changeOption = (event) => {
    handleSelect(event.value);
  };

  return (
    <div className="search-form">
      <div className="container">
        <div className="search-form-content d-flex justify-content-between gap-md-3 gap-0 flex-md-column flex-lg-row">
          <form className="form position-relative">
            <input
              className="form-control"
              type="search"
              placeholder="Find movies tv shows documentary and more..."
              onChange={searchMovies}
            />
            <SearchIcon className="position-absolute search-icon" />
          </form>
          <div className="filter position-relative">
            <Select
              className="filter-select"
              placeholder="Media type"
              options={filteration}
              onChange={changeOption}
              components={{
                IndicatorSeparator: () => <ArrowDropDownIcon />,
                DropdownIndicator: () => (
                  <FilterListIcon className="filter-icon position-absolute" />
                ),
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;

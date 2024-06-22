import { useEffect, useState } from "react";
import Suggestions from "./suggestions";

export default function SearchAutocomplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);

    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }

  function handleClick(event) {
    console.log(event.target.innerText);
    setShowDropdown(false);
    setSearchParam(event.target.innerText);
    setFilteredUsers([]);
  }

  async function fetchListOfUsers() {
    try {
      setLoading(true);
      const resp = await fetch("http://dummyjson.com/users");
      const data = resp.json();

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(error);
    }
  }

  useEffect(() => {
    fetchListOfUsers();
  });

  if (error) {
    return <div>Error! {error}</div>;
  }
  console.log(users, filteredUsers);

  return (
    <div className="search-autocomplete-container">
      {loading ? (
        <h1>Loading... Please wait</h1>
      ) : (
        <input
          value={searchParam}
          name="search-users"
          placeholder="Search Users here..."
          type="text"
          onChange={handleChange}
        />
      )}

      {showDropdown && (
        <Suggestions
          data={filteredUsers}
          handleClick={handleClick}
        ></Suggestions>
      )}
    </div>
  );
}

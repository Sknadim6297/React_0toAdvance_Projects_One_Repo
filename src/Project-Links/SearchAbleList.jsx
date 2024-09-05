import React, { useState } from "react";


const SearchAbleList = () => {
    const initialList = [
         {name: 'apple',id:1},
            {name: 'banana',id:2},
            {name: 'mango',id:3},
            {name: 'orange',id:4},
            {name: 'grapes',id:5},
            {name: 'watermelon',id:6},
            {name: 'kiwi',id:7},
            {name: 'pineapple',id:8},
            {name: 'strawberry',id:9},
            {name: 'blueberry',id:10},
            {name: 'blackberry',id:11},
            {name: 'raspberry',id:12},
            {name: 'papaya',id:13},
      ];

      
  const [items] = useState(initialList);
  const [searchQuery, setSearchQuery] = useState('');

  const handleOnchange = (e) => {
           setSearchQuery(e.target.value);  
  }

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ padding: '20px' }}>
      <h1>Search List</h1>
      <input style={{ padding: '8px', width: '200px', marginBottom: '20px'}} type="text" placeholder="Search" value={searchQuery} onChange={handleOnchange}  />
      <button>Search</button>
      <ul>
        {filteredItems.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default SearchAbleList;

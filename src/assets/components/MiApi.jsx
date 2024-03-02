import React, { useState, useEffect } from "react";

const MiApi = ({ search }) => {
  const [tableData, setTableData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://api.victorsanmartin.com/feriados/en.json";
        const response = await fetch(url);
        if (!response.ok) {
        }
        const data = await response.json();
        setTableData(data.data);
        setFilterData(data.data);
      } catch (error) {
        console.error("Error", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (search) {
      const filterResults = tableData.filter((holiday) =>
        holiday.title.toLowerCase().includes(search.toLowerCase()) ||
        holiday.type.toLowerCase().includes(search.toLowerCase())
      );
  
      filterResults.sort((a, b) => a.date.localeCompare(b.date));
  
      setFilterData(filterResults);
    } else {
      setFilterData(tableData);
    }
  }, [search, tableData]);  

  return (
    <div className="table-container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Date</th>
            <th>Title</th>
            <th>Type</th>
            <th>Extra</th>
          </tr>
        </thead>
        <tbody>
          {filterData.map((holiday, index) => (
            <tr key={index}>
              <td>{holiday.date}</td>
              <td>{holiday.title}</td>
              <td>{holiday.type}</td>
              <td>{holiday.extra}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MiApi;


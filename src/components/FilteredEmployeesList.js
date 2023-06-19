import { useState } from "react";
import { useDebouncedValue } from "../hooks/useDebouncedValue";

export default function FilteredEmployeesList({ employees }) {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebouncedValue(query, 1000);

  const onChange = (event) => setQuery(event.target.value);
  const filteredEmployees = employees.filter((name) => {
    return name.toLowerCase().includes(debouncedQuery.toLowerCase());
  });
  console.log(query);
  return (
    <div>
      <h2>Employees List</h2>
      <input type="text" value={query} onChange={onChange} />
      <div className="list">
        {filteredEmployees.map((name) => (
          <div key={Math.random()}>{name}</div>
        ))}
      </div>
    </div>
  );
}

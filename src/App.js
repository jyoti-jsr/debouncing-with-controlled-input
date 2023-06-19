import FilteredEmployeesList from "./components/FilteredEmployeesList";
import "./styles.css";

export default function App() {
  const employees = ["joy", "kunu", "munu", "komal"];
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <FilteredEmployeesList employees={employees} />
    </div>
  );
}

// LoanForm.js
import "./loan.css";
import { useState } from "react";
import ErrorInput from './ErrorInput.js';

export default function LoanForm() {
    const [data, setData] = useState({
      name: "",
      phone: "",
      age: "",
      salary: "10000", 
      isEmployee: false,
    });
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    function handleSubmit(e) {
      e.preventDefault();
      if (data.name.length < 1) {
        setErrorMessage("Name is not valid");
        setError(true);
        return;
      }
      if (data.phone.length < 10) {
        setErrorMessage("Phone number is not valid");
        setError(true);
        return;
      }
      if (data.age.length < 1 || data.age > 80) {
        setErrorMessage("Age is not valid");
        setError(true);
        return;
      }
      if (!data.salary) {
        setErrorMessage("Salary is not valid");
        setError(true);
        return;
      }
      setError(false);
      setErrorMessage("Successfully submitted");
    }

    return (
      <div className="loan">
        <h1>Requesting a Loan</h1>
              
        <div className="form">
          <label>Name :</label>
          <input type="text" value={data.name} 
            onChange={(event) => setData({ ...data, name: event.target.value })} />
          
          <label>Phone Number :</label>
          <input type="tel" value={data.phone} 
            onChange={(event) => setData({ ...data, phone: event.target.value })} />
          
          <label>Age:</label>
          <input type="text" value={data.age} 
            onChange={(event) => setData({ ...data, age: event.target.value })} />
          
          <label>Are you an employee :</label>
          <input type="checkbox" checked={data.isEmployee} 
            onChange={(event) => setData({ ...data, isEmployee: event.target.checked })} />
          
          <label>Salary :</label>
          <select value={data.salary} 
            onChange={(event) => setData({ ...data, salary: event.target.value })}>
            <option value="10000">10000</option>
            <option value="20000">20000</option>
            <option value="30000">30000</option>
            <option value="40000">40000</option>
            <option value="50000">50000</option>
          </select>

          <button onClick={handleSubmit}>Submit</button>
          <ErrorInput isError={error} errorMessage={errorMessage} />
        </div>
      </div>
    );
}

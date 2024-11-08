// ErrorInput.js
import "./error.css";

export default function ErrorInput({ isError, errorMessage }) {
  if (!isError && !errorMessage) return null;
  
  return (
    <div className="error">
      <div className="Message">
        <p style={{ color: isError ? "red" : "green" }}>
          {errorMessage || "Successfully submitted"}
        </p>
      </div>
    </div>
  );
}

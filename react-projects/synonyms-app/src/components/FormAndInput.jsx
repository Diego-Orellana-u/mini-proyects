import { useEffect } from "react";

export function FormAndInput({ handleSubmit }) {
  useEffect(() => {}, []);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="word-input">Your word</label>
        <input id="word-input" name="query" />
        <button style={{ backgroundColor: "white", color: "black" }}>
          Search Synonyms
        </button>
      </form>
    </div>
  );
}

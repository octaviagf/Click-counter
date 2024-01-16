import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Buttons count={count} onClick={() => setCount(count + 1)} />
    </div>
  );
}

function Buttons({ count, onClick }) {
  return (
    <button className="btn" onClick={onClick}>
      {count}
    </button>
  );
}

import { useState, useCallback, useMemo, useEffect } from "react";

export const TestmemoAndback = () => {
  const [count, setCount] = useState(0);

  const [todos, setTodos] = useState([]);
  const calculation = useMemo(() => count, [count]);
  const calculation1 = useCallback(() => count, [count]);

  console.log("Memo", calculation);
  console.log("CallBack", calculation1);
  return (
    <div>
      <>
        <hr />
        <div>
          Count: {count}
          {/* <button onClick={increment}>+</button>*/}
        </div>
      </>
    </div>
  );
};

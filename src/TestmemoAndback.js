import { useState, useCallback, useMemo, useEffect } from "react";
import localstorageEncrypt from "localstorage-encrypt";
const ls = localstorageEncrypt.init("storage", "my-secret-key", 12);

export const TestmemoAndback = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Bablu Jakhar");

  const [todos, setTodos] = useState([]);
  const calculation = useMemo(() => count, [count]);

  useEffect(() => {
    ls.save("user", name);
  }, []);

  return (
    <div>
      <>
        {console.log(ls.get("user"))}
        <hr />
        <div>
          Count: {count}
          {/* <button onClick={increment}>+</button>*/}
        </div>
      </>
    </div>
  );
};

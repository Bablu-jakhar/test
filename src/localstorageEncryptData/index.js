import React, { useEffect, useState } from "react";
import localstorageEncrypt from "localstorage-encrypt";
const ls = localstorageEncrypt.init("storage", "my-secret-key", 12);
const index = () => {
  const [name, setName] = useState("Bablu Jakhar");
  useEffect(() => {
    ls.save("user", name);
  }, []);
  console.log(ls.get("user"));
  return <div>index</div>;
};

export default index;

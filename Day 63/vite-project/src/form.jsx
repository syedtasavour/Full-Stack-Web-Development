import React, { useState } from "react";

export default function Form() {
  let [FormData, setFormData] = useState({
    fullName: "",
    username: "",
  });
  let handleInput = (e) => {
    setFormData((currData) => {
      return { ...currData ,[e.target.name]:e.target.value };
    });
  };

  return (
    <form>
      <input
        type="text"
        value={FormData.fullName}
        onChange={handleInput}
        name="fullName"
      />
      <input
        type="text"
        value={FormData.username}
        onChange={handleInput}
        name="username"
      />
    </form>
  );
}

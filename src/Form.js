import React, { useState } from "react";
import { Input, Button } from "neutron-react-components";

import "./Form.scss";

export default function Form() {
  const [form, setForm] = useState({});
  return (
    <form className="form" title="form title">
      <img
        role="button"
        alt="image"
        src="https://via.placeholder.com/50/92c952"
      />
      <label htmlFor="name">
        Enter your name
        <Input id="name" placeholder="Enter your name" name="name" />
      </label>

      <label htmlFor="email">
        Enter your email
        <Input id="email" placeholder="Enter your email" name="email" />
      </label>

      <Button>Save</Button>
    </form>
  );
}

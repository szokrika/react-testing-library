import React, { useState } from "react";
import { Input, Button } from "neutron-react-components";

import "./Form.scss";

export default function Form() {
  const [form, setForm] = useState({});
  return (
    <form className="form">
      <Input placeholder="Enter your email" name="email" />

      <Button>Save</Button>
    </form>
  );
}

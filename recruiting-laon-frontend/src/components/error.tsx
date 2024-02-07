"use client";

import React from "react";

interface ErrorProps {
  message: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => (
  <p
    className="alert-danger"
    style={{ color: "red", margin: "5px" }}
    role="alert"
  >
    {message}
  </p>
);

export default Error;

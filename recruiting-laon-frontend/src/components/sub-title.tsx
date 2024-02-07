"use client";

import React from "react";

interface SubTitleProps {
  text: string;
}

const Title: React.FC<SubTitleProps> = ({ text }) => (
  <h6
    className="card-subtitle mb-2"
    style={{ color: "rgba(181, 179, 203, 1) !important" }}
  >
    {text}
  </h6>
);

export default Title;

"use client";

import React from "react";

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => (
  <h5 className="card-title text-white">{text}</h5>
);

export default Title;

import React from "react";

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => (
  <div className="card p-5" style={{ backgroundColor: "rgba(40, 38, 57, 1)" }}>
    <div className="card-body">{children}</div>
  </div>
);

export default Card;

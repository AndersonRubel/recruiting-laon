import React, { ReactNode } from "react";

interface DescriptionProps {
  col?: string;
  title: string;
  text: string;
}

const Description: React.FC<DescriptionProps> = ({
  col = "col-6",
  title,
  text,
}) => {
  return (
    <div className={`${col} mb-5`}>
      <h4 className="text-white">{title}</h4>
      <hr style={{ color: "rgba(72, 70, 91, 1)" }} />
      <p>{text}</p>
    </div>
  );
};

export default Description;

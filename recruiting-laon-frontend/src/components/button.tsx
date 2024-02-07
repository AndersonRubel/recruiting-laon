import React from "react";

interface ButtonProps {
  loading: boolean;
  text: string;
  onSubmit?: () => void;
}

const Button: React.FC<ButtonProps> = ({ loading, onSubmit, text }) => (
  <button
    className="btn btn-light mt-3 w-100 p-3"
    type="submit"
    disabled={loading}
    onClick={onSubmit}
  >
    {loading ? "Loading..." : text}
  </button>
);

export default Button;

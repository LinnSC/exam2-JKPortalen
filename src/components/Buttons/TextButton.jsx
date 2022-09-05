import { Button } from "@mui/material";
import PropTypes from "prop-types";

export default function TextBtn({
  sx,
  children,
  onClick,
  size,
  color,
  ...otherProps
}) {
  return (
    <Button
      {...otherProps}
      variant="text"
      color={color}
      size={size}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

TextBtn.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

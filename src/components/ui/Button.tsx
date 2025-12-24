import { Button as MUIButton, type SxProps, type Theme } from "@mui/material";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";

interface ButtonProps {
  type?: "forward" | "back";
  path: string;

  children: ReactNode;
  sx?: SxProps<Theme>;
}

export default function Button({
  type = "forward",
  path,
  children,
  sx = {},
}: ButtonProps) {
  return (
    <MUIButton
      component={Link}
      to={path}
      endIcon={type === "forward" && <EastIcon />}
      startIcon={type === "back" && <WestIcon />}
      disableRipple
      sx={{
        color: "var(--fc-base)",
        fontWeight: "700",
        fontSize: "var(--fs-base)",
        lineHeight: "150%",
        textTransform: "none",
        padding: 0,

        "&:hover": {
          backgroundColor: "transparent",
        },
        ...(sx as object),
      }}
    >
      {children}
    </MUIButton>
  );
}

import { Alert } from "@mui/material";

interface ErrorAlertProps {
  message: string;
  severity?: "error" | "warning";
}

export default function ErrorAlert({
  message,
  severity = "error",
}: ErrorAlertProps) {
  return (
    <Alert
      severity={severity}
      sx={{
        position: "fixed",
        bottom: "var(--fs-3xl)",
        right: "var(--fs-3xl)",
        color: "#000",
        fontFamily: "var(--font)",
        fontSize: "1.2rem",
      }}
    >
      {message}
    </Alert>
  );
}

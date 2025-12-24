import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

type SearchBarProps = {
  value: string;
  onChange: (val: string) => void;
};

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <TextField
      variant="outlined"
      id="articles-search"
      placeholder="Search articles..."
      fullWidth
      value={value}
      onChange={(e) => onChange(e.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon
              sx={{ color: "var(--fc-base)", fontSize: "var(--fs-l)" }}
            />
          </InputAdornment>
        ),
      }}
      sx={{
        "& .MuiInputBase-input": {
          color: "var(--fc-muted)",
          lineHeight: "150%",
          fontSize: "var(--fs-base)",
          padding: "clamp(9px, 0.7vw, 13px)",
          paddingLeft: 0,
          fontFamily: "var(--font)",
        },
        "& .MuiInputBase-input::placeholder": {
          color: "var(--fc-muted)",
        },

        "& .MuiOutlinedInput-root": {
          borderRadius: "5px",
          boxShadow: "var(--box-shadow)",

          "&.Mui-focused": {
            boxShadow: "var(--box-shadow)",
          },

          "& fieldset": {
            border: "var(--border)",
            transition: "border 0.5s ease",
          },
          "&:hover fieldset": {
            border: "1px solid var(--fc-muted)",
          },
          "&.Mui-focused fieldset": {
            border: "1px solid var(--fc-muted)",
          },
        },
      }}
    />
  );
}

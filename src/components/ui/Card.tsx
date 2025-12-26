import {
  Card as MUICard,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Box,
} from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { useLocation } from "react-router-dom";

import Button from "./Button";
import { truncateWord, formatDate, normalizeImageUrl } from "../../lib/helpers";
import type { Article } from "../../api/types";
import { highlightText } from "../../lib/search";
import { FALLBACK_IMG } from "../../lib/constants";

interface CardProps {
  data: Article;
  keywords: string[];
}

export default function Card({ data, keywords }: CardProps) {
  const location = useLocation();

  return (
    <MUICard
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        boxShadow: "var(--box-shadow)",
        border: "var(--border)",
        borderRadius: "5px",
        backgroundColor: "transparent",
      }}
    >
      <CardMedia
        component="img"
        alt={data.title}
        image={normalizeImageUrl(data.imageUrl)}
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src = FALLBACK_IMG;
        }}
        sx={{ height: "clamp(160px, 15vw, 217px)", objectFit: "cover" }}
      />

      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--fs-m)",
          padding: "var(--fs-l)",
          flex: 1,
        }}
      >
        <Typography
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "var(--fs-xs)",
            color: "var(--fc-muted)",
            lineHeight: "100%",
            fontFamily: "var(--font)",
            marginBottom: "clamp(2px, 0.3vw, 4px)",
          }}
        >
          <CalendarTodayOutlinedIcon
            sx={{ fontSize: "13.3px", display: "inline-block" }}
            aria-hidden
          />
          {formatDate(data.updatedAt)}
        </Typography>

        <Typography
          component="h2"
          sx={{
            fontSize: "var(--fs-ml)",
            fontFamily: "var(--font)",
            color: "var(--fc-base)",
            lineHeight: "1.5",
            height: "clamp(81px, 7.5vw, 108px)",
            overflow: "hidden",
          }}
        >
          {highlightText(truncateWord(data.title, 50), keywords)}
        </Typography>
        <Typography
          component="p"
          sx={{
            fontFamily: "var(--font)",
            fontSize: "var(--fs-base)",
            color: "var(--fc-base)",
            height: "clamp(76px, 6.1vw, 76.8px)",
          }}
        >
          {highlightText(truncateWord(data.summary), keywords)}
        </Typography>
        <Box sx={{ flex: 1 }} />
      </CardContent>

      <CardActions
        sx={{
          padding: "var(--fs-l)",
          paddingTop: 0,
        }}
      >
        <Button
          path={`/articles/${data.id}`}
          state={{ from: `${location.pathname}${location.search}` }}
        >
          Read More
        </Button>
      </CardActions>
    </MUICard>
  );
}

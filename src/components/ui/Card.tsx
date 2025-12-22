import {
  Card as MUICard,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";

import { truncateWord, formatDate } from "../../lib/helpers";

import type { Article } from "./CardList";

interface CardProps {
  data: Article;
}

export default function Card({ data }: CardProps) {
  return (
    <MUICard
      sx={{
        width: "100%",
        maxWidth: "clamp(320px, 27.8vw, 400px)",
        boxShadow: "var(--box-shadow)",
        border: "var(--border)",
        borderRadius: "5px",
      }}
    >
      <CardMedia
        component="img"
        alt={data.title}
        image={data.image_url}
        sx={{ height: "clamp(160px, 15vw, 217px)", objectFit: "cover" }}
      />

      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "clamp(12px, 1.4vw, var(--fs-m))",
          padding: "clamp(var(--fs-base), 1.75vw, var(--fs-l))",
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
          {formatDate(data.updated_at)}
        </Typography>

        <Typography
          component="h2"
          sx={{
            fontSize: "clamp(18px, 1.67vw, 24px)",
            fontFamily: "var(--font)",
            color: "var(--fc-base)",
          }}
        >
          {data.title}
        </Typography>
        <Typography
          component="p"
          sx={{
            fontFamily: "var(--font)",
            fontSize: "clamp(var(--fs-xs), 1.11vw, var(--fs-base))",
            color: "var(--fc-base)",
          }}
        >
          {truncateWord(data.summary)}
        </Typography>
      </CardContent>

      <CardActions
        sx={{
          padding: "clamp(var(--fs-base), 1.75vw, var(--fs-l))",
          paddingTop: 0,
        }}
      >
        <Button
          component={Link}
          to={`/articles/${data.id}`}
          endIcon={<ArrowRightAltIcon />}
          disableRipple
          sx={{
            color: "var(--fc-base)",
            fontWeight: "700",
            fontSize: "clamp(var(--fs-xs), 1.11vw, var(--fs-base))",
            lineHeight: "150%",
            textTransform: "none",
            padding: 0,

            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          Read More
        </Button>
      </CardActions>
    </MUICard>
  );
}

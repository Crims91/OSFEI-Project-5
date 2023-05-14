import { FC } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { BookCardProps } from "../app/models/booksInterface";
import { useAppDispatch, useAppSelector } from "../app/hooks/reduxToolkitHooks";
import { getBookFavorite } from "../app/slices/favoriteSlice";
import { removeBookFavorite } from "../app/slices/favoriteSlice";
import { IconButton } from "@mui/material";

const BookCard: FC<BookCardProps> = ({ book }) => {
  const dispatch = useAppDispatch();
  const favoriteBooks = useAppSelector((state) => state.favorite);

  const currentFavoriteBooks = favoriteBooks.bookFavorite.find(
    (item) => item.id === book.id
  );

  return (
    <Box sx={{ display: "inline-block", margin: 2 }}>
      <Card
        sx={{
          width: 250,
          height: 500,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          sx={{
            maxWidth: 150,
            height: 200,
            alignItems: "center",
            marginTop: 2,
            marginLeft: "auto",
            marginRight: "auto",
          }}
          image={book?.volumeInfo?.imageLinks?.thumbnail}
          component="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  book?.volumeInfo?.title.length > 30
                    ? book?.volumeInfo?.title.substring(0, 30).concat("...")
                    : book?.volumeInfo?.title,
              }}
            />
          </Typography>
          <Typography variant="body2" color="text.secondary" component="div">
            <div
              dangerouslySetInnerHTML={{
                __html: book?.searchInfo?.textSnippet.substring(0, 150),
              }}
            />
          </Typography>
        </CardContent>

        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "auto",
          }}
        >
          <Link to={`/book/${book.id}`}>
            <Button size="small" color="secondary" variant="outlined">
              Read More
            </Button>
          </Link>

          {currentFavoriteBooks ? (
            <IconButton
              size="small"
              onClick={() => {
                dispatch(removeBookFavorite({ id: book.id }));
              }}
            >
              <StarIcon sx={{ color: "#f2a92c" }} />
            </IconButton>
          ) : (
            <IconButton
              size="small"
              onClick={() => {
                dispatch(getBookFavorite(book!));
              }}
            >
              <StarBorderIcon sx={{ color: "#9c27b0" }} />
            </IconButton>
          )}
        </CardActions>
      </Card>
    </Box>
  );
};

export default BookCard;

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography/Typography";
import CardMedia from "@mui/material/CardMedia";
import { useGetBooksByIdQuery } from "../app/bookApi";
import { useAppSelector } from "../app/hooks/reduxToolkitHooks";
import { useAppDispatch } from "../app/hooks/reduxToolkitHooks";
import { removeBookFavorite } from "../app/slices/favoriteSlice";
import { getBookFavorite } from "../app/slices/favoriteSlice";

const DetailsPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const favoriteBooks = useAppSelector((state) => state.favorite);
  const { id } = useParams();
  const {
    data: book,
    isLoading,
    isError,
  } = useGetBooksByIdQuery(id ? `${id}` : "");

  const existingFavoriteBook = favoriteBooks.bookFavorite.find(
    (item) => item.id === id
  );

  if (isLoading) {
    return (
      <Typography sx={{ fontSize: 20, textAlign: "center" }}>
        Loading...
      </Typography>
    );
  }

  if (isError) {
    return (
      <>
        <Typography sx={{ fontSize: 20, textAlign: "center", color: "red" }}>
          Something went wrong
        </Typography>
        <Link to="/">
          <Button size="small" color="secondary" variant="outlined">
            Go Back
          </Button>
        </Link>
      </>
    );
  }

  return (
    <>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ height: "100vh", width: "100%" }}>
          <Button
            size="small"
            color="secondary"
            variant="outlined"
            onClick={() => navigate(-1)}
            sx={{ marginTop: 3 }}
          >
            Go Back
          </Button>

          <Typography
            variant="h4"
            sx={{ width: "100%", marginTop: 3 }}
            component="div"
          >
            <div
              dangerouslySetInnerHTML={{
                __html: book!.volumeInfo?.title,
              }}
            />
          </Typography>
          <Typography variant="h5" component="div">
            <div
              dangerouslySetInnerHTML={{
                __html: book!.volumeInfo?.subtitle,
              }}
            />
          </Typography>
          <CardMedia
            sx={{
              width: "auto",
              height: 400,
              marginTop: 2,
            }}
            image={book?.volumeInfo?.imageLinks?.thumbnail}
            component="img"
          />
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ marginTop: 2 }}
            component="div"
          >
            <div
              dangerouslySetInnerHTML={{
                __html: book!.volumeInfo?.description,
              }}
            />
          </Typography>
          <br />
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ fontWeight: "bold" }}
          >
            Author:{" "}
            {book?.volumeInfo?.authors?.map((author, index) =>
              index === 0 ? author : "," + " " + author
            ) || "Unknown"}
          </Typography>

          {existingFavoriteBook ? (
            <Button
              size="medium"
              color="secondary"
              variant="outlined"
              sx={{ marginTop: 2 }}
              onClick={() => {
                dispatch(removeBookFavorite({ id: id }));
              }}
            >
              Remove from Favorites
            </Button>
          ) : (
            <Button
              size="medium"
              color="secondary"
              variant="contained"
              onClick={() => {
                dispatch(getBookFavorite(book!));
              }}
              sx={{ marginTop: 2 }}
            >
              Add to Favorites
            </Button>
          )}
        </Box>
      </Container>
    </>
  );
};

export default DetailsPage;

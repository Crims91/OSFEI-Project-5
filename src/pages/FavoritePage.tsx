import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton/IconButton";
import StarIcon from "@mui/icons-material/Star";
import { Button } from "@mui/material";
import { removeBookFavorite } from "../app/slices/favoriteSlice";
import { useAppSelector, useAppDispatch } from "../app/hooks/reduxToolkitHooks";

const FavoritePage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { bookFavorite } = useAppSelector((state) => state.favorite);

  if (bookFavorite.length === 0) {
    return (
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{ width: "100%", textAlign: "center", marginTop: 2 }}
      >
        No Favorite Books
      </Typography>
    );
  }

  return (
    <>
      <Box>
        <Typography variant="h4" sx={{ textAlign: "center", marginTop: 2 }}>
          Favorite Books:
        </Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {bookFavorite.map(({ id, volumeInfo, searchInfo }) => (
          <Box
            sx={{
              margin: 2,
            }}
            key={id}
          >
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
                image={volumeInfo?.imageLinks?.thumbnail}
                component="img"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        volumeInfo?.title.length > 30
                          ? volumeInfo?.title.substring(0, 30).concat("...")
                          : volumeInfo?.title,
                    }}
                  />
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  component="div"
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: searchInfo?.textSnippet.substring(0, 150),
                    }}
                  />
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontWeight: "bold", marginTop: 2 }}
                >
                  Author:{" "}
                  {volumeInfo?.authors ? volumeInfo?.authors[0] : "Unknown"}
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  marginTop: "auto",
                }}
              >
                <Link to={`/book/${id}`}>
                  <Button size="small" color="secondary" variant="outlined">
                    Learn More
                  </Button>
                </Link>
                <IconButton
                  size="small"
                  onClick={() => {
                    dispatch(removeBookFavorite({ id }));
                  }}
                  sx={{ color: "#ed6d76" }}
                >
                  <StarIcon sx={{ color: "#f2a92c" }} />
                </IconButton>
              </CardActions>
            </Card>
          </Box>
        ))}
      </Box>
      <Box>
        <Button
          size="small"
          color="secondary"
          variant="outlined"
          onClick={() => navigate(-1)}
          sx={{ marginTop: 3, marginLeft: 2 }}
        >
          Back to Main Menu
        </Button>
      </Box>
    </>
  );
};

export default FavoritePage;

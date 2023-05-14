import BookCard from "../components/BookCard";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography/Typography";
import { BookSearchInput } from "../components/BookSearchInput";
import { useSearchBooksQuery } from "../app/bookApi";
import { useAppSelector } from "../app/hooks/reduxToolkitHooks";

export const MainPage = () => {
  const value = useAppSelector((state) => state.search.value);
  const { data: books, isLoading } = useSearchBooksQuery(value ? value : "");

  if (isLoading) {
    return (
      <Typography sx={{ fontSize: 20, textAlign: "center" }}>
        Loading...
      </Typography>
    );
  }

  if (!books?.items || books.totalItems === 0) {
    return (
      <>
        <BookSearchInput />
        <Typography
          variant="h4"
          marginTop={3}
          sx={{
            textAlign: "center",
            color: "red",
          }}
        >
          No books found
        </Typography>
      </>
    );
  }

  return (
    <>
      <BookSearchInput />
      <Box sx={{ textAlign: "center" }}>
        {books?.items?.map((book) => {
          if (!book.id) {
          }
          return <BookCard key={book.id} book={book} />;
        })}
      </Box>
    </>
  );
};

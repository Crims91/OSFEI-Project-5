import { useState, useEffect } from "react";
import { changeValue } from "../app/slices/searchSlice";
import { useAppDispatch } from "../app/hooks/reduxToolkitHooks";
import useDebounce from "../app/hooks/useDebounce";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const BookSearchInput = () => {
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = useState("");
  const debounceSearchValue = useDebounce(searchValue, 400);

  useEffect(() => {
    searchValue && dispatch(changeValue(debounceSearchValue));
  }, [debounceSearchValue, searchValue, dispatch]);

  return (
    <Box
      sx={{
        width: 400,
        maxWidth: "100%",
        marginTop: 2,
        marginRight: "auto",
        marginLeft: "auto",
      }}
    >
      <TextField
        fullWidth
        variant="standard"
        color="secondary"
        label="Find your Book"
        id="fullWidth"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </Box>
  );
};

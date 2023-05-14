import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiResponce, GoogleBook } from "./models/booksInterface";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.googleapis.com/books/v1/",
  }),
  endpoints: (builder) => ({
    searchBooks: builder.query<ApiResponce, string>({
      query: (sencence) => ({
        url: `volumes?q=${
          sencence ? sencence : "zoo"
        }&maxResults=12&key=AIzaSyAN_V5A7eieAQMHW3S90e3DQQi0HSixDFo`,
      }),
    }),
    getBooksById: builder.query<GoogleBook, string | undefined | TrustedHTML>({
      query: (id) => ({
        url: `volumes/${id}?key=AIzaSyAN_V5A7eieAQMHW3S90e3DQQi0HSixDFo`,
      }),
    }),
  }),
});

export const { useSearchBooksQuery, useGetBooksByIdQuery } = bookApi;

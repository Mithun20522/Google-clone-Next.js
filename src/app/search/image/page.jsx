import ImageSearchResult from "@/components/ImageSearchResult";
import Link from "next/link";
import React from "react";
const ImageSearchPage = async ({ searchParams }) => {
  const startIndex = searchParams.start || '1';
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_SEARCH_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=image&start=${startIndex}`
  );
  if (!res.ok) throw new Error("Something went wrong");
  const data = await res.json();
  const results = data.items;
  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="sm:text-3xl mb-4">
          No results found for {searchParams.searchTerm}
        </h1>
        <p className="sm:text-lg">
          Try searching the web or image for something else{" "}
          <Link href={"/"} className="text-blue-500">
            Home
          </Link>
        </p>
      </div>
    );
  }
  return <div>{results && <ImageSearchResult results={data} />}</div>;
};

export default ImageSearchPage;

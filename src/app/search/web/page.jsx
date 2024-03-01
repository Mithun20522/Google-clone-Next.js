import React from 'react'
const WebSearchPage = async ({searchParams}) => {
    const res = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_SEARCH_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`);
    const data = await res.json();
    const results = data.items;
  return (
    <div>
        {
            results && results.map((result) => (
                <h1>{result.title}</h1>
            ))
        }
    </div>
  )
}

export default WebSearchPage
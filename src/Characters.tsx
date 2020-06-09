import React, { useState } from "react";
import { usePaginatedQuery } from "react-query";
import Paging from "./Paging";

const Characters: React.FC = () => {
	const fetchCharacters = async (key: any, page: number) => await (await fetch(`https://swapi.dev/api/people/?page=${page}`)).json();
	const [page, setPage] = useState(1);
	const { status, error, resolvedData, isFetching } = usePaginatedQuery(["characters", page], fetchCharacters);

	if (status === "loading") return <p>Loading...</p>;
	if (status === "error") return <p>Error: {error?.message || "unknown"}</p>;

	return (
		<>
			<ul style={{ opacity: isFetching ? "0.3" : "1" }}>
				{resolvedData.results.map((character: any, index: number) => {
					return <li key={index}>{character.name}</li>;
				})}
			</ul>

			<Paging pageSize={10} count={resolvedData.count} currentPage={page} setPage={setPage} />
		</>
	);
};

export default Characters;

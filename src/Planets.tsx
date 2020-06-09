import React from "react";
import { useInfiniteQuery } from "react-query";

interface SWAPI {
	next: string;
	results: object[];
}

const Planets: React.FC = () => {
	const fetchPlanets = async (key: any, cursor = "https://swapi.dev/api/planets/?page=1") => {
		console.log("cursor", cursor);
		return await (await fetch(`${cursor}`)).json();
	};

	const { data, error, status, fetchMore, canFetchMore, isFetchingMore } = useInfiniteQuery("planets", fetchPlanets, {
		getFetchMore: (lastGroup: SWAPI) => lastGroup.next,
	});

	if (status === "error") return <p>Error: {error?.message}</p>;
	if (status === "loading") return <p>Loading...</p>;

	return (
		<div style={{ maxHeight: "415px", overflowY: "auto" }}>
			<ul>
				{data.map((i) => {
					return i.results.map((planet: any, index: number) => {
						return <li key={index}>{planet.name}</li>;
					});
				})}
				{isFetchingMore && <li>...</li>}
			</ul>
			<button onClick={() => fetchMore()} disabled={!canFetchMore}>
				More
			</button>
		</div>
	);
};

export default Planets;

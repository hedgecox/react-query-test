import React from "react";

interface Props {
	count: number;
	pageSize: number;
	currentPage: number;
	setPage: (page: number) => void;
}

const Paging: React.FC<Props> = ({ count, pageSize, currentPage, setPage }) => {
	const pages = Math.ceil(count / pageSize);

	return (
		<div>
			{Array(pages)
				.fill(0)
				.map((_, index) => {
					index = index + 1;
					return (
						<button
							key={index}
							onClick={() => setPage(index)}
							style={{ textDecoration: index === currentPage ? "underline" : "none", marginRight: "0.3em" }}
						>
							{index}
						</button>
					);
				})}
		</div>
	);
};

export default Paging;

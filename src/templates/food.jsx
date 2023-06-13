import React from "react";
import { BlogPostJsonLd, GatsbySeo } from "gatsby-plugin-next-seo";
import axios from "axios";
import Layout from "../layout";

function Food({ pageContext }) {
	const [card, setCard] = React.useState([]);

	React.useEffect(() => {
		async function fetchData() {
			let { data } = await axios.get(
				`https://api.spoonacular.com/recipes/${pageContext.id}/card?apiKey=f130622a703b48cabbd9f6493a1ea19c`
			);
			setCard(data.url);
		}

		fetchData();
	}, []);

	return (
		<>
			<Layout>
				<section className="main-container container">
					<div className="content-wrapper padding-top-half padding-bottom-2">
						<header className="border-bottom border-color-light-grey">
							<div className="container">
								<h1 className="margin-none padding-top-2 padding-bottom-2">
									{pageContext.title}
								</h1>
							</div>
						</header>
						<article className="article booking">
							<img
								className="img__article"
								style={{ maxHeight: "25rem" }}
								src={pageContext.image}
								alt={pageContext.title}
							/>
							<div
								style={{ margin: "2rem auto" }}
								dangerouslySetInnerHTML={{ __html: pageContext.content }}
							></div>
						</article>

						{card.length > 0 ? (
							<img src={card} alt={pageContext.title} />
						) : (
							"Loading"
						)}
					</div>
					<div className="sidebar-wrapper padding-top-half padding-bottom-2"></div>
				</section>
			</Layout>
		</>
	);
}
export default Food;

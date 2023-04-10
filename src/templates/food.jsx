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
				<GatsbySeo
					title={`${pageContext.title} | It's made of science`}
					description={pageContext.content}
					canonical={`https://www.madeofscience.com/${pageContext.title.replace(
						/\s+/g,
						"-"
					)}`}
					openGraph={{
						url: `https://www.madeofscience.com/${pageContext.title.replace(
							/\s+/g,
							"-"
						)}`,
						title: `${pageContext.title}`,
						description: `${pageContext.content}`,
						site_name: "Made Of Science",
						type: "article",
						article: {
							publishedTime: "2023-06-21T23:04:13Z",
							modifiedTime: "2023-01-21T18:04:43Z",
							expirationTime: "2025-12-21T22:04:11Z",
							section: "Recipes",
							authors: ["https://www.vincenzo.codes/about"],
							tags: [
								"Ricette",
								"Ricette Abruzzesi",
								"Cucina",
								"cooking",
								"homemade food",
							],
						},
						images: [
							{
								url: `${pageContext.image}`,
								width: 850,
								height: 650,
								alt: `${pageContext.title}`,
							},
						],
					}}
					twitter={{
						handle: "Vincenzo Marcovecchio",
						site: "www.madeofscience.com",
						cardType: "summary_large_image",
					}}
				/>

				<BlogPostJsonLd
					url={`https://www.madeofscience.com/${pageContext.title.replace(
						/\s+/g,
						"-"
					)}`}
					title={`${pageContext.title} | Made Of Science`}
					authorName="madeofscience"
					description={pageContext.content}
					images={[
						`${pageContext.image}`,
						`${pageContext.image}`,
						`${pageContext.image}`,
					]}
					datePublished="2023-02-05T08:00:00+08:00"
					dateModified="2023-02-05T09:00:00+08:00"
				/>
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

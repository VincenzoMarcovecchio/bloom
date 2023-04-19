import React from "react";
import Helmet from "react-helmet";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import siteConfig from "../../data/SiteConfig";
import { useSlash } from "../utils/helpers";
import brand from "../../content/images/brand.png";
import "../components/Icons/FontAwesome";
import "shiba-css/docs/css/shiba.min.css";
import "../../content/styles/customize.scss";

const MainLayout = ({ children, hasFooter = true }) => (
	<div>
		<Helmet htmlAttributes={{ lang: siteConfig.siteLang }}>
			<meta name="description" content={siteConfig.siteDescription} />
			<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
			<link rel="canonical" href={useSlash(siteConfig.siteUrl)} />
			<meta
				name="google-site-verification"
				content="I83ESLPhetPjpkrYKxSwRv8CNjQW1hx_zajrGpM7GUI"
			/>
			<script
				type="text/javascript"
				src="https://www.google.com/jsapi"
			></script>
			<script
				src="http://www.google.com/uds/solutions/dynamicfeed/gfdynamicfeedcontrol.js"
				type="text/javascript"
			></script>

			<style type="text/css">
				{`
@import url("http://www.google.com/uds/solutions/dynamicfeed/gfdynamicfeedcontrol.css");

#feedControl {
margin-top : 10px;
margin-left: auto;
margin-right: auto;
width : 440px;
font-size: 12px;
color: #9CADD0;
}
`}
			</style>
			<script type="text/javascript">
				{`
function load() {
var feed ="http://feeds.bbci.co.uk/news/world/rss.xml";
new GFdynamicFeedControl(feed, "feedControl");

}
google.load("feeds", "1");
google.setOnLoadCallback(load);
`}
			</script>
		</Helmet>
		<Navigation
			brand={brand}
			title={siteConfig.navTitle}
			links={siteConfig.navLinks}
		/>
		{children}
		{hasFooter && (
			<Footer
				socials={siteConfig.socialLinks}
				links={siteConfig.footerLinks}
				copyright={siteConfig.copyright}
			/>
		)}
		<ScrollToTop color="#FFF" bgColor="grey-half" />
	</div>
);

export default MainLayout;

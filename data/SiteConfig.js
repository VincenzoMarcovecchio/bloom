const config = {
	// Site info
	siteTitle: "Science Bloom", // Site title.
	siteTitleShort: "SB", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
	siteTitleAlt: "Science Bloom", // Alternative site title for SEO.
	siteLogo: "/logos/logo-1024x1024.png", // Logo used for SEO and manifest.
	siteUrl: "https://sciencebloom.net", // Domain of your website without pathPrefix.
	pathPrefix: "", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
	siteDescription: "All news related to science and more", // Website description used for RSS feeds/meta description tag.
	siteRss: "/rss.xml", // Path to the RSS file.
	siteLang: "en",
	siteFBAppID: "", // FB Application ID for using app insights
	googleAnalyticsID: "", // GA tracking ID.
	postDefaultCategoryID: "", // Default category for posts.
	// Common for tag, category pages and widget
	numberLatestPost: 8,
	postsPerPage: 6,
	// Use for post
	dateFromFormat: "YYYY-MM-DDTHH:mm:ssZ", // Date format used in the frontmatter.
	dateFormat: "MMMM Do, YYYY", // Date format for display.
	postTagged: "",
	postInCategories: "",
	postOnDate: "Posted on",
	// Use for comment
	lazyLoadComments: true,
	disqusShortname: "Science Bloom", // Disqus shortname.
	btnLoadComments: "Load comments",
	// Use for home page
	numberLoadmore: 6,
	btnLoadmore: "Load more",
	homeHasLoadmore: false,
	homeHasThumbnail: true,
	homeHeader: "Home",
	homeMoreArticles: "More articles",
	// Use for page
	pathPrefixPagination: "/page", // Prefix path for pagination
	pageNotFoundTitle: "Page Not Found", //
	pageNotFoundBtn: "Back to our site",
	pageNotFoundContent:
		"Looks like you've followed a broken link or entered a URL that doesn't exist on this site.",
	// Use for tag
	pathPrefixTag: "/tag", // Prefix path for tags
	tagHeader: "Posts tagged as", // use in header of tag-template page
	tagHasThumbnail: true,
	// Use for category
	pathPrefixCategory: "/category", // Prefix path for category
	categoryHeader: "Posts in category", // use in header of category-template page
	categoryHasThumbnail: true,
	// Use for blog
	pathPrefixBlog: "/blog", // Prefix path for blog
	blogHeader: "Blog", // use in header of category-template page
	blogHasThumbnail: true,
	// Use for widget
	categoryWidgetTitle: "Categories",
	tagWidgetTitle: "Tags",
	latestPostsWidgetTitle: "Latest posts",
	linksWidgetTitle: "Links",
	// Use for Google custom search
	searchWidgetTitle: "Looking for?",
	searchWidgetPlaceHolder: "Enter keyword",
	searchEngineID: "",
	hasSearch: true,
	// Use for links widget
	sidebarSticky: true,
	sidebarLinks: [
		{
			label: "Complete JavaScript",
			url: "",
		},
		{
			label: "",
			url: "",
		},
		{
			label: "",
			url: "",
		},
	],
	// Use for user info
	userName: "", // Username to display in the author segment.
	userEmail: "", // Email used for RSS feed"s author segment
	userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
	userLocation: "", // User location to display in the author segment.
	userAvatar:
		"", // User avatar to display in the author segment.
	userDescription:
		"", // User description to display in the author segment.
	// Links to social profiles/projects you want to display in the author segment/navigation bar.
	userLinks: [
		{
			label: "Email",
			url: "",
			iconClassName: "far envelope",
		},
		{
			label: "Website",
			url: "",
			iconClassName: "fas globe",
		},
		{
			label: "Twitter",
			url: "",
			iconClassName: "fab twitter",
		},
		{
			label: "Facebook",
			url: "",
			iconClassName: "fab facebook-f",
		},
		{
			label: "Linkedin",
			url: "
			
			",
			iconClassName: "fab linkedin-in",
		},
	],
	// Use for navigation
	navTitle: "GB Template",
	navLinks: [
		{ label: "About", url: "/about" },
		{ label: "Contact", url: "/contact" },
	],
	// Use for footer
	socialLinks: [
		{
			label: "Codepen",
			url: "",
			iconClassName: "fab codepen",
		},
		{
			label: "FreeCodeCamp",
			url: "", // Ignore
			iconClassName: "fab free-code-camp",
		},
		{
			label: "GitHub",
			url: "",
			iconClassName: "fab github",
		},
		
		{
			label: "Facebook",
			url: "",
			iconClassName: "fab facebook-f",
		},
		{
			label: "Linkedin",
			url: "",
			iconClassName: "fab linkedin-in",
		},
		{
			label: "Twitter",
			url: "",
			iconClassName: "fab twitter",
		},
		{
			label: "RSS",
			url: "https://bloom-six.vercel.app/rss.xml",
			iconClassName: "fas rss",
		},
	],
	footerLinks: [
		{ label: "Home", url: "/" },
		{ label: "About", url: "/about" },
		{ label: "Contact", url: "/contact" },
		{ label: "Terms of Use", url: "/terms" },
		{ label: "Privacy Policy", url: "/privacy" },
		{ label: "Sitemap", url: "https://bloom-six.vercel.app/sitemap.xml" },
	],
	copyright: "",
	// Use for manifest
	themeColor: "#2196F3", // Used for setting manifest and progress theme colors.
	backgroundColor: "#FFF", // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/" || config.pathPrefix === "") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;

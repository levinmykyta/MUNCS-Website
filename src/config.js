export const LINKS = {
	discord: "https://discord.muncompsci.ca/",
	github: "https://github.com/MUNComputerScienceSociety/",
	githubExecDocs:
		"https://github.com/MUNComputerScienceSociety/Executive-Docs/",
	csclubExecDocs: "https://www.cs.mun.ca/~csclub/executive-documents/",
	facebookPage: "https://www.facebook.com/MUNCSSociety/",
	facebookGroup: "https://www.facebook.com/groups/2202189009/",
	instagram: "https://www.instagram.com/muncssociety/",
	twitter: "https://twitter.com/muncssociety.",
};

export const SIDEBAR = [
	{
		text: "Home",
		link: "/",
		children: [
			{ text: "Discord", link: LINKS.discord },
			{ text: "GitHub", link: LINKS.github },
		],
	},
	{
		text: "Society",
		link: "/society/",
		children: [
			{ text: "Executives", link: "/society/executives" },
			{
				text: "Constitution",
				link: "/society/constitution",
				children: [
					{ text: "1. Definitions", link: "/society/constitution#1-definitions" },
					{ text: "2. Name", link: "/society/constitution#2-name" },
					{ text: "3. Purpose", link: "/society/constitution#3-purpose" },
					{ text: "4. Membership", link: "/society/constitution#4-membership" },
					{ text: "5. Executive Positions", link: "/society/constitution#5-executive-positions" },
					{ text: "6. Executive Elections", link: "/society/constitution#6-executive-elections" },
					{ text: "7. Executive Resignation", link: "/society/constitution#7-executive-resignation" },
					{ text: "8. Executive Removal", link: "/society/constitution#8-executive-removal" },
					{ text: "9. Executive Vacancy", link: "/society/constitution#9-executive-vacancy" },
					{ text: "10. Meetings", link: "/society/constitution#10-meetings" },
					{ text: "11. Finance", link: "/society/constitution#11-finance" },
					{ text: "12. Amendments", link: "/society/constitution#12-amendments" }
				],
			},
			{ text: "Code of Conduct", link: "/society/code-of-conduct" },
			{ text: "Meeting Documents", link: "/society/meeting-documents" },
		],
	},
	{
		text: "Resources",
		link: "/resources/",
		children: [{ text: "Archives", link: "/resources/archives" }],
	},
];

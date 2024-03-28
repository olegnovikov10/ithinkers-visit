import React, { createContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguageOption } from "../types";

import images from "../assets";
import { ProductSteps } from "../components/ProductSteps";

// Определение типа для контекста

interface AdvantageItem {
	title: string;
	description: string;
}

export interface AdvantagesPage {
	our: {
		title: string;
		data: AdvantageItem[];
	};
	other: {
		title: string;
		data: AdvantageItem[];
	};
}

interface Advantages {
	title: string;
	appPage: AdvantagesPage;
	coffeePage: AdvantagesPage;
	sitePage: AdvantagesPage;
}

export interface SlideFunc {
	title: string;
	img: string; // Предполагается, что это ссылка на изображение
}

export interface TabFunc {
	id: string;
	name: string;
	title: string;
	ios: string;
	android: string;
	icon: string; // Предполагается, что это ссылка на иконку
	img: string; // Предполагается, что это ссылка на изображение
	images: string[]; // Массив ссылок на изображения
}

interface Functionality {
	title: string;
	slides: {
		appPage: SlideFunc[];
		sitePage: SlideFunc[];
		coffeePage: SlideFunc[];
	};
	tabs: {
		appPage: {
			data: TabFunc[];
		};
		sitePage: {
			data: TabFunc[];
		};
		coffeePage: {
			data: TabFunc[];
		};
	};
}

interface PossibilityContent {
	percent: string;
	title: string;
	content: string;
}

interface PossibilityPicture {
	img: string;
	firstTitle: string;
	secondTitle?: string;
}

export interface PossibilityPage {
	title: string;
	dataContent: PossibilityContent[];
	dataPictures: PossibilityPicture[];
}

export interface Possibilities {
	appPage: PossibilityPage;
	sitePage: PossibilityPage;
	coffeePage: PossibilityPage;
}

interface MenuItem {
	title: string;
	href: string;
}

interface FooterContact {
	title: string;
	iconNumber: string;
	iconViber: string;
	iconTelegram: string;
	phoneOne: string;
	phoneTwo: string;
	phoneThree: string;
}

interface FooterSocialNetworks {
	title: string;
	iconMail: string;
	iconFb: string;
	iconInst: string;
}

interface FooterAgreement {
	title: string;
	publicOffer: string;
	cooperation: string;
}

interface Footer {
	contactUs: FooterContact;
	socialNetworks: FooterSocialNetworks;
	agreement: FooterAgreement;
}

interface FAQItem {
	id: string;
	title: string;
	content: string;
}

interface FAQ {
	title: string;
	data: FAQItem[];
}

interface Partners {
	title: string;
	description: string;
	integrationTitle: string;
	paymentsTitle: string;
	joinToPartners: string;
	imagesIntegraton: string[];
	imagesPayments: string[];
}

interface Clients {
	title: string;
	description: string;
}

interface PriceItem {
	id: string;
	title: string;
	content: {
		id: string;
		month: string;
		fullPeriod?: string;
		description: string;
	}[];
}

interface Price {
	title: string;
	footer: string;
	data: PriceItem[];
}

interface ReviewSlide {
	content: string;
	author: string;
	jobTitle: string;
	images: string;
	icon: string;
}

interface Reviews {
	title: string;
	slides: ReviewSlide[];
}

interface AchievementItem {
	title: string;
	amount: string;
}

interface Achievements {
	title: string;
	items: AchievementItem[];
}

interface Question {
	count: string;
	title: string;
	description: string;
}

interface DevelopSteps {
	title: string;
	questions: Question[];
	startAppTitle: string;
}
interface Banner {
	title: string;
	description: string;
}

interface SolutionBlock {
	title: string;
	description: string;
	link: string;
	presentationUrl: string;
	picture: string;
	background: string;
}

interface Solution {
	homePage: {
		mainTitle: string;
	};
	otherPage: {
		mainTitle: string;
	};
	appBlock: SolutionBlock;
	siteBlock: SolutionBlock;
	coffeeBlock: SolutionBlock;

	buttonDetail: string;
	buttonPrezentation: string;
}

interface BannerData {
	homePage: Banner;
	appPage: Banner;
	sitePage: Banner;
	coffeePage: Banner;
}

interface DataContextType {
	optionsLng: LanguageOption[];
	banner: BannerData;
	solution: Solution;
	developSteps: DevelopSteps;
	achievements: Achievements;
	reviews: Reviews;
	price: Price;
	clients: Clients;
	partners: Partners;
	faq: FAQ;
	footer: Footer;
	menu: MenuItem[];
	possibilities: Possibilities;
	functionality: Functionality;
	advantages: Advantages;
}

interface Props {
	children: React.ReactNode;
}

export const DataContext = createContext<DataContextType | undefined>(
	undefined
);

export const DataContextProvider: React.FC<Props> = ({ children }) => {
	const { t } = useTranslation();

	const advantages = {
		title: t("advantages.title"),
		appPage: {
			our: {
				title: t("advantages.appPage.our.title"),
				data: [
					{
						title: t("advantages.appPage.our.one.title"),
						description: t("advantages.appPage.our.one.description"),
					},
					{
						title: t("advantages.appPage.our.two.title"),
						description: t("advantages.appPage.our.two.description"),
					},
					{
						title: t("advantages.appPage.our.three.title"),
						description: t("advantages.appPage.our.three.description"),
					},
				],
			},
			other: {
				title: t("advantages.appPage.other.title"),
				data: [
					{
						title: t("advantages.appPage.other.one.title"),
						description: t("advantages.appPage.other.one.description"),
					},
					{
						title: t("advantages.appPage.other.two.title"),
						description: t("advantages.appPage.other.two.description"),
					},
					{
						title: t("advantages.appPage.other.three.title"),
						description: t("advantages.appPage.other.three.description"),
					},
				],
			},
		},
		coffeePage: {
			our: {
				title: t("advantages.coffeePage.our.title"),
				data: [
					{
						title: t("advantages.coffeePage.our.one.title"),
						description: t("advantages.coffeePage.our.one.description"),
					},
					{
						title: t("advantages.coffeePage.our.two.title"),
						description: t("advantages.coffeePage.our.two.description"),
					},
					{
						title: t("advantages.coffeePage.our.three.title"),
						description: t("advantages.coffeePage.our.three.description"),
					},
				],
			},
			other: {
				title: t("advantages.coffeePage.other.title"),
				data: [
					{
						title: t("advantages.coffeePage.other.one.title"),
						description: t("advantages.coffeePage.other.one.description"),
					},
					{
						title: t("advantages.coffeePage.other.two.title"),
						description: t("advantages.coffeePage.other.two.description"),
					},
					{
						title: t("advantages.coffeePage.other.three.title"),
						description: t("advantages.coffeePage.other.three.description"),
					},
				],
			},
		},
		sitePage: {
			our: {
				title: t("advantages.sitePage.our.title"),
				data: [
					{
						title: t("advantages.sitePage.our.one.title"),
						description: t("advantages.sitePage.our.one.description"),
					},
					{
						title: t("advantages.sitePage.our.two.title"),
						description: t("advantages.sitePage.our.two.description"),
					},
					{
						title: t("advantages.sitePage.our.three.title"),
						description: t("advantages.sitePage.our.three.description"),
					},
				],
			},
			other: {
				title: t("advantages.sitePage.other.title"),
				data: [
					{
						title: t("advantages.sitePage.other.one.title"),
						description: t("advantages.sitePage.other.one.description"),
					},
					{
						title: t("advantages.sitePage.other.two.title"),
						description: t("advantages.sitePage.other.two.description"),
					},
					{
						title: t("advantages.sitePage.other.three.title"),
						description: t("advantages.sitePage.other.three.description"),
					},
				],
			},
		},
	};

	const functionality = {
		title: t("functionlity.title"),
		slides: {
			appPage: [
				{
					title: t("functionlity.slider.appPageSlide.firstLink"),
					img: images.functionlity1,
				},
				{
					title: t("functionlity.slider.appPageSlide.secondLink"),
					img: images.functionlity1,
				},
				{
					title: t("functionlity.slider.appPageSlide.thirdLink"),
					img: images.functionlity1,
				},
				{
					title: t("functionlity.slider.appPageSlide.fourthLink"),
					img: images.functionlity1,
				},
				{
					title: t("functionlity.slider.appPageSlide.fifthLink"),
					img: images.functionlity1,
				},
				{
					title: t("functionlity.slider.appPageSlide.sixthLink"),
					img: images.functionlity1,
				},
				{
					title: t("functionlity.slider.appPageSlide.seventhLink"),
					img: images.functionlity1,
				},
				{
					title: t("functionlity.slider.appPageSlide.eighthLink"),
					img: images.functionlity1,
				},
				{
					title: t("functionlity.slider.appPageSlide.firstLink"),
					img: images.functionlity1,
				},
			],
			sitePage: [
				{
					title: t("functionlity.slider.sitePageSlide.firstLink"),
					img: images.functionlity1,
				},
				{
					title: t("functionlity.slider.sitePageSlide.secondLink"),
					img: images.functionlity1,
				},
				{
					title: t("functionlity.slider.sitePageSlide.thirdLink"),
					img: images.functionlity1,
				},
				{
					title: t("functionlity.slider.sitePageSlide.fourthLink"),
					img: images.functionlity1,
				},
				{
					title: t("functionlity.slider.sitePageSlide.fifthLink"),
					img: images.functionlity1,
				},
				{
					title: t("functionlity.slider.sitePageSlide.sixthLink"),
					img: images.functionlity1,
				},
				{
					title: t("functionlity.slider.sitePageSlide.seventhLink"),
					img: images.functionlity1,
				},
				{
					title: t("functionlity.slider.sitePageSlide.eighthLink"),
					img: images.functionlity1,
				},
			],
			coffeePage: [
				{
					title: t("functionlity.slider.coofeePageSlide.firstLink"),
					img: images.functionlity1,
				},
				{
					title: t("functionlity.slider.coofeePageSlide.secondLink"),
					img: images.functionlity1,
				},
				{
					title: t("functionlity.slider.coofeePageSlide.thirdLink"),
					img: images.functionlity1,
				},
				{
					title: t("functionlity.slider.coofeePageSlide.fourthLink"),
					img: images.functionlity1,
				},
				{
					title: t("functionlity.slider.coofeePageSlide.fifthLink"),
					img: images.functionlity1,
				},
				{
					title: t("functionlity.slider.coofeePageSlide.sixthLink"),
					img: images.functionlity1,
				},
				{
					title: t("functionlity.slider.coofeePageSlide.seventhLink"),
					img: images.functionlity1,
				},
				{
					title: t("functionlity.slider.coofeePageSlide.eighthLink"),
					img: images.functionlity1,
				},
				{
					title: t("functionlity.slider.coofeePageSlide.firstLink"),
					img: images.functionlity1,
				},
			],
		},
		tabs: {
			appPage: {
				data: [
					{
						id: "0",
						name: t("functionlity.tabs.appPage.one.name"),
						title: t("functionlity.tabs.appPage.one.title"),
						ios: t("functionlity.tabs.appPage.one.ios"),
						android: t("functionlity.tabs.appPage.one.android"),
						icon: images.iconSushi,
						img: images.sushi,
						images: [
							images.contentFunc1,
							images.contentFunc2,
							images.contentFunc3,
							images.contentFunc4,
						],
					},
					{
						id: "1",
						name: t("functionlity.tabs.appPage.two.name"),
						title: t("functionlity.tabs.appPage.two.title"),
						ios: t("functionlity.tabs.appPage.two.ios"),
						android: t("functionlity.tabs.appPage.two.android"),
						icon: images.iconBurger,
						img: images.burger,
						images: [
							images.contentFunc1,
							images.contentFunc2,
							images.contentFunc3,
							images.contentFunc4,
						],
					},
					{
						id: "2",
						name: t("functionlity.tabs.appPage.third.name"),
						title: t("functionlity.tabs.appPage.third.title"),
						ios: t("functionlity.tabs.appPage.third.ios"),
						android: t("functionlity.tabs.appPage.third.android"),
						icon: images.iconUkr,
						img: images.hata,
						images: [
							images.contentFunc1,
							images.contentFunc2,
							images.contentFunc3,
							images.contentFunc4,
						],
					},
				],
			},
			sitePage: {
				data: [
					{
						id: "0",
						name: t("functionlity.tabs.sitePage.one.name"),
						title: t("functionlity.tabs.sitePage.one.title"),
						ios: t("functionlity.tabs.sitePage.one.ios"),
						android: t("functionlity.tabs.sitePage.one.android"),
						icon: images.iconSushi,
						img: images.sushi,
						images: [
							images.contentFunc1,
							images.contentFunc2,
							images.contentFunc3,
							images.contentFunc4,
						],
					},
					{
						id: "1",
						name: t("functionlity.tabs.sitePage.two.name"),
						title: t("functionlity.tabs.sitePage.two.title"),
						ios: t("functionlity.tabs.sitePage.two.ios"),
						android: t("functionlity.tabs.sitePage.two.android"),
						icon: images.iconBurger,
						img: images.burger,
						images: [
							images.contentFunc1,
							images.contentFunc2,
							images.contentFunc3,
							images.contentFunc4,
						],
					},
					{
						id: "2",
						name: t("functionlity.tabs.sitePage.third.name"),
						title: t("functionlity.tabs.sitePage.third.title"),
						ios: t("functionlity.tabs.sitePage.third.ios"),
						android: t("functionlity.tabs.sitePage.third.android"),
						icon: images.iconUkr,
						img: images.hata,
						images: [
							images.contentFunc1,
							images.contentFunc2,
							images.contentFunc3,
							images.contentFunc4,
						],
					},
				],
			},
			coffeePage: {
				data: [
					{
						id: "0",
						name: t("functionlity.tabs.homePage.one.name"),
						title: t("functionlity.tabs.homePage.one.title"),
						ios: t("functionlity.tabs.homePage.one.ios"),
						android: t("functionlity.tabs.homePage.one.android"),
						icon: images.iconSushi,
						img: images.sushi,
						images: [
							images.contentFunc1,
							images.contentFunc2,
							images.contentFunc3,
							images.contentFunc4,
						],
					},
					{
						id: "1",
						name: t("functionlity.tabs.homePage.two.name"),
						title: t("functionlity.tabs.homePage.two.title"),
						ios: t("functionlity.tabs.homePage.two.ios"),
						android: t("functionlity.tabs.homePage.two.android"),
						icon: images.iconBurger,
						img: images.burger,
						images: [
							images.contentFunc1,
							images.contentFunc2,
							images.contentFunc3,
							images.contentFunc4,
						],
					},
					{
						id: "2",
						name: t("functionlity.tabs.homePage.third.name"),
						title: t("functionlity.tabs.homePage.third.title"),
						ios: t("functionlity.tabs.homePage.third.ios"),
						android: t("functionlity.tabs.homePage.third.android"),
						icon: images.iconUkr,
						img: images.hata,
						images: [
							images.contentFunc1,
							images.contentFunc2,
							images.contentFunc3,
							images.contentFunc4,
						],
					},
				],
			},
		},
	};

	const possibilities = {
		appPage: {
			title: t("possibilities.appPage.title"),
			dataContent: [
				{
					percent: t("possibilities.appPage.first.percent"),
					title: t("possibilities.appPage.first.title"),
					content: t("possibilities.appPage.first.content"),
				},
				{
					percent: t("possibilities.appPage.second.percent"),
					title: t("possibilities.appPage.second.title"),
					content: t("possibilities.appPage.second.content"),
				},
				{
					percent: t("possibilities.appPage.third.percent"),
					title: t("possibilities.appPage.third.title"),
					content: t("possibilities.appPage.third.content"),
				},
			],
			dataPictures: [
				{
					img: images.posibilities1,
					firstTitle: t("possibilities.appPage.pictures.one.firstTitle"),
				},
				{
					img: images.posibilities2,
					firstTitle: t("possibilities.appPage.pictures.two.firstTitle"),
					secondTitle: t("possibilities.appPage.pictures.two.secondTitle"),
				},
				{
					img: images.posibilities3,
					firstTitle: t("possibilities.appPage.pictures.third.firstTitle"),
					secondTitle: t("possibilities.appPage.pictures.third.secondTitle"),
				},
			],
		},
		sitePage: {
			title: t("possibilities.sitePage.title"),
			dataContent: [
				{
					percent: t("possibilities.sitePage.first.percent"),
					title: t("possibilities.sitePage.first.title"),
					content: t("possibilities.sitePage.first.content"),
				},
				{
					percent: t("possibilities.sitePage.second.percent"),
					title: t("possibilities.sitePage.second.title"),
					content: t("possibilities.sitePage.second.content"),
				},
				{
					percent: t("possibilities.sitePage.third.percent"),
					title: t("possibilities.sitePage.third.title"),
					content: t("possibilities.sitePage.third.content"),
				},
			],
			dataPictures: [
				{
					img: images.posibilities1,
					firstTitle: t("possibilities.sitePage.pictures.one.firstTitle"),
				},
				{
					img: images.posibilities2,
					firstTitle: t("possibilities.sitePage.pictures.two.firstTitle"),
					secondTitle: t("possibilities.sitePage.pictures.two.secondTitle"),
				},
				{
					img: images.posibilities3,
					firstTitle: t("possibilities.sitePage.pictures.third.firstTitle"),
					secondTitle: t("possibilities.sitePage.pictures.third.secondTitle"),
				},
			],
		},
		coffeePage: {
			title: t("possibilities.coffeePage.title"),
			dataContent: [
				{
					percent: t("possibilities.coffeePage.first.percent"),
					title: t("possibilities.coffeePage.first.title"),
					content: t("possibilities.coffeePage.first.content"),
				},
				{
					percent: t("possibilities.coffeePage.second.percent"),
					title: t("possibilities.coffeePage.second.title"),
					content: t("possibilities.coffeePage.second.content"),
				},
				{
					percent: t("possibilities.coffeePage.third.percent"),
					title: t("possibilities.coffeePage.third.title"),
					content: t("possibilities.coffeePage.third.content"),
				},
			],
			dataPictures: [
				{
					img: images.posibilities1,
					firstTitle: t("possibilities.coffeePage.pictures.one.firstTitle"),
				},
				{
					img: images.posibilities3,
					firstTitle: t("possibilities.coffeePage.pictures.third.firstTitle"),
					secondTitle: t("possibilities.coffeePage.pictures.third.secondTitle"),
				},
			],
		},
	};

	const menu = [
		{
			title: t("header.menu.solution"),
			href: "#solution",
		},
		{
			title: t("header.menu.reviews"),
			href: "#reviews",
		},
		{
			title: t("header.menu.price"),
			href: "#price",
		},
		{
			title: t("header.menu.blog"),
			href: "#blog",
		},
		{
			title: t("header.menu.partners"),
			href: "/referral-program",
		},
	];

	const optionsLng: LanguageOption[] = [
		{
			value: "uk",
			labelFull: t("languages.full.ua"),
			labelShort: t("languages.short.ua"),
			image: images.ua,
		},
		{
			value: "en",
			labelFull: t("languages.full.en"),
			labelShort: t("languages.short.en"),
			image: images.usa,
		},
		{
			value: "pl",
			labelFull: t("languages.full.pl"),
			labelShort: t("languages.short.pl"),
			image: images.pl,
		},
		{
			value: "ru",
			labelFull: t("languages.full.ru"),
			labelShort: t("languages.short.ru"),
			image: images.ru,
		},
	];

	const banner = {
		homePage: {
			title: t("banner.homePage.title"),
			description: t("banner.homePage.description"),
		},
		appPage: {
			title: t("banner.homePage.title"),
			description: t("banner.homePage.description"),
		},
		sitePage: {
			title: t("banner.homePage.title"),
			description: t("banner.homePage.description"),
		},
		coffeePage: {
			title: t("banner.homePage.title"),
			description: t("banner.homePage.description"),
		},
	};

	const solution = {
		homePage: {
			mainTitle: t("solution.homePage.mainTitle"),
		},
		otherPage: {
			mainTitle: t("solution.otherPage.mainTitle"),
		},

		appBlock: {
			title: t("solution.appBlock.title"),
			description: t("solution.appBlock.description"),
			presentationUrl:
				"https://drive.google.com/file/d/1KsuyObiszlATOx_4fFfNbkCgXr84HZPg/view",
			link: "/app",
			background: "#F6F6F6",
			picture: images.businessImg,
		},

		siteBlock: {
			title: t("solution.siteBlock.title"),
			description: t("solution.siteBlock.description"),
			presentationUrl:
				"https://drive.google.com/file/d/1KsuyObiszlATOx_4fFfNbkCgXr84HZPg/view",
			picture: images.businessImg2,
			link: "/site",
			background: "#F3F9FF",
		},
		coffeeBlock: {
			title: t("solution.coffeeBlock.title"),
			description: t("solution.coffeeBlock.description"),
			presentationUrl:
				"https://drive.google.com/file/d/1KsuyObiszlATOx_4fFfNbkCgXr84HZPg/view",
			picture: images.businessImg3,
			link: "/coffeeshop",
			background: "#F3F9FF",
		},

		buttonDetail: t("solution.buttonDetail"),
		buttonPrezentation: t("solution.buttonPrezentation"),
	};

	const developSteps = {
		title: t("developSteps.title"),
		questions: [
			{
				count: t("developSteps.requestStep.count"),
				title: t("developSteps.requestStep.title"),
				description: t("developSteps.requestStep.description"),
			},
			{
				count: t("developSteps.questionnaireStep.count"),
				title: t("developSteps.questionnaireStep.title"),
				description: t("developSteps.questionnaireStep.description"),
			},
			{
				count: t("developSteps.resultSteps.count"),
				title: t("developSteps.resultSteps.title"),
				description: t("developSteps.resultSteps.description"),
			},
		],
		startAppTitle: t("developSteps.startApp.title"),
	};

	const achievements = {
		title: t("achievements.title"),
		items: [
			{
				title: t("achievements.countSetup.title"),
				amount: t("achievements.countSetup.amount"),
			},
			{
				title: t("achievements.avgGrade.title"),
				amount: t("achievements.avgGrade.amount"),
			},
			{
				title: t("achievements.countReviews.title"),
				amount: t("achievements.countReviews.amount"),
			},
			{
				title: t("achievements.sumPurchases.title"),
				amount: t("achievements.sumPurchases.amount"),
			},
		],
	};

	const reviews = {
		title: t("reviews.title"),
		slides: [
			{
				content: t("reviews.slideOne.content"),
				author: t("reviews.slideOne.author"),
				jobTitle: t("reviews.slideOne.jobTitle"),
				images: images.reviewsImg3,
				icon: images.reviewsIcon,
			},
			{
				content: t("reviews.slideTwo.content"),
				author: t("reviews.slideTwo.author"),
				jobTitle: t("reviews.slideTwo.jobTitle"),
				images: images.reviewsImg4,
				icon: images.reviewsIcon,
			},
			{
				content: t("reviews.slideThree.content"),
				author: t("reviews.slideThree.author"),
				jobTitle: t("reviews.slideThree.jobTitle"),
				images: images.reviewsImg5,
				icon: images.reviewsIcon,
			},
			{
				content: t("reviews.slideFour.content"),
				author: t("reviews.slideFour.author"),
				jobTitle: t("reviews.slideFour.jobTitle"),
				images: images.reviewsImg6,
				icon: images.reviewsIcon,
			},
		],
	};

	const price = {
		title: t("price.title"),
		footer: t("price.footer"),
		data: [
			{
				id: "app",
				title: t("price.titleApp"),
				content: [
					{
						id: "month",
						month: t("price.month.priceApp"),
						description: t("price.month.title"),
					},
					{
						id: "perYear",
						month: t("price.perYear.priceApp"),
						fullPeriod: t("price.perYear.fullPriceApp"),
						description: t("price.perYear.title"),
					},
					{
						id: "year",
						month: t("price.year.priceApp"),
						fullPeriod: t("price.year.fullPriceApp"),
						description: t("price.year.title"),
					},
					{
						id: "twoYear",
						month: t("price.twoYear.priceApp"),
						fullPeriod: t("price.twoYear.fullPriceApp"),
						description: t("price.twoYear.title"),
					},
				],
			},
			{
				id: "site",
				title: t("price.titleSite"),
				content: [
					{
						id: "month",
						month: t("price.month.priceSite"),
						description: t("price.month.title"),
					},
					{
						id: "perYear",
						month: t("price.perYear.priceSite"),
						fullPeriod: t("price.perYear.fullPriceSite"),
						description: t("price.perYear.title"),
					},
					{
						id: "year",
						month: t("price.year.priceSite"),
						fullPeriod: t("price.year.fullPriceSite"),
						description: t("price.year.title"),
					},
					{
						id: "twoYear",
						month: t("price.twoYear.priceSite"),
						fullPeriod: t("price.twoYear.fullPriceSite"),
						description: t("price.twoYear.title"),
					},
				],
			},
			{
				id: "coffeeshop",
				title: t("price.titleCoffe"),
				content: [
					{
						id: "month",
						month: t("price.month.priceCoffe"),
						description: t("price.month.title"),
					},
					{
						id: "perYear",
						month: t("price.perYear.priceCoffe"),
						fullPeriod: t("price.perYear.fullPriceCofee"),
						description: t("price.perYear.title"),
					},
					{
						id: "year",
						month: t("price.year.priceCoffe"),
						fullPeriod: t("price.year.fullPriceCofee"),
						description: t("price.year.title"),
					},
					{
						id: "twoYear",
						month: t("price.twoYear.priceCoffe"),
						fullPeriod: t("price.twoYear.fullPriceCofee"),
						description: t("price.twoYear.title"),
					},
				],
			},
		],
	};

	const clients = {
		title: t("clients.title"),
		description: t("clients.description"),
	};

	const partners = {
		title: t("partners.title"),
		description: t("partners.description"),
		integrationTitle: t("partners.integrationTitle"),
		paymentsTitle: t("partners.paymentsTitle"),
		joinToPartners: t("partners.joinToPartners"),
		imagesIntegraton: [
			images.partners1,
			images.partners2,
			images.partners3,
			images.partners4,
			images.partners5,
			images.partners6,
		],
		imagesPayments: [
			images.partners7,
			images.partners8,
			images.partners9,
			images.partners10,
			images.partners11,
			images.partners12,
		],
	};

	const faq = {
		title: t("faq.title"),
		data: [
			{
				id: "1",
				title: t("faq.firstQuestion.title"),
				content: t("faq.firstQuestion.content"),
			},
			{
				id: "2",
				title: t("faq.secondQuestion.title"),
				content: t("faq.secondQuestion.content"),
			},
			{
				id: "3",
				title: t("faq.thirdQuestion.title"),
				content: t("faq.thirdQuestion.content"),
			},
		],
	};

	const footer = {
		contactUs: {
			title: t("footer.socialPhones"),
			iconNumber: images.numberIcon,
			iconViber: images.viberIcon,
			iconTelegram: images.telegrammIcon,
			phoneOne: "+380 95 767 6266",
			phoneTwo: "+380 91 481 0204",
			phoneThree: "+380 91 481 0204",
		},
		socialNetworks: {
			title: t("footer.socialNetworks"),
			iconMail: images.mailIcon,
			iconFb: images.facebookIcon,
			iconInst: images.instagrammIcom,
		},

		agreement: {
			title: t("footer.agreement.title"),
			publicOffer: t("footer.agreement.publicOffer"),
			cooperation: t("footer.agreement.cooperation"),
		},
	};

	// Предоставление значений контекста для дочерних компонентов
	const contextValue: DataContextType = {
		optionsLng,
		banner,
		solution,
		developSteps,
		achievements,
		reviews,
		price,
		clients,
		partners,
		faq,
		footer,
		menu,
		possibilities,
		functionality,
		advantages,
	};

	return (
		<DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
	);
};

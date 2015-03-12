/**
 * Tsunami Tools namespace (globals)
 */
window.tsunami = window.tsunami || {};

/**
 * List of language-specific string literals (wrapped in a lookup object, see below)
 * All string literals should be translated for each language.
 *
 * The language tags (keys) should be consistent with IETF's RFC 5646 
 * (http://www.rfc-editor.org/rfc/rfc5646.txt) or later standards.
 * For more information, see 
 * http://www.w3.org/International/articles/language-tags/Overview.en.php.
 */
tsunami.strings = { 
	'en': {
		language: "English",

		page_title: "Tsunami Evacuation Map",

		page_btn_map: "Evacuation Map",
		page_btn_info: "Tsunami Information",

		search_placeholder: "Enter Location",
		search_go: "Go",
		search_warning: "If your marker lands in the pink, move to higher ground.",

		jump_to: "Jump To ",
		region_name_HI: "Hawai'i",
		region_name_GU: "Guam",
		region_name_AS: "American Somoa",
		region_name_MP: "Commonwealth of the Northern Mariana Islands (CNMI)",

		language_select: "Language",
		share_me: "Share",
		share_text: "Learn how to be prepared for tsunami and know your evacuation plan",
		share_text_location: " at {location}",

		about_map: "About This Map",

		infotab_tsunamievacuation: "Tsunami Evacuation",
		infotab_tsunamiplan: "Tsunami Plan",
		infotab_tsunamirisk: "Tsunami Risk",
		infotab_tsunamiwarning: "Tsunami Warning",

		dummy: null
	},
	'zh-CN': {
		language: "中文（简体）",

		page_title: "海啸准备！",

		page_btn_map: "疏散地图",
		page_btn_info: "海啸信息",

		search_placeholder: "输入地名或街道地址",
		search_go: "搜索",
		search_warning: "如果你在红色的海啸撤离区内，请撤离到附近高地。",

		jump_to: "跳转到",
		region_name_HI: "夏威夷",
		region_name_GU: "关岛",
		region_name_AS: "美属萨摩亚",
		region_name_MP: "北马里亚纳群岛邦",

		language_select: "选择语言",
		share_me: "分享",
		share_text: "学习为海啸做好准备，了解你的撤离计划",
		share_text_location: "在{location}附近",

		about_map: "关于地图",

		infotab_tsunamievacuation: "海啸疏散",
		infotab_tsunamiplan: "海啸预备",
		infotab_tsunamirisk: "海啸危险",
		infotab_tsunamiwarning: "海啸计划",

		dummy: null
	}/*,
	'cn': {
	
	}
	*/
};

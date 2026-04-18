import { VictimType } from "@/enums/ReportTypes";
import type { JobType } from "@/interfaces/IUser";
import { _L } from "@/utils/localization.svelte";

export interface MDTTab {
	name: string;
	icon: string;
	label?: string;
}

/** MDT tab definitions */
export const getMDTTabs = (): MDTTab[] => [
	{ name: "Dashboard", icon: "dashboard", label: _L("tabs.dashboard") },
	{ name: "Citizens", icon: "people", label: _L("tabs.citizens") },
	{ name: "Reports", icon: "description", label: _L("tabs.reports") },
	{ name: "Cases", icon: "folder", label: _L("tabs.cases") },
	{ name: "Evidence", icon: "inventory_2", label: _L("tabs.evidence") },
	{ name: "BOLOs", icon: "notification_important", label: _L("tabs.bolos") },
	{ name: "Warrants", icon: "gavel", label: _L("tabs.warrants") },
	{ name: "Vehicles", icon: "directions_car", label: _L("tabs.vehicles") },
	{ name: "Weapons", icon: "security", label: _L("tabs.weapons") },
	{ name: "Charges", icon: "balance", label: _L("tabs.charges") },
	{ name: "Awards", icon: "emoji_events", label: _L("tabs.awards") },
	{ name: "Roster", icon: "group", label: _L("tabs.roster") },
	{ name: "Map", icon: "map", label: _L("tabs.map") },
	{ name: "Cameras", icon: "videocam", label: _L("tabs.cameras") },
	{ name: "Bodycams", icon: "video_camera_front", label: _L("tabs.bodycams") },
	{ name: "IA", icon: "shield", label: _L("tabs.ia") },
	{ name: "PPR", icon: "rate_review", label: _L("tabs.ppr") },
	{ name: "FTO", icon: "school", label: _L("tabs.fto") },
	{ name: "SOP", icon: "menu_book", label: _L("tabs.sop") },
	{ name: "Court Cases", icon: "gavel", label: _L("tabs.court_cases") },
	{ name: "Warrant Review", icon: "policy", label: _L("tabs.warrant_review") },
	{ name: "Court Orders", icon: "assignment_late", label: _L("tabs.court_orders") },
	{ name: "Legal Documents", icon: "article", label: _L("tabs.legal_documents") },
	{ name: "Preferences", icon: "tune", label: _L("tabs.preferences") },
	{ name: "Settings", icon: "admin_panel_settings", label: _L("tabs.settings") },
];

/** Tabs available for EMS job type */
export const EMS_TABS = [
	"Dashboard",
	"Citizens",
	"Reports",
	"Roster",
	"Map",
	"Bodycams",
	"Preferences",
	"Settings",
] as const;

/** Get filtered tabs based on job type */
export const DOJ_TABS = [
	"Dashboard",
	"Reports",
	"Court Cases",
	"Warrant Review",
	"Citizens",
	"Cases",
	"Evidence",
	"Court Orders",
	"Legal Documents",
	"Charges",
	"Settings",
] as const;

export function getTabsForJob(jobType: 'leo' | 'ems' | 'doj') {
	const allTabs = getMDTTabs();
	if (jobType === 'ems') {
		return allTabs.filter(tab => (EMS_TABS as readonly string[]).includes(tab.name));
	}
	if (jobType === 'doj') {
		return allTabs.filter(tab => (DOJ_TABS as readonly string[]).includes(tab.name));
	}
	return allTabs;
}

/** Sidebar navigation groups */
export interface NavGroup {
	id: string;
	label?: string;
	icon?: string;
	tabs: readonly string[];
}

export const getNavGroups = (): NavGroup[] => [
	{ id: "dashboard", tabs: ["Dashboard"] },
	{ id: "operations", label: _L("tabs.operations"), icon: "assignment", tabs: ["Reports", "Cases", "Evidence", "BOLOs", "Warrants"] },
	{ id: "records", label: _L("tabs.records"), icon: "folder_open", tabs: ["Citizens", "Vehicles", "Weapons", "Charges"] },
	{ id: "personnel", label: _L("tabs.personnel"), icon: "badge", tabs: ["Roster", "Awards", "IA", "PPR", "FTO", "SOP"] },
	{ id: "surveillance", label: _L("tabs.surveillance"), icon: "visibility", tabs: ["Map", "Cameras", "Bodycams"] },
	{ id: "bottom", tabs: ["Preferences", "Settings"] },
];

export const getDojNavGroups = (): NavGroup[] => [
	{ id: "dashboard", tabs: ["Dashboard"] },
	{ id: "court", label: _L("tabs.court"), icon: "account_balance", tabs: ["Court Cases", "Warrant Review", "Court Orders"] },
	{ id: "legal", label: _L("tabs.legal"), icon: "description", tabs: ["Legal Documents", "Charges"] },
	{ id: "records", label: _L("tabs.records"), icon: "folder_open", tabs: ["Reports", "Citizens", "Cases", "Evidence"] },
	{ id: "bottom", tabs: ["Settings"] },
];

/** App version and branding per job type */
export const getAppInfo = (): Record<Exclude<JobType, "civilian">, { version: string; title: string; subtitle: string; footerSubtext: string; icon: string }> => ({
	leo: {
		version: "LSPD MDT System v2.0",
		title: _L("app.leoTitle"),
		subtitle: _L("app.leoSubtitle"),
		footerSubtext: _L("app.leoFooter"),
		icon: "local_police",
	},
	ems: {
		version: "EMS MDT System v1.0",
		title: _L("app.emsTitle"),
		subtitle: _L("app.emsSubtitle"),
		footerSubtext: _L("app.emsFooter"),
		icon: "local_hospital",
	},
	doj: {
		version: "DOJ Terminal v1.0",
		title: _L("app.dojTitle"),
		subtitle: _L("app.dojSubtitle"),
		footerSubtext: _L("app.dojFooter"),
		icon: "account_balance",
	},
});

export const getReportTypes = () => [
	_L("reportTypes.incidentReport"),
	_L("reportTypes.trafficReport"),
	_L("reportTypes.investigationReport"),
	_L("reportTypes.arrestReport"),
	_L("reportTypes.evidenceReport"),
];

export const getEvidenceTypes = () => [
	_L("evidenceTypes.Physical"),
	_L("evidenceTypes.Digital"),
	_L("evidenceTypes.Document"),
	_L("evidenceTypes.Weapon"),
	_L("evidenceTypes.Drug"),
	_L("evidenceTypes.Vehicle"),
	_L("evidenceTypes.Other"),
];

export type VICTIM_TYPES = string;

export const getVictimTypes = (): VICTIM_TYPES[] => [
	_L("victimTypes.Primary"),
	_L("victimTypes.Secondary"),
	_L("victimTypes.Witness"),
	_L("victimTypes.Complainant"),
];

export const PLACEHOLDER_COMPONENTS: readonly ComponentId[] = [] as const;

export type OFFICER_TYPES = "PRIMARY" | "ASSISTING" | "SUPERVISOR" | "DETECTIVE";

export const getOfficerTypes = (): Record<OFFICER_TYPES, string> => ({
	PRIMARY: _L("officerTypes.Primary"),
	ASSISTING: _L("officerTypes.Assisting"),
	SUPERVISOR: _L("officerTypes.Supervisor"),
	DETECTIVE: _L("officerTypes.Detective"),
});

// Non-reactive constants remain as they were
export const LEO_REPORT_TYPES = [
	"Incident Report",
	"Traffic Report",
	"Investigation Report",
	"Arrest Report",
	"Evidence Report",
] as const;

export const EMS_REPORT_TYPES = [
	"Medical Report",
	"Trauma Report",
	"Overdose Report",
	"Psychiatric Report",
	"Mass Casualty Report",
] as const;

export const DOJ_REPORT_TYPES = [
	"Court Filing",
	"Legal Brief",
	"Judicial Order",
	"Plea Agreement",
	"Sentencing Report",
] as const;

export function getReportTypesForJob(jobType: 'leo' | 'ems' | 'doj'): readonly string[] {
	if (jobType === 'ems') return EMS_REPORT_TYPES;
	if (jobType === 'doj') return DOJ_REPORT_TYPES;
	return LEO_REPORT_TYPES;
}

export type ComponentId =
	| "dashboard"
	| "citizens"
	| "bolos"
	| "vehicles"
	| "weapons"
	| "cases"
	| "evidence"
	| "reports"
	| "warrants"
	| "charges"
	| "awards"
	| "roster"
	| "map"
	| "cameras"
	| "bodycams"
	| "ia"
	| "ppr"
	| "fto"
	| "sop"
	| "court_cases"
	| "warrant_review"
	| "court_orders"
	| "legal_documents"
	| "management"
	| "settings";

export const TAB_TO_COMPONENT_MAP: Record<string, ComponentId> = {
	Dashboard: "dashboard",
	Citizens: "citizens",
	BOLOs: "bolos",
	Vehicles: "vehicles",
	Weapons: "weapons",
	Cases: "cases",
	Evidence: "evidence",
	Reports: "reports",
	Warrants: "warrants",
	Charges: "charges",
	Awards: "awards",
	Roster: "roster",
	Map: "map",
	Cameras: "cameras",
	Bodycams: "bodycams",
	IA: "ia",
	PPR: "ppr",
	FTO: "fto",
	SOP: "sop",
	"Court Cases": "court_cases",
	"Warrant Review": "warrant_review",
	"Court Orders": "court_orders",
	"Legal Documents": "legal_documents",
	Settings: "management",
	Preferences: "settings",
};

export const DEFAULT_TIME = "16:20";
export const DEFAULT_DATE = "03.15.2024";

export const TIMING = {
	timeUpdateInterval: 1000,
	topBarOpacityDelay: 100,
	offDutyLoadingDuration: 2000,
} as const;

export const PRIORITY_COLORS: Record<string, string> = {
	"1": "#ef4444",
	Major: "#ef4444",
	"2": "#f59e0b",
	Moderate: "#f59e0b",
	"3": "#10b981",
	Minor: "#10b981",
	default: "#6b7280",
} as const;

export * from "./date";

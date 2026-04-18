import { _L } from "../utils/localization.svelte";

export interface PermissionCategory {
	key: string;
	label: string;
	icon: string;
	permissions: { key: string; label: string; description: string }[];
}

export const getManagementTabs = () => [
	{ id: "Activity", label: _L("management.tabs.activity") },
	{ id: "Bulletins", label: _L("management.tabs.bulletins") },
	{ id: "Permissions", label: _L("management.tabs.permissions") },
] as const;

export const getPermissionCategories = (): PermissionCategory[] => [
	{
		key: "citizens",
		label: _L("categories.citizens"),
		icon: "people",
		permissions: [
			{ 
				key: "citizens_search", 
				label: _L("permissions.citizens_search_label"), 
				description: _L("permissions.citizens_search_desc") 
			},
			{ 
				key: "citizens_edit_licenses", 
				label: _L("permissions.citizens_edit_licenses_label"), 
				description: _L("permissions.citizens_edit_licenses_desc") 
			},
		],
	},
	{
		key: "reports",
		label: _L("categories.reports"),
		icon: "description",
		permissions: [
			{ 
				key: "reports_view", 
				label: _L("permissions.reports_view_label"), 
				description: _L("permissions.reports_view_desc") 
			},
			{ 
				key: "reports_create", 
				label: _L("permissions.reports_create_label"), 
				description: _L("permissions.reports_create_desc") 
			},
			{ 
				key: "reports_delete", 
				label: _L("permissions.reports_delete_label"), 
				description: _L("permissions.reports_delete_desc") 
			},
		],
	},
	{
		key: "cases",
		label: _L("categories.cases"),
		icon: "folder",
		permissions: [
			{ 
				key: "cases_view", 
				label: _L("permissions.cases_view_label"), 
				description: _L("permissions.cases_view_desc") 
			},
			{ 
				key: "cases_create", 
				label: _L("permissions.cases_create_label"), 
				description: _L("permissions.cases_create_desc") 
			},
			{ 
				key: "cases_edit", 
				label: _L("permissions.cases_edit_label"), 
				description: _L("permissions.cases_edit_desc") 
			},
			{ 
				key: "cases_delete", 
				label: _L("permissions.cases_delete_label"), 
				description: _L("permissions.cases_delete_desc") 
			},
		],
	},
	{
		key: "evidence",
		label: _L("categories.evidence"),
		icon: "inventory_2",
		permissions: [
			{ 
				key: "evidence_view", 
				label: _L("permissions.evidence_view_label"), 
				description: _L("permissions.evidence_view_desc") 
			},
			{ 
				key: "evidence_create", 
				label: _L("permissions.evidence_create_label"), 
				description: _L("permissions.evidence_create_desc") 
			},
			{ 
				key: "evidence_transfer", 
				label: _L("permissions.evidence_transfer_label"), 
				description: _L("permissions.evidence_transfer_desc") 
			},
			{ 
				key: "evidence_upload", 
				label: _L("permissions.evidence_upload_label"), 
				description: _L("permissions.evidence_upload_desc") 
			},
		],
	},
	{
		key: "bolos",
		label: _L("categories.bolos"),
		icon: "notification_important",
		permissions: [
			{ 
				key: "bolos_view", 
				label: _L("permissions.bolos_view_label"), 
				description: _L("permissions.bolos_view_desc") 
			},
			{ 
				key: "bolos_create", 
				label: _L("permissions.bolos_create_label"), 
				description: _L("permissions.bolos_create_desc") 
			},
		],
	},
	{
		key: "warrants",
		label: _L("categories.warrants"),
		icon: "gavel",
		permissions: [
			{ 
				key: "warrants_view", 
				label: _L("permissions.warrants_view_label"), 
				description: _L("permissions.warrants_view_desc") 
			},
			{ 
				key: "warrants_issue", 
				label: _L("permissions.warrants_issue_label"), 
				description: _L("permissions.warrants_issue_desc") 
			},
			{ 
				key: "warrants_close", 
				label: _L("permissions.warrants_close_label"), 
				description: _L("permissions.warrants_close_desc") 
			},
		],
	},
	{
		key: "vehicles",
		label: _L("categories.vehicles"),
		icon: "directions_car",
		permissions: [
			{ 
				key: "vehicles_search", 
				label: _L("permissions.vehicles_search_label"), 
				description: _L("permissions.vehicles_search_desc") 
			},
			{ 
				key: "vehicles_edit_dmv", 
				label: _L("permissions.vehicles_edit_dmv_label"), 
				description: _L("permissions.vehicles_edit_dmv_desc") 
			},
		],
	},
	{
		key: "weapons",
		label: _L("categories.weapons"),
		icon: "security",
		permissions: [
			{ 
				key: "weapons_search", 
				label: _L("permissions.weapons_search_label"), 
				description: _L("permissions.weapons_search_desc") 
			},
		],
	},
	{
		key: "charges",
		label: _L("categories.charges"),
		icon: "balance",
		permissions: [
			{ 
				key: "charges_view", 
				label: _L("permissions.charges_view_label"), 
				description: _L("permissions.charges_view_desc") 
			},
			{ 
				key: "charges_edit", 
				label: _L("permissions.charges_edit_label"), 
				description: _L("permissions.charges_edit_desc") 
			},
		],
	},
	{
		key: "roster",
		label: _L("categories.roster"),
		icon: "group",
		permissions: [
			{ 
				key: "roster_manage_certifications", 
				label: _L("permissions.roster_manage_certifications_label"), 
				description: _L("permissions.roster_manage_certifications_desc") 
			},
			{ 
				key: "roster_manage_officers", 
				label: _L("permissions.roster_manage_officers_label"), 
				description: _L("permissions.roster_manage_officers_desc") 
			},
		],
	},
	{
		key: "ppr",
		label: _L("categories.ppr"),
		icon: "rate_review",
		permissions: [
			{ 
				key: "ppr_view", 
				label: _L("permissions.ppr_view_label"), 
				description: _L("permissions.ppr_view_desc") 
			},
			{ 
				key: "ppr_manage", 
				label: _L("permissions.ppr_manage_label"), 
				description: _L("permissions.ppr_manage_desc") 
			},
		],
	},
	{
		key: "fto",
		label: _L("categories.fto"),
		icon: "school",
		permissions: [
			{ 
				key: "fto_view", 
				label: _L("permissions.fto_view_label"), 
				description: _L("permissions.fto_view_desc") 
			},
			{ 
				key: "fto_manage", 
				label: _L("permissions.fto_manage_label"), 
				description: _L("permissions.fto_manage_desc") 
			},
		],
	},
	{
		key: "cameras",
		label: _L("categories.cameras"),
		icon: "videocam",
		permissions: [
			{ 
				key: "cameras_view", 
				label: _L("permissions.cameras_view_label"), 
				description: _L("permissions.cameras_view_desc") 
			},
			{ 
				key: "bodycams_view", 
				label: _L("permissions.bodycams_view_label"), 
				description: _L("permissions.bodycams_view_desc") 
			},
		],
	},
	{
		key: "dispatch",
		label: _L("categories.dispatch"),
		icon: "cell_tower",
		permissions: [
			{ 
				key: "dispatch_attach", 
				label: _L("permissions.dispatch_attach_label"), 
				description: _L("permissions.dispatch_attach_desc") 
			},
			{ 
				key: "dispatch_route", 
				label: _L("permissions.dispatch_route_label"), 
				description: _L("permissions.dispatch_route_desc") 
			},
		],
	},
	{
		key: "ia",
		label: _L("categories.ia"),
		icon: "shield",
		permissions: [
			{ 
				key: "ia_view", 
				label: _L("permissions.ia_view_label"), 
				description: _L("permissions.ia_view_desc") 
			},
			{ 
				key: "ia_manage", 
				label: _L("permissions.ia_manage_label"), 
				description: _L("permissions.ia_manage_desc") 
			},
		],
	},
	{
		key: "sop",
		label: _L("categories.sop"),
		icon: "menu_book",
		permissions: [
			{ 
				key: "sop_view", 
				label: _L("permissions.sop_view_label"), 
				description: _L("permissions.sop_view_desc") 
			},
			{ 
				key: "sop_manage", 
				label: _L("permissions.sop_manage_label"), 
				description: _L("permissions.sop_manage_desc") 
			},
		],
	},
	{
		key: "management",
		label: _L("categories.management"),
		icon: "admin_panel_settings",
		permissions: [
			{ 
				key: "management_permissions", 
				label: _L("permissions.management_permissions_label"), 
				description: _L("permissions.management_permissions_desc") 
			},
			{ 
				key: "management_bulletins", 
				label: _L("permissions.management_bulletins_label"), 
				description: _L("permissions.management_bulletins_desc") 
			},
			{ 
				key: "management_activity", 
				label: _L("permissions.management_activity_label"), 
				description: _L("permissions.management_activity_desc") 
			},
			{ 
				key: "management_tags", 
				label: _L("permissions.management_tags_label"), 
				description: _L("permissions.management_tags_desc") 
			},
			{ 
				key: "management_tracking", 
				label: _L("permissions.management_tracking_label"), 
				description: _L("permissions.management_tracking_desc") 
			},
			{ 
				key: "management_settings", 
				label: _L("permissions.management_settings_label"), 
				description: _L("permissions.management_settings_desc") 
			},
		],
	},
];

export const getTabVisibilityKeys = () => [
	{ tabName: "Reports", key: "tab_hidden_reports", label: _L("categories.reports") },
	{ tabName: "Cases", key: "tab_hidden_cases", label: _L("categories.cases") },
	{ tabName: "Evidence", key: "tab_hidden_evidence", label: _L("categories.evidence") },
	{ tabName: "BOLOs", key: "tab_hidden_bolos", label: _L("categories.bolos") },
	{ tabName: "Warrants", key: "tab_hidden_warrants", label: _L("categories.warrants") },
	{ tabName: "Citizens", key: "tab_hidden_citizens", label: _L("categories.citizens") },
	{ tabName: "Vehicles", key: "tab_hidden_vehicles", label: _L("categories.vehicles") },
	{ tabName: "Weapons", key: "tab_hidden_weapons", label: _L("categories.weapons") },
	{ tabName: "Charges", key: "tab_hidden_charges", label: _L("categories.charges") },
	{ tabName: "Awards", key: "tab_hidden_awards", label: _L("tabs.awards") },
	{ tabName: "Roster", key: "tab_hidden_roster", label: _L("categories.roster") },
	{ tabName: "Map", key: "tab_hidden_map", label: _L("tabs.map") },
	{ tabName: "Cameras", key: "tab_hidden_cameras", label: _L("categories.cameras") },
	{ tabName: "Bodycams", key: "tab_hidden_bodycams", label: _L("tabs.bodycams") },
	{ tabName: "IA", key: "tab_hidden_ia", label: _L("categories.ia") },
	{ tabName: "PPR", key: "tab_hidden_ppr", label: _L("categories.ppr") },
	{ tabName: "FTO", key: "tab_hidden_fto", label: _L("categories.fto") },
	{ tabName: "SOP", key: "tab_hidden_sop", label: _L("categories.sop") },
];

/** Flat list of all permission keys */
export const getAllPermissionKeys = () => [
	...getPermissionCategories().flatMap((cat) => cat.permissions.map((p) => p.key)),
	...getTabVisibilityKeys().map((t) => t.key),
];

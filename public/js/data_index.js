/* File: https://d3fyej7rnbpf4o.cloudfront.net/app/assets/js/data/columnMetadata.js
   Compiled at: 2017-12-23 19:03:59 
================================ */
var myColumns = [
    {
        "mData": "check_box",
        "sTitle": "<input type='checkbox' />",
        "sClass": 'check_box',
        "filterable": false
    },
    {
        "mData": "company_name",
        "sTitle": "Name",
        "altText": "",
        "classHide": "",
        "sType": "html",
        sClass: 'company_name',
        treeFilter: 'string',
        defaultOperator: 'LIKE',
        filter: { sSelector: "#company-search" }
    },
    {
        "mData": "domain",
        "sTitle": "Website",
        "altText": "",
        "classHide": "",
        "sType": "html",
        sClass: 'domain',
        treeFilter: 'string'
    },
    {
        "mData": "description",
        "sTitle": "Description",
        "altText": "",
        "classHide": "",
        // For some reason including the 'description' class fixes the issue where by default the description
        // column header shows up even when its column is not currently enabled in edit columns, company_description
        // is used to apply css to the field
        "sClass": 'description company_description',
        "treeFilter": 'unsortable_string',
        "defaultOperator": 'LIKE',
        "sortable": false,
        "filterable": false
    },
    {
        "mData": "cached_growth_score",
        "sTitle": "Growth Score",
        "altText": "",
        "classHide": "",
        "sClass": "right numeric-column cached_growth_score",
        "asSorting": [ "desc", "asc" ],
        treeFilter: 'number',
        filter: { type: "number-range"},
        defaultOperator: '>='
    },
    {
        "mData": "mattermark_score",
        "sTitle": "Mindshare Score",
        "altText": "Higher scores indicate sustained, steeper growth of public interest across several external signals. Negative score indicates declining customer interest.",
        "classHide": "",
        "sClass": "right numeric-column mattermark_score",
        "asSorting": [ "desc", "asc" ],
        treeFilter: 'number',
        filter: { type: "number-range"},
        defaultOperator: '>=',
        "applyClass": "mm_score_heading"
    },
    {
        "mData": "momentum_score",
        "sTitle": "Weekly Momentum",
        "altText": "How much the company grew last week. Negative score indicates declining customer engagement.",
        "classHide": "",
        "sClass": "momentum_score",
        treeFilter: 'number',
        defaultOperator: '>=',
        filter: { type: "number-range"}
    },
    {
        "mData": "employees",
        "sTitle": "Employee Count",
        "altText": "Employees currently working at the company.",
        "classHide": "",
        "sType": "numeric",
        "sClass": "right numeric-column employees",
        "asSorting": [ "desc", "asc" ],
        treeFilter: 'number',
        defaultOperator: '>=',
        filter: { type: "number-range"}
    },
    {
        "mData": "employees_month_ago",
        "sTitle": "Employee Count Last Month",
        "altText": "",
        "classHide": "",
        "sType": "numeric",
        "sClass": "right numeric-column employees_month_ago",
        "asSorting": [ "desc", "asc" ],
        treeFilter: 'number',
        defaultOperator: '>=',
        filter: { type: "number-range" }
    },
    {
        "mData": "employees_added_in_month",
        "sTitle": "Employees Added This Month",
        "altText": "",
        "classHide": "",
        "sType": "numeric",
        "sClass": "right numeric-column employees_added_in_month",
        treeFilter: 'number',
        defaultOperator: '>=',
        "asSorting": [ "desc", "asc" ]
    },
    {
        "mData": "employees_mom",
        "sTitle": "Employee Growth Last Mo",
        "altText": "",
        "classHide": "",
        "sType": "numeric",
        "sClass": "right numeric-column employees_mom",
        "asSorting": [ "desc", "asc" ],
        treeFilter: 'number',
        defaultOperator: '>=',
        treeFilterHelper: 'percentage',
        filter: { type: "number-range" }
    },
    {
        "mData": "employees_6_months_ago",
        "sTitle": "Employee Count 6 Months Ago",
        "altText": "",
        "classHide": "",
        "sType": "numeric",
        "sClass": "right numeric-column employees_6_months_ago",
        "asSorting": [ "desc", "asc" ],
        treeFilter: 'number',
        defaultOperator: '>=',
        filter: { type: "number-range" }
    },
    {
        "mData": "employees_added_in_6_months",
        "sTitle": "Employees Added Last 6 Months",
        "altText": "",
        "classHide": "",
        "sType": "numeric",
        "sClass": "right numeric-column employees_added_in_6_months",
        treeFilter: 'number',
        defaultOperator: '>=',
        "asSorting": [ "desc", "asc" ]
    },
    {
        "mData": "employees_6_months_growth",
        "sTitle": "Employee Growth Last 6 Months",
        "altText": "",
        "classHide": "",
        "sType": "numeric",
        "sClass": "right numeric-column employees_6_months_growth",
        "asSorting": [ "desc", "asc" ],
        treeFilter: 'number',
        defaultOperator: '>=',
        treeFilterHelper: 'percentage',
        filter: { type: "number-range" }
    },
    {
        "mData": "cached_uniques",
        "sTitle": "Est. Monthly Uniques",
        "altText": "Estimated Monthly Uniques for company website.  Based on Alexa rank.",
        "classHide": "",
        "sType": "numeric",
        "sClass": "right numeric-column cached_uniques",
        "asSorting": [ "desc", "asc" ],
        treeFilter: 'number',
        defaultOperator: '>=',
        filter: { type: "number-range" }
    },
    {
        "mData": "cached_uniques_week_ago",
        "sTitle": "Est. Monthly Uniques Week Ago",
        "altText": "",
        "classHide": "",
        "sType": "numeric",
        "sClass": "right numeric-column cached_uniques_week_ago",
        "asSorting": [ "desc", "asc" ],
        treeFilter: 'number',
        defaultOperator: '>=',
        filter: { type: "number-range" }
    },
    {
        "mData": "uniques_wow",
        "sTitle": "Monthly Uniques Week Over Week Growth",
        "altText": "",
        "classHide": "",
        "sType": "numeric",
        "sClass": "right numeric-column uniques_wow",
        "asSorting": [ "desc", "asc" ],
        treeFilter: 'number',
        defaultOperator: '>=',
        treeFilterHelper: 'percentage',
        filter: { type: "number-range" }
    },
    {
        "mData": "cached_uniques_month_ago",
        "sTitle": "Est. Monthly Uniques Month Ago",
        "altText": "",
        "classHide": "",
        "sType": "numeric",
        "sClass": "right numeric-column cached_uniques_month_ago",
        "asSorting": [ "desc", "asc" ],
        treeFilter: 'number',
        defaultOperator: '>=',
        filter: { type: "number-range" }
    },
    {
        "mData": "uniques_mom",
        "sTitle": "Monthly Uniques Month Over Month Growth",
        "altText": "",
        "classHide": "",
        "sType": "numeric",
        "sClass": "right numeric-column uniques_mom",
        "asSorting": [ "desc", "asc" ],
        treeFilter: 'number',
        defaultOperator: '>=',
        treeFilterHelper: 'percentage',
        filter: { type: "number-range" }
    },
    {
        "mData": "cached_mobile_downloads",
        "sTitle": "Est. Mobile Downloads",
        "altText": "Estimated Monthly downloads from iTunes app store.  Based on official AppStore ranking.",
        "classHide": "",
        "sType": "numeric",
        "sClass": "right numeric-column cached_mobile_downloads",
        "asSorting": [ "desc", "asc" ],
        treeFilter: 'number',
        defaultOperator: '>=',
        filter: { type: "number-range" }
    },
    {
        "mData": "cached_mobile_downloads_week_ago",
        "sTitle": "Est. Monthly Mobile Downloads Week Ago",
        "altText": "",
        "classHide": "",
        "sType": "numeric",
        "sClass": "right numeric-column cached_mobile_downloads_week_ago",
        "asSorting": [ "desc", "asc" ],
        treeFilter: 'number',
        defaultOperator: '>=',
        filter: { type: "number-range" }
    },
    {
        "mData": "mobile_downloads_wow",
        "sTitle": "Monthly Mobile Downloads Week Over Week Growth",
        "altText": "",
        "classHide": "",
        "sType": "numeric",
        "sClass": "right numeric-column mobile_downloads_wow",
        "asSorting": [ "desc", "asc" ],
        treeFilter: 'number',
        defaultOperator: '>=',
        treeFilterHelper: 'percentage',
        filter: { type: "number-range" }
    },
    {
        "mData": "cached_mobile_downloads_month_ago",
        "sTitle": "Est. Monthly Mobile Downloads Month Ago",
        "altText": "",
        "classHide": "",
        "sType": "numeric",
        "sClass": "right numeric-column cached_mobile_downloads_month_ago",
        "asSorting": [ "desc", "asc" ],
        treeFilter: 'number',
        defaultOperator: '>=',
        filter: { type: "number-range" }
    },
    {
        "mData": "mobile_downloads_mom",
        "sTitle": "Monthly Mobile Downloads Month Over Month Growth",
        "altText": "",
        "classHide": "",
        "sType": "numeric",
        "sClass": "right numeric-column mobile_downloads_mom",
        "asSorting": [ "desc", "asc" ],
        treeFilter: 'number',
        defaultOperator: '>=',
        treeFilterHelper: 'percentage',
        filter: { type: "number-range" }
    },
    {
        "mData": "months_since_last_funding",
        "sTitle": "Months Since Last Funding",
        "altText": "Months Since Last Funding",
        "classHide": "",
        "sType": "numeric",
        "sClass": "right numeric-column months_since_last_funding",
        "asSorting": [ "desc", "asc" ],
        treeFilter: 'number',
        defaultOperator: '>=',
        filter: { type: "number-range" }
    },
    {
        "mData": "employees_added_since_last_funding",
        "sTitle": "Employees Added Since Last Funding",
        "altText": "Employees Added Since Last Funding",
        "classHide": "",
        "sType": "numeric",
        "sClass": "right numeric-column employees_added_since_last_funding",
        "asSorting": [ "desc", "asc" ],
        treeFilter: 'number',
        defaultOperator: '>=',
        filter: { type: "number-range" }
    },
    {
        "mData": "new_person_months_since_last_funding",
        "sTitle": "New Person Months Since Last Funding",
        "altText": "New Person Months Since Last Funding",
        "classHide": "",
        "sType": "numeric",
        "sClass": "right numeric-column new_person_months_since_last_funding",
        "asSorting": [ "desc", "asc" ],
        treeFilter: 'number',
        defaultOperator: '>=',
        filter: { type: "number-range" }
    },
    {
        "mData": "new_funding_employee_growth",
        "sTitle": "New Funding Employee Growth",
        "altText": "New Funding Employee Growth",
        "classHide": "",
        "sType": "numeric",
        "sClass": "right numeric-column new_funding_employee_growth",
        "asSorting": [ "desc", "asc" ],
        treeFilter: 'number',
        defaultOperator: '>=',
        filter: { type: "number-range" }
    },
    {
        "mData": "est_founding_date",
        "sTitle": "Founded",
        "altText": "Date of Founding",
        "classHide": "",
        "sType": "numeric",
        "sClass": "left est_founding_date",
        "asSorting": [ "desc", "asc" ],
        treeFilter: 'number',
        defaultOperator: '>=',
        filter: { type: "number-range" }
    },
    {
        "mData": "stage",
        "sTitle": "Stage",
        "altText": "Stage of funding.  Blank means no funding has been observed yet." ,
        "classHide": "",
        treeFilter: 'select',
        treeFilterOperators: ['=', '!='],
        treeFilterSelect: ['No Known Funding', 'Pre Series A', 'A', 'B', 'C', 'Late', 'Exited', 'Exited (Acquired)', 'Exited (IPO)','Exited (Other)', 'Unknown'],
        "sClass": "left stage"
    },
    {
        "mData": "investors",
        "sTitle": "Investors",
        "altText": "The investors that have a position in the company",
        sClass: 'investors',
        "classHide": "",
        treeFilter: 'is-isnt',
    },
    {
        "mData": "total_funding",
        "sTitle": "Total Funding",
        "altText": "Total reported funding",
        "classHide": "",
        "sType": "numeric",
        "sClass": "right numeric-column total_funding",
        "asSorting": [ "desc", "asc" ],
        treeFilter: 'number',
        defaultOperator: '<=',
        treeFilterHelper: 'dollar',
        filter: { type: "number-range" }
    },
    {
        "mData": "last_funding_date",
        "sTitle": "Last Funding",
        "altText": "Date of most recent funding event",
        "classHide": "",
        "asSorting": [ "desc", "asc" ],
        treeFilter: 'date',
        treeFilterOperators: ['=', 'preset'],
        treeFilterSelect: [
            'not in past 3 months',
            'raised in past 3 months',
            'not in past 6 months',
            'raised in past 6 months',
            'not in past 9 months',
            'raised in past 9 months',
            'not in past year',
            'raised in past year',
            'not in past 13 months',
            'raised in past 13 months',
            'not in past 16 months',
            'raised in past 16 months',
            'not in past 18 months',
            'raised in past 18 months',
            'not in past 2 years',
            'raised in past 2 years',
            'never raised',
            'has ever raised'
        ],
        "sClass": "right last_funding_date"
    },
    {
        "mData": "last_funding_amount",
        "sTitle": "Last Funding Amount",
        "altText": "Amount of most recent funding event",
        "classHide": "",
        "sType": "numeric",
        "sClass": "right numeric-column last_funding_amount",
        "asSorting": [ "desc", "asc" ],
        treeFilter: 'number',
        defaultOperator: '<=',
        treeFilterHelper: 'dollar',
        filter: { type: "number-range" }
    },
    {
        "mData": "location",
        "sTitle": "Location",
        "altText": "Metropolitan Area of Company" ,
        sClass: 'location',
        "classHide": "",
        treeFilter: 'string'
    },
    {
        "mData": "city",
        "sTitle": "City",
        "altText": "" ,
        "classHide": "",
        sClass: 'city',
        treeFilter: 'string'
    },
    {
        "mData": "region",
        "sTitle": "Region",
        "altText": "" ,
        "classHide": "",
        sClass: 'region',
        treeFilter: 'string'
    },
    {
        "mData": "state",
        "sTitle": "State",
        "altText": "State of headquarters",
        "classHide": "",
        sClass: 'state',
        treeFilter: 'string'
    },
    {
        "mData": "zip",
        "sTitle": "Zip Code",
        "altText": "Zip Code of headquarters",
        "classHide": "",
        sClass: 'zip',
        treeFilter: 'string'
    },
    {
        "mData": "country",
        "sTitle": "Country",
        "altText": "Country of headquarters" ,
        sClass: "country",
        "classHide": "",
        treeFilter: 'string'
    },
    {
        "mData": "continent",
        "sTitle": "Continent",
        "altText": "" ,
        "classHide": "",
        sClass: 'continent',
        treeFilterOperators: ['=', '!='],
        treeFilter: 'string'
    },
    {
        "mData": "revenue_range",
        "sTitle": "Revenue Range",
        "altText": "" ,
        "classHide": "",
        sClass: 'revenue_range',
        treeFilterOperators: ['=', '!='],
        treeFilterSelect: [
            'Less than $500K',
            '$500K - $1M',
            '$1M - $5M',
            '$5M - $10M',
            '$10M - $25M',
            '$25M - $50M',
            '$50M - $100M',
            '$100M - $250M',
            '$250M - $500M',
            '$500M - $1B',
            '$1B - $5B',
            'Greater than $5B'
        ],
        treeFilter: 'select'
    },
    {
        "mData": "business_models",
        "sTitle": "Business Models",
        "altText": "",
        treeFilter: 'string',
        defaultOperator: '=',
        sClass: 'business_models',
        "classHide": "hide"
    },
    {
        "mData": "industries",
        "sTitle": "Industries",
        "altText": "",
        treeFilter: 'string',
        defaultOperator: 'LIKE',
        sClass: 'industries',
        "classHide": "hide"
    },
    {
        "mData": "interested",
        "sTitle": "Interested",
        "altText": "",
        treeFilter: 'yesno',
        sClass: 'interested',
        "classHide": "hide"
    },
    {
        "mData": "alert_hash",
        "sTitle": "Alert",
        "altText": "",
        treeFilter: 'number',
        sClass: 'alert_hash',
        "classHide": "hide"
    },
    {
        "mData": "user_tags",
        "sTitle": "Custom List",
        "altText": "" ,
        treeFilter: 'list',
        sClass: 'user_tags',
        "classHide": "hide"
    },
    {
        "mData": "public_lists",
        "sTitle": "Public List",
        "altText": "" ,
        treeFilter: 'string',
        defaultOperator: 'LIKE',
        sClass: 'public_lists',
        "classHide": "hide"
    },
    {
        "mData": "keywords",
        "sTitle": "Keywords",
        "altText": "",
        "classHide": "true",
        "sType": "html",
        sClass: 'keywords',
        treeFilter: 'string',
        defaultOperator: 'LIKE',
        filter: { sSelector: "#keyword-text" }
    },
    {
        "mData": "has_mobile",
        "sTitle": "Has Mobile App",
        "altText": "",
        "classHide": "",
        treeFilter: 'yesno',
        sClass: 'has_mobile',
        filter: { type: 'select', values: ['Yes', 'No'] }
    },
    {
        "mData": "has_google_play",
        "sTitle": "Has Google Play App",
        "altText": "",
        "classHide": "",
        treeFilter: 'yesno',
        sClass: 'has_google_play',
        filter: { type: 'select', values: ['Yes', 'No'] }
    },
    {
        "mData": "has_itunes",
        "sTitle": "Has iTunes App",
        "altText": "",
        "classHide": "",
        treeFilter: 'yesno',
        sClass: 'has_itunes',
        filter: { type: 'select', values: ['Yes', 'No'] }
    },
    {
        mData: "created_at",
        sTitle: "Date Added",
        altText: "",
        classHide: "",
        asSorting: [ "desc", "asc" ],
        treeFilter: 'date',
        treeFilterOperators: ['=', 'preset'],
        treeFilterSelect: [
            'within 3 months',
            'within 6 months',
            'within 9 months',
            'within 1 year'
        ],
        sClass: 'created_at'
    },
    {
        "mData": "department",
        "sTitle": "Department",
        "sClass": "hide",
        treeFilter: "select",
        treeFilterOperators: ['='],
        treeFilterSelect: ["Accounting", "Administrative", "Arts and Design", "BD and Marketing",
                           "Business Development", "Community and Social Services", "Education",
                           "Entrepreneurship", "Finance", "Healthcare Services",
                           "Human Resources", "Information Technology", "Marketing",
                           "Media and Communications", "Military and Protective Services",
                           "Operations", "Program and Product Management",
                           "Purchasing", "Quality Assurance", "Real Estate",
                           "Research", "Sales and Marketing", "Support", "Engineering",
                           "Legal", "Sales"]
    },
    {
        "mData": "seniority",
        "sTitle": "Seniority",
        "sClass": "hide",
        treeFilter: "select",
        treeFilterOperators: ['='],
        treeFilterSelect: ["VP", "Manager", "C-Level", "Director", "Other"]
    },
    {
        "mData": "jobtitle",
        "sTitle": "jobtitle",
        "sClass": "hide",
        filterable: false
    },
    {
        "mData": "techstack",
        "sTitle": "Tech Stack",
        "sClass": "hide",
        treeFilter: 'is-isnt'
    }
];


/* File: https://d3fyej7rnbpf4o.cloudfront.net/app/assets/js/data/index.js
   Compiled at: 2017-12-23 19:03:59 
================================ */
var BulkActions = {

	state: {
		pages: {},
		companies: {},
		count: null
	},

	resetState: function() {
		this.state = {pages: {}, companies: {}, count: null};
	},

	resetUI: function() {
		this.resetState();
		this.rowCheckboxes.each(function(index, el) {
			$(el).prop('checked', false);
		});
		this.bulkSelector.prop('checked', false);
		this.bulkSelector.prop('indeterminate', false);
		$('#bulk_actions_container').hide();
		$('#mattermark_info').show();
	},

	getCurrentPageNumber: function() {
		return (this.dataTable._iDisplayStart / this.dataTable._iDisplayLength) + 1;
	},

	setSelectionIndicator: function() {
		// the number of company checkboxes checked across all pages
		this.state.count = _.keys(this.state.companies).reduce(function(count, checkBoxKey) {
			if (this.state.companies[checkBoxKey]) {
				count++;
			}
			return count;
		}.bind(this), 0);

		if (this.state.count) {
			$('#mattermark_info').hide();
			$('#bulk_actions_container').show();
		} else {
			$('#bulk_actions_container').hide();
			$('#mattermark_info').show();
		}

		// update selected count & bulk action buttons React component
		MattermarkLegacyComponents.ReactDOM.render(
			MattermarkLegacyComponents.React.createElement(
				MattermarkLegacyComponents.bulkActions,
				{
					count: BulkActions.state.count,
					companies: BulkActions.state.companies,
					resetUI: BulkActions.resetUI.bind(BulkActions)
				}
			),
			document.getElementById('bulk_actions_container')
		);
	},

	setBulkSelectorState: function() {
		if (this.state.pages[this.getCurrentPageNumber()] === undefined) {
			this.state.pages[this.getCurrentPageNumber()] = false;
		}
		switch(this.state.pages[this.getCurrentPageNumber()]) {
			case true:
				this.bulkSelector.prop('checked', true);
				this.bulkSelector.prop('indeterminate', false);
				break;
			case false:
				this.bulkSelector.prop('checked', false);
				this.bulkSelector.prop('indeterminate', false);
				break;
			case 'indeterminate':
				this.bulkSelector.prop('indeterminate', true);
				// this state implies ('checked', false);
				break;
		}

	},

	bulkSelectorClickHandler: function() {
		var allCheckBoxesState;
		var bulkSelectorState;
		if (this.state.pages[this.getCurrentPageNumber()] == 'indeterminate') {
			bulkSelectorState = false;
			allCheckBoxesState = false;
		} else {
			bulkSelectorState = this.bulkSelector.is(':checked');
			allCheckBoxesState = this.bulkSelector.is(':checked');
		}

		this.state.pages[this.getCurrentPageNumber()] = bulkSelectorState;

		this.rowCheckboxes.each(function(index, checkbox) {
			var checkBox = $(checkbox);
			checkBox.prop('checked', allCheckBoxesState);
			this.state.companies[checkBox.data('company-id')] = allCheckBoxesState;
		}.bind(this));

		this.setBulkSelectorState();
		this.setSelectionIndicator();
	},

	checkBoxClickHandler: function(checkBox, event) {
		this.state.companies[checkBox.data('company-id')] = checkBox.is(':checked');

		function getCheckBoxState(checkBox) {
			var rowCheckBoxState = this.state.companies[$(checkBox).data('company-id')] || false;
			return rowCheckBoxState;
		};

		var checkBoxes = _.uniq(
			[].slice.call(this.rowCheckboxes).map(getCheckBoxState.bind(this))
		);

		if (checkBoxes.length > 1) {
			this.state.pages[this.getCurrentPageNumber()] = 'indeterminate';
		} else {
			this.state.pages[this.getCurrentPageNumber()] = checkBoxes[0];
		}

		this.setBulkSelectorState();
		this.setSelectionIndicator();
	},

	init: function(dataTable) {
		this.bulkSelector = $('#table-display-header').find('.check_box').find('input[type="checkbox"]');
		this.rowCheckboxes = $('#mattermark_wrapper').find('tbody').find('tr').find('input[type="checkbox"]');

		// indicates a new query was issued that changed the datatables result set
		if (this.dataTable && this.dataTable._iRecordsDisplay !== dataTable._iRecordsDisplay) {
			this.resetState();
		}

		this.dataTable = _.extend({}, dataTable);

		this.setBulkSelectorState();
		this.setSelectionIndicator();
		this.bulkSelector.on('change', this.bulkSelectorClickHandler.bind(this));

		this.rowCheckboxes.each(function(index, el) {
			var checkBox = $(el);
			if (this.state.companies[checkBox.data('company-id')] === true) {
				checkBox.prop('checked', true);
			}
			checkBox.on('change', this.checkBoxClickHandler.bind(this, checkBox));
		}.bind(this));
		checkForChart();
	}
}

var KillFilters = {
	render: function() {
		// Clear list of search query tags before they are redrawn
		$('#query').html("");

		$.each(queryTree.members, function(index, member) {
			if (member.boolean == undefined) {
				var text = KillFilters.getComposedQueryText(member);
				$('#query').append(KillFilters.getTag(text, index));
			}
			else {
				var orText = '';

				$.each(member.members, function(index, member) {
					if (orText.length) {
						orText += ' OR ';
					}

					orText += KillFilters.getComposedQueryText(member);
				});

				$('#query').append(KillFilters.getTag(orText, index));
			}
		});
	},
	getComposedQueryText: function (member) {
		// Interested column gets special behavior, since it means different things depending on query value
		if (member.field == 'interested') {
			return 'Company ' + (member.operator == '!=' ? 'IS NOT ' : 'IS ') + (member.value == 0 ? 'Hidden' : 'in Watch List');
		}
		else if (member.field == 'jobtitle' && typeof(member.value) === 'object') {
			var children = member.value; 
			var childQuery = [];
			for (var i = 0; i < children.length; i++) {
				if (children[i].value != '' && children[i].value != null) {
					childQuery.push(getColumn(children[i].field).sTitle + ' ' + KillFilters.translateOperator(children[i].operator) + ' ' + children[i].value);
				}
			}

			if (childQuery.length == 0) {
				return '';
			}

			return childQuery;
		}
		else if (member.field == 'jobtitle' && typeof(member.value) === 'string') {
			var raw = member.value.replace('[', '').replace(']', '').split(',');
			var childQuery = [];
			for (var i = 0; i < raw.length; i++) {
				childQuery.push(getColumn(raw[i].split('=')[0]).sTitle + ' = ' + raw[i].split('=')[1]);
			}

			if (childQuery.length == 0) {
				return '';
			}

			return childQuery;
		}
		else if (member.field == 'techstack') {
			if(!techStackFilterExists(member.value)) {
				filteredTechStack.push({field: "techstack", operator: '=', value: member.value});
				$killElement = $('<div class="label label-search-slug"></div>').text(member.value).attr('data-type', member.value).append(' <a class="techkill" href="">&times;</a>');
				$killElement.appendTo('#techStackKillArea');
			}
			return getColumn(member.field).sTitle + ' ' + KillFilters.translateOperator(member.operator) + ' ' + member.value;
		}
		else {
			return getColumn(member.field).sTitle + ' ' + KillFilters.translateOperator(member.operator) + ' ' + member.value;
		}
	},
	getTag: function(tagText, index) {
		$tag = $('<div class="hidden-xs label label-search-slug"></div>');

		$tag.text(tagText);

		$tag_kill = $('<a href="#" class="kill-filter"></a>');
		$tag_kill.attr('data-query-tree-index', index);
		$tag_kill.text(' x');
		$tag.append($tag_kill);

		return $tag;
	},
	translateOperator: function(operator) {
		switch (operator) {
			case '!=':
				return 'IS NOT';
			default:
				return operator
		}
	}
}

var es = false;

;(function ($) {
		$.extend({
				getQueryString: function (name) {
						function parseParams() {
								var params = {},
										e,
										a = /\+/g,	// Regex for replacing addition symbol with a space
										r = /([^&=]+)=?([^&]*)/g,
										d = function (s) { return decodeURIComponent(s.replace(a, " ")); },
										q = window.location.search.substring(1);

								while (e = r.exec(q))
										params[d(e[1])] = d(e[2]);

								return params;
						}

						if (!this.queryStringParams)
								this.queryStringParams = parseParams();

						return this.queryStringParams[name];
				}
		});
})(jQuery);

function watchOrPassDwapi(id, action, verb, successCb) {
	var actions = ['watch', 'pass'];
	var verbs = ['POST', 'DELETE'];

	var url = Mattermark.baseApiEndpoint + '/companies/' + id + '/' + actions[action];
	$.ajax({
		type: verbs[verb],
		url: url,
		headers: {'Authorization': 'Bearer ' + MattermarkLegacyComponents.apiAuthenticationToken.get()},
		success: function(response) {
			if (successCb) {
				successCb(response);
			}
		}
	});
}

function customListDwapi(id, name, verb, successCb) {
	var verbs = ['POST', 'DELETE'];
	var url = Mattermark.baseApiEndpoint + '/companies/' + id + '/custom_lists';
	$.ajax({
		type: verbs[verb],
		url: url,
		data: {name: name},
		headers: {'Authorization': 'Bearer ' + MattermarkLegacyComponents.apiAuthenticationToken.get()},
		success: function(response) {
			if (successCb) {
				successCb(response);
			}
		}
	});
}

function lineUpColumns () {
	_.each(myDataTable.fnSettings().aoColumns, function (col, i) {
		$('#fixed-header th.' + col.mData).css({'min-width': $('#mattermark td.' + col.mData).outerWidth()});
	});
}

function isPassList(queryTree) {
	return _.findWhere(queryTree.members, {field: 'interested', operator: '=', value: '0'});
}

function isWatchList(queryTree) {
	return _.findWhere(queryTree.members, {field: 'interested', operator: '=', value: '1'});
}

function isSingleCustomList(queryTree) {
	var sentinel = {field: 'user_tags', operator: 'IN'};
	return _.where(queryTree.members, sentinel) && _.where(queryTree.members, sentinel).length == 1;
}

// Given a query subtree AST, this function removes the column from the current
// query tree, and updates it with the newly given filter, and trigger a
// datatable redraw, which will query the server again. The given query substree
// AST must all be filters that belong to the same column.
function updateFilter(members, keyToRemove) {
	var column;
	if (members.length < 1) {
		column = keyToRemove;
	} else {
		column = members[0].field;
		if (column == undefined) {
			column = members[0].members[0].field;
		}
	}

	newQueryTree = {boolean: 'AND', members: []};

	// Loop through and only keep ones that don't match our current column
	// This effectively removes anything touching the column we're filtering on
	$.each(queryTree.members, function(index, member) {
		if (member.field != undefined && member.field != column) {
			newQueryTree.members.push(member)
		}
		else if (member.field == undefined) {
			var newOrElement = {boolean: 'OR', members: []};

			$.each(member.members, function(index, member) {
				if (member.field != column) {
					newOrElement.members.push(member)
				}

			});

			if (newOrElement.members.length) {
				newQueryTree.members.push(newOrElement);
			}
		}
	});

	// Now add the new filter
	$.each(members, function(index, member) {
			newQueryTree.members.push(member);
	});

	queryTree = newQueryTree;

	// trigger new query
	myDataTable.fnDraw(false);
}

function drawMMChart() {
	var pieData = new google.visualization.DataTable();
		pieData.addColumn('string');
		pieData.addColumn('number');
		momentum_score = portfolioData.stats.momentum_score;

	$.each(momentum_score, function(key, value) {
		pieData.addRow([value["growth_status"].toString(), parseInt(value["count(1)"])]);
	});
	var options = {
		enableInteractivity: true,
		width: 280,
		height: 200,
		chartArea:{left:0, top:10},
		pieStartAngle: -45,
		titleTextStyle: { fontSize: 14 },
		colors: ['#fcd300','#a3cd39','#fbac1d'],
		backgroundColor: { fill:'transparent' },
		tooltip: {textStyle: {fontSize: 14}},
		legend: {position: 'bottom'}
	};
		var chartMM = new google.visualization.PieChart(document.getElementById('investment-score'));
		chartMM.draw(pieData, options);
		google.visualization.events.addListener(chartMM, 'select', selectHandler);

	// FILTER BY GROWTH: TO DO

	function selectHandler(e) {
		var selection = chartMM.getSelection();
		for (var i = 0; i < selection.length; i++) { // a slice is a "row"
			var item = selection[i];
			if (item.row != null) {
					var str = pieData.getFormattedValue(item.row, 0);
					if (str == "High Growth") {
						var filter = "152~";
						updateFilter([{field: 'cached_growth_score', operator: '>=', value: 152}]);
					} else if (str == "Growth") {
						var filter = "0~151";
						updateFilter([{field: 'cached_growth_score', operator: '>=', value: 0},{field: 'cached_growth_score', operator: '<=', value: 151}]);
					} else if (str == "Not Growing") {
						var filter = "~0";
						updateFilter([{field: 'cached_growth_score', operator: '<', value: 0}]);
					}
			}
		}
	}
}

function drawBizChart() {
	var pieData = new google.visualization.DataTable();
		pieData.addColumn('string');
		pieData.addColumn('number');
		business_model_breakdown = portfolioData.stats.business_model_breakdown;

	var portfolio_count = portfolioData.stats.mm_scores.length;
	bizModelCount = 0;
	$.each(business_model_breakdown, function(key, value) {
		pieData.addRow([value["tag"].toString(), parseInt(value["company_count"])]);
		bizModelCount += parseInt(value["company_count"]);
	});

	nullBizModel = portfolio_count - bizModelCount;
	if (nullBizModel < 0) {
		// happens if some companeis are tagged both B2B and B2C.
		// that breaks pie chart; so zero this out.
		nullBizModel = 0;
	}

	pieData.addRow([ "Unclassified", nullBizModel]);

	var options = {
		enableInteractivity: true,
		width: 280,
		height: 200,
		chartArea:{left:0, top:10},
		backgroundColor: { fill:'transparent' },
		tooltip: {textStyle: {fontSize: 14}},
		legend: {position: 'bottom'},
		colors: ['#2e94ca', '#62b03a', '#d3d3d3']
	};

		var chartBiz = new google.visualization.PieChart(document.getElementById('business-model-breakdown'));
		chartBiz.draw(pieData, options);
		google.visualization.events.addListener(chartBiz, 'select', selectHandler);

	function selectHandler(e) {
		var selection = chartBiz.getSelection();
		for (var i = 0; i < selection.length; i++) { // a slice is a "row"
			var item = selection[i];
				var str = pieData.getFormattedValue(item.row, 0);
			if (item.row != null) {
				if (str == "Unclassified") {
					// TO DO
				} else {
					updateFilter([{field: 'business_models', operator: 'LIKE', value: str}]);
				}
			}
		}
	}
}

function drawStageChart() {
	var pieData = new google.visualization.DataTable();
		pieData.addColumn('string');
		pieData.addColumn('number');
		stage_dist = portfolioData.stats.stage_dist;

	$.each(stage_dist, function(key, value) {
		var label = value["stage"].toString();
		if (label.length == 1) {
			label = label.toUpperCase();
		}
		if (label != 'No Known Funding'){
			if (label.indexOf('Exited') >= 0){
			} else{
				pieData.addRow([label, parseInt(value["count(1)"])]);
			}

		}

	});

	var options = {
		enableInteractivity: true,
		width: 300,
		height: 200,
		chartArea:{top:10, width:'48%'},
		legend: {position: 'none'},
		vAxis: {baselineColor: 'white' },
		hAxis: {baselineColor: 'white', gridlines: {color: 'white'}, title: 'Companies', format: '#'},
		backgroundColor: { fill:'transparent' },
		tooltip: {textStyle: {fontSize: 14}},
		colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6']
	};

		var chartStage = new google.visualization.BarChart(document.getElementById('stage-dist'));
		chartStage.draw(pieData, options);
		google.visualization.events.addListener(chartStage, 'select', selectHandler);

	function selectHandler(e) {
		var selection = chartStage.getSelection();
		for (var i = 0; i < selection.length; i++) { // a slice is a "row"
			var item = selection[i];
				var str = pieData.getFormattedValue(item.row, 0);
			if (item.row != null) {
				updateFilter([{field: 'stage', operator: '=', value: str}]);
			}
		}
	}
}

function checkForChart() {
	if (isChartLoaded && isTableLoaded && portfolioData) {
		$('#investor-portfolio #loading-wrapper').hide();
		$('#investor-portfolio #portfolio-content').removeClass('hidden').show();
		$('#investor-portfolio').css('margin-bottom','10px');
		drawBizChart();
		drawMMChart();
		drawStageChart();
		$('#investment-score').prepend('<h5 style="font-weight: 400;">Growth Momentum</h5>');
		$('#business-model-breakdown').prepend('<h4  style="font-weight: 400;">Business Model</h4>');
		$('#stage-dist').prepend('<h4 style="font-weight: 400;">Stage Distribution</h4>');
		$('#table-wrapper').css({top: $('#fixed-header-wrapper').position().top});
	}
}
function hideShowInvestorGraphs(){
	var hideShowButtonText = $('#hideshowportfolio span');

	switch ( hideShowButtonText.text() ){
		case "Hide Graphs":
			hideShowButtonText.text('Show Graphs');
			$('#investor-portfolio').addClass('hidden').hide();
			$('#table-wrapper').css({top: $('#fixed-header-wrapper').position().top});
			 break;
		case 'Show Graphs':
			hideShowButtonText.text('Hide Graphs');
			$('#investor-portfolio').removeClass('hidden').show();
			$('#table-wrapper').css({top: $('#fixed-header-wrapper').position().top});
			break;
	}
}
function buildInvestorHeader(searchTermPart) {
	$.ajax({
		type: 'GET',
		url: '/app/investor/stats?mm_slug=' + encodeURIComponent(searchTermPart),
		success: function(data) {
			portfolioData = data;
			if (data.stats.investorDisplay && data.stats.momentum_score.length) {
				$('#investor-portfolio').removeClass('hidden').show();
				$('#hideshowportfolio').removeClass('hidden').show();
				if ($(window).height() < 560){
					hideShowInvestorGraphs();
				}
			}
			$("#investor-id").text(data.stats.investorDisplay);
			//$("#investor-logo"); TO DO

			connectRequestIntroModal("#request-intro", {
				objectName: data.stats.investorDisplay,
				objectType: "investor",
				objectId: data.stats.investorMMSlug
			});

			// PORTFOLIO COMPANY COUNT
			var all_portfolio_count = 0;
			$.each(data.stats.stage_dist, function(index, stage) {
				all_portfolio_count += parseInt(stage["count(1)"]);
			});

			var startup_portfolio_count = data.stats.mm_scores.length;
			$('#portfolio_investment_count').text(all_portfolio_count);

			// INDUSTRY BREAKDOWN
					if (data.stats.industry_breakdown != null) {
							var industry_breakdown = data.stats.industry_breakdown;
					}
					$('#top-industries').empty();
						if ($.isArray(industry_breakdown)) {
				$.each(industry_breakdown, function(key, value) {
					if (key > 6) {
						return;  // don't show too many rows
					}
					var rounded = (value['company_count']/all_portfolio_count)*100;
					rounded = Math.ceil(rounded);
						filterLink = ('<li><a class="industry-filter">' + value['tag'] +'</a>' + "	<span class='percent-sign'> " + rounded + '%</span></li>');
						$('#top-industries').append(filterLink);
				});
			};

			// MEAN MM SCORE
			var mean_mm_score = 0;
			mm_scores = data.stats.mm_scores;
						if ($.isArray(mm_scores)) {
							var total_mm_score = 0;
				$.each(mm_scores, function(key, value) {
					score = value["cached_mattermark"];
					if (score) {
						total_mm_score += parseInt(score);
					}
				})
				mean_mm_score = Math.ceil(total_mm_score/startup_portfolio_count);
			}
			$('#mean_mm_score').text(mean_mm_score);

			// Recent Investments
			recents = data.stats.recent_investments;
			$('#recent-invest').empty();
			if (recents.length) {
				$.each(recents, function(key, value) {
						recentScore = "New";
					company = value['company_name'];
						if (value['cached_mattermark']) {
							recentScore = value['cached_mattermark'];
						}
					$('#recent-invest').append('<li><a href="/app/data/'
							+ value['id'] + '">' + company + '</a>' + "&nbsp" +
							'<span class="label label-warning" style="background-color:#fcd300;">' +
							recentScore + '</span></li>');
				})
			} else {
					$('#recent-invest').parent().hide();
			}

			// LOCATION OF INVESTMENTS
					if (data.stats.investments_location != null) {
							var investments_location = data.stats.investments_location;
					}
					$('#location-invest').empty();
						if ($.isArray(investments_location)) {
				$.each(investments_location, function(key, value) {
					if (key > 6) {
						return;  // don't show too many rows
					}
					var rounded = (value['cnt']/all_portfolio_count)*100;
					rounded = Math.ceil(rounded);
						// locationtag = ('<li><a class="industry-filter">' + value['location'] +'</a>'+ "	" + rounded + '%</li>');
						locationtag = ('<li>' + value['location'] + "  <span class='percent-sign'> " + rounded + '%</span></li>');
						$('#location-invest').append(locationtag);
				});
			};

			checkForChart();
		}
	});
}


function isLocationModalClosed() {
	return $('#locationModal').css('display') != 'block';
}

function escapePHPEncoding(text) {
	return text
			.replace(/&amp;/g, "&")
			.replace(/&lt;/g, "<")
			.replace(/&gt;/g, ">")
			.replace(/&quot;/g, "\"")
			.replace(/&#039;/g, "\'");
}

function getParameterByName(name) {
	name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
		results = regex.exec(decodeURIComponent(location.search).replace(/\+/g, " "));

	return results == null ? "" : results[1];
}

function getColumnByElement(th) {
	var columns = myDataTable.fnSettings().aoColumns;
	return _.findWhere(columns, {nTh: th});
}

function getColumnIndexByName(mDataName) {
	var foundColumn = -1;
				var defaultColumn;

	$.each(myColumns, function(index, column) {
		if (column.mData == mDataName) {
			foundColumn = index;
		}
								if (column.mData === "cached_growth_score") {
												defaultColumn = index;
								}
	});

	if (foundColumn == -1) {
						return defaultColumn;
	}
	else {
		return foundColumn;
	}
}

function getStories(current_offset) {
	$.ajax({
		url: '/app/data/get_stories',
		type: 'POST',
		data: {'treeQuery': queryTree, offset: current_offset, 'sharingKey': sharingKey},
		success: function(data) {

			if (data.stories.length > 0) {
				$('#next-page-query-stories').text('Load More');
				$('#next-page-query-stories').attr('disabled', false);
				$('#next-page-query-stories').attr('rel', parseInt(current_offset) + 50);
			} else {
				$('#next-page-query-stories').text('No more news stories to be shown.');
				$('#next-page-query-stories').attr('disabled', true).css('background-color','#cccccc');
			}

			$.each(data.stories, function(index, story) {
				$story = $('<li class="ac-news-story"><a class="company-nugget"></a><p><a class="story-title">Headline</a></p><div class="news-details"><span class="news-footer"><div class="source"></div> - <div class="date"></div></span></div></li>');
				$('a.story-title', $story).attr('href', story.url);
				$('a.story-title', $story).text(story.title);
				$('.company-nugget', $story).text(story.company_name);
				$('.company-nugget', $story).attr('href', ('/app/data/').concat(story.company_id));
				$('.source', $story).text(story.source_slug);
				$('.date', $story).text(story.published_at);

				$story.appendTo('#news-wrapper');
			});
		}
	});
}

$('body').on('click', '#btnNews', function() {
	$('.ac-table-header').hide();
	$('#table-wrapper').hide();
	$('#news-wrapper').empty();
	$('#news-section').removeClass('hidden').show();
	sendTrackEvent('ViewNewsButtonClicked'); // Track View News button click
	getStories(0);
	//closes success alert if there is one from saving
	if ($('#query-saved-message').is(':visible')){
		$('#query-saved-message').alert('close');
		$('#table-wrapper').css({top: $('#fixed-header-wrapper').position().top});
	}
});

$('body').on('click', '#news-wrapper a', function() {
	// Track View News Item Link click
	sendTrackEvent('ViewNewsItemLinkClicked');
});

$('body').on('click', '#btnCompany', function() {
	if ($('#news-section').is(':visible')) {
		$('#news-section').addClass('hidden').hide();
		$('.ac-table-header').show();
		$('#table-wrapper').show();
	} else {
		$('.ac-table-header').hide();
		$('#table-wrapper').hide();
		$('#news-wrapper').empty();
		$('#news-section').removeClass('hidden').show();
		getStories(0);
	}
});

$('body').on('click', '#next-page-query-stories', function() {
	var next_offset = $('#next-page-query-stories').attr('rel');
	getStories(next_offset);
	$(this).text('Loading...');
	$(this).attr('disabled', true);
});

$('body').on('click', '#btnSaveReport', function() {
	if (myDataTable.fnSettings()._iRecordsDisplay >  5000) {
		$('#bigReportModal').modal({keyboard: true});
		$('#bigReportModal').modal('show');
		return;
	}

	var starterName = '';

	if (filtersFor('industries', '=').length) {
		starterName += _.reduce(filtersFor('industries', '='), function(memo, filter) { return (memo.length ? memo + ', ' : '') + filter; }, '') + ' companies ';
	}

	var locations = _.union(filtersFor('location', '='), filtersFor('region', '='), filtersFor('city', '='), filtersFor('state', '='), filtersFor('country', '='), filtersFor('continent', '='));
	if (locations.length) {
		if (starterName.length) {
			starterName += 'in ' + _.reduce(locations, function(memo, filter) { return (memo.length ? memo + ', ' : '') + filter; }, '') + ' ';
		}
		else {
			starterName = 'Companies in ' + _.reduce(locations, function(memo, filter) { return (memo.length ? memo + ', ' : '') + filter; }, '') + ' ';
		}
	}

	if (filtersFor('stage', '=').length) {
		if (starterName.length) {
			starterName += 'at ' + _.reduce(filtersFor('stage', '='), function(memo, filter) { return (memo.length ? memo + ', ' : '') + filter; }, '') + ' stage';
		}
		else {
			starterName = _.reduce(filtersFor('stage', '='), function(memo, filter) { return (memo.length ? memo + ', ' : '') + filter; }, '') + ' stage companies';
		}
	}

	$('#querySaveModal #title').val($.trim(starterName));

	$('#querySaveModal').modal({keyboard: true});
	$('#querySaveModal').modal('show');
});


$('body').on('click', '#btnShowFilters', function() {
	$('.filterBtns,#query').removeClass('hidden').show(); // grab the filters we hid and show them
	$('#btnShowFilters').hide(); // also hide the show filters button
});

$('body').on('click', '.newCustomList', function(e) {
	e.stopPropagation();
});
//adding the following because 'click' no longer suffices alone. needs this to allow spaces on input/
$('body').on('keydown', '.newCustomList', function(e) {
	e.stopPropagation();
});

var exportFunction = function(event) {
	var export_view = event.data.export_view;
	if (Mattermark.clientSideAuthorizations.canExport) {
		var queryString =  myDataTable._fnAjaxParameters(myDataTable.fnSettings());
		var columns = {};
		$.each(myDataTable.fnSettings().aoColumns, function(index, value) {
			if (value.bVisible && value.mData !== "check_box") {
				columns[value.mData] = value.sTitle;
			}
		});

		$.ajax({
			type: 'POST',
			url: '/app/data/get_export_hash/',
			data: {
				treeQuery: queryTree,
				customScoreWeights: customScoreWeights,
				columns: columns
			},
			success: function(data) {
				var d = new Date,
						dformat = [d.getMonth()+1, d.getDate(), d.getFullYear()].join('-'),
						direction = myDataTable.fnSettings().aaSorting[0][1],
						columnIndex = myDataTable.fnSettings().aaSorting[0][0],
						columnName = myDataTable.fnSettings().aoColumns[columnIndex].mData;

				var newLocation = '/app/data/export/MattermarkExport' + dformat + '.csv?query_tree_hash=' + data.hash + '&sdir=' + direction + '&scol=' + columnName;
				if (export_view) {
					newLocation = '/app/data/exportviewed/MattermarkExport' + dformat + '.csv?query_tree_hash=' + data.hash + '&sdir=' + direction + '&scol=' + columnName;
				}

				if (sharingKey.length) {
					newLocation += '&sharing_key=' + sharingKey;
				}

				// Track export event
				sendTrackEvent('ExportCSV');
				window.location = newLocation;
			}
		});
	} else {
		$('#upgradeModal').modal({keyboard: true});
		$('#upgradeModal').modal('show');
		// Track export was requested but not able to
		sendTrackEvent('Export Requested');
	}
};

$('body').on('click', '#btnExport', {export_view: false}, exportFunction);
$('body').on('click', '#btnExportView', {export_view: true}, exportFunction);

$('body').on('click', '#btnShare', function() {
	if (filtersFor('user_tags', 'IN').length) {
		var query = filtersFor('user_tags', 'IN');
		$('#shareModal').attr('rel', query[0]).modal('show');
		loadSharedMemberList();
	}
	else {
		var columns = "columns=";
		$.each(myDataTable.fnSettings().aoColumns, function(index, value) {
			if (value.bVisible) {
				columns += value.mData + ',';
			}
		});
		columns = columns.slice(0, -1);

		var url = window.location.href;
		if (url.indexOf('?') > -1){
			url += '&' + columns;
		} else {
			url += '?' + columns;
		}

		$('#shareUrlModal input[type=text]').val(url);
		// $('#shareUrlModal input[type=button]').data('clipboard-text', url);

		var clip = new ZeroClipboard($('input[type=button]')[0]);
		clip.on( 'wrongflash noflash', function() {
			ZeroClipboard.destroy();
		});
		clip.on('load', function(clip) {
			clip.on('complete', function(client, args) {
				var $button = $('#shareUrlModal input[type=button]');
				$button.prop('disabled', true);
				$button.val('Copied');
				setTimeout(function() {
					$button.val('Copy')
					$button.prop('disabled', false);
				}, 3000);
			});
		});

		$('#shareUrlModal').on('shown.bs.modal', function () {
			var $this = $(this);
			$this.find('input[type=text]').select();
		}).modal('show');
	}

});

$('body').on('click', '#shareModal button.share', function() {
	$(this).attr('disabled', 1).text('Sharing...');

	$.ajax({
		type: 'POST',
		url: '/app/data/share',
		data: {
			csrf: $('#mm_csrf').val(),
			url: $(this).attr('rel'),
			type_code: $('#shareModal input.title').val(),
			emails: $('#shareModal input.emails').val(),
			message: $('#shareModal textarea.message').val()
		},
		success: function(data) {
			$('#shareModalBody,#shareModal .modal-footer').hide();
			$('#shareModalSuccess').removeClass('hidden').show();
		}
	});
});

$('body').on('click', '#querySaveModal .save', function() {
	var queryString =  myDataTable._fnAjaxParameters(myDataTable.fnSettings());

	$.ajax({
		type: 'POST',
		url: '/app/data/save/' + queryId,
		data: {
			queryTitle: $('#querySaveModal #title').val(),
			queryNotifications: $('#querySaveModal #notifications').is(':checked') ? 1 : 0,
			queryNewsNotifications: $('#querySaveModal #news_notifications').is(':checked') ? 1 : 0,
			aoData: queryString,
			treeQuery: queryTree,
			customScoreWeights: customScoreWeights
		},
		success: function(data) {
			var $alert = $('<div id="query-saved-message" class="alert alert-success">' +
										 '<span class="close" data-dismiss="alert">&times;</span>' +
										 'Your search and alert settings have been saved. <a href="/app/reports">Saved Searches</a>' +
										 '</div>');
			$alert.alert();
			sendTrackEvent('SavedSearchQuery'); // Track Saved Search modal save button click
			$alert.on('click', '.close', function () {
				$('#table-wrapper').css({top: $('#fixed-header-wrapper').position().top});
			})
			$('.main-col').prepend($alert);
			$alert.fadeIn(function () {
				$('#table-wrapper').css({top: $('#fixed-header-wrapper').position().top});
			});
			if ($('#ss-dropdown-menu li:nth-child(3) a').text() == "No Saved Searches"){
				$('#ss-dropdown-menu li:nth-child(3)').addClass('hidden');
			};
		}
	});
});

$('body').on('click', '#follow-portfolio', function() {
	var investorToFollow = '';

	$.each(queryTree.members, function(index, member) {
		if (member.field == 'investors' && member.operator == '=') {
			investorToFollow = member.value;
		}
	});

	if (investorToFollow.length == 0) {
		alert('Could not find an investor in your filter.');
		return;
	}

	var queryString =  myDataTable._fnAjaxParameters(myDataTable.fnSettings());

	$('#querySaveModal #title').val($("#investor-id").text());

	$('#querySaveModal').modal({keyboard: true});
	$('#querySaveModal').modal('show');

});

function getColumn(mDataName) {
	var theColumn;

	$.each(myColumns, function(index, value) {
		if (value.mData == mDataName) {
			theColumn = value;
		}
	});

	if (theColumn == null) {
			theColumn = {};
			theColumn.sTitle = mDataName;
	}

	return theColumn;
}

// Insert table headers
$.each(myColumns, function(index, value) {
	$('#table-filter-row ').append('<th ' + (typeof value.classHide !== typeof undefined && value.classHide == "hide" ? 'class="hide"' : "" ) + '></th>');
	$('#table-display-header ').append('<th title="' + value.altText + '"></th>');
	// compose filter type array
});

// Set up limited pagination for trial accounts.
// This is taken from this example of a custom pagination control:
// https://datatables.net/plug-ins/pagination/ellipses
$.extend($.fn.dataTableExt.oStdClasses, {
		'sPageNumber': 'paginate_number',
		'sPageNumbers': 'paginate_numbers',
		'sButtonDisabled': 'paginate_button_disabled',
		'sButtonActive': 'paginate_active',
});

$.fn.dataTableExt.oPagination.trial_pagination = {
		'oDefaults': {
				'iShowPages': 5,
				'iMaxPage': 3,
				'sTooltipText': "We hope you're enjoying your trial. To view more results, contact sales@mattermark.com",
		},
		'fnClickHandler': function (e) {
				var fnCallbackDraw = e.data.fnCallbackDraw,
						oSettings = e.data.oSettings,
						sPage = e.data.sPage;

				if ($(this).hasClass(oSettings.oClasses.sButtonDisabled)) {
						return false;
				}

				oSettings.oApi._fnPageChange(oSettings, sPage);
				fnCallbackDraw(oSettings);

				return true;
		},
		// fnInit is called once for each instance of pager
		'fnInit': function (oSettings, nPager, fnCallbackDraw) {
				var oClasses = oSettings.oClasses,
						oLang = oSettings.oLanguage.oPaginate,
						that = this;

				var oFirst = $('<a class="' + oClasses.sPageButton + ' ' + oClasses.sPageFirst + '">' + oLang.sFirst + '</a>'),
						oPrevious = $('<a class="' + oClasses.sPageButton + ' ' + oClasses.sPagePrevious + '">' + oLang.sPrevious + '</a>'),
						oNumbers = $('<span class="' + oClasses.sPageNumbers + '"></span>'),
						oNext = $('<a class="' + oClasses.sPageButton + ' ' + oClasses.sPageNext + '">' + oLang.sNext + '</a>'),
						oLast = $('<a class="' + oClasses.sPageButton + ' ' + oClasses.sPageLast + '">' + oLang.sLast + '</a>');

				oFirst.click({ 'fnCallbackDraw': fnCallbackDraw, 'oSettings': oSettings, 'sPage': 'first' }, that.fnClickHandler);
				oPrevious.click({ 'fnCallbackDraw': fnCallbackDraw, 'oSettings': oSettings, 'sPage': 'previous' }, that.fnClickHandler);
				oNext.click({ 'fnCallbackDraw': fnCallbackDraw, 'oSettings': oSettings, 'sPage': 'next' }, that.fnClickHandler);
				oNext.attr('title', this.oDefaults.sTooltipText);

				// The Last button is disabled for Trial users.
				oLast.attr('title', this.oDefaults.sTooltipText);

				// Draw
				$(nPager).append(oFirst, oPrevious, oNumbers, oNext, oLast);
		},
		// fnUpdate is only called once while table is rendered
		'fnUpdate': function (oSettings, fnCallbackDraw) {
				var oClasses = oSettings.oClasses,
						that = this;

				var tableWrapper = oSettings.nTableWrapper;

				// Update stateful properties
				this.fnUpdateState(oSettings);
				$('.' + oClasses.sPageLast, tableWrapper)
						.addClass(oClasses.sButtonDisabled);

				if (oSettings._iCurrentPage === 1) {
						$('.' + oClasses.sPageFirst, tableWrapper)
								.addClass(oClasses.sButtonDisabled);

						$('.' + oClasses.sPagePrevious, tableWrapper)
								.addClass(oClasses.sButtonDisabled);
				} else {
						$('.' + oClasses.sPageFirst, tableWrapper)
								.removeClass(oClasses.sButtonDisabled);

						$('.' + oClasses.sPagePrevious, tableWrapper)
								.removeClass(oClasses.sButtonDisabled);
				}

				if (oSettings._iTotalPages === 0 || oSettings._iCurrentPage === oSettings._iTotalPages || oSettings._iCurrentPage == this.oDefaults.iMaxPage) {
						$('.' + oClasses.sPageNext, tableWrapper)
								.attr('title', this.oDefaults.sTooltipText)
								.addClass(oClasses.sButtonDisabled);
				} else {
						$('.' + oClasses.sPageNext, tableWrapper)
								.removeAttr('title')
								.removeClass(oClasses.sButtonDisabled);
				}

				var i, oNumber, oNumbers = $('.' + oClasses.sPageNumbers, tableWrapper);

				// Erase
				oNumbers.html('');

				var end = Math.min(this.oDefaults.iShowPages, oSettings._iLastPage);
				for (i = oSettings._iFirstPage; i <= end; i++) {
						oNumber = $('<a class="' + oClasses.sPageButton + ' ' + oClasses.sPageNumber + '">' + oSettings.fnFormatNumber(i) + '</a>');

						if (oSettings._iCurrentPage === i) {
								oNumber.attr('active', true)
										.addClass(oClasses.sButtonActive);
						} else {
								oNumber.click({ 'fnCallbackDraw': fnCallbackDraw, 'oSettings': oSettings, 'sPage': i - 1 }, that.fnClickHandler);
						}

						// Disable any pages after the trial maximum.
						if (i > this.oDefaults.iMaxPage) {
								oNumber.attr('title', this.oDefaults.sTooltipText)
										.addClass(oClasses.sButtonDisabled);
						}

						// Draw
						oNumbers.append(oNumber);
				}
		},
		// fnUpdateState used to be part of fnUpdate
		// The reason for moving is so we can access current state info before fnUpdate is called
		'fnUpdateState': function (oSettings) {
				var iCurrentPage = Math.ceil((oSettings._iDisplayStart + 1) / oSettings._iDisplayLength),
						iTotalPages = Math.ceil(oSettings.fnRecordsDisplay() / oSettings._iDisplayLength),

				iFirstPage = 1;
				iLastPage = iTotalPages;

				$.extend(oSettings, {
						_iCurrentPage: iCurrentPage,
						_iTotalPages: iTotalPages,
						_iFirstPage: iFirstPage,
						_iLastPage: iLastPage
				});
		}
};

var myDataTable = $('.company-list').dataTable( {
		"sPaginationType": paginationStyle,
	"bStateSave": true,
	'bAutoWidth': false,
	'bProcessing': false,
	'bLengthChange': false,
	'bServerSide': true,
	'sAjaxSource': '/app/data/get/' + queryId,
	'iDisplayLength': 50,
	"aaSorting": [[ 4, "desc" ]],
	"sDom":"i<'datatable-scroll't>p",
	'aoColumns': myColumns,
		fnInfoCallback: function (oSettings, iStart, iEnd, iMax, iTotal, sPre) {
				var content = $('<div class="dataTables_info" id="mattermark_info">' + sPre + '</div>');
				if (BulkActions.count) {
						content.hide();
				}
				$('.ac_table_info .hidden-xs').empty().append(content);
		},
	fnServerData: function(sSource, aoData, fnCallback) {
		$("html, body").animate({ scrollTop: 0 }, "slow"); // Scroll to top of page
		aoData.push( { "name" : "sharing_key", "value" : sharingKey  } );

		queryStringEquivalent = {};

		$.each(aoData, function(index, element) {
			queryStringEquivalent[element.name] = element.value;
		});

		$.ajax({
			type: 'POST',
			url: '/app/data/get/' + getParameterByName('q'),
			data: {
				aoData: queryStringEquivalent,
				treeQuery: queryTree,
				es: es,
				customScoreWeights: customScoreWeights
			},
			success: function(data) {
				fnCallback(data);
			}
		});
	},
	fnStateSave: function(oSettings, oData) {
		var queryString = '';
		var orComponents = Array();
		var operatorComponents = Array();

		$.each(queryTree.members, function(index, member) {
			if (member.boolean != undefined) {
				// Deal with OR
				var orComponent = '';

				$.each(member.members, function(index, member) {
					if (orComponent.length) {
						orComponent += encodeURIComponent('|');
					}

					orComponent += encodeURIComponent(member.field + "\t" + member.operator + "\t" + member.value);
				});

				orComponents.push(orComponent);
			}
			else if (member.value != null) {
				if (typeof(member.value) === 'object') {
					// We handle nested object parameters here - currently only for job titles
					// nested object parameters are parameters where member.value is an object
					queryString += 'jobtitle=';
					childString = '[';
					for(var i = 0; i < member.value.length; i++) {
						childString += member.value[i].field + '=' + member.value[i].value;
						if (i != member.value.length - 1) {
							childString += ',';
						}
					}

					childString += ']';
					queryString += encodeURIComponent(childString);
				}
				else if (member.operator != '=' || queryString.indexOf(member.field) != -1) {	// second part of this helps us make sure we don't do dupes: &investors=FirstRound&investors=YC
					operatorComponents.push(member);
				}
				else if (member.value != '~') {
					if (queryString.length) {
						queryString += '&';
					}

					queryString += member.field + '=' + encodeURIComponent(member.value);
				}
			}
		});

		$.each(orComponents, function(index, component) {
			if (queryString.length) {
				queryString += '&';
			}

			queryString += "or[" + index + "]=" + component;
		});

		$.each(operatorComponents, function(index, component) {
			if (queryString.length) {
				queryString += '&';
			}

			queryString += "operator[" + index + "]=" + encodeURIComponent(component.field + "\t" + component.operator + "\t" + component.value);
		});

		if ( ! (myColumns[oData.aaSorting[0][0]].mData == 'mattermark_score' && oData.aaSorting[0][1] == 'desc') ) {
			if (queryString.length) {
				queryString += '&';
			}

			queryString += 'sortBy=' + myColumns[oData.aaSorting[0][0]].mData + '&sortDirection=' + oData.aaSorting[0][1];
		}

		if (oData.iStart > 0) {
			if (queryString.length) {
				queryString += '&';
			}

			queryString += 'offset=' + oData.iStart;
		}

		// Preserve the existing subquery param
		if (getParameterByName('q')) {
			if (queryString.length) {
				queryString += '&';
			}

			queryString += 'q=' + getParameterByName('q');
		}

		$.each(customScoreWeights, function(metric, weight) {
			if (weight) {
				if (queryString.length) {
					queryString += '&';
				}
				queryString += 'score_' + metric + '=' + weight;
			}
		});

		if (getParameterByName('shownews')) {
			if (queryString.length) {
				queryString += '&';
			}
			queryString += 'shownews=' + getParameterByName('shownews');
		}

		if (sharingKey) {
			queryString += '&sharing_key=' + encodeURIComponent(sharingKey);
		}

		if (window.location.toString().indexOf('?') == -1 ) {
			var newLocation = (window.location + '?' + queryString);
		}
		else {
			var newLocation = (window.location.toString().substring(0, window.location.toString().indexOf('?')) + '?' + queryString);
		}

		if ($('#ie-below10-sentinel').length == 0) {
			window.history.replaceState({}, '', newLocation);
		}
	},
	fnStateLoad: function(oSettings) {
		var myStart = parseInt(getParameterByName('offset') ? getParameterByName('offset') : 0);
		var loadedQueryTree = {boolean: 'AND', members: []};

		var oData = {
			aaSorting: oSettings.aaSorting,
			abVisCols: [],
			aoSearchCols: [],
			iCreate: new Date().getTime(),
			iEnd: myStart + 50,
			iLength: 50,
			iStart: myStart,
			oSearch: {
				bCaseInsensitive: true,
				bRegex: false,
				bSmart: true,
				sSearch: ''
				}
		}

		$.each(myColumns, function(columnIndex, column) {
			// Old school filtering functionality
			oData.abVisCols = [];

			oData.aoSearchCols.push({
				bCaseInsensitive: true,
				bRegex: false,
				bSmart: true,
				sSearch: getParameterByName(column.mData)
			});

			// New query tree functionality
			var columnFilter;

			// TODO this has a bug where columnFilter = 0 will result in skipping this loop
			if (columnFilter = getParameterByName(column.mData)) {
				var orMembers = Array();

				if ( columnFilter.indexOf('|') != -1 ) {
					$.each(columnFilter.split('|'), function(index, orFilter) {
						orMembers.push({field: column.mData, operator: '=', value: orFilter});
					});

					loadedQueryTree.members.push({boolean: 'OR', members: orMembers});
				}
				else if ( columnFilter.indexOf('~') != -1 ) {
					var betweenParts = columnFilter.split('~');

					if (betweenParts[0].length) {
						loadedQueryTree.members.push({field: column.mData, operator: '>=', value: betweenParts[0]});
					}

					if (betweenParts[1].length) {
						loadedQueryTree.members.push({field: column.mData, operator: '<=', value: betweenParts[1]});
					}
				}
				else {
					loadedQueryTree.members.push({field: column.mData, operator: '=', value: columnFilter});
				}
			}
		});

		var currentOrIndex = 0;
		while (currentOr = getParameterByName("or[" + currentOrIndex + "]")) {

			var newOrMember = {boolean: 'OR', members: []};

			$.each(currentOr.split('|'), function(index, serializedMember) {
				memberParts = serializedMember.split("\t");

				newOrMember.members.push({field: memberParts[0], operator: memberParts[1], value: memberParts[2]});
			});

			loadedQueryTree.members.push(newOrMember);
			currentOrIndex++;
		}

		var currentOperatorIndex = 0;
		while (currentOperator = getParameterByName("operator[" + currentOperatorIndex + "]")) {
			memberParts = currentOperator.split("\t");
			loadedQueryTree.members.push({field: memberParts[0], operator: memberParts[1], value: memberParts[2]});

			currentOperatorIndex++;
		}

		$.each(customScoreWeights, function(metric, weight) {
			if (getParameterByName('score_' + metric)) {
				customScoreWeights[metric] = getParameterByName('score_' + metric);
			}
		});

		if (getParameterByName('sortBy')) {
			oData.aaSorting[0][0] = getColumnIndexByName(getParameterByName('sortBy'));
		}

		if (getParameterByName('sortDirection') == 'asc') {
			oData.aaSorting[0][1] = 'asc';
			oData.aaSorting[0][2] = 0;
		}
		else if (getParameterByName('sortDirection') == 'desc') {
			oData.aaSorting[0][1] = 'desc';
			oData.aaSorting[0][2] = 1;
		}

		if (loadedQueryTree.members.length) {
			queryTree = loadedQueryTree;
		}

		return oData;
	},
	fnHeaderCallback: function (nHead) {
		var settings = myDataTable.fnSettings();

		// updates the indicator status icons
		_.each(settings.aoColumns, function (column, index) {
			// whenever the fixed header updates its indicators, the invisible headers
			// need to update too or the column widths on the fixed header and the table
			// won't match
			_.each([$(column.nTh), $('#fixed-header th.' + column.mData)], function ($th) {

				// hack to disable datatables default click handler to prevent sorting by clicking on the header
				// this also disables focus and overrides the sort carets
				$th.off('click').removeAttr('tabindex').addClass('hide-carets');

				if (column.mData == 'check_box' && $th.hasClass('check_box')) {
					return;
					// prevent the filter ellipsis button & various other things from being applied to any given column header...
				}

				// render the carets
				if (!$th.find('.text').length) {
					$th.wrapInner('<div class="text">');
				}
				var $indicator = $th.find('.indicator');
				if (!$indicator.length) {
					$indicator = $('<div class="indicator">');
					$th.append($indicator);
				}

				$indicator.empty();

				var colName = column.mData;
				var sorted = false;
				try {
					sorted = colName && settings.aaSorting[0][0] == index;
				} catch (err) {}
				var filtered = !!_.find(queryTree.members, function (member) {
					return member.field == colName || (member.members && member.members.length && member.members[0].field == colName);
				});

				if(column.sortable == false) {
						if (filtered) {
								$indicator.append('<i class="fa fa-filter"></i>');
						} else {
								$indicator.append('<i class="fa fa-ellipsis-v"></i>');
						}
						$indicator.toggleClass('filtered', filtered);
				}
				else {
						if (sorted) {
								if (settings.aaSorting[0][1] == 'asc') {
										$indicator.append('<i class="fa fa-long-arrow-up"></i>');
								}
								else if (settings.aaSorting[0][1] == 'desc') {
										$indicator.append('<i class="fa fa-long-arrow-down"></i>');
								}
						}
						$indicator.toggleClass('sorted', sorted);

						if (filtered) {
								$indicator.append('<i class="fa fa-filter"></i>');
						}
						$indicator.toggleClass('filtered', filtered);

						if (!sorted && !filtered) {
								$indicator.append('<i class="fa fa-ellipsis-v"></i>');
						}
				}
			});
		});

		if ($('#fixed-header th').length == 0) {
			$('#fixed-header > thead').replaceWith($(settings.nTHead).clone(true, true));
		}

		_.each(settings.aoColumns, function (column, index) {
			var $th = $('#fixed-header th.' + column.mData);

			// hook up the filters
			var filter = $th.data('filter');

			if (!filter) {
				if (column.treeFilter == 'number') {
					filter = NumericHeaderFilterView;
				}
				else if (column.treeFilter == 'string') {
					filter = StringHeaderFilterView;
				}
				else if (column.treeFilter == 'select') {
					filter = EnumHeaderFilterView;
				}
				else if (column.mData == 'last_funding_date' ||
								 column.mData == 'est_founding_date' ||
				 column.mData == 'created_at') {
					filter = EnumDateFilterView;
				}
				else if (column.treeFilter == 'date') {
					filter = DateHeaderFilterView;
				}
				else if (column.treeFilter == 'yesno' && column.classHide != 'hide') {
					filter = BooleanHeaderFilterView;
				}
				else if (column.treeFilter == 'unsortable_string') {
						filter = UnsortableStringHeaderFilterView;
				}

				if (filter) {
					filter = new filter({
						el: $th,
						column: column,
						columnIndex: index
					});
					$th.data('filter', filter);
				}
			}
			// needed to redelegate the click handlers because of the hack above
			// that disables sorting by clicking on the header
			else filter.delegateEvents();
		});
	},

	fnDrawCallback: function(oSettings) {
		if (getParameterByName('shownews') == '1') {
			$('#query').addClass('news_query_slugs');
		}
		else{
			$('#query').addClass('table_query_slugs');
		}

		// Figure out if we have a single investor or single custom list
		var investorQueryCount = 0;
		var investorFound = '';
		var customListCount = 0;
		var customListFound = '';

		$.each(queryTree.members, function(index, member) {
			if (member.field == 'investors' && member.operator == '=') {
				investorQueryCount++;
				investorFound = member.value;
			}
			//checks to see if there is only one custom list OR is in watch list/ hidden list
			if (member.field == 'user_tags' && member.operator == 'IN') {
				customListCount++;
				customListFound = member.value;
			}
			if (member.field == 'public_lists' && member.operator == 'LIKE') {
				customListCount++;
				customListFound = member.value;
			}
			if (member.field == 'interested' && member.operator == '=' && member.value == 1) {
				customListCount++;
				customListFound = 'Watch List';
			}
			if (member.field == 'interested' && member.operator == '=' && member.value == 0) {
				customListCount++;
				customListFound = 'Hidden List';
			}
		});

		if (investorQueryCount == 1) {
			$('#hideshowportfolio span').text('Hide Graphs'); //initializes the value of this link just in case the user goes from multiple investors to single again after already toggling
			buildInvestorHeader(investorFound);
		}
		else {
			$('#investor-portfolio').hide();
			$('h2#banner-message').removeClass('hidden').show();
			$('#hideshowportfolio').addClass('hidden').hide();
		}
		if (customListCount == 1) {
			$('.title-area h3').text(customListFound);
			if(queryTree.members.length > 1){
				$('#cl-filtered').removeClass('hidden');
			} else{
					$('#cl-filtered').addClass('hidden');
			}
		}
		else{
			$('.title-area h3').text("Discover Companies");
		}

		//disable export and save buttons unless search is saveable
		if (myDataTable.fnSettings()._iRecordsDisplay > 5000) {
			$('#btnExportmenu').addClass('disabled');
			$('#btnSaveReport').addClass('disabled btn-line-default').removeClass('btn-primary');
			$('#access-ss-dropdown').addClass('matchdisabled btn-line-default').removeClass('btn-primary');
		} else {
			$('#btnExportmenu').removeClass('disabled');
			$('#btnSaveReport').removeClass('disabled btn-line-default').addClass('btn-primary');
			$('#access-ss-dropdown').removeClass('matchdisabled btn-line-default').addClass('btn-primary');
		}

		applyColumnFilters();
		KillFilters.render();

		//move table down if the query slugs wrap and expand the heigh of the div they are in
		//$('#table-wrapper').css({top: $('#fixed-header-wrapper').position().top});



		lineUpColumns();
	},
	"fnInitComplete": function(oSettings, json) {
		// Hide columns we don't want
		defaultColumns.unshift('check_box');
		$.each(myColumns, function(index, value) {
			if ($.inArray(value.mData, defaultColumns) == -1) {
				$('#fixed-header th.' + value.mData).hide();
				myDataTable.fnSetColumnVis( index, false, false );
			}
		});

		$("[data-toggle=tooltip]").tooltip({'delay': { show: 700}});

		$('#btnGroupSave').removeClass('hidden'); // Always show the "Save" button, per sifter2396; slack chat: https://mattermark.slack.com/archives/D02H1376P/p1437083299000033
		$('#btnGroupExport').removeClass('hidden');

		// condition hiding and corresponding toggle button on "Watching" or custom list
		if (filtersFor('user_tags', 'IN').length) {
			// Fewer buttons when showing Custom List
			if (getParameterByName('sharing_key').length == 0) {
				$('#btnShare').removeClass('hidden').prop('title', 'Share access to this list with other Mattermark users');
			}
		}
		else {
			$(".filterBtns").removeClass('hidden');
		}

		$('table.dataTable thead tr:last-child').hide();

		// scroll the fixed header when the table scrolls
		$('.datatable-scroll').scroll(function (e) {
			$('#fixed-header-wrapper').scrollLeft($(this).scrollLeft());
		});

		lineUpColumns();
	}

	// CC TO DO move this into the agg table building object
		} ).columnFilter({
			sPlaceHolder: "head:after",
			aoColumns: {}
			});

$('body').on('click', '.kill-filter', function(event) {
	event.preventDefault();
	var queryTreeIndex;
	var $kill = $(this);
	//removes margin if there is one so that the redraw works and sets the margin appropriately.
	var killedFilter = $(this).parent().text();

	if (killedFilter.startsWith('techstack')) {
		var filter = killedFilter = $(this).parent().text().split('=');
		var type = filter[0].trim();
		var value = filter[1].slice(0, -1).trim();
		removeTechStackFilter(value);
	}

	if (queryTreeIndex = $(this).attr('data-query-tree-index')) {
		queryTree.members.splice(queryTreeIndex, 1);
	}
	else {
		// TODO handle not interested flip
	}

	$('.datatable-scroll').attr( "style", "" );
	myDataTable.fnDraw(false);
});

$('body').on('click', '#btnStage', function() {
	if (isAdvancedQueryRequiredFor('stage')) {
		$('#btnMoreFilter').trigger('click');
	}
	else {
		$('#stageModal').dropdown({keyboard: true});
	}
});

$('body').on('click', '#btnSearch', function() {
	$('#searchModal').modal({keyboard: true});
	$('#searchModal').modal('show');
	$('#keyword-text').val('');
});

function keywordFormHandler(event) {
	event.preventDefault(); // This prevents the cascade and default form handling

	var queries = $('#keyword-text').val().split(',');
	//send track event to segment
	sendTrackEvent("AppliedSemanticSearch",{
		value: queries
	});

	if (queries.length > 1) {
		var members = [];
		for (var i = 0; i < queries.length; i++) {
			members.push({field: 'keywords', operator: 'LIKE', value: queries[i].trim()});
		}
		updateFilter([{boolean: 'OR', members: members}]);
	} else {
		updateFilter([{field: 'keywords', operator: 'LIKE', value: $('#keyword-text').val().trim()}]);
	}
	$('#keyword-text').val('');
}

// This is for all "good" browsers
$('body').on('click', '#keywordBtn', keywordFormHandler);
// This is for IE11
$('#keywordBtn').parents('form').submit(keywordFormHandler);


$('body').on('click', '#btnIndustry', function() {
	if ( isAdvancedQueryRequiredFor('industries') || isAdvancedQueryRequiredFor('business_models') ) {
		$('#btnMoreFilter').trigger('click');
	}
	else {
		$('#industryDropdown').dropdown({keyboard: true});
	}
});

$('body').on('click', '#btnBusmodel', function() {
	if ( isAdvancedQueryRequiredFor('business_models') ) {
		$('#btnMoreFilter').trigger('click');
	}
	else {
		$('#bmDropdown').dropdown({keyboard: true});
	}
});
$('body').on('click', '#btnColumns', function() {
	$('#columnsModal .form-horizontal').empty();

	$.each(myDataTable.fnSettings().aoColumns, function(index, value) {
		if (value.sClass == 'hide' || value.sClass == 'check_box') { // prevent any header option with class hide or check_box from showing up in "Edit Columns"
			return;
		}
		$('#columnsModal .form-horizontal').append('<label class="checkbox"><input rel="' + index + '" type="checkbox" ' + (value.bVisible ? 'checked="checked" ' : '') + '/>' + value.sTitle + '</label>');
	});
	$('#columnsModal').modal({keyboard: true});
	$('#columnsModal').modal('show');
});

$('body').on('click', '#btnScore', function() {
	$('#customScore').modal({keyboard: true});
	$('#customScore').modal('show');
});

$('#customScore .slider').slider({min: 0, max: 10, range: 'min'});


$('#company-search input').attr('placeholder', 'Search by company name');
$('#exampleFilterbytag-flt-toggle').css({'max-height': '150px', 'scroll': 'auto'});

$('body').on('click', '.company-preview .overview .label', function() {
	var label = $(this).text();
	$('#industryOptions input').each(function() {
		if ($(this).val() == label) {
			$(this).prop('checked', true);
		}
	});

	$('#industryOptions input[value="' + label + '"]').trigger('change');
});

$('.datatable-scroll').on('mouseenter', '.company-list tr', function() {
	// TODO figure this out
	if (filtersFor('user_tags', 'IN').length == 0) {
		$('.watch,.unwatch,.not-interested', $(this)).addClass('hovered');
	}
});
$('.datatable-scroll').on('mouseleave', '.company-list tr', function() {
	$('.watch,.unwatch,.not-interested', $(this)).removeClass('hovered');
});

$('.datatable-scroll').on('mouseenter', '.company_area', function() {
	$(this).find('.company_actions').removeClass('hidden');
});
$('.datatable-scroll').on('mouseleave', '.company_area', function() {
	$(this).find('.company_actions').addClass('hidden');
});

var companyPreviewInterval;

$('.datatable-scroll').on('mouseenter', '.company-list tr .company_area a', function (e) {
	var companyId = $(this).closest('.company_area').data('company-id') * 1;

	var companyPreviewView = $('body').data('company-preview-view');
	if (companyPreviewView && $(companyPreviewView.el).is(':visible')) {
		if (companyPreviewView.model && companyPreviewView.model.id !== companyId) {
			companyPreviewView.remove();
		} else {
			return;
		}
	}

	var companySummary = new CompanySummary({id: companyId});
	var companyPreviewView = new CompanyPreviewView({
		model: companySummary
	});

	var $anchor = $(this);

	companyPreviewView.listenToOnce(companyPreviewView, 'replaced', function () {
		var watchButton = companyPreviewView.children['.tag.watch'];
		var passButton = companyPreviewView.children['.tag.pass'];
		watchButton.listenTo(watchButton.model, 'change:tag', function (model, value) {
			var id = model.get('company_id');
			if (value == '1') {
				watchOrPassDwapi(id, 0, 0);
			} else if (value == undefined) {
				watchOrPassDwapi(id, 0, 1);
			}
			if (isWatchList(queryTree) && value != '1') {
				$anchor.closest('tr').fadeOut();
				var companyPreviewView = $('body').data('company-preview-view');
				if (companyPreviewView) {
					companyPreviewView.remove();
				}
			}
		});
		passButton.listenTo(passButton.model, 'change:tag', function (model, value) {
			var id = model.get('company_id');
			if (value == "0") {
				watchOrPassDwapi(id, 1, 0);
			} else if (value == undefined) {
				watchOrPassDwapi(id, 1, 1);
			}
			if (isPassList(queryTree) && value != '0' ||
					(!isWatchList(queryTree) && !isPassList(queryTree) && value == '0')) {
				$anchor.closest('tr').fadeOut();
				var companyPreviewView = $('body').data('company-preview-view');
				if (companyPreviewView) {
					companyPreviewView.remove();
				}
			}
		});

		var previewHeight = companyPreviewView.$el.outerHeight(true);
		var previewLeft = $anchor.offset().left + 60;
		// if previewbottom goes out of bottom of screen, put the preview above the anchor
		if ($(window).height() < $anchor.offset().top + previewHeight) {
			var previewTop = $anchor.offset().top - previewHeight;
		}
		else {
			var previewTop = $anchor.offset().top + $anchor.outerHeight();
		}
		companyPreviewView.$el.css({top: previewTop, left: previewLeft});
	});

	clearInterval(companyPreviewInterval);
	companyPreviewInterval = setInterval(function() {
		if (!$('.company-preview').is(':hover') && !$anchor.is(':hover')) {
			clearInterval(companyPreviewInterval);
			var companyPreviewView = $('body').data('company-preview-view');
			if (companyPreviewView) {
				companyPreviewView.remove();
			}
			$('body').data('company-preview-view').remove();
		}
	}, 1000);

	$('body').data('company-preview-view', companyPreviewView).append(companyPreviewView.render().$el);
});

$('body').on('mouseleave', '.company-preview', function(e) {
	setTimeout(function() {
		var companyPreviewView = $('body').data('company-preview-view');
		var table = $('.company-list');
		var url = '/app/data/' + companyPreviewView.model.id;
		var $anchor = table.find('a[href="' + url + '"], a[href^="' + url + '/"]');

		if ($('.company-preview').is(':visible') && !$('.company-preview').is(':hover') && !$anchor.is(':hover')) {
			clearInterval(companyPreviewInterval);
			var companyPreviewView = $('body').data('company-preview-view');
			if (companyPreviewView) {
				companyPreviewView.remove();
			}
			$('body').data('company-preview-view').remove();
		}
	}.bind(this), 1000);
});

$('.datatable-scroll').on('click', '.not-interested', function() {
	var companyId = $(this).data('company-id') * 1;
	var $tr = $(this).closest('tr');

	function fadeOutRow(response) {
		$tr.fadeOut();
		var companyPreviewView = $('body').data('company-preview-view');
		if (companyPreviewView) {
			companyPreviewView.remove();
		}
	}

	if (isWatchList(queryTree)) {
		watchOrPassDwapi(companyId, 0, 1, fadeOutRow);
	} else if (isPassList(queryTree)) {
		watchOrPassDwapi(companyId, 1, 1, fadeOutRow);
	} else if (isSingleCustomList(queryTree)) {
		// var listName = _.where(queryTree.members, {field: 'user_tags', operator: 'IN'})[0].value;
		// customListDwapi(companyId, listName, 1, fadeOutRow);
		var userTags = new UserTags(null, {companyId: companyId});
		var typeCode = _.where(queryTree.members, {field: 'user_tags', operator: 'IN'})[0].value;
		var companySummary = new CompanySummary({id: companyId});
		companySummary.fetch({
			success: function companyFetched(companyModel) {
				var matchingUserTags = companyModel.userTags.where({type_code: typeCode});
				if (matchingUserTags.length === 1) {
					var tag = matchingUserTags[0];
					tag.destroy({
						success: function tagDestroyed() {
							$tr.fadeOut();
							var companyPreviewView = $('body').data('companypreviewview');
							if (companyPreviewView) {
								companyPreviewView.remove();
							}
						}
					});
				}
			}
		});
	} else { // this would be the normal /app/data? All Companies view
		watchOrPassDwapi(companyId, 1, 0, fadeOutRow);
	}

});
//start segment tracking code for top level filters
$('#industryOptions input').click(function(){
		if (this.checked) {
				sendTrackEvent("AppliedCompanyFilter",{filter:"Industry", value: $(this).val(), section:"Top Level"})
		}
});
$('#bmOptions input').click(function(){
		if (this.checked) {
				sendTrackEvent("AppliedCompanyFilter",{filter:"Business Model", value: $(this).val(), section:"Top Level"})
		}
});
$('#stageOptions input').click(function(){
		if (this.checked) {
				sendTrackEvent("AppliedCompanyFilter",{filter:"Stage", value: $(this).val(), section:"Top Level"})
		}
});

// end segment tracking code for top level filters

$('#bmOptions input').change(function() {
	var filters = new Array();

	$('#bmOptions input:checked').each(function() {
		filters.push({field: 'business_models', operator: 'LIKE', value: $(this).val()});
	});

	updateFilter(filters.length > 1 ? [{boolean: 'OR', members: filters}] : filters, 'business_models');
});


$('#industryOptions input').change(function() {
	var filters = new Array();

	$('#industryOptions input:checked').each(function() {
		filters.push({field: 'industries', operator: 'LIKE', value: $(this).val()});
	});

	updateFilter(filters.length > 1 ? [{boolean: 'OR', members: filters}] : filters, 'industries');
});

$('.employeeFilter input').change(function() {
	var filters = new Array();

	if ($('.employeeFilter .min-input input').val() != ''){
		var min = $('.employeeFilter .min-input input').val();
		filters.push({field: 'employees', operator: '>=', value: min});
		//send track event to segment
		sendTrackEvent("AppliedCompanyFilter",{filter:"Employee Count", value: min, value_category:"min", section:"Top Level"});
	}
	if ($('.employeeFilter .max-input input').val() != ''){
		var max = $('.employeeFilter .max-input input').val();
		filters.push({field: 'employees', operator: '<=', value: max});
		//send track event to segment
		sendTrackEvent("AppliedCompanyFilter",{filter:"Employee Count", value: max, value_category:"max", section:"Top Level"});
	}

	updateFilter(filters, 'employees');
});

$('.jobtitle-dropdown select').change(function() {
	var filters = new Array();
	var department = $('.personnelFilter .department-dropdown select').val();
	var seniority = $('.personnelFilter .seniority-dropdown select').val();
	var val = [];

	if (department != null && department != '') {
		val.push({field: 'department', operator: '=', value: department});
	} 

	if (seniority != null && seniority != '') {
		val.push({field: 'seniority', operator: '=', value: seniority});
	}

	// check to see if there are values present otherwise reset filters
	if (val.length > 0) {
		filters.push({field: 'jobtitle', operator: '=', value: val});
	}
	updateFilter(filters, 'jobtitle');
});

function applyColumnFilters() {
		$('#stageModal input').prop('checked', false);
		$.each(filtersFor('stage', '='), function(index, value) {
			$('#stageModal input').each(function() {
				if ($(this).val() == value) {
					$(this).prop('checked', true);
					return
				}
			});
		});

		$('#bmDropdown input').prop('checked', false);
		$.each(filtersFor('business_models', 'LIKE'), function(index, value) {
			$('#bmOptions input').each(function() {
				if ( $(this).val() == value ) {
					$(this).prop('checked', true);
					return
				}
			});
		});

		$('#industryDropdown input').prop('checked', false);
		$.each(filtersFor('industries', 'LIKE'), function(index, value) {
			$('#industryOptions input').each(function() {
				if ( $(this).val() == value ) {
					$(this).prop('checked', true);
					return
				}
			});
		});

		$('#employeesDropdown min-input input').val('');
		if (filtersFor('employees', '>=')){
			var minEmployees = filtersFor('employees', '>=')[0];
			$('#employeesDropdown .min-input input').val(minEmployees);
		}

		$('#employeesDropdown max-input input').val('');
		if (filtersFor('employees', '>=')){
			var maxEmployees = filtersFor('employees', '<=')[0];
			$('#employeesDropdown .max-input input').val(maxEmployees);
		}

		$('#personnelDropdown .department-dropdown select').val('');
		$('#personnelDropdown .seniority-dropdown select').val('');
		if (filtersFor('jobtitle', '=')) {
			var children = filtersFor('jobtitle', '=')[0];
			var department = null;
			var seniority = null;
			if (typeof children === 'object') {
				for(var i = 0; i < children.length; i++) {
					if (children[i].field == 'department') {
						department = children[i].value;
					} else if(children[i].field == 'seniority') {
						seniority = children[i].value;
					}
				}
			} else if (typeof children === 'string') {
				var raw = children.replace('[', '').replace(']', '').split(',');
				for (var i = 0; i < raw.length; i++) {
					if(raw[i].split('=')[0] == 'department') {
						department = raw[i].split('=')[1];
					} else if(raw[i].split('=')[0] == 'seniority') {
						seniority = raw[i].split('=')[1];
					}
				}
			}

			if (department != null) {
				$('#personnelDropdown .department-dropdown select').val(department);
			} else {
				$('#personnelDropdown .department-dropdown select').val('');
			}

			if (seniority != null) {
				$('#personnelDropdown .seniority-dropdown select').val(seniority);
			} else {
				$('#personnelDropdown .seniority-dropdown select').val('');
			}
		}
}

function doLocationFilter(locations) {
	var zipFilters = new Array();
	var cityFilters = new Array();
	var regionFilters = new Array();
	var stateFilters = new Array();
	var countryFilters = new Array();
	var continentFilters = new Array();

	$.each(locations, function(index, filter) {
		switch (filter.field) {
		case 'zip':
			zipFilters.push(filter);
			break;
		case 'region':
			regionFilters.push(filter);
			break;
		case 'city':
			cityFilters.push(filter);
			break;
		case 'state':
			stateFilters.push(filter);
			break;
		case 'country':
			countryFilters.push(filter);
			break;
		case 'continent':
			continentFilters.push(filter);
			break;
		}
	});

	updateFilter(zipFilters.length > 1 ? [{boolean: 'OR', members: zipFilters}] : zipFilters, 'zip');
	updateFilter(stateFilters.length > 1 ? [{boolean: 'OR', members: stateFilters}] : stateFilters, 'state');
	updateFilter(countryFilters.length > 1 ? [{boolean: 'OR', members: countryFilters}] : countryFilters, 'country');
	updateFilter(cityFilters.length > 1 ? [{boolean: 'OR', members: cityFilters}] : cityFilters, 'city');
	updateFilter(regionFilters.length > 1 ? [{boolean: 'OR', members: regionFilters}] : regionFilters, 'region');
	updateFilter(continentFilters.length > 1 ? [{boolean: 'OR', members: continentFilters}] : continentFilters, 'continent');
}

var locationList = new Array();
var locationAutocompleteList = new Array();
var continentList = new Array();

$.ajax({
	url: '/app/data/locations',
	success: function(data) {
		locationList = data;

		$.each(data, function(index, location) {

			locationAutocompleteList.push({
				value: location.display_name,
				label: location.display_name,
				type: location.type,
				abbreviation: location.abbreviation
			});
						if(location.type == 'continent') {
								continentList.push({
										value: location.display_name,
										label: location.display_name,
										type: location.type,
										abbreviation: location.abbreviation
								});
						}
		});

		$('#locationCustomFilterForm').submit(function(e){
			e.preventDefault();
		});

		$('#locationCustomFilter').autocomplete({
			focus: function( event, ui ) {
				$( "#locationCustomFilter" ).val(ui.item.label);

				return false;
			},
			source: locationAutocompleteList,
			select: function(event, ui) {
				$killElement = $('<div class="label label-search-slug"></div>').text(ui.item.label).attr('data-value', ui.item.label).attr('data-type', ui.item.type).append(' <a class="lockill" href="">&times;</a>');

				if (ui.item.abbreviation != undefined) {
					$killElement.attr('data-value', ui.item.abbreviation)
				}

				$killElement.appendTo('#locationKillArea');
				sendTrackEvent("AppliedCompanyFilter",{filter:"Location", value: ui.item.label, value_category: ui.item.type, section:"Top Level"});

				$('#locationCustomFilter').val('');

				var filteredLocations = new Array();

				$('#locationKillArea div').each(function() {
					filteredLocations.push({field: $(this).attr('data-type'), operator: '=', value: $(this).attr('data-value')});
				});

				doLocationFilter(filteredLocations);

				return false;
			}
		}).data( "ui-autocomplete" )._renderItem = function( ul, item ) {
			var type = '';
			switch (item.type) {
				case 'zip':
					type = 'Zip Code';
					break;
				case 'region':
					type = 'Metropolitan Region';
					break;
				case 'city':
					type = 'City';
					break;
				case 'state':
					type = 'State';
					break;
				case 'country':
					type = 'Country';
					break;
			}

			return $( "<li>" )
				.append( "<a class='autocomplete-type-label'>" + item.label + "<br />" + type + "</a>" )
				.appendTo( ul );
		};

		$('.ui-autocomplete').css({'z-index': 9999});
	}
});

$('body').on('click', '#btnLocation', function() {
	if ( isAdvancedQueryRequiredFor('location') || isAdvancedQueryRequiredFor('zip') || isAdvancedQueryRequiredFor('city') || isAdvancedQueryRequiredFor('region') || isAdvancedQueryRequiredFor('state') || isAdvancedQueryRequiredFor('country') ) {
		$('#btnMoreFilter').trigger('click');
	}
	else {
		$('#locationCustomFilter').val('');
		$('#locationKillArea').empty();

		var locationFilters = new Array();

		$.each(filtersFor('zip', '='), function(index, locationFilter) {
			locationFilters.push({label: locationFilter, type: 'zip'});
		});

		$.each(filtersFor('region', '='), function(index, locationFilter) {
			locationFilters.push({label: locationFilter, type: 'region'});
		});

		$.each(filtersFor('city', '='), function(index, locationFilter) {
			locationFilters.push({label: locationFilter, type: 'city'});
		});

		$.each(filtersFor('state', '='), function(index, locationFilter) {
			fullLocation = _.find(locationList, function(location) { return location.type == 'state' && location.abbreviation == locationFilter; });
			locationFilters.push({label: fullLocation.display_name, type: 'state', abbreviation: locationFilter});
		});

		$.each(filtersFor('country', '='), function(index, locationFilter) {
			fullLocation = _.find(locationList, function(location) { return location.type == 'country' && location.abbreviation == locationFilter; });
			locationFilters.push({label: fullLocation.display_name, type: 'country', abbreviation: locationFilter});
		});

		$.each(locationFilters, function(index, locationFilter) {
			$killElement = $('<div class="label label-search-slug"></div>').text(locationFilter.label).attr('data-type', locationFilter.type).attr('data-value', locationFilter.label).append(' <a class="lockill" href="">&times;</a>');

			if (locationFilter.abbreviation != undefined) {
				$killElement.attr('data-value', locationFilter.abbreviation);
			}

			$killElement.appendTo('#locationKillArea');
		});

		$('#locationDropdown').dropdown({keyboard: true});
	}
});

$('#locationKillArea').on('click', 'a.lockill', function(event) {
	event.preventDefault();

	$(this).parent().remove();

	// TODO consider moving next several lines into doLocationFilter, since it is duplicated
	var filteredLocations = new Array();

	$('#locationKillArea div').each(function() {
		filteredLocations.push({field: $(this).attr('data-type'), operator: '=', value: $(this).attr('data-value')});
	});

	doLocationFilter(filteredLocations);
});

$('#techStackKillArea').on('click', 'a.techkill', function(event) {
	event.preventDefault();

	$(this).parent().remove();

	filteredTechStack = new Array();

	$('#techStackKillArea div').each(function() {
		var text = $(this).text().slice(0, -1).trim();
		filteredTechStack.push({field: 'techstack', operator: '=', value: text});
	});

	updateFilter(filteredTechStack, 'techstack');
});

function doInvestorFilter(investors) {
	var filterMembers = [];

	$.each(investors, function(index, value) {
		filterMembers.push({field: 'investors', operator: '=', value: value});
	});

	if (filterMembers.length) {
		updateFilter(filterMembers);
	}
}

var investorsList = new Array();
var investorsAutocompleteList = new Array();

$.ajax({
	url: '/app/data/investors',
	success: function(data) {
		investorsList = data;

		$.each(data, function(index, investor) {
			var type = '';
			switch (investor.type) {
				case 'vc':
					type = 'Venture Capital';
					break;
				case 'angel':
					type = 'Angel';
					break;
				case 'accelerator':
					type = 'Accelerator';
					break;
				case 'pe':
					type = 'Private Equity';
					break;
			}

			investorsAutocompleteList.push({
				value: investor.mm_slug,
				label: investor.display_name,
				type: type
			});
		});

		$('#vcCustomFilter').autocomplete({
			focus: function( event, ui ) {
				$( "#vcCustomFilter" ).val(ui.item.label);

				return false;
			},
			source: investorsAutocompleteList,
			select: function(event, ui) {
				$('<div class="label label-search-slug"></div>').text(ui.item.label).attr('data-mm-slug', ui.item.value).append(' <a class="vckill" href="">&times;</a>').appendTo('#vcKillArea');
				$('#vcCustomFilter').val('');

				filteredInvestors = new Array();

				sendTrackEvent("AppliedCompanyFilter",{filter:"Investor", value: ui.item.label, value_category: ui.item.type, section:"Top Level"});

				$('#vcKillArea div').each(function() {
					filteredInvestors.push($(this).attr('data-mm-slug'));
				});

				doInvestorFilter(filteredInvestors);

				return false;
			}
		}).data( "ui-autocomplete" )._renderItem = function( ul, item ) {
			return $( "<li>" )
				.append( "<a class='autocomplete-type-label'>" + item.label + "<br />" + item.type + "</a>" )
				.appendTo( ul );
		};

		$('.ui-autocomplete').css({'z-index': 9999});
	}
});



// Author: alex@mattermark.com
//
// Purpose: To handle autocomplete function for tech stack

var filteredTechStack = new Array();

function techStackFilterExists(label) {
	for(var i = 0; i < filteredTechStack.length; i++) {
		if (filteredTechStack[i].value == label) {
			return true;
		}
	}
	return false;
}

function removeTechStackFilter(value) {
	for(var i = 0; i < filteredTechStack.length; i++) {
		if (filteredTechStack[i].value == value) {
			filteredTechStack.splice(i, 1);
		}
	}

	$('#techStackKillArea div').each(function() {
		var text = $(this).text().slice(0, -1).trim();
		if(text == value) {
			$(this).remove();
		}
	});
}

$('#techStackCustomFilterForm').submit(function(e) {
	e.preventDefault();
});

$('#techStackCustomFilter').autocomplete({
	//minLength: 3,
	focus: function(event, ui) {
		$( "#techStackCustomFilter" ).val(ui.item.label);
		return false;
	},
	source: function(request, response) {
		$.ajax({
			url: Mattermark.baseApiEndpoint + '/tech_autocomplete/' + request.term,
			headers: {'Authorization': 'Bearer ' + MattermarkLegacyComponents.apiAuthenticationToken.get()},
			success: function(data) {
				response(data);
			}
		});
	},
	select: function(event, ui) {
	  if (techStackFilterExists(ui.item.label)) {
		return false;
	  } else {
	    $killElement = $('<div class="label label-search-slug"></div>').text(ui.item.label).attr('data-type', ui.item.type).append(' <a class="techkill" href="">&times;</a>');
	    $killElement.appendTo('#techStackKillArea');
		filteredTechStack.push({field: "techstack", operator: '=', value: ui.item.label});
	    $('#techStackCustomFilter').val('');
		updateFilter(filteredTechStack, 'techstack');
	  }
	  return false;
	}
});


$('body').on('click', '#btnVC', function() {
	if (isAdvancedQueryRequiredFor('investors')) {
		$('#btnMoreFilter').trigger('click');
	}
	else {
		$('#vcCustomFilter').val('');
		$('#vcKillArea').empty();

		$.each(filtersFor('investors', '='), function(index, investorSlug) {
			$('<div class="label label-search-slug"></div>').text(_.find(investorsList, function(investor){ return investorSlug == investor.mm_slug; }).display_name).attr('data-mm-slug', investorSlug).append(' <a class="vckill" href="">&times;</a>').appendTo('#vcKillArea');
		});

		$('#vcDropdown').dropdown({keyboard: true});
	}
});

$('#vcKillArea').on('click', 'a.vckill', function(event) {
	event.preventDefault();

	$(this).parent().remove();

	// TODO consider moving next 3 lines into doInvestorFilter, since it is duplicated
	filteredInvestors = new Array();

	$('#vcKillArea div').each(function() {
		filteredInvestors.push($(this).attr('data-mm-slug'));
	});

	if (filteredInvestors.length) {
		doInvestorFilter(filteredInvestors);
	}
	else {
		updateFilter([{field: 'investors', operator: '=', value: ''}])
	}
});


$('#columnsModal').on('change', 'input', function(e) {
	if (e.target.id != 'saveColumnsDefault') {
		var index = $(this).attr('rel') * 1;
		var checked = $(this).is(":checked");
		if (checked) {
			$('#fixed-header th.' + myColumns[index].mData).show();
		}
		else {
			$('#fixed-header th.' + myColumns[index].mData).hide();
		}
		myDataTable.fnSetColumnVis(index, checked, false );
		lineUpColumns();
	}
});

$('#columnsModal').on('click', '.btn-primary', function() {
	// Track add/edit columns filters applied click
		sendTrackEvent('ColumnsChangedFilterApplied');

	if ($('#saveColumnsDefault').is(':checked')) {
		var default_columns = '';

		$('#columnsModal .form-horizontal input:checked').each(function() {
			if (default_columns.length > 1) {
				default_columns += ',';
			}

			default_columns += myColumns[$(this).attr('rel')].mData;
		});

		$.ajax({
			type: 'POST',
			url: '/app/account/default_columns',
			data: {
				csrf: $('#mm_csrf').val(),
				default_columns: default_columns
			},
			success: function(data) {
			}
		});
	}
});

$('.datatable-scroll').on('mouseenter', '.company-list tr .funding_area', function(e) {
	 $('.funding', $(this)).addClass('hovered');
	 var $that = $(this);

	 $.ajax({
		 type: 'GET',
		 url: '/app/company/funding?company_id=' + $('.funding', $(this)).attr('rel'),
		 success: function(data) {
			 $('.funding', $that).empty().append(data.html);
		 }
		 });
});

$('.datatable-scroll').on('mouseleave', '.company-list tr .funding_area', function() {
	 $('.funding', $(this)).removeClass('hovered');
});

$(document).ready(function() {

	ZeroClipboard.config({
		moviePath: '/app/assets/js/ZeroClipboard.swf'
	});

	// clear popovers when clicking outside them
	$('body').click(function (e) {
		var $origin = $(e.target);
		if ($origin.closest('.indicator').length || $origin.closest('.popover').length || $origin.closest('.ui-datepicker-header').length) {
			return;
		}

		$('#fixed-header th .indicator.active').popover('hide');
	});

	$(window).resize(_.debounce(function () {
		lineUpColumns();
	}));

	$('.datatable-scroll').scroll(function () {
		if ($('.company-preview').length && $('.company-preview').data('company-preview-view')) {
			$('.company-preview').data('company-preview-view').remove();
		}
	});

	$("body").on("click",".industry-filter",function(e) {
		e.preventDefault();

		updateFilter([{field: 'industries', operator: 'LIKE', value: $(this).text()}]);
	});

	//apply filters from stage filter immediately
	$('#stageModal input').change(function (e) {
		$('#totalfunding input:checked').each(function() {
			var stage = $.trim($(this).parent().text());
			if (stage.indexOf("Seed") == 0) {
				updateFilter([{field: 'total_funding', operator: '>=', value: 1}, {field: 'total_funding', operator: '<=', value: 1500000}]);
			} else if (stage.indexOf("Early") == 0) {
				updateFilter([{field: 'total_funding', operator: '>=', value: 750000}, {field: 'total_funding', operator: '<=', value: 4500000}]);
			} else if (stage.indexOf("Growth") == 0) {
				updateFilter([{field: 'total_funding', operator: '>=', value: 4000000}, {field: 'total_funding', operator: '<=', value: 20000000}]);
			} else if (stage.indexOf("Late") == 0) {
				updateFilter([{field: 'total_funding', operator: '>=', value: 20000000}]);
			}
		});

		var stageFilters = new Array();
		$('#stageOptions input:checked').each(function() {
			stageFilters.push({field: 'stage', operator: '=', value: $(this).val()});
		});

		updateFilter(stageFilters.length > 1 ? [{boolean: 'OR', members: stageFilters}] : stageFilters, 'stage');
	});

	if (getParameterByName('shownews') == '1') {
		// jquery to show news
		$('.filterDiv').hide();
		$('#table-wrapper').hide();
		$('#news-wrapper').empty();
		$('#news-section').removeClass('hidden').show();
		$('#news-view-header #query').remove();
		$('#query').clone().appendTo('#news-view-header');
		$('#query').removeClass('table_query_slugs');
		$('#query').addClass('news_query_slugs');
		getStories(0);
	} else {
		$('#news-section').hide();
		// $('#btnSaveReport').hide();
		// $('#btnExport').hide();
	}
});


myDataTable.on('page', function (event, dataTable) {
	// a cheap defer is required to give data tables time to render all of it's cells
	setTimeout(function() {
		BulkActions.init(dataTable);
	}, 600);
});

myDataTable.on('draw', function (event, dataTable) {
	BulkActions.init(dataTable);

	// If we're on watch / hide / custom list
	if (
		_.where(queryTree.members, {field: "interested", operator: "=", value: "1"}).length ||
		_.where(queryTree.members, {field: "interested", operator: "=", value: "0"}).length ||
		_.where(queryTree.members, {field: "user_tags"}).length
	) {
		$('.not-interested').each(function(i, btn) {
			btn.innerText = "Remove"
		})
	}
});

//So dropdown filter menus do not close automatically
$('.dropdown-menu.noclose li').click(function(event){
	 event.stopPropagation();
})



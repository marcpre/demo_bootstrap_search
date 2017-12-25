/* File: https://d3fyej7rnbpf4o.cloudfront.net/app/assets/js/app.js
   Compiled at: 2017-12-23 19:09:41 
================================ */
var mattermarkApp = {};

mattermarkApp.charts = {};

mattermarkApp.view = {};

mattermarkApp.utils = {};

mattermarkApp.salesforce = {};

mattermarkApp.compare = {
  companies: []
};



/* File: https://d3fyej7rnbpf4o.cloudfront.net/app/assets/js/utils/detect_ie.js
   Compiled at: 2017-12-23 19:09:41 
================================ */
mattermarkApp.utils.ie_version = (function(){
    var undef,
    v = 3,
    div = document.createElement('div'),
    all = div.getElementsByTagName('i');

    while (
        div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i>< ![endif]-->',
        all[0]
        );

    return v > 4 ? v : undef;

}());


/* File: https://d3fyej7rnbpf4o.cloudfront.net/app/assets/js/charts/lineChart.js
   Compiled at: 2017-12-23 19:09:41 
================================ */
var line_colors = ["#377eb8", "#e41a1c", "#4daf4a", "#984ea3", "#ff7f00"];

mattermarkApp.charts.lineChart = function(id, data, options) {
    if (!(mattermarkApp.utils.ie_version && mattermarkApp.utils.ie_version < 9)) {
	drawD3Chart(id, data, options);
    }
    else {
	drawGoogleChart(id, data);
    }

};

function drawD3Chart(id, data, options) {
    nv.addGraph(function() {
	var chart = nv.models.lineChart();

	chart.margin({right: 80, left: 80});

	chart.xAxis.tickFormat(function(d) {
	    return d3.time.format('%b %Y')(new Date(d));
	});

	chart.yAxis.tickFormat(d3.format(",f"));

	chart.color(line_colors);

	chart.tooltipContent(function(key, x, y, e, graph) {
	    var date = d3.time.format('%b %d %Y')(new Date(e.point.x));

	    var tooltipHtml = '<div class="popover chart-tooltip"><h3 class="popover-title"><strong>' + date + '</strong></h3>' +
	    '<div class="popover-content"><p>' +	 key + ' : <strong>' + y + '</strong></p>';

	if (e.point.tooltip) {
	    tooltipHtml += '<p>' + e.point.tooltip + '</p>';
	}
	if (e.point.growth) {
	    tooltipHtml += '<p>Growth: <strong>' + e.point.growth + '%</strong></p>';
	}
	tooltipHtml += '</div></div>';

	return tooltipHtml;
	});

	options.apply(chart);

	d3.rebind('useVoronoi');
	chart.useVoronoi(false);

	$('#' + id + ' .loading').hide();
	$('#' + id + ' .content').removeClass('hide hidden').show();

	d3.select('#'+id+' div.content svg')
	    .datum(data)
	    .transition().duration(200)
	    .call(chart)
	    ;
	nv.utils.windowResize(chart.update);

	return chart;
    });
}

function drawGoogleChart(id, data) {
    var table = google.visualization.arrayToDataTable(d3ToGoogleTransform(data));
    var options = {
	'colors' : line_colors
    };

    if (id != 'mattermark') {
	options['legend'] =  { 'position' : 'none' }
    }

    var chart = new google.visualization.LineChart(document.getElementById(id));
    chart.draw(table, options);
}

function d3ToGoogleTransform(data) {
    var headers = _.pluck(data, 'key');
    headers.unshift('Date');

    var totalHash = _.object(_.pluck(data[0].values, 'x'), _.map(_.pluck(data[0].values, 'y'), function(score) {
	var key = data[0].key;
	var result = {};
	result[key] = score;
	return result;
    }));

    _.each(_.rest(data), function (series) {
	_.each(series.values, function(record) {
	    if(!_.has(totalHash, record.x)) {
		totalHash[record.x] = {};
	    }
	    totalHash[record.x][series.key] = record.y;
	})
    });

    totalData = _.map(totalHash, function(scores, date) {
	result = [new Date(date)];
	_.each(_.rest(headers), function(key) {
	    result.push(scores[key]);
	});
	return result;
    });

    totalData = _.sortBy(totalData, function(obj){ return obj[0] });

    totalData.unshift(headers);

    return totalData;
}

function transpose(a) {
    return Object.keys(a[0]).map(
	    function (c) { return a.map(function (r) { return r[c]; }); }
	    );
}


/* File: https://d3fyej7rnbpf4o.cloudfront.net/app/assets/js/charts/rankChart.js
   Compiled at: 2017-12-23 19:09:41 
================================ */
mattermarkApp.charts.rankChart = function(id, data, options) {
  data[0]['values'] = data[0]['values'].map(function(v) {
    v['y'] = -v['y']; return v;
  });
  
	nv.addGraph(function() {
		var chart = nv.models.lineChart();
    
		chart.margin({right: 80, left: 80});
		
		chart.xAxis.tickFormat(function(d) {
			return d3.time.format('%b %Y')(new Date(d));
		});

		chart.yAxis.tickFormat(function(d) {
      return d3.format(",f")(-d);
    });

		chart.color(["#377eb8", "#e41a1c", "#4daf4a", "#984ea3", "#ff7f00"]);
		
		chart.tooltipContent(function(key, x, y, e, graph) {
			var date = d3.time.format('%b %d %Y')(new Date(e.point.x));
			
			var tooltipHtml = '<div class="popover chart-tooltip"><h3 class="popover-title"><strong>' + date + '</strong></h3>' + 
						'<div class="popover-content"><p>' +	 key + ' : <strong>' + y + '</strong></p>';
			
			if (e.point.tooltip) {
				tooltipHtml += '<p>' + e.point.tooltip + '</p>';
			}
			if (e.point.growth) {
				tooltipHtml += '<p>Growth: <strong>' + e.point.growth + '%</strong></p>';
			}
			tooltipHtml += '</div></div>';
			
			return tooltipHtml;
		});
		
    options.apply(chart);

		d3.rebind('useVoronoi');
		chart.useVoronoi(false);
    
		$('#' + id + ' .loading').hide();
		$('#' + id + ' .content').removeClass('hide hidden').show();

		d3.select('#'+id+' div.content svg')
			.datum(data)
			.transition().duration(200)
			.call(chart)
		;
		nv.utils.windowResize(chart.update);
		
		return chart;
	});
};


/* File: https://d3fyej7rnbpf4o.cloudfront.net/app/assets/js/charts/pieChart.js
   Compiled at: 2017-12-23 19:09:41 
================================ */
var chart_colors = ['#fcd300','#a3cd39', "#377eb8", "#e41a1c", "#4daf4a", "#984ea3", "#ff7f00"];

mattermarkApp.charts.pieChart = function(id, data, options) {
    if (mattermarkApp.utils.ie_version && mattermarkApp.utils.ie_version < 9) {
	drawGooglePieChart(id, data);
    }
    else {
	drawD3PieChart(id, data, options);
    }
}

function drawD3PieChart(id, data, options) { 
    nv.addGraph(function() {
	var chart = nv.models.pieChart()
	.x(function(d) { return d.label })
	.y(function(d) { return d.value })
	.valueFormat(d3.format(",d"))
	.labelType('percent')
	.showLabels(true);

	chart.color(chart_colors);

    	$('#' + id + ' .loading').hide();
    	$('#' + id + ' .content').removeClass('hide hidden').show();

    	d3.select('#' + id + ' div.content svg')
    	    .datum(data)
    	    .transition().duration(350)
    	    .call(chart);

    	nv.utils.windowResize(chart.update);

    	return chart;
    });
}

function drawGooglePieChart(id, data) {
    var data = google.visualization.arrayToDataTable(d3ToGooglePieTransform(data));
    var options = {
	'colors' : chart_colors
    };

    var chart = new google.visualization.PieChart(document.getElementById(id));
    chart.draw(data, options);
}

function d3ToGooglePieTransform(data) {
    var new_data = [['Type', 'Metric']];

    for (var i = 0; i < data.length; i++) {
	var row = [];
	row.push(data[i]['label']);
	row.push(data[i]['value']);
	new_data.push(row);
    }
    
    return new_data;
}



/* File: https://d3fyej7rnbpf4o.cloudfront.net/app/assets/js/components/models.js
   Compiled at: 2017-12-23 19:09:41 
================================ */
var CustomList = Backbone.Model.extend({

  urlRoot: '/app/api/v0/internal/user_tags',

  defaults: {
    tag: '1'
  },

  validate: function (attributes, options) {
    if (attributes.company_id != null) {
      return 'CustomList must not have a company_id';
    }

    if (attributes.tag !== "1") {
      return 'CustomList\'s tag value must be "1"';
    }
  },

  isShared: function () {
    return !!this.get('sharing_key');
  },

  permission: function () {
    return this.get('access') ? "readwrite" : "read";
  },

  // TODO: remove everything below when custom lists have been move to its own
  // table so every list has its own ID
  initialize: function (attributes, options) {
    options = options || {};
    this._isNew = options.isNew || true;
  },

  sync: function (method, model, options) {
    options = options || {};
    if (method == 'create') {
      var self = this;
      var success = options.success;
      options.success = function () {
        self._isNew = false;
        if (success) success.apply(arguments);
      };
    }
    return Backbone.Model.prototype.sync.call(this, method, model, options);
  },

  isNew: function () {
    return this._isNew;
  }

});


var Tag = Backbone.Model.extend({
  urlRoot: '/app/api/v0/internal/user_tags'
});


var CareTag = Tag.extend({
  defaults: _.extend({type_code: 'care'}, Tag.prototype.defaults),
  sync: function () {
    return false;
  },
  validate: function (attributes, options) {
    if (attributes.tag && _.indexOf(["1", "0"], attributes.tag) == -1) {
      return 'Care Tag value must be "0" for pass or "1" for watch';
    }
  }

});


var NotesTag = Tag.extend({
  defaults: _.extend({type_code: 'notes'}, Tag.prototype.defaults)
});


var CustomListTag = Tag.extend({

  defaults: {
    tag: '1'
  },

  isShared: function () {
    return !!this.get('sharing_key');
  },

  permission: function () {
    return this.get('access') ? "readwrite" : "read";
  },

  validate: function (attributes, options) {
    if (attributes.tag !== "1") {
      return 'CustomListTag\'s tag value must be "1"';
    }
  }

});


var CompanySummary = Backbone.Model.extend({

  urlRoot: '/app/api/v0/internal/companies',

  initialize: function (attributes, options) {
    this._makeUserTags();
    this.listenTo(this, 'change:user_tags', this._makeUserTags);
  },

  _makeUserTags: function () {
    this.userTags =  new UserTags(this.get('user_tags') || [], {
      companyId: this.id,
      parse: true
    });
  }

});


/* File: https://d3fyej7rnbpf4o.cloudfront.net/app/assets/js/components/collections.js
   Compiled at: 2017-12-23 19:09:41 
================================ */
var CustomLists = Backbone.Collection.extend({

  url: '/app/api/v0/internal/user_tags?kind=custom-lists',

  model: CustomList,

  // TODO: remove everything below when custom lists have been move to its own
  // table so every list has its own ID
  parse: function (resp, options) {
    return _.map(resp, function (obj) {
      return new CustomList(obj, {isNew: options.isNew});
    });
  },

  fetch: function (options) {
    options = options || {};
    options.isNew = false;
    return Backbone.Collection.prototype.fetch.call(this, options);
  }

});


var UserTags = Backbone.Collection.extend({

  url: '/app/api/v0/internal/user_tags',

  initialize: function (models, options) {
    this.companyId = options.companyId;
    // add, reset need to make sure the tag has a company id
    this.listenTo(this, 'add reset', this._ensureCompanyIds);
  },

  _ensureCompanyIds: function (model, collection, options) {
    var self = this;
    if (options == null) {
      options = collection;
      collection = model;
      collection.each(function (model) {
        model.set({'company_id': self.companyId}, {silent: true});
      });
    }
    else {
      model.set({'company_id': self.companyId}, {silent: true});
    }
  },

  getNotesTag: function () {
    return this.find(function (tag) {
      return tag instanceof NotesTag;
    });
  },

  getCustomListTag: function (typeCode) {
	    return this.find(function (tag) {
	      return tag.attributes.type_code == typeCode
	    });
	  },

  getCustomListTags: function () {
    return this.filter(function (tag) {
      return tag instanceof CustomListTag;
    });
  },

  getCareTag: function () {
    return this.find(function (tag) {
      return tag instanceof CareTag;
    });
  },

  parse: function (response, options) {
    return _.map(_.filter(response, function (tag) {
      return tag.type_code != 'seen';
    }), function (tag) {
      tag = _.extend({company_id: this.companyId}, tag);
      if (tag.type_code == 'care') return new CareTag(tag);
      else if (tag.type_code == 'notes') return new NotesTag(tag);
      else return new CustomListTag(tag);
    }, this);
  }

});


/* File: https://d3fyej7rnbpf4o.cloudfront.net/app/assets/js/components/views/buttons.js
   Compiled at: 2017-12-23 19:09:41 
================================ */
var Button = Backbone.View.extend({
  tagName: 'button',
  className: 'btn',
  events: {
    'click': 'onClick'
  }
});


// models:
// - CareTag
var WatchButton = Button.extend({

  className: Button.prototype.className + ' tag watch',

  initialize: function (options) {
    this.listenTo(this.model, 'change:tag', this.toggleState);
  },

  toggleState: function (model, value) {
    if (value == "1") {
      this.$el.addClass('btn-info');
    }
    else {
      this.$el.removeClass('btn-info');
    }
  },

  onClick: function () {
    var self = this;
    var model = this.model;
    if (model.get('tag') == "1") {
      model.set({id: undefined, tag: undefined});
    }
    else {
      model.set({tag: "1"});
    }
  },

  render: function () {
    this.$el.text('Watch');
    if (this.model.get('tag') == "1") {
      this.$el.addClass('btn-info');
    }
    return this;
  }

});


// models:
// - CareTag
var PassButton = Button.extend({

  className: Button.prototype.className + ' tag pass',

  initialize: function (options) {
    this.listenTo(this.model, 'change:tag', this.toggleState);
  },

  toggleState: function (model, value) {
    if (value == "0") {
      this.$el.addClass('btn-danger');
    }
    else {
      this.$el.removeClass('btn-danger');
    }
  },

  onClick: function () {
    var self = this;
    var model = this.model;
    if (model.get('tag') == "0") {
      model.set({id: undefined, tag: undefined});
    }
    else {
      model.set({tag: "0"});
    }
  },

  render: function () {
    this.$el.text('Hide');
    if (this.model.get('tag') == "0") {
      this.$el.addClass('btn-danger');
    }
    return this;
  }

});


/* File: https://d3fyej7rnbpf4o.cloudfront.net/app/assets/js/components/views/lists.js
   Compiled at: 2017-12-23 19:09:41 
================================ */
// collections:
// - A UserTags with only CustomListTags
// subviews:
// - CustomListMembershipView
var CustomListMembershipsView = Backbone.View.extend({

  className: 'user-tags-area',

  initialize: function (options) {
    this.children = [];
    if (options.companyId != null) {
      this.listenTo(this.collection, 'reset', this.refreshItems);
      this.listenTo(this.collection, 'add', this.addItem);
    }
  },

  addItem: function (customListTag) {
    var customListMembershipView = new CustomListMembershipView({
      model: customListTag
    });
    this.children.push(customListMembershipView);
    this.$el.append(customListMembershipView.render().$el);
  },

  remove: function () {
    _.each(this.children, function (child) {
      child.remove();
    });
    return Backbone.View.prototype.remove.apply(this, arguments);
  },

  refreshItems: function (customListMemberships) {
    var self = this;
    _.each(this.children, function (child) {
      child.remove();
    });
    customListMemberships.each(function (customListMembership) {
      self.addItem(customListMembership);
    });
  },

  render: function () {
    this.refreshItems(this.collection);
    return this;
  }

});

// models:
// - CustomListTag
var CustomListMembershipView = Backbone.View.extend({

  tagName: 'p',

  className: 'label',

  events: {
    'click .destroy': 'remove'
  },

  template: '#custom-list-membership-template',

  initialize: function () {
    this.template = _.template(Backbone.$(this.template).html());
  },

  render: function () {
    var model = this.model;

    this.$el.html(this.template({model: model}));

    if (model.isShared()) {
      switch (model.permission()) {
        case "read": {
          this.$el.addClass('label-readonly');
          break;
        }
        case "readwrite": {
          this.$el.addClass('label-default');
          break;
        }
      }
    }
    else {
      this.$el.addClass('label-default');
    }

    return this;
  },

  remove: function (e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    var sharing_key = this.model.get('sharing_key');
    if (sharing_key) {
      // This appears to be the only way to pass request parameters to a DELETE call using Backbone.
      // Unfortunately it will not result in a JSON body, but in one string with URL-like parameters.
      this.model.destroy({ data: { sharing_key: sharing_key }, processData: true });
    }
    else {
      this.model.destroy();
    }

    this.$el.remove();
    return this;
  }

});

// collections:
// - CustomLists
// - A UserTags with only CustomListTags
// subviews:
// - CustomListOptionView
var CustomListPickerView = Backbone.View.extend({

  className: 'dropdown custom-list-picker pull-left',

  template: '#custom-list-picker-template',

  events: {
    // Required to prevent dismisal of Bootstrap dropdown
    'click input': function (e) { e.stopPropagation(); },
    'click .add-to-new-custom-list': 'addToNewCustomList',
    'submit form': function (e) { e.preventDefault(); e.stopPropagation(); }
  },

  initialize: function (options) {
    this.template = _.template(Backbone.$(this.template).html());
    this.children = {};
    this.companyId = options.companyId;
    this.customListMemberships = options.customListMemberships;
    this.listenTo(this.collection, 'reset', this.refreshItems);
    this.listenTo(this.collection, 'add', this.addItem);
  },

  inputBox: function () {
    return this.$el.find('input[type="text"]');
  },

  addToNewCustomList: function (e) {
    e.preventDefault();
    e.stopPropagation();

    var customListName = _.str.trim(this.inputBox().val());

    if (customListName.length < 1 ||
        customListName.length > 50 ||
        this.customListMemberships.some(function (customListMembership) {
          return _.str.trim(customListMembership.get('type_code')) == customListName;
        }) ||
        customListName == 'care' ||
        customListName == 'seen' ||
        customListName == 'notes') {
      this.$el.find('.form-group').addClass('has-error');
      this.inputBox().focus();
      return;
    }

    this.$el.find('.form-group').removeClass('has-error');

    this.collection.create(new CustomList({
      type_code: customListName,
      company_id: this.companyId
    }), {
      error: function (model, resp, options) {
        console.error(resp.responseText);
      }
    });

    this.customListMemberships.create(new CustomListTag({
      company_id: this.companyId,
      type_code: customListName
    }));

    this.inputBox().val('').focus();
  },

  addItem: function (customList) {
    if ((customList.isShared() && customList.permission() == 'readwrite') ||
        !customList.isShared()) {
      var customListOptionView = new CustomListOptionView({
        companyId: this.companyId,
        model: customList,
        customListMemberships: this.customListMemberships
      });
      this.$el.find('ul > li:last-child').before(customListOptionView.render().$el);
      this.children[customList.get('type_code')] = customListOptionView;
    }
  },

  remove: function () {
    _.each(this.children, function (child) {
      child.remove();
    });
    return Backbone.View.prototype.remove.apply(this, arguments);
  },

  refreshItems: function (customLists) {
    var self = this;
    _.each(this.children, function (child) {
      child.remove();
    });
    customLists.each(function (customList) {
      self.addItem(customList);
    });
  },

  render: function () {
    this.$el.html(this.template());
    return this;
  }

});

// models:
// - CustomList
var CustomListOptionView = Backbone.View.extend({

  tagName: 'li',

  template: '#custom-list-option-template',

  events: {
    'click a': 'addToCustomList'
  },

  initialize: function (options) {
    this.template = _.template(Backbone.$(this.template).html());
    this.companyId = options.companyId;
    this.customListMemberships = options.customListMemberships;
  },

  addToCustomList: function (e) {
    e.preventDefault();
    var self = this;
    var added = this.customListMemberships.some(function (customListMembership) {
      return customListMembership.get('company_id') == self.companyId &&
          customListMembership.get('type_code') == self.model.get('type_code');
    });
    if (!added) {
      var attributes = {
        company_id: this.companyId,
        type_code: this.model.get('type_code')
      };

      if (this.model.get('sharing_key')) {
        attributes.sharing_key = this.model.get('sharing_key');
        attributes.access = this.model.get('access');
      }

      this.customListMemberships.create(new CustomListTag(attributes));
    }
  },

  render: function () {
    this.$el.html(this.template({model: this.model}));
    return this;
  }

});


/* File: https://d3fyej7rnbpf4o.cloudfront.net/app/assets/js/components/views/dialogs.js
   Compiled at: 2017-12-23 19:09:41 
================================ */
// models:
// - CompanySummary
var CompanyPreviewView = Backbone.View.extend({

  template: '#company-preview-template',

  className: 'company-preview',

  initialize: function () {
    this.children = {
      '.tag.watch': WatchButton,
      '.tag.pass': PassButton,
      '.user-tags-area': CustomListMembershipsView,
      '.custom-list-picker': CustomListPickerView
    };
    this.template = _.template($(this.template).html());
  },

  normalizeIndustries: function (model) {
    var industries = (model.get('industries') || '').split(",");
    return _.filter(industries, function (industry) {
      return _.str.trim(industry).length > 0;
    });
  },

  remove: function () {
    return Backbone.View.prototype.remove.apply(this, arguments);
  },

  // Hack to remove the row from the index page when removing a custom list tag
  // from a company while being in a company listing filtered by that custom
  // list
  removeRowMayBe: function (model, collection, options) {
    if (!_.isUndefined(queryTree) &&
        _.find(queryTree.members, function (member) {
          return member.field == 'user_tags' && member.operator == 'IN' && member.value == model.get('type_code');
        })) {

      var self = this;
      self.$el.closest('tr').fadeOut({done: function () {
        self.remove();
      }});
    }
  },

  render: function () {
    var self = this;
    var $el = self.$el;
    $el.append(Backbone.$('<img src="' + '/app/assets/img/throbber.gif' +'" width="32" height="32">').css('max-width', 'none'));

    this.model.fetch({
      success: function (model, resp, options) {
        $el.html(self.template({
          model: model,
          industries: self.normalizeIndustries(model)
        }));

        var customLists = new CustomLists();
        var careTag = model.userTags.getCareTag() || new CareTag({
          company_id: model.id
        });
        var customListMemberships = new UserTags(model.userTags.getCustomListTags(), {
          companyId: model.id
        });

        self.listenTo(customListMemberships, 'remove', self.removeRowMayBe);

        _.each(self.children, function (viewClass, childSelector) {
          var $child = self.$(childSelector);

          var viewOptions = {companyId: model.id};
          if (viewClass.prototype instanceof Button) {
            viewOptions.model = careTag;
          }
          else if (viewClass == CustomListMembershipsView) {
            viewOptions.collection = customListMemberships;
          }
          else if (viewClass == CustomListPickerView) {
            viewOptions.customListMemberships = customListMemberships;
            viewOptions.collection = customLists;
          }

          var view = new viewClass(viewOptions);
          $child.replaceWith(view.render().$el);
          self.children[childSelector] = view;
        });

        self.trigger('replaced');

        customLists.fetch({parse: true, reset: true});
      },
      error: function (model, resp, options) {
        // TODO: proper error handling
        console.error(resp.responseText);
      }
    });

    return this;
  }

});


// models:
// - CompanySummary
var CompanyNotesView = Backbone.View.extend({

  className: 'box col-lg-12 col-md-12 col-sm-12 col-xs-12 pull-right last-box',

  template: '#notes-box-template',

  events: {
    'click .btn.save': 'saveNote'
  },

  initialize: function (options) {
    this.companyName = options.companyName;
  },

  textarea: function () {
    return this.$el.find('textarea');
  },

  saveButton: function () {
    return this.$el.find('.btn.save');
  },

  saveNote: function (e) {
    e.preventDefault();

    var self = this;

    self.saveButton().addClass('disabled');

    var notes = _.str.trim(self.textarea().val());

    function success () {
      var buttonText = self.saveButton().text();
      self.saveButton().text('Saved');
      setTimeout(function () {
        self.saveButton().removeClass('disabled').text(buttonText);
      }, 3000);
    }

    function error (model, resp) {
      // TODO: proper error handling
      console.error(resp.responseText);
    }

    var model = self.model;
    if (model && model.get('tag') && !notes) {
      model.destroy({
        success: success,
        error: error
      });
    }
    else if (notes) {
      model.set('tag', notes).save(null, {
        success: success,
        error: error
      });
    }
  },

  render: function () {
    this.$el.html(_.template(Backbone.$(this.template).html())({
      model: this.model,
      companyName: this.companyName
    }));
    return this;
  }

});



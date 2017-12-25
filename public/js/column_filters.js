/* File: https://d3fyej7rnbpf4o.cloudfront.net/app/assets/js/column-filters.js
   Compiled at: 2017-12-23 19:03:59 
================================ */
// template dependency: views/partials/header_filters.php

var BaseHeaderFilterView = Backbone.View.extend({

  template: function(column) {
      if(column.sortable == false) {
          return '#unsortable-filter-view-template';
      } else {
          return '#filter-view-template';
      }
  },

  filterTemplate: null,

  events: {
    'click .indicator': 'togglePopover'
  },

  formEvents: {
    'click .ascending,.descending': 'toggleSorting',
    'keydown form': 'onKeydown',
  },

  popoverEvents: {
    'show.bs.popover': 'onShow',
    'hidden.bs.popover': 'onHidden'
  },

  initialize: function (options) {
    this.column = _.clone(options.column);
    this.columnIndex = options.columnIndex;

    var $baseTemplate = Backbone.$(_.template(Backbone.$(this.template(this.column)).html(), {
      title: this.column.sTitle
    }));
    $baseTemplate.find('.filter-form-container').replaceWith(Backbone.$(this.filterTemplate).html());
    this.setupPopover($baseTemplate);
    this.setupTooltip();
  },

  setupTooltip: function () {
    this.$el.tooltip({
      placement: 'bottom',
      delay: {
        show: 700
      },
      container: 'body'
    });
  },

  setupPopover: function ($template) {
    this.indicator().popover({
      container: 'body',
      animation: false,
      trigger: 'manual',
      html: true,
      placement: 'bottom',
      content: $template.html(),
      template: '<div class="popover" role="tooltip"><div class="arrow"></div><div class="popover-content"></div></div>'
    });
    this.delegatePopoverEvents(this.indicator(), this.popoverEvents);
  },

  // delegate events to any element out of the hierarchy, backbone style, in
  // this case, the popover, which is attached to the body.
  delegatePopoverEvents: function ($el, events) {
    $el.off('.delegateEvents' + this.cid);
    var splitRegex = /^(\S+)\s*(.*)$/;
    _.each(events, function (value, key) {
      var method = _.bind(_.isFunction(value) ? value : this[value], this);
      var match = key.match(splitRegex);
      var eventName = match[1], selector = match[2];
      eventName += '.delegateEvents' + this.cid;
      if (selector === '') {
        $el.on(eventName, method);
      } else {
        $el.on(eventName, selector, method);
      }
    }, this);
  },

  indicator: function () {
    return this.$('.indicator');
  },

  popoverTip: function () {
    return this.indicator().data('bs.popover').$tip;
  },

  togglePopover: function (e) {
    this.indicator().popover('toggle');
  },

  toggleSorting: function (e) {
    var direction = Backbone.$(e.target).hasClass('ascending') ? 'asc' : 'desc';
    myDataTable.fnSort([[this.columnIndex, direction]]);
  },

  onKeydown: function (e) {
    // close on esc
    if (e.keyCode == 27) {
      e.preventDefault();
      e.stopPropagation();
      this.indicator().popover('hide');
    }
    // search on enter
    else if (e.keyCode == 13) {
      e.preventDefault();
      this.search();
    }
  },

  onShow: function (e) {
    this.$el.siblings().find('.indicator').popover('hide');
    this.$el.tooltip('destroy');
  },

  onShown: function (e) {
    this.indicator().addClass('active');
    if (!this.$el.is(this.$el.closest('tr').find('th').eq(0)[0])) {
      var popoverOffsetLeft = this.popoverTip().offset().left;
      var popoverOffsetRight = this.popoverTip().offset().left + this.popoverTip().outerWidth();
      var newPopoverOffsetLeft = popoverOffsetLeft - (popoverOffsetRight - (this.$el.offset().left + this.$el.outerWidth()));
      this.popoverTip().css({
        width: this.popoverTip().innerWidth(),
        left: newPopoverOffsetLeft
      });
      this.popoverTip().find('.arrow').css({
        left: this.indicator().offset().left + (this.indicator().outerWidth() / 2) - newPopoverOffsetLeft
      });
    }
    this.delegatePopoverEvents(this.popoverTip(), this.formEvents);
  },

  onHidden: function (e) {
    this.indicator().removeClass('active');
    this.setupTooltip();
  }
});

var NumericHeaderFilterView = BaseHeaderFilterView.extend({

  filterTemplate: '#numeric-filter-view-template',

  formEvents: _.extend({}, BaseHeaderFilterView.prototype.formEvents, {
    'input input[type=text]': 'validate',
    'change input[type=text]': 'search',
  }),

  popoverEvents: _.extend({}, BaseHeaderFilterView.prototype.popoverEvents, {
    'shown.bs.popover': 'onShown',
  }),

  minBox: function () {
    return this.popoverTip().find('input[name=min]');
  },

  maxBox: function () {
    return this.popoverTip().find('input[name=max]');
  },

  isMinValid: function () {
    var $min = this.minBox();
    var min = _.str.trim($min.val()).replace('%', '');
    return !min || !isNaN(min * 1);
  },

  isMaxValid: function () {
    var $max = this.maxBox();
    var max = _.str.trim($max.val()).replace('%', '');
    return !max || !isNaN(max * 1);
  },

  validate: function () {
    var $min = this.minBox();
    var $max = this.maxBox();
    var $minFormGroup = $min.closest('.form-group');
    var $maxFormGroup = $max.closest('.form-group');

    if (!this.isMinValid()) $minFormGroup.addClass('has-error');
    else $minFormGroup.removeClass('has-error');

    if (!this.isMaxValid()) $maxFormGroup.addClass('has-error');
    else $maxFormGroup.removeClass('has-error');
  },

  search: function () {
    if (!this.isMinValid() || !this.isMaxValid()) {
      return
    }

    var $min = this.minBox();
    var $max = this.maxBox();
    var members = [];
    var min = _.str.trim($min.val()).replace('%', '');
    var max = _.str.trim($max.val()).replace('%', '');

    if (min && max) {
      members.push({
        field: this.column.mData,
        operator: '>=',
        value: min * 1
      });
      members.push({
        field: this.column.mData,
        operator: '<=',
        value: max * 1
      });
    }
    else if (min) {
      members.push({
        field: this.column.mData,
        operator: '>=',
        value: min * 1
      });
    }
    else if (max) {
      members.push({
        field: this.column.mData,
        operator: '<=',
        value: max * 1
      });
    }

    if (max || min) {
      updateFilter(members);
    }
    else {
      var self = this;
      var members = _.reject(queryTree.members, function (member) {
        return member.field == self.column.mData;
      });
      queryTree.members = members;
      myDataTable.fnDraw(false);
    }
  },

  onShown: function (e) {
    // prefill the boxes depending on the query tree
    var minQuery = _.findWhere(queryTree.members, {field: this.column.mData, operator: '>='});
    var maxQuery = _.findWhere(queryTree.members, {field: this.column.mData, operator: '<='});
    if (minQuery) this.minBox().val(minQuery.value);
    if (maxQuery) this.maxBox().val(maxQuery.value);

    BaseHeaderFilterView.prototype.onShown.apply(this, arguments);
  }
});


var StringHeaderFilterView = BaseHeaderFilterView.extend({

  filterTemplate: '#string-filter-view-template',

  formEvents: _.extend({}, BaseHeaderFilterView.prototype.formEvents, {
    'keyup input[type=text]': 'search',
  }),

  popoverEvents: _.extend({}, BaseHeaderFilterView.prototype.popoverEvents, {
    'shown.bs.popover': 'onShown',
  }),

  stringBox: function () {
    return this.popoverTip().find('input[name=string]');
  },

  search: _.debounce(function () {
    var str = _.str.trim(this.stringBox().val());
    if (str) {
      var members = [{
        field: this.column.mData,
        operator: this.column.defaultOperator || '=',
        value: str
      }];

      updateFilter(members);
    }
    else {
      var self = this;
      var members = _.reject(queryTree.members, function (member) {
        return member.field == self.column.mData && member.operator == (self.column.defaultOperator || '=');
      });
      queryTree.members = members;
      myDataTable.fnDraw(false);
    }
  }, 250),

  onShown: function (e) {
    var query = _.findWhere(queryTree.members, {field: this.column.mData, operator: this.column.defaultOperator || '='});
    if (query) this.stringBox().val(query.value);
    BaseHeaderFilterView.prototype.onShown.apply(this, arguments);
  }
});

var UnsortableStringHeaderFilterView = StringHeaderFilterView.extend({
    filterTemplate: '#unsortable-string-filter-view-template'
});

var DateHeaderFilterView = BaseHeaderFilterView.extend({

  filterTemplate: '#date-filter-view-template',

  datepickerOptions: {
    changeMonth: true,
    changeYear: true,
    dateFormat: 'mm/dd/yy'
  },

  formEvents: _.extend({}, BaseHeaderFilterView.prototype.formEvents, {
    'change input[type=text]': 'search',
  }),

  popoverEvents: _.extend({}, BaseHeaderFilterView.prototype.popoverEvents, {
    'shown.bs.popover': 'onShown'
  }),

  startBox: function () {
    return this.popoverTip().find('input[name=start-date]');
  },

  endBox: function () {
    return this.popoverTip().find('input[name=end-date]');
  },

  isStartValid: function () {
    var $start = this.startBox();
    var start = _.str.trim($start.val());
    return !start || moment(start, ["MM/DD/YY", "MM/DD/YYYY"]).isValid();
  },

  isEndValid: function () {
    var $end = this.endBox();
    var end = _.str.trim($end.val());
    return !end || moment(end, ["MM/DD/YY", "MM/DD/YYYY"]).isValid();
  },

  validate: function () {
    var $start = this.startBox();
    var $end = this.endBox();
    var $startFormGroup = $start.closest('.form-group');
    var $endFormGroup = $end.closest('.form-group');

    if (!this.isStartValid()) $startFormGroup.addClass('has-error');
    else $startFormGroup.removeClass('has-error');

    if (!this.isEndValid()) $endFormGroup.addClass('has-error');
    else $endFormGroup.removeClass('has-error');
  },

  search: function (e) {
    if (!this.isStartValid() || !this.isEndValid()) {
      return
    }

    var $start = this.startBox();
    var $end = this.endBox();
    var members = [];
    var start = _.str.trim($start.val());
    var end = _.str.trim($end.val());

    if (start && end) {
      members.push({
        field: this.column.mData,
        operator: '>=',
        value: moment(start, ["MM/DD/YY", "MM/DD/YYYY"]).format('MM/DD/YYYY')
      });
      members.push({
        field: this.column.mData,
        operator: '<=',
        value: moment(end, ["MM/DD/YY", "MM/DD/YYYY"]).format('MM/DD/YYYY')
      });
    }
    else if (start) {
      members.push({
        field: this.column.mData,
        operator: '>=',
        value: moment(start, ["MM/DD/YY", "MM/DD/YYYY"]).format('MM/DD/YYYY')
      });
    }
    else if (end) {
      members.push({
        field: this.column.mData,
        operator: '<=',
        value: moment(end, ["MM/DD/YY", "MM/DD/YYYY"]).format('MM/DD/YYYY')
      });
    }

    if (start || end) {
      updateFilter(members);
    }
    else {
      var self = this;
      var members = _.reject(queryTree.members, function (member) {
        return member.field == self.column.mData;
      });
      queryTree.members = members;
      myDataTable.fnDraw(false);
    }
  },

  onShown: function (e) {
    this.startBox().datepicker(this.datepickerOptions);
    this.endBox().datepicker(this.datepickerOptions);
    var startQuery = _.findWhere(queryTree.members, {field: this.column.mData, operator: '>='});
    if (startQuery) this.startBox().val(startQuery.value);
    var endQuery = _.findWhere(queryTree.members, {field: this.column.mData, operator: '<='});
    if (endQuery) this.endBox().val(endQuery.value);
    BaseHeaderFilterView.prototype.onShown.apply(this, arguments);
  }
});

var EnumDateFilterView = DateHeaderFilterView.extend({

  filterTemplate: '#enum-date-filter-view-template',

  formEvents: _.extend({}, DateHeaderFilterView.prototype.formEvents, {
    'change input[type=radio]': 'search'
  }),

  initialize: function (options) {
    this.column = _.clone(options.column);
    this.columnIndex = options.columnIndex;

    var $baseTemplate = Backbone.$(_.template(Backbone.$(this.template(this.column)).html(), {
      title: this.column.sTitle
    }));
    $baseTemplate.find('.filter-form-container').replaceWith(_.template(Backbone.$(this.filterTemplate).html(), {
      column: this.column
    }));
    this.setupPopover($baseTemplate);
    this.setupTooltip();
  },

  _clearQuerySubtree: function (isDate) {
    queryTree.members = _.reject(queryTree.members, function (member) {
      var isValDate = moment(member.value, 'MM/DD/YYYY').isValid();
      return member.field == this.column.mData && (isDate ? isValDate : !isValDate);
    }, this);
  },

  search: function (e) {
    if (e.target.type == 'radio') {
      this.$('input[type=text]').val(null);
      this._clearQuerySubtree(true);
      updateFilter([{
        field: this.column.mData,
        operator: '=',
        value: e.target.value
      }]);
    }
    else if (e.target.type == 'text') {
      this.$('input[type=radio]').prop('checked', false);
      this._clearQuerySubtree(false);
      DateHeaderFilterView.prototype.search.apply(this, arguments);
    }
  }
  
});

var EnumHeaderFilterView = BaseHeaderFilterView.extend({
  filterTemplate: '#enum-filter-view-template',

  formEvents: _.extend({}, BaseHeaderFilterView.prototype.formEvents, {
    'change input[type=checkbox]': 'search',
  }),

  popoverEvents: _.extend({}, BaseHeaderFilterView.prototype.popoverEvents, {
    'shown.bs.popover': 'onShown',
  }),

  initialize: function (options) {
    this.column = _.clone(options.column);
    this.columnIndex = options.columnIndex;

    var $baseTemplate = Backbone.$(_.template(Backbone.$(this.template(this.column)).html(), {
      title: this.column.sTitle
    }));
    $baseTemplate.find('.filter-form-container').replaceWith(_.template(Backbone.$(this.filterTemplate).html(), {
      column: this.column
    }));
    this.setupPopover($baseTemplate);
    this.setupTooltip();
  },

  _findQuerySubtree: function () {
    var self = this;
    return _.find(queryTree.members, function (member) {
      return member.boolean == 'OR' && member.members.length && member.members[0].field == self.column.mData;
    });
  },

  search: function (e) {
    var $checkbox = Backbone.$(e.target);
    var column = this.column;
    var subtree = this._findQuerySubtree();

    if ($checkbox.prop('checked')) {
      var newMember = {field: this.column.mData, operator: '=', value: $checkbox.val()};
      if (subtree) {
        if (!_.findWhere(subtree.members, newMember)) {
          subtree.members.push(newMember);
        }
        myDataTable.fnDraw(false);
      }
      else updateFilter([{boolean: 'OR', members: [newMember]}]);
    }
    else {
      var val = $checkbox.val();
      if (subtree) {
        subtree.members = _.reject(subtree.members, function (member) {
          return member.field == column.mData && member.operator == '=' && member.value == val;
        });

        if (subtree.members.length == 0) {
          queryTree.members = _.reject(queryTree.members, function (member) {
            return _.isEqual(member, subtree);
          });
        }
        myDataTable.fnDraw(false);
      }
    }
  },

  onShown: function (e) {
    var subtree = this._findQuerySubtree();
    if (subtree) {
      _.each(subtree.members, function (member) {
        this.popoverTip().find('input[type=checkbox][name=' + _.str.underscored(member.value) + ']').prop('checked', true);
      });
    }
    BaseHeaderFilterView.prototype.onShown.apply(this, arguments);
  }

});

var BooleanHeaderFilterView = EnumHeaderFilterView.extend({

  filterTemplate: '#boolean-filter-view-template',

  formEvents: _.extend({}, BaseHeaderFilterView.prototype.formEvents, {
    'change input[type=radio]': 'search',
  }),

  popoverEvents: _.extend({}, BaseHeaderFilterView.prototype.popoverEvents, {
    'shown.bs.popover': 'onShown',
  }),

  _findQuerySubtree: function () {
    var self = this;
    return _.find(queryTree.members, function (member) {
      return member.field == self.column.mData && member.operator == '=';
    });
  },

  search: function (e) {
    var $radio = Backbone.$(e.target);
    var column = this.column;
    var subtree = this._findQuerySubtree();
    updateFilter([{field: this.column.mData, operator: '=', value: $radio.val() * 1}]);
  },

  onShown: function (e) {
    var subtree = this._findQuerySubtree();
    if (subtree) {
      this.popoverTip().find('input[type=radio][value=' + subtree.value + ']').prop('checked', true);
    }
    BaseHeaderFilterView.prototype.onShown.apply(this, arguments);
  }

});



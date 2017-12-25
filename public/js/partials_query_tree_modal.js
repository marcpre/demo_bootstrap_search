/* File: https://d3fyej7rnbpf4o.cloudfront.net/app/assets/js/partials/query_tree_modal.js
   Compiled at: 2017-12-23 19:09:41 
================================ */
var autocompleteDefaults = {
    appendTo: '#queryTreeModal .modal-content'
};

function filtersFor(column, operator) {
    if (isAdvancedQueryRequiredFor(column)) {
        return [];
    }

    var filters = [];

    $.each(queryTree.members, function(index, member) {
        if (member.boolean != undefined) {
            $.each(member.members, function(index, member) {
                if (member.field == column && member.operator == operator) {
                    filters.push(member.value);
                }
            });
        }
        else {
            if (member.field == column && member.operator == operator) {
                filters.push(member.value);
            }
        }
    });

    return filters;
}

function isAdvancedQueryRequiredFor(column) {
    var isAdvanced = false;

    $.each(queryTree.members, function(index, member) {
        if (member.boolean == 'OR') {
            var firstColumn = member.members[0].field;

            $.each(member.members, function(index, member) {
                if (member.field != firstColumn) {
                    if (column == undefined) {
                        isAdvanced = true;
                    }
                    else if (firstColumn == column || member.field == column) {
                        isAdvanced = true;
                    }
                }
            });
        }
    });

    return isAdvanced;
}

// This method, will for a given column and jQuery element reference disable all possible selections
// for the operators drop down, except for those explicitly defined for the column.
function disableOperatorsForColumn(column, operatorSelect)
{
    $('option.' + column.treeFilter, operatorSelect).each(function() {
        if ( $.inArray($(this).val(), column.treeFilterOperators) == -1) {
            $(this).hide();
        }
    });
}

function addParens($this) {
    // Modify the current row and prep to move into parenthetical statement
    $original = $this.closest('.query');
    $original.find('.operator-indicator').remove();
    $original.find('select.column').attr('style', 'margin-left: 14px;');

    $row = $('<div class="queryRow"></div>');
    $('#operatorTemplate').clone().removeAttr('id').appendTo($row).removeClass('hide');
    $row.find('select.column').removeAttr('style');

    $row.find('.parens select').val('Any');

    $templateInstance = $('#queryTemplate').clone().removeAttr('id').removeClass('hide').appendTo($row);
    $templateInstance.find('select.column').removeAttr('style');
    $('<span class="operator-indicator">or</span>').insertBefore($('select.column', $templateInstance));

    $row.insertAfter($this.parent());
    $row.find('select.column').mmcombobox(autocompleteDefaults);

    $original.insertAfter($row.find('.parens'));

    // Default the column to match existing
    $templateInstance.find('select.column').val($('select.column', $original).val()).mmcombobox(autocompleteDefaults).trigger('change');
}

function addSibling($this) {
    $templateInstance = $('#queryTemplate').clone().removeAttr('id').insertAfter($this.parent()).removeClass('hide');
    $templateInstance.find('select.column').removeAttr('style').mmcombobox(autocompleteDefaults);

    $('.column', $templateInstance).trigger('change');

    $parenSelect = $this.closest('.queryRow').children('.parens').children().children().children('select');

    if ($parenSelect.length && $parenSelect.val() == 'Any') {
        $('<span class="operator-indicator">or</span>').insertBefore($('select.column', $templateInstance));
        // TODO default the column to match existing
    }
    else {
        $('<span class="operator-indicator">and</span>').insertBefore($('select.column', $templateInstance));
    }

}

function addOuter($this) {
    $templateInstance = $('#queryTemplate').clone().removeAttr('id').insertAfter($this.parent().parent()).removeClass('hide');
    $templateInstance.find('select.column').removeAttr('style').mmcombobox(autocompleteDefaults);
    $('<span class="operator-indicator">and</span>').insertBefore($('select.column', $templateInstance));
}

function lookupAutocompleteValue(autocompleteSourceArray, value) {
    match = _.find(autocompleteSourceArray, function(item) {
        return item.value == value;
    });
    if (match && match != undefined) {
        return match.label;
    }
    return '';
}

function isColumnFilterable(coumnName, columnAttrs) {
    return columnAttrs.filterable !== false;
}

function isColumnClassHidden(columnName, columnAttrs) {
    return !(typeof columnAttrs.classHide == typeof undefined || columnAttrs.classHide.length == 0);
}

$(document).on('click', '#btnMoreFilter', function() {
    $('#queryTreeModal').modal({keyboard: true});
    $('#queryTreeModal').modal('show');
});

$('#queryTreeModal').on('hide.bs.modal', function() {
    // TODO rip this out
    queryTree = {
        boolean: 'AND',
        members: []
    };

    var jobTitleQuery = [];

    if ($('#queryArea .query').length) {

        $('#queryArea>.query').each(function() {
          if ($(this).find('.value').val() && $(this).find('.value').val().length) {
            var field = $(this).find('select.column').val();
            var op = $(this).find('select.operator').val();
            op = op == 'preset' ? '=' : op;
            if (field == 'department' || field == 'seniority') {
                jobTitleQuery.push({
                    field: $(this).find('select.column').val(),
                    operator: op,
                    value: $(this).find('.value').val()
                });
            } else {
                queryTree.members.push({
                    field: $(this).find('select.column').val(),
                    operator: op,
                    value: $(this).find('.value').val()
                });
            }
          }
        });

        $('#queryArea .queryRow').each(function() {
            var members = Array();

            $('.query', $(this)).each(function() {
              if ($(this).find('.value').val() && $(this).find('.value').val().length) {
                var op = $(this).find('select.operator').val();
                op = op == 'preset' ? '=' : op;
                members.push({
                  field: $(this).find('select.column').val(),
                  operator: op,
                  value: $(this).find('.value').val()
                });
              }
            });

            if (members.length) {
                queryTree.members.push({
                    boolean: 'OR',
                    members: members
                });
            }
        });

        if (jobTitleQuery.length) {
          queryTree.members.push({
            field: 'jobtitle',
            operator: '=',
            value: jobTitleQuery
          });
        }
    }

    // Cause a requery through AJAX, which uses this dialog's filter
    myDataTable.fnDraw(false);
});


$('#queryTreeModal').on('show.bs.modal', function() {
    // TODO do the opposite of the unwind
    $columns = $('#queryTemplate select.column').empty();
    $('#queryArea').empty();

    // Initialize select dropdown templates
    $.each(myColumns, function(index, value) {
        if (isColumnFilterable(index, value) && !isColumnClassHidden(index, value)) {
            $('<option value="' + value.mData + '">' + value.sTitle + '</option>').appendTo($columns);
        }
        else if ($.inArray(value.mData, ['public_lists', 'user_tags', 'interested', 'alert_hash', 'industries', 'business_models', 'keywords']) != -1) {
            $('<option value="' + value.mData + '">' + value.sTitle + '</option>').appendTo($columns);
        }
    });

    // Manifest existing query
    $.each(queryTree.members, function(index, member) {
        if (member.boolean != undefined) {
            $row = $('<div class="queryRow"></div>');
            $('#operatorTemplate').clone().removeAttr('id').appendTo($row).removeClass('hide');
            $row.find('select.column').removeAttr('style');

            $row.find('.parens select').val('Any');

            $templateInstance = $('#queryTemplate').clone().removeAttr('id').appendTo($row).removeClass('hide');
            $templateInstance.find('select.column').removeAttr('style').mmcombobox(autocompleteDefaults);

            $('<span class="operator-indicator">or</span>').insertBefore($('select.column', $templateInstance));
            $('.query', $row).remove(); // we don't need the initial query in this case, since we'll create in each loop below

            $row.appendTo('#queryArea'); // must append it live here so that :last will work in the each below

            $.each(member.members, function(index, member) {
                $newRow = $('#queryTemplate').clone().removeAttr('id').appendTo($row).removeClass('hide');
                $newRow.find('select.column').mmcombobox(autocompleteDefaults);

                if (index > 0) {
                    $('<span class="operator-indicator">or</span>').insertBefore($('select.column', $newRow));
                    $('select.column', $newRow).removeAttr('style');
                }

                $('#queryArea .column:last').val(member.field).trigger('change', [member]);
                if (member.field == 'last_funding_date' && !moment(member.value, 'MM/DD/YYYY').isValid()) {
                  $('#queryArea .operator:last option[value=preset]').prop('selected', true).attr('selected', 'selected');
                }
                else {
                  $('#queryArea .operator:last option.' + getColumn(member.field).treeFilter + '[value="' + member.operator + '"]').prop('selected', true).attr('selected', 'selected');
                }
                $('#queryArea .value:last').val(member.value);

                if (member.field == 'investors') {
                    var autocompleteValue = lookupAutocompleteValue(investorsAutocompleteList, member.value);
                    $('#queryArea .ui-autocomplete-input:last').val(autocompleteValue);
                } else if (member.field == 'techstack') {
                    $('#queryArea .ui-autocomplete-input:last').val(member.value);
                }
            });
        }
        else {
            $newRow = $('#queryTemplate').clone().removeAttr('id').appendTo('#queryArea').removeClass('hide');
            $newRow.find('select.column').mmcombobox(autocompleteDefaults);

            if (index > 0) {
                $('<span class="operator-indicator">and</span>').insertBefore($('select.column', $newRow));
                $('select.column', $newRow).removeAttr('style');
            }

            $('#queryArea .column:last').val(member.field).trigger('change', [member]);
            if (member.field == 'last_funding_date' && !moment(member.value, 'MM/DD/YYYY').isValid()) {
              $('#queryArea .operator:last option[value=preset]').prop('selected', true).attr('selected', 'selected');
            }
            else {
              $('#queryArea .operator:last option.' + getColumn(member.field).treeFilter + '[value="' + member.operator + '"]').prop('selected', true).attr('selected', 'selected');
            }
            $('#queryArea .value:last').val(member.value);

            if (member.field == 'investors') {
                var autocompleteValue = lookupAutocompleteValue(investorsAutocompleteList, member.value);
                $('#queryArea .ui-autocomplete-input:last').val(autocompleteValue);
            }

            if (member.field == 'techstack') {
                $('#queryArea .ui-autocomplete-input:last').val(member.value);
            }

            if (member.field == 'jobtitle') {
              //WHERE WE SET THE JOB TITLE VALUE
              if (typeof(member.value) === 'string') {
                var members = member.value.replace('[', '').replace(']', '').split(',');
                for (var i = 0; i < members.length; i++) {
                  var mem = members[i].split('=');
                  if (i > 0) {
                    $newRow = $('#queryTemplate').clone().removeAttr('id').appendTo('#queryArea').removeClass('hide');
                    $newRow.find('select.column').mmcombobox(autocompleteDefaults);
                    $('<span class="operator-indicator">and</span>').insertBefore($('select.column', $newRow));
                    $('select.column', $newRow).removeAttr('style');
                  }
                  $('#queryArea .column:last').val(getColumn(mem[0]).mData).trigger('change', [{'field': mem[0], 'operator': '=', 'value':  mem[1]}]);
                  $('#queryArea .value:last').val(mem[1]);
                }
              } else if (typeof(member.value) === 'object') {
                var members = member.value;
                for (var i = 0; i < members.length; i++) {
                  if (i > 0) {
                    $newRow = $('#queryTemplate').clone().removeAttr('id').appendTo('#queryArea').removeClass('hide');
                    $newRow.find('select.column').mmcombobox(autocompleteDefaults);
                    $('<span class="operator-indicator">and</span>').insertBefore($('select.column', $newRow));
                    $('select.column', $newRow).removeAttr('style');
                  }
                  $('#queryArea .column:last').val(members[i].field).trigger('change', [members[i]]);
                  $('#queryArea .value:last').val(members[i].value);
                }
              }
            }
        }
    });

    // If nothing shown yet, add a blank row...
    if ($('#queryArea .query').length == 0) {
        $newRow = $('#queryTemplate').clone().removeAttr('id').appendTo('#queryArea').removeClass('hide');
        $newRow.find('select.column').mmcombobox(autocompleteDefaults);

        // Update the value selection elements based on the type of column we are allowing
        // the user to filter by.  (By default the #queryTemplate is just a plain text input field).
        $('#queryArea').find('.query').each(function() {
            var $queryElement = $(this);
            var columnValue = $(this).find('.column').val();
            var theColumn = getColumn(columnValue);
            renderValueSelectionElement(theColumn, columnValue, $queryElement);
        });
    }

    // Don't show remove button for first row if it is the only row, however if there are additional rows the first row should include a remove button
    if($('#queryArea div.query').length <= 1) {
        $('#queryArea .subtract-query-row:first').hide();
    }

    // Always show last row's add
    $('button', $('#queryTreeModal #queryArea .query').last()).removeClass('hide');
});

$('#queryTreeModal').on('click', '.add-or', function() {
    $parenSelect = $(this).closest('.queryRow').children('.parens').children().children().children('select');

    if ($parenSelect.length && $parenSelect.val() == 'Any') {
        addSibling($(this));
    }
    else {
        addParens($(this));
    }
    showFirstRowRemoveButton();
});

$('#queryTreeModal').on('click', '.add-and', function() {
    $parenSelect = $(this).closest('.queryRow').children('.parens').children().children().children('select');

    if ($parenSelect.length && $parenSelect.val() == 'Any') {
        addOuter($(this));
    }
    else {
        addSibling($(this));
    }
    showFirstRowRemoveButton();
});

$('#queryTreeModal').on('click', '.subtract-query-row', function() {
    $parentRow = $(this).closest('.queryRow');

    if ($parentRow.length && $parentRow.find('.query').length == 1) {
        $parentRow.remove();
    }
    else {
        $(this).parent().remove();
    }
    // Don't show remove button for first row if it is the only row, however if there are additional rows the first row should include a remove button
    if($('#queryArea div.query').length <= 1) {
        $('#queryArea .subtract-query-row:first').hide();
    }
});

function showFirstRowRemoveButton()
{
    if($('#queryArea div.query').length > 1) {
        $('#queryArea .subtract-query-row:first').show();
    }
}

function makeId()
{
    var len = 40;
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < len; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return 'id-' +text;
}

$('#queryTreeModal').on('change', 'select.column', function(e, queryMember) {
    var $queryElement = $(this).closest('.query');
    var columnValue = $(this).val();
    var theColumn = getColumn(columnValue);
    renderValueSelectionElement(theColumn, columnValue, $queryElement, queryMember);
});

$('#queryTreeModal').on('click', '.btn-apply-advanced-filters', function() {
    // Track advanced search filters applied click
    sendTrackEvent('AdvancedSearchFilterApplied');
});

function renderDatePicker($queryElement) {
  $datePicker = $('<input type="text" class="value value-container form-control" />');
  $queryElement.find('.value-container').replaceWith($datePicker);
  $datePicker.datepicker({
    changeMonth: true,
    changeYear: true,
    dateFormat: 'mm/dd/yy'
  });
}

function renderSelect($queryElement, options) {
  var $newControl = $('<select class="value value-container form-control"></select>');
  $.each(options, function(index, value) {
    $('<option></option>').attr('value', value).text(value).appendTo($newControl);
  });
  $queryElement.find('.value-container').replaceWith($newControl);
}

function renderValueSelectionElement(theColumn, columnValue, $queryElement, queryMember) {
    var $valueContainer = $queryElement.children('.value-container');
    var $operator = $queryElement.children('select.operator');
    $operator.html($('#queryTemplate select.operator').html());
    $('option', $operator).each(function() {
        if ( ! $(this).hasClass(theColumn.treeFilter) ) {
            $(this).remove();
        }
    });

    if (theColumn.defaultOperator != undefined) {
        $('option[value="' + theColumn.defaultOperator + '"]', $operator).attr('selected', 1).prop('selected', 1);
    }
    else {
        $('option:first', $operator).attr('selected', 1).prop('selected', 1);
    }

    // TODO make this something you can just implement a class for, rather than one offs
    // could be a callback function that's actually hanging off the myColumns object array
    if (columnValue == 'investors') {
        var uniqId = makeId();
        $newControl = $('<div class="ui-widget value-container" style="display:inline-block; width: 250px;"><input type="text" class="form-control" id="'+ uniqId +'" style="width:100%" placeholder="" /><input type="hidden" id="'+ uniqId +'-value" value="" class="value"/></div>');
        $valueContainer.replaceWith($newControl);
        $('#'+ uniqId).autocomplete({
            focus: function(event, ui) {
                $('#'+ uniqId).val(ui.item.label);
                return false;
            },
            source: investorsAutocompleteList,

            select: function(event, ui) {
                $('#'+ uniqId +'-value').val(ui.item.value);
                $('#'+ uniqId).val(ui.item.label);
                return false;
            }
        }).data( "ui-autocomplete" )._renderItem = function( ul, item ) {
            return $( "<li>" ).append( "<a class='autocomplete-type-label'>" + item.label +"</a>" ).appendTo( ul );
        };
        $('.ui-autocomplete').css({'z-index': 9999});
    }
    else if (columnValue == 'techstack') {
        var uniqId = makeId();
        $newControl = $('<div class="ui-widget value-container" style="display:inline-block; width: 250px;"><input type="text" class="form-control" id="'+ uniqId +'" style="width:100%" placeholder="" /><input type="hidden" id="'+ uniqId +'-value" value="" class="value"/></div>');
        $valueContainer.replaceWith($newControl);
        $('#'+ uniqId).autocomplete({
            focus: function(event, ui) {
                $('#'+ uniqId).val(ui.item.label);
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
                $('#'+ uniqId +'-value').val(ui.item.value);
                $('#'+ uniqId).val(ui.item.label);
                return false;
            }
        }).data( "ui-autocomplete" )._renderItem = function( ul, item ) {
            return $( "<li>" ).append( "<a class='autocomplete-type-label'>" + item.label +"</a>" ).appendTo( ul );
        };
        $('.ui-autocomplete').css({'z-index': 9999});
    }
    else if (columnValue == 'business_models') {
        var $newControl = $('<select class="value value-container form-control"></select>');

        $('#bmOptions label').each(function() {
            $('<option></option>').attr('value', $.trim($(this).text())).text($.trim($(this).text())).appendTo($newControl);
        });

        $valueContainer.replaceWith($newControl);
    }
    else if (columnValue == 'industries') {
        var $newControl = $('<select class="value value-container form-control"></select>');

        $('#industryOptions li.industry label').each(function() {
            var el = $(this);
            var val = el.children('input').val();
            var text = $.trim(el.text());
            $('<option></option>').val(val).text(text).appendTo($newControl);
        });

        $valueContainer.replaceWith($newControl);
    }
    //for rounds
    else if (columnValue == 'industry') {
        var $newControl = $('<select class="value value-container form-control"></select>');

        $('#industryOptions li.industry label').each(function() {
            var el = $(this);
            var val = el.children('input').val();
            var text = $.trim(el.text());
            $('<option></option>').val(val).text(text).appendTo($newControl);
        });

        $valueContainer.replaceWith($newControl);
    }
    else if (columnValue == 'region') {
        var $newControl = $('<select class="value value-container form-control"></select>');

        $.each(locationList, function(index, location) {
            if (location.type == 'region') {
                $('<option></option>').attr('value', location.display_name).text(location.display_name).appendTo($newControl);
            }
        });

        $valueContainer.replaceWith($newControl);
    }
    else if (columnValue == 'state') {
        var $newControl = $('<select class="value value-container form-control"></select>');

        $.ajax({
            dataType: "json",
            url: '/app/assets/data/states_abbrev.json',
            async: false,
            success: function(json) {
                for (var fullName in json) {
                    $('<option></option>').attr('value', json[fullName]).text(fullName).appendTo($newControl);
                }

                $valueContainer.replaceWith($newControl);
            }
        });
    }
    else if (columnValue == 'country') {
        var $newControl = $('<select class="value value-container form-control"></select>');

        $.ajax({
            dataType: "json",
            url: '/app/data/countries',
            async: false,
            success: function(json) {
                for (var fullName in json) {
                    $('<option></option>').attr('value', json[fullName]).text(fullName).appendTo($newControl);
                }

                $valueContainer.replaceWith($newControl);
            }
        });
    }
    else if (columnValue == 'continent') {
        var $newControl = $('<select class="value value-container form-control"></select>');

        $.each(locationList, function(index, location) {
            if (location.type == 'continent') {
                $('<option></option>').attr('value', location.abbreviation).text(location.display_name).appendTo($newControl);
            }
        });

        $valueContainer.replaceWith($newControl);
    }
    else if (theColumn.treeFilter == 'date') {
      if (queryMember != null) {
        if (moment(queryMember.value, 'MM/DD/YYYY').isValid()) {
          renderDatePicker($queryElement);
        }
        else {
          renderSelect($queryElement, theColumn.treeFilterSelect);
          // $queryElement.find('select.operator option[value=preset]').prop('selected', true).attr('selected', 'selected');
        }
      }
      else {
        renderDatePicker($queryElement);
      }

      $queryElement.off('change', 'select.operator');
      $queryElement.on('change', 'select.operator', function (e) {
        if (e.target.value == 'preset') {
          renderSelect($queryElement, theColumn.treeFilterSelect);
        }
        else {
          renderDatePicker($queryElement);
        }
      });
    }
    else if (columnValue == 'series') {
        var $newControl = $('<select class="value value-container form-control"></select>');
        $.ajax({
            dataType: "json",
                url: '/app/assets/data/series.json',
                async: false,
                success: function(json) {
                    for (var fullName in json) {
                        $('<option></option>').attr('value', json[fullName]).text(fullName).appendTo($newControl);
                    }

                    $valueContainer.replaceWith($newControl);
                }
            });
    }
    else if (columnValue == 'industry') {
        var $newControl = $('<select class="value value-container form-control"></select>');

        $('#industryOptions input').each(function() {
            $('<option></option>').attr('value', $.trim($(this).text())).text($.trim($(this).text())).appendTo($newControl);
        });

        $valueContainer.replaceWith($newControl);
    }
    else if (theColumn.treeFilter == 'yesno') {
        $valueContainer.replaceWith('<select class="value value-container form-control"><option value="1">Yes</option><option value="0">No</option></select>');
    }
    else if (theColumn.treeFilter == 'select') {
        renderSelect($queryElement, theColumn.treeFilterSelect);

        // Limit available operators; need this on top of above, because selects have dynamic list of operators
        disableOperatorsForColumn(theColumn, $operator);
    }
    else if (theColumn.treeFilter == 'unsortable_string') {
        $valueContainer.replaceWith('<input type="text" disabled class="value value-container form-control" />');
        disableOperatorsForColumn(theColumn, $operator);
    }
    else {
        // make sure the input box is restored
        $valueContainer.replaceWith('<input type="text" class="value value-container form-control" />');
    }
}

$('#queryTreeModal').on('mouseenter', '.query', function() {$('button', $(this)).removeClass('hide');});
$('#queryTreeModal').on('mouseleave', '.query', function() {
    $('button', $(this)).addClass('hide');
    $('button', $('#queryTreeModal #queryArea .query').last()).removeClass('hide');
});


// TODO - find another place for this
// modified from http://jqueryui.com/resources/demos/autocomplete/combobox.html
$.widget( "custom.mmcombobox", {
    _create: function() {
        this.wrapper = $( "<span>" )
            .addClass( "mmcombobox" )
            .insertAfter( this.element );

        // double up because the style attribute gets cleared regularly on the selects in query_tree_modal
        this.element.hide().addClass('hide');
        this._createAutocomplete();
        this._createShowAllButton();
    },

    _createAutocomplete: function() {
        var selected = this.element.children( ":selected" ),
            value = selected.val() ? selected.text() : "";

        this.input = $( "<input>" )
            .appendTo( this.wrapper )
            .val( value )
            .attr( "title", "" )
            .addClass('form-control')
            .autocomplete($.extend({}, this.options, {
                delay: 0,
                minLength: 0,
                source: $.proxy( this, "_source" )
            }))
            .tooltip({
                classes: {
                    "ui-tooltip": "ui-state-highlight"
                }
            })
            .bind('focus', function() {
                if(this.value.length === 0) $(this).autocomplete("search");
            });

        this._on( this.input, {
            autocompleteselect: function( event, ui ) {
                ui.item.option.selected = true;
                this._trigger( "select", event, {
                    item: ui.item.option
                });

                $(this.element).trigger('change');
            },

            autocompletechange: "_removeIfInvalid"
        });

        // sync any programatic changes to the select element back to the input
        var _input = this.input;
        this.element.bind('change', function() {
            var selected_text = $(this).children(":selected").text();

            if (selected_text != _input.val()) {
                _input.val(selected_text);
            }
        });
    },

    _createShowAllButton: function() {
        var input = this.input,
            wasOpen = false;
        var btn;

        btn = $( "<a>" )
            .attr( "tabIndex", -1 )
            .attr( "title", "Show All Items" )
            .appendTo( this.wrapper )
            .addClass( "mmcombobox-toggle" )
            .on( "mousedown", function() {
                wasOpen = input.autocomplete( "widget" ).is( ":visible" );
            })
            .on( "click", function() {
                input.trigger( "focus" );

                // Close if already visible
                if ( wasOpen ) {
                    return;
                }

                // Pass empty string as value to search for, displaying all results
                input.autocomplete( "search", "" );
            });

        $("<span>").addClass("ui-button-icon ui-icon ui-icon-triangle-1-s").appendTo(btn);
    },

    _source: function( request, response ) {
        var matcher = new RegExp( $.ui.autocomplete.escapeRegex(request.term), "i" );
        response( this.element.children( "option" ).map(function() {
            var text = $( this ).text();
            if ( this.value && ( !request.term || matcher.test(text) ) )
                return {
                    label: text,
                    value: text,
                    option: this
                };
        }) );
    },

    _removeIfInvalid: function( event, ui ) {

        // Selected an item, nothing to do
        if ( ui.item ) {
            return;
        }

        // Search for a match (case-insensitive)
        var value = this.input.val(),
            valueLowerCase = value.toLowerCase(),
            valid = false;
        this.element.children( "option" ).each(function() {
            if ( $( this ).text().toLowerCase() === valueLowerCase ) {
                this.selected = valid = true;
                return false;
            }
        });

        // Found a match, nothing to do
        if ( valid ) {
            return;
        }

        // Remove invalid value
        this.input
            .val( "" )
            .attr( "title", value + " didn't match any item" )
            .tooltip( "open" );
        this.element.val( "" );
        this._delay(function() {
            this.input.tooltip( "close" ).attr( "title", "" );
        }, 2500 );
        this.input.autocomplete( "instance" ).term = "";
    },

    _destroy: function() {
        this.wrapper.remove();
        this.element.show();
    }
});



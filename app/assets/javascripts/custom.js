$(document).ready(function() {
	$.fn.editable.defaults.mode = 'inline';

	$('.rate').editable({
	    type: 'text',
	    title: 'Enter Rate',
	    success: function(response, newValue) {
	    	var id = $(this).data("id");
	    	var rate = parseFloat(newValue);

	    	$.post("/contract_allocations/update_value",
							  {
							    id: id,
							    name: "labor_rate",
							    value: rate
							  },
							  function(data,status){
							  });

	    	return { newValue: rate.toFixed(2) };
	    },
	    display: function(value) {
      	$(this).text('$' + value);
      	calcTotal();
    	},
    	validate: function(value) {
    		if(isNaN(parseFloat(value))) {
    			return "Type number";
    		}
    	}
	});

	$('.hour').editable({
	    type: 'text',
	    title: 'Enter Hour',
	    success: function(response, newValue) {
	    	var id = $(this).data("id");
	    	var hour = parseFloat(newValue);
	    	$.post("/contract_allocations/update_value",
							  {
							    id: id,
							    name: "hours",
							    value: hour
							  },
							  function(data,status){
							  });
	    	return { newValue: hour };
	    },
	    display: function(value) {
	    	$(this).text(value);
	    	calcTotal();
	    },
    	validate: function(value) {
    		if(isNaN(parseFloat(value))) {
    			return "Type number";
    		}
    	}
	});

	calcTotal();
});

function calcTotal() {
	$('tr.val_rows').each(function(index, element) {
		var rate = parseFloat($(this).find('.rate').html().substring(1));
		var hour = parseFloat($(this).find('.hour').html());
		$(this).find('.total').html((rate * hour).toFixed(2));
	});

	var val = 0;
	$('.rate').each(function(index, element) {
		val += parseFloat($(this).html().substring(1));
	});
	$('td.rate_total').html('$' + val.toFixed(2));

	val = 0;
	$('.hour').each(function(index, element) {
		val += parseFloat($(this).html());
	});
	$('td.hour_total').html(val);

	val = 0;
	$('td.total').each(function(index, element) {
		val += parseFloat($(this).html());
	});
	$('td.totals').html(val.toFixed(2));
}
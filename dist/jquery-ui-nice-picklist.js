var jqueryUINicePicklist = {
	setup: function(){
		var $attrListContainer = $('form'),
			$sortableList = $('<div class="sortableList">'),
			$in = $('<ul id="sortable1" class="connectedSortable">').append('<li class="ui-state-default heading">In</li>'),
			$out = $('<ul id="sortable2" class="connectedSortable">').append('<li class="ui-state-default heading">Out</li>'),
			$list = $('form select option');

		$list.each(function( i ){
			if( $(this).prop('selected') === true ){
				$in.append( '<li class="ui-state-highlight" attribute_name="'+$(this).val()+'">'+ $(this).text() +'</li>' );
			} else {
				$out.append( '<li class="ui-state-default" attribute_name="'+$(this).val()+'">'+ $(this).text() +'</li>' );
			}
			if( (i+1) == $list.length ){
				$sortableList.append( $in );
				$sortableList.append( $out );
				$attrListContainer.append( $sortableList );
				//start the jquery ui magic
				$( "#sortable1, #sortable2" ).sortable({
					connectWith: ".connectedSortable",
					cancel: ".heading"
				}).disableSelection();
			}
		});
	}
};
function drag_start(event){
    var style = window.getComputedStyle(event.target, null);
    var str = (parseInt(style.getPropertyValue("left")) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top")) - event.clientY)+ ',' + event.target.id;
    event.dataTransfer.setData("Text",str);
};

function drop(event){
    var offset = event.dataTransfer.getData("Text").split(',');
    var dm = document.getElementById(offset[2]);
    dm.style.left = (event.clientX + parseInt(offset[0],10)) + 'px';
    dm.style.top = (event.clientY + parseInt(offset[1],10)) + 'px';

    event.preventDefault();
    return false;
};

function drag_over(event){
    event.preventDefault();
    return false;
};

function getScore(elem){
    var p = $(elem);
    var position = p.position();
    var $item = $(body);
    var bodyOffset = $item.offset()
    var bitToAdd = p.width()/2
    var width1 = $item.width();
    var midpoint = (width1 +  bodyOffset.left )/ 2;
    var difference = (position.left + bitToAdd) - midpoint;
    var divPos = $("#pinboard").offset();
    var score = (difference / (midpoint - divPos.left)) * 1.2;
    if (score < -1) {
        score = -1;
    }
    if (score > 1) {
      score = 1;
    }
    $( "#text" ).append( "<br>id = " + elem.id + " || score: " + score);
};

function getWidth(elem){
    var $this = $(body);
    var width = $this.width();
    $( "#text" ).text( "midpoint = " + width/2 );
};

var tagId = 0;
function createDTag(insertionPoint, label, colorClass){
    var new_tag = $('<li></li>').appendTo(insertionPoint)
                            .attr({draggable : true, id:tagId.toString()})
                            .addClass("dTag")
                            .text(label)
                            .on('dragstart', function(event){drag_start(event.originalEvent);})
                            .on('dragend', function(event){getScore(this);});
    
    if(colorClass){
        new_tag.addClass(colorClass);
    }
    
    ++tagId;
};

function search(query){
    if($.inArray(query, all_cuisines) != -1){
        createDTag($("#metrics"), query, "cuisineTag");
    }
    else {
        createDTag($("#metrics"), query, "suggestionTag");
    }
}

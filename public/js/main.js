
$(document).ready(function(){

  
    $('.menu-item__link').on('click', function(e)  {
    $(this).parent().siblings().find('.menu-item__link--selected').removeClass('menu-item__link--selected');
    $(this).addClass('menu-item__link--selected');
    let pos = $('.selected-triangle--inserted').offset();
    let elem = '<div class="selected-triangle--inserted"></div>';

    $(document).find('.selected-triangle--inserted').remove();
      
    $('.menu-item__link--selected').append(elem);
    e.preventDefault();

  }); 
	$('.tab-link').on('click', function(e)  {
	  	$(this).parent().siblings().find('.tab-link--active').removeClass('tab-link--active');
	    $(this).addClass('tab-link--active');
		let currentAttrValue = $(this).attr('href');
		$(currentAttrValue).show().siblings().hide();
		$(this).parent().siblings().find('.horizontal-tabs-active').removeClass('horizontal-tabs-active');
		$(this).addClass('horizontal-tabs-active');
		e.preventDefault();
	});
        $('.tab2-link').on('click', function(e)  {
        $(this).parent().siblings().find('.tab2-link--active').removeClass('tab2-link--active');
        $(this).addClass('tab2-link--active');
        let currentAttrValue = $(this).attr('href');
        $(currentAttrValue).show().siblings().hide();
        $(this).parent().siblings().find('.horizontal-tabs-active').removeClass('horizontal-tabs-active');
        $(this).addClass('horizontal-tabs-active');
        e.preventDefault();
    });
   
	let setDropdown = function(selector) {
    	if ($(selector).is(':visible')) {
    		$(selector).slideUp(300);
    	} else {
    		$(selector).slideDown(300);
    	}
    };
    let setShowHide = function(selector) {
        if ($(selector).is(':visible')) {
            $(selector).hide();
        } else {
            $(selector).show();
        }
    };
    	let setdown = function(selector) {
    	$(selector).slideDown(300);
    };
        let setUp = function(selector) {
    	$(selector).slideUp(300);
    };
       	let del = function(selector) {
    	$(selector).remove();
    };

        $('.plus').on('click', function(){
      setDropdown('#drop-add-userInTable');
    });
        $('.plus-order').on('click', function(){
      setShowHide('#drop-add-orderInTable');
    });
        $('.raz').on('click', function(){
      setdown('#content-table');
    });
       	$('.sver').on('click', function(){
      setUp('#content-table');
    }); 
        $('.close').on('click', function(){
      del('#window');
    });
         $('.raz1').on('click', function(){
      setdown('#content-table1');
    });
        $('.sver1').on('click', function(){
      setUp('#content-table1');
    }); 
        $('.close1').on('click', function(){
      del('#window1');
    });
});
/*
function deleterow(value){
	var i = value.parentNode.parentNode.rowIndex;
	document.getElementById('table-user').deleteRow(i);
}
function createrow() {
    var table = document.getElementById("table-user");
    var row = table.insertRow(-1);
    var fio = row.insertCell(0);
    var mail = row.insertCell(1);
    var law = row.insertCell(2);
    var pas = row.insertCell(3);
    var del = row.insertCell(4);
    fio.innerHTML = "NEW fio";
    mail.innerHTML = "NEW mail";
    law.innerHTML = "NEW law";
    pas.innerHTML = "NEW pas";
    del.innerHTML = '<input type="button" value="X" onclick="deleterow(this)">';
    fio.className = "table-manufacture-td";
	mail.className = "table-manufacture-td ";
	law.className = "table-manufacture-td";
	pas.className = "table-manufacture-td";
	del.className = "table-manufacture-td";
	row.className = "color";
}
*/

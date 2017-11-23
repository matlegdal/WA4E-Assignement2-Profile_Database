if (typeof countPos === 'undefined') {var countPos = 0}

$(document).ready(function () {
	$('#add_pos').on("click", function(event){
		event.preventDefault();
		if (countPos >= 10) {
			alert('Maximum position of 10');
			return;
		}
		countPos++;
		$('#position_fields').append(
			'<div id="pos'+countPos+'" class="card" style="margin-bottom: 1em;">'
			+'<div class="card-body">'
			+'<div class="form-group row">'
			+'<label class="col-form-label col-sm-2" for="year">Year: </label>'
			+'<div class="col-sm-4">'
			+'<input class="form-control" type="number" name="pos_year'+countPos+'" min="1900" max="2020" value="2017">'
			+'</div>'
			+'<div class="col-sm-6">'
			+'<button type="button" onclick="$(\'#pos'+countPos+'\').remove();return;" style="float: right;" class="btn btn-danger btn-sm">-</button>'
			+'</div></div>'
			+'<div class="form-group">'
			+'<label for="desc">Description</label>'
			+'<textarea class="form-control" name="pos_desc'+countPos+'" placeholder="Enter a brief description of the position you occupied." ></textarea>'
			+'</div></div></div>'
			);
	});
});

if (typeof countEdu === 'undefined') {var countEdu = 0}
$(document).ready(function () {
    $('#add_edu').on("click", function(event){
        event.preventDefault();
        if (countEdu >= 10) {
            alert('Maximum position of 10');
            return;
        }
        countEdu++;
        $('#education_fields').append(
            '<div id="edu'+countEdu+'" class="card" style="margin-bottom: 1em;">'
            +'<div class="card-body">'
            +'<div class="form-group row">'
            +'<label class="col-form-label col-sm-2" for="year">Year: </label>'
            +'<div class="col-sm-4">'
            +'<input class="form-control" type="number" name="edu_year'+countEdu+'" min="1900" max="2020" value="2017">'
            +'</div>'
            +'<div class="col-sm-6">'
            +'<button type="button" onclick="$(\'#edu'+countEdu+'\').remove();return;" style="float: right;" class="btn btn-danger btn-sm">-</button>'
            +'</div></div>'
            +'<div class="form-group ui-widget">'
            +'<label for="desc">Institution</label>'
            +'<input type="text" class="form-control school" name="edu_desc'+countEdu+'" placeholder="Enter your school or institution." value="" >'
            +'</div>'
			+'</div></div>'
        );
        $('.school').autocomplete({
            source: "modules/search.php",
            minLength: 2
        });
    });
    $( ".school" ).autocomplete({
        source: "modules/search.php",
        minLength: 2
    });
});

// TODO: add autocomplete


function doValidate() {
	console.log('Validating...');
	try {
		var addr = document.getElementById('email').value;
        var pw = document.getElementById('password').value;
        console.log("Validating addr="+addr+" pw="+pw);
        if (addr === null || addr === "" || pw === null || pw === "") {
            alert("Both fields must be filled out");
            return false;
        }
        if ( addr.indexOf('@') === -1 ) {
            alert("Invalid email address");
            return false;
        }
        return true;
    } catch(e) {
        return false;
    }
}

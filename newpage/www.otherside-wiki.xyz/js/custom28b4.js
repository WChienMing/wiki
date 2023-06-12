$(document).ready(function() {

	if($(window).outerWidth() < 1140) {
		$(".list .sidebar .title").click(function(e) {
			e.preventDefault();
			$(this).siblings(".sidebar-wrapper").slideToggle();
		})
	}

	$(".main .switch input").change(function(e) {
		let type = $(this).val();

		// Show loading effect
		$(".main .switch-tab").removeClass("active");
		$(".main .switch-tab#recent_loading").addClass("active");

		// Show result after some time
		setTimeout(function() {
			$(".main .switch-tab").removeClass("active");
			$(".main .switch-tab#" + type).addClass("active");
		}, 1000);
	})
	
  $('[data-toggle="tooltip"]').tooltip();   



})

document.getElementById('textarea').addEventListener('input', function() {
    let orginal_string = this.value;
    let input_string = orginal_string.toLowerCase().replace(/ /g, '_');

    const letter_to_image = Array.from({length: 26}, (_, i) => String.fromCharCode(i + 97)).reduce((acc, char) => {
        acc[char] = char + '.png';
        return acc;
    }, {_ : 'empty.png'});

    let output = '';
    for (const char of input_string) {
        const image_file = letter_to_image[char] ?? 'missing.png';
        const img_style = (char === '_') ? "width:40px; height:40px; margin-left:-5px;margin-right:-5px;" : "width:40px; height:40px; margin-left:-2px;margin-right:-2px;";
        output += `<img src='./images/kodachars/${image_file}' style='${img_style}' alt='${char === '_' ? 'Empty' : char}'>`;
    }

    document.getElementById('output').innerHTML = output;
});

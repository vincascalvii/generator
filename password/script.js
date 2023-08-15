(function() {

	// Get all the elements
	const password  = document.getElementById('password');
	const length 	= document.getElementById('length');
	const uppercase = document.getElementById('inc_uppercase');
	const lowercase = document.getElementById('inc_lowercase');
	const numbers 	= document.getElementById('inc_numbers');
	const symbols 	= document.getElementById('inc_symbols');
	const similar 	= document.getElementById('exc_similar');
	const ambiguous = document.getElementById('exc_ambiguous');

	// Important variables
	// - mask: characters to be included when generate the password
	// - result: generated password
	var mask, result;

	// Function to generate the password
	function generatePassword() {

		// Set mask to empty
		mask = '';
		result = '';
	    
	    // If any of the includes is checked, add the corresponding characters to mask
	    if ( uppercase.checked ) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	    if ( lowercase.checked ) mask += 'abcdefghijklmnopqrstuvwxyz';
	    if ( numbers.checked )   mask += '0123456789';
	    if ( symbols.checked )   mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';

	    // If any of the excludes is checked, remove the corresponding characters from mask
	    if ( similar.checked )   mask.replace(/^il1Lo0O+/i, '');
	    if ( ambiguous.checked ) mask.replace(/^\{\}\[\]\(\)\/\\\'\"\`\~\,\;\:\.\<\>+/i, '');

	    // Loop through the password length, then generate the password using both the mask and length
	    for ( var i = length.value; i > 0; --i ) 
	    	result += mask[Math.floor(Math.random() * mask.length)];

	    // Display the result
	    password.innerHTML = result;
	}

	// Generate password straight away on render
	generatePassword();

	// If any of these inputs is changed, generate the password again
	length.addEventListener('change', generatePassword, false);
	uppercase.addEventListener('change', generatePassword, false);
	lowercase.addEventListener('change', generatePassword, false);
	numbers.addEventListener('change', generatePassword, false);
	symbols.addEventListener('change', generatePassword, false);
	similar.addEventListener('change', generatePassword, false);
	ambiguous.addEventListener('change', generatePassword, false);

	// Copy the password if this icon is clicked
	document.getElementById('copy').addEventListener('click', function() {
		navigator.clipboard.writeText(result);
	}, false);

	// Re-generate the password if this icon is clicked
	document.getElementById('reset').addEventListener('click', generatePassword, false);
})();
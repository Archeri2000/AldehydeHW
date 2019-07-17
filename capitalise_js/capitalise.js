var fs = require('fs');

exports.PipeFile = function PipeFile(infile, outfile, func){
	data = fs.readFileSync(infile, "ascii");
	fs.writeFile(outfile, func(data),()=>{});
}

exports.CapsFirst = function CapsFirst(inStream){
	charArray = inStream.split('');
	CapsLetter = true;
	for(i = 0; i < charArray.length; i++){
		// Convert to char code
		curr = charArray[i].charCodeAt(0);
		if(CapsLetter){
			CapsLetter = false;
			// Is small letter?
			if(curr <= 122 && curr >= 97){
				// Capitalise
				charArray[i] = String.fromCharCode(curr - 32);
			}
		}
		// Is space or new line?
		if(charArray[i] == ' ' || charArray[i] == '\n'){
			CapsLetter = true;
		}
	}
	return charArray.join('');
}

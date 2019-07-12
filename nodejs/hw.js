var fs = require('fs');

function PipeFile(infile, outfile, func){
	data = fs.readFileSync(infile, "ascii");
	fs.writeFile(outfile, func(data),()=>{});
}

function CapsFirst(inStream){
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

var args = process.argv.slice(2);
PipeFile(args[0], args[1], CapsFirst);
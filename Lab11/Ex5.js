function isNonNegIntString(q, returnErrors = false) {
     /*
    This function returns true if tq is a non-negative integer.
    If returnErrors = true, it will return the arrray of reasons it is not a non-negative integer.
    */
    errors = []; // assume no errors at first
    if(Number(q) != q) errors.push('Not a number!'); // Check if string is a number value
    if(q < 0) errors.push('Negative value!'); // Check if it is non-negative
    if(parseInt(q) != q) errors.push('Not an integer!'); // Check that it is an integer

    return returnErrors ? errors : (errors.length == 0);
}

attributes  =  "Landon; 21; 21.5;" + (0.5 - 21);
pieces = attributes.split(';');

function callback(part,i) {
    console.log(`${pieces[i]} is a non neg int ${isNonNegIntString(pieces[i],true).join("***")}`);
}

pieces.forEach(function (item, i) {console.log( (typeof item == 'string' && item.length > 0)?true:false )});
   

// start age count
age_count = 1;
age = 21;
while(age_count < age) {
    if (age_count >= age/2){
        console.log("Don't ask me how old I am!");
        process.exit();
    } else {
        console.log(`age ${age_count}`);
    }
    
    age_count++;
}
console.log(`Landon is ${age_count} years old`);
// start age count
age_count = 1;
age = 21;
while(age_count < age) {
    if ((age_count > age/2) && (age_count < (3/4)*age)){
        console.log("No age zone!");
    } else {
        console.log(`age ${age_count}`);
    }
    
    age_count++;
}
console.log(`Landon is ${age_count} years old`);
// start age count
age_count = 1;
age = 21;

// calculate square root
ans = Math.sqrt(age);
age_sqrt = Math.round(ans);

// main function
while(age_count < age) {
    if (age_count == age_sqrt) {
        console.log("The square root of my age is " + age_sqrt);
        break;
    } else {
        console.log(`age ${age_count}`);
    }
    age_count++;
}

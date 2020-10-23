age = 21;
name = "Landon";
attributes  =  name + ";" + age + ";" + (age + 0.5) + ";" + (0.5 - age);
parts = attributes.split(';');
console.log(parts);
for (i in parts){
    parts[i] =  `${typeof parts[i]} ${parts[i]}`;
}
console.log(parts.join(","));
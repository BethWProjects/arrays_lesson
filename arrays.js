var friends = ["Jake", "Kate", "Logan", "Wyatt"];
var ages = [40, 17, 19, 14];
var meetsRequirement = [True, False, False, False];
//print Jake
console.log(friends["Jake"]);
// remove 40 and 17
console.log(ages.slice(2));
//remove and return the last element "False"
console.log(meetsRequirement.pop);
// The default index position for Arrays is 0.  So the the first position in the array would start at 0, and count up from 1.  For some methods, the index will begin at a starting point, or ending point, so keeping that in mind is important when calling methods.  If an array has three elements, the index numbers for that array would be 0, 1, 2

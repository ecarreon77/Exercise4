function zerosToEnd(array: string[] | number[], len: number) { 
    let count = 0;
    for (let i = 0; i < len; i++) 
        if (array[i] != 0) 
            array[count++] = array[i];
    while (count < len) 
        array[count++] = 0; 
} 
var array: string[] = ["false", "0", "6", "false", "0", "4", "1", "0", "7", "6", "9", "true"];
let len: number = array.length;
console.log("All the elements!");
console.log(array);
zerosToEnd(array, len); 
    console.log("All zero(0) element/s moved to the end!"); 
    for (let i = 0; i < len; i++) 
        console.log(array[i] + ", ");    
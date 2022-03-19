//forEach(function, thisValue)

function forEachFunction(userFunction, array){
    for(ind=0;ind<array.length;++ind){
        if(userFunction(array[ind])){
            console.log(array[ind]);
        }
    }
}

//map(funtion, thisValue)

function mapFunction(userFunction, array) {
    mappedArray = new Array();
    for(ind=0;ind<array.length;++ind){
        mappedArray[ind] = userFunction(array[ind]);
    }
    return mappedArray;
}

//filter(function, thisValue)

function filterFunction(userFunction, array) {
    filteredArray = new Array();
    for(ind=0;ind<array.length;++ind) {
        if(userFunction(array[ind])) {
            filteredArray.push(array[ind]);
        }
    }
    return filteredArray;
}

//reduce(function)

function reduceFunction(userFunction, array) {
    let result = 0;
    for(ind=0;ind<array.length;++ind) {
        result = userFunction(result, array[ind]);
    }
    return result;
}

/******************/
//user functions
function greaterThanZero(value) {
    return value>0;
}

function dividedByTwo(value) {
    return (value&1)==0;
}

function squareIt(value) {
    return value*value;
}

function add(total, value) {
    return (total+value);
}

/*********************/

var array = new Array(-1,-5,1,2,3,10);
document.write('Original Array :' + array);
document.write('<hr>')

//foreach
forEachFunction(greaterThanZero, array);//you can see the output in the console window

//map
var newArray = mapFunction(squareIt, array);
document.write("Mapping Every value of the array to its equivalent square value : ");
document.write(newArray);

//filter
newArray = filterFunction(dividedByTwo, array);
document.write("<br>Filtered values which are even in the array : ");
document.write(newArray);

//reduce
reducedValue = reduceFunction(add, array);
document.write('<br>Reduced value of the array is ' + reducedValue);

var array2 = new Array(1,2,3,4,5,6,7,8,9,10);
document.write('<br><br>Original Array 2: ' +array2 + '<hr>');

newArray = mapFunction(squareIt, filterFunction(dividedByTwo, array2));
document.write('Filtered Even Numbers and mapping those numbers to its square :' + newArray);


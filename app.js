//const person = {id: 123, name: 'Vasya', 
//last_name:'Ivanov', year: 2000, address: {city: 'lod', 
//srteet: 'Sokolov', app: 100}
///};
//const name1 = getAddressKey();

//console.log(person[name1])
//const personArr = [123, 'Vasya', 'Ivanov', 2000, 
//['Lod', 'Socolov', 100]]
//console.log(personArr[3])
//console.log(person.address);
function displayOccurrences(strings) {
    const occorrences = {};
    strings.forEach(element => {
        if (occorrences[element]) {
            occorrences[element]= occorrences[element] + 1;
        }else {
            occorrences[element] = 1;
        }
    });
    //console.log(Object.entries(occorrences));
    const occorrencesAr = Object.entries(occorrences)
    occorrencesAr.sort((e1, e2) => e2[1] - e1[1])
    console.log(occorrencesAr);
}
//const x = {};
//const string = abc;
//x[string] = 1;
//console.log(x);"
const strings = ["a", "lmn", "opr", "abc", 'lmn', 'abc',"lmn", "lmn", "abc", "a"];
displayOccurrences(strings);

var arrayOfNubers = [30,37,38,45,47];

var stringOfArray = "";
for(var i = 0; i < arrayOfNubers.length; i++)
{
    stringOfArray += arrayOfNubers[i] + ", ";
}

document.getElementById("bHeader").textContent= stringOfArray;

<!--document.getElementById("bHeader").innerText = arrayOfNubers;-->


var array0fNames = [];
array0fNames.push("Jinx");
array0fNames.push("Kradle");
array0fNames.push("Draven");
array0fNames.push("Kratos");
console.log(array0fNames);
document.getElementById("nameArray").innerText= array0fNames;

arrayOfNubers.pop(0);
arrayOfNubers.pop(1);
document.getElementById("numberDat").textContent = arrayOfNubers;
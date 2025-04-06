let arr = [
    "javascript", "programming", "web", "development", "code", "learning", "tutorial", "technology", "computer", "a"
];

let newArr = [];
for(let i=0; i<arr.length; i++) {
    let captitalize = (arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase()).trim();
    newArr.push(`#${captitalize}`);
}

let filteredArr = newArr.filter(el => el.length > 3)

let longestHashtags = filteredArr.sort((a,b) => b.length - a.length).slice(0, 5);
console.log(longestHashtags)

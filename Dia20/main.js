let fanaticos =[
    {grupo:"BTS",años:2},
    {grupo:"Real madrid",años:5},
    {grupo:"kny",años:15}
]

localStorage.setItem("fans",JSON.stringify(fanaticos))
let transformert=JSON.parse(localStorage.getItem("fans"));
 
let fanaticos2=[...fanaticos,{grupo: "dota 2", años:5}]
console.log(fanaticos2)

localStorage.setItem("newfans",JSON.stringify(fanaticos2))
let transformertplus=JSON.parse(localStorage.getItem("newfans"));

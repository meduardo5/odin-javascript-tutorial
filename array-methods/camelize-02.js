let camelize = string =>{
    return string
    .split("-")
    .join("").toUpperCase();
}

console.log(camelize("st-ring-s"));
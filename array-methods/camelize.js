function camelize(string){
    let words = string.split("-");
    let result = words[0];

    for(i = 1; i < words.length; i++){
        let word = words[i];

        if(word.length === 0) continue;

        result += word[0].toUpperCase() + word.slice(1);

    }

    return result
}

console.log(camelize("st-ring-s"));
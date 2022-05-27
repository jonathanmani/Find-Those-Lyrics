function getDefinition(){
    let word = document.getElementById('textField').value;
    fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=ecf902cf-3f40-459b-aaad-a4d4ea946388`)
        .then(res => res.json())
        .then(data => {
            console.log(data[0])
            document.querySelector('.word').innerHTML = data[0].meta.stems[0].toUpperCase()
            document.querySelector('.def01').innerHTML = data[0].shortdef[0]
            document.querySelector('.def02').innerHTML = data[0].shortdef[1]
        })


}

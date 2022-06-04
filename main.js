function getDefinition(){
    // window.location.reload()
    let word = document.getElementById('textField').value;
    fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=ecf902cf-3f40-459b-aaad-a4d4ea946388`)
        .then(res => res.json())
        .then(data => {
            console.log(data[0])
            document.querySelector('.word').innerHTML = data[0].meta.stems[0].toUpperCase();
            document.querySelector('.pronounciation').innerHTML = data[0].hwi.hw;
            document.querySelector('.def01').innerHTML = data[0].shortdef[0];
            document.querySelector('.def02').innerHTML = data[0].shortdef[1];
            getSentence(data[0]);
            
            
        })
        
        function getSentence(data){
            document.querySelector('.sentence01').innerHTML = '';
            document.querySelector('.sentence02').innerHTML = '';
            if (data.quotes == undefined){
                document.querySelector('.sentence02').innerHTML = data.def[0].sseq[0][0][1].sdsense.dt[1][1][0].t;
            } else {
                document.querySelector('.sentence01').innerHTML = data.quotes[0]?.t;

            }

        }


}

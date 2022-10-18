function getDefinition() {
  // window.location.reload()
  let word = document.getElementById("textField").value;
  fetch(
    `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=ecf902cf-3f40-459b-aaad-a4d4ea946388`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data[0]);
      document.querySelector(".word").innerHTML =
        data[0].meta.stems[0].toUpperCase();
      getShortDef(data[0]);
      getSentence(data[0]);
    });
}

function getShortDef(data) {
  document.querySelector(".def01").innerHTML = data.shortdef[0];
  if (data.shortdef[1] != null) {
    document.querySelector(".def02").innerHTML = data.shortdef[1];
  }
}

function getSentence(data) {
  document.querySelector(".sentence01").innerHTML = "";
  document.querySelector(".sentence02").innerHTML = "";
  let sentence01 = data.def[0].sseq[0][0][1].dt[1][1][0].t;
  let sentence02 = data.def[0].sseq[0][0][1].dt[1][1][1].t;

  if (sentence01 != null) {
    let sentence01Replace = sentence01.replace("{wi}", "").replace("{/wi}", "");
    document.querySelector(".sentence01").innerHTML = `// ${sentence01Replace}`;
  }

  if (sentence02 != null) {
    let sentence02Replace = sentence02.replace("{wi}", "").replace("{/wi}", "");
    document.querySelector(".sentence02").innerHTML = `// ${sentence02Replace}`;
  }
}

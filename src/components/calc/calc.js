const calc= {
calc: document.querySelector('.calc'),
resultRef: document.querySelector('.result'),
newObj: { GRN: 1, },
first: 0,
second: '',
input: '',
firstSelect: 0,
secondSelect: 0,

fetchApi().then(data => {
    const needData= data.slice(0, 3);
    needData.forEach(({ ccy, sale }) => {
        newObj[ccy]=sale;
    })
}),

calc.addEventListener('input', onCheckInput),

onCheckInput(e) {
    if (e.target.nodeName === 'INPUT') {
        input = Number(e.target.value);
    }

    if (e.target.id === 'first-select') {
        first = e.target.value;
        firstSelect = newObj[first];
    }

    if (e.target.id === 'second-select') {
        second = e.target.value;
        secondSelect = newObj[second];
    }
    
    result(input, firstSelect, secondSelect);

}

function result(input, firstSelect, secondSelect) {
    const res = (input * firstSelect / secondSelect);
    if (!res) return;
    resultRef.innerHTML=(input*firstSelect/secondSelect).toFixed(2);
}









}
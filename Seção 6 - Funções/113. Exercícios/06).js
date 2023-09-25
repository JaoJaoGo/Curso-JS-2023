function juroSimples(capital, taxa, tempo) {
    return capital + (capital * taxa * tempo)
}

function juroComposto(capital, taxa, tempo) {
    return capital * (1 + taxa) ** tempo
}

console.log(juroSimples(100, 10/100, 2));
console.log(juroComposto(100, 10/100, 2));
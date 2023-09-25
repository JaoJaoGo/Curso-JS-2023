function crescimento(alt1, taxa1, alt2, taxa2) {
    let anos = 0

    if(alt1 > alt2) {
        console.log(`\nCriança maior: ${alt1} cm.\nTaxa de crescimento da criança maior: ${taxa1}`)
        console.log(`Criança menor: ${alt2} cm.\nTaxa de crescimento da criança maior: ${taxa2}`)

        if(taxa1 > taxa2) {
            console.log('A criança menor nunca irá ultrapassar a altura da maior devido a taxa de crescimento.')
        } else {
            while(alt1 >= alt2) {
                alt1 += taxa1
                alt2 += taxa2
                anos++
            }

            console.log(`Criança "maior" após ${anos} anos: ${alt1} cm.`)
            console.log(`Criança "menor" após ${anos} anos: ${alt2} cm.`)
        }
    } else if (alt1 < alt2) {
        console.log(`\nCriança maior: ${alt2} cm.\nTaxa de crescimento da criança maior: ${taxa2}`)
        console.log(`Criança menor: ${alt1} cm.\nTaxa de crescimento da criança menor: ${taxa1}`)

        if(taxa1 < taxa2) {
            console.log('A criança menor nunca irá ultrapassar a altura da maior devido a taxa de crescimento.')
        } else {
            while(alt1 <= alt2) {
                alt1 += taxa1
                alt2 += taxa2
                anos++
            }

            console.log(`Criança "maior" após ${anos} anos: ${alt2} cm.`)
            console.log(`Criança "menor" após ${anos} anos: ${alt1} cm.`)
        }
    } else {
        console.log('\nNão existe crianca menor.')
    }
}

crescimento(140, 2, 140, 3)

crescimento(140, 2, 141, 3)
crescimento(140, 3, 152, 2)

crescimento(141, 5, 140, 3)
crescimento(170, 2, 143, 3)
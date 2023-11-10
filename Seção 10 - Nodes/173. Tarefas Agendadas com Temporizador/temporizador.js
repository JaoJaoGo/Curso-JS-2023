const schedule = require('node-schedule')

// tarefa1 será executada a cada 5 segundos, às 17 horas, toda Sexta (*/segundo minuto hora diaMes Mes diaSemana), caso
// retirar o "*/" do início, ele irá executar no segundo 5 de qualquer minuto.
const tarefa1 = schedule.scheduleJob('*/5 * 18 * * 5', function () {
    console.log('Executando tarefa 1!', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando tarefa 1!')
}, 20000)

// setImmediate
// setInterval

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 18
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log("Executando tarefa 2!", new Date().getSeconds())
})
// Padrão Chain of Responsability ou Middleware, Express e Node é fortemente baseado nesse padrão.

/*
_________________________
| Processo A (1 Função) |
| Passo A               |
| Passo B               |
| Passo C               |
|_______________________|

________________________________________
| Processo A (3 Funções)               |
| Passo A |     |PassoB   |    |PassoC |
| PassoB()| --> |PassoC() | -->|       |
|______________________________________|

Padrão Chain of Responsability
            __________________________________________________________
Request     | Processo A (3 Funções)                                 |
   x        |      x       |     |      o       |     |              |
----------> | Middleware A | --> | Middleware B | --> | Middleware C | -----> envia a resposta... (ou não)
   o        |      next()  |     |      next()  |     |              |
Response    |________________________________________________________|

*/

const passo1 = (contexto, next) => {
   contexto.valor1 = 'mid1'
   next()
}

const passo2 = (contexto, next) => {
   contexto.valor2 = 'mid2'
   next()
}

const passo3 = contexto => contexto.valor3 = 'mid3'

const exec = (contexto, ...middlewares) => {
   const execPasso = indice => {
      middlewares && indice < middlewares.length && middlewares[indice](contexto, () => execPasso(indice + 1))
   }

   execPasso(0)
}

const ctx = {}
const ctx2 = {}

exec(ctx, passo1, passo2, passo3)
exec(ctx2, passo2, passo1)

console.log(ctx)
console.log(ctx2)
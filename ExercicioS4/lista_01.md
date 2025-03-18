# Instruções
- Faça uma cópia deste arquivo .md para um repositório próprio
- Resolva as 8 questões objetivas assinalando a alternativa correta e **justificando sua resposta.**
- Resolva as 2 questões dissertativas escrevendo no próprio arquivo .md
- Lembre-se de utilizar as estruturas de código como ``esta aqui com ` `` ou
```javascript
//esta aqui com ```
let a = "olá"
let b = 10
print(a)
```
- Resolva as questões com uso do Visual Studio Code ou ambiente similar.
- Teste seus códigos antes de trazer a resposta para cá.
- Cuidado com o uso de ChatGPT (e similares), pois entregar algo só para ganhar nota não fará você aprender. Não seja dependente da máquina!
- Ao final, publique seu arquivo lista_01.md com as respostas em seu repositório, e envie o link pela Adalove. 

# Questões objetivas
**1) Considerando a execução do código abaixo, indique a alternativa correta e justifique sua resposta.**
```javascript
console.log(x);
var x = 5;
console.log(y);
let y = 10;
```
a) A saída será undefined seguido de erro 

b) A saída será 5 seguido de 10

c) A saída será undefined seguido de undefined

d) A saída será erro em ambas as linhas que utilizam console.log

**REPOSTA**: Letra A. Porque o código está tentando executar algo que não foi declarado ainda, com isso ele dá ``undefined``, logo em seguida ele tenta printar outra variável que também não foi definida, causando o erro.


**2) O seguinte código JavaScript tem um erro que impede sua execução correta. Analise e indique a opção que melhor corrige o problema. Justifique sua resposta.**

```javascript
function soma(a, b) {
    if (a || b === 0) {
        return "Erro: número inválido";
    }
    return a + b;
}
console.log(soma(2, 0));
```

a) Substituir if (a || b === 0) por if (a === 0 || b === 0)

b) Substituir if (a || b === 0) por if (a === 0 && b === 0)

c) Substituir if (a || b === 0) por if (a && b === 0)

d) Remover completamente a verificação if (a || b === 0)


**Reposta**: Letra B. Porque nesta condição iremos utlizar a condição ``AND`` ou ``E`` para que os dois números tem que ser equivalente à 0, porém neste caso apenas a variável B consegue suprir esta condição.

______
**3) Ao executar esse código, qual será a saída no console? Indique a alternativa correta e justifique sua resposta.**
```javascript
function calcularPreco(tipo) {
    let preco;

    switch(tipo) {
        case "eletrônico":
            preco = 1000;
        case "vestuário":
            preco = 200;
            break;
        case "alimento":
            preco = 50;
            break;
        default:
            preco = 0;
    }

    return preco;
}

console.log(calcularPreco("eletrônico"));
```

a) O código imprime 1000.

b) O código imprime 200.

c) O código imprime 50.

d) O código gera um erro.


**Resposta**: Letra B. Porque no primeiro ``CASE`` não tem ``BREAK`` assim faz com que pule para o próximo ``CASE`` em que o valor do ``PRECO`` será 200.

______
**4) Ao executar esse código, qual será a saída no console? Indique a alternativa correta e justifique sua resposta.**
```javascript
let numeros = [1, 2, 3, 4, 5];

let resultado = numeros.map(x => x * 2).filter(x => x > 5).reduce((a, b) => a + b, 0);

console.log(resultado);
```
a) 0

b) 6

c) 18

d) 24

**Resposta**: Letra D. Porque a função .map(x => x * 2) tem o intuito de multiplicar todos os números do array por 2, assim o array passa a ser ``[2,4,6,8,10]``, depois disso tem a função .filter(x => x > 5) que tem o intuito de apenas selecionar os números maiores que 5, assim o array passa a ser ``[6,8,10]`` e por fim a função ``.reduce((a, b) => a + b, 0)`` tem o intuito de somar todos esses 3 números, resultando em 24.
______
**5) Qual será o conteúdo do array lista após a execução do código? Indique a alternativa correta e justifique sua resposta.**

```javascript
let lista = ["banana", "maçã", "uva", "laranja"];
lista.splice(1, 2, "abacaxi", "manga");
console.log(lista);
```

a) ["banana", "maçã", "uva", "abacaxi", "manga", "laranja"]

b) ["banana", "abacaxi", "manga"]

c) ["banana", "abacaxi", "manga", "laranja"]

d) ["banana", "maçã", "uva", "abacaxi", "manga"]

**Reposta**: Letra C. Porque a função ``.splice(1, 2, "abacaxi", "manga");`` tem o intuito de remover os itens do array na posição 1 e 2, no caso seriam as frutas maçã e uva, e logo após isto elas seriam substituídas pelas as frutas abacaxi e manga.
______
**6) Abaixo há duas afirmações sobre herança em JavaScript. Indique a alternativa correta e justifique sua resposta**

I. A herança é utilizada para compartilhar métodos e propriedades entre classes em JavaScript, permitindo que uma classe herde os métodos de outra sem a necessidade de repetir código.  
II. Em JavaScript, a herança é implementada através da palavra-chave `extends`.


a) As duas afirmações são verdadeiras, e a segunda justifica a primeira.

b) As duas afirmações são verdadeiras, mas a segunda não justifica a primeira.

c) A primeira afirmação é verdadeira, e a segunda é falsa.

d) A primeira afirmação é falsa, e a segunda é verdadeira.

**Reposta**: Letra B. Porque a segunda afirmação não está necessariamente explicando o porque de a herança ser tão benéfica.
______
**7) Dado o seguinte código. Indique a alternativa correta e justifique sua resposta.**

```javascript
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

class Funcionario extends Pessoa {
  constructor(nome, idade, salario) {
    super(nome, idade);
    this.salario = salario;
  }

  apresentar() {
    super.apresentar();
    console.log(`Meu salário é R$ ${this.salario}.`);
  }
}
```


I) A classe Funcionario herda de Pessoa e pode acessar os atributos nome e idade diretamente.  
II) O método `apresentar()` da classe Funcionario sobrepõe o método `apresentar()` da classe Pessoa, mas chama o método da classe pai usando `super`.  
III) O código não funciona corretamente, pois Funcionario não pode herdar de Pessoa como uma classe, já que o JavaScript não suporta herança de classes.

Quais das seguintes afirmações são verdadeiras sobre o código acima?

a) I e II são verdadeiras.

b) I, II e III são verdadeiras.

c) Apenas II é verdadeira.

d) Apenas I é verdadeira.

**Resposta**: Números 1 e 2. Justificativa 1: elas podem ser acessadas diretamente porque dentro do ``constructor()`` da ``classe Funcionário`` ele puxa as informações utilizando a função ``super``.
Justificativa 2: A classe Funcionario sobrescreve o método ``apresentar()`` da classe Pessoa. No entanto, ela utiliza ``super.apresentar()`` para invocar o método da classe pai, garantindo que a mensagem de apresentação da ``classe Pessoa`` seja exibida antes de adicionar informações específicas de Funcionario.
______

**8) Analise as afirmações a seguir. Indique a alternativa correta e justifique sua resposta.**

**Asserção:** O conceito de polimorfismo em Programação Orientada a Objetos permite que objetos de diferentes tipos respondam à mesma mensagem de maneiras diferentes.  
**Razão:** Em JavaScript, o polimorfismo pode ser implementado utilizando o método de sobrecarga de métodos em uma classe.

a) A asserção é falsa e a razão é verdadeira.

b) A asserção é verdadeira e a razão é falsa.

c) A asserção é verdadeira e a razão é verdadeira, mas a razão não explica a asserção.

d) A asserção é verdadeira e a razão é verdadeira, e a razão explica a asserção.

**Resposta**: Letra B. Porque o conceito de polimorfismo em ``POO`` realmente permite que objetos de diferentes tipos respondam à mesma mensagem de maneiras distintas. Esse é um dos pilares do paradigma da ``POO``, onde a mesma interface pode ser implementada de formas variadas dependendo do objeto.
Já a segunda afirmação é falsa porque o polimorfismo não é implementado por meio da sobrecarga de métodos, pois a linguagem não suporta sobrecarga de métodos nativamente.
______

# Questões dissertativas
9) O seguinte código deve retornar a soma do dobro dos números de um array, mas contém erros. Identifique os problema e corrija o código para que funcione corretamente. Adicione comentários ao código explicado sua solução para cada problema.

```javascript
function somaArray(numeros) {

    for (i = 0; i < numeros.size; i++) {
        soma = 2*numeros[i];
    }
    return soma;
}
console.log(somaArray([1, 2, 3, 4]));
```

**Resposta**:
```javascript
var numeros = [1, 2, 3, 4]; //Criando a variável numeros, já que ela não estava definida

function somaArray(numeros) { 

  let soma = 0; //Criando a variável soma, já que ela não estava definida
  for ( i = 0; i < numeros.length; i++) {
      soma += 2*numeros[i];  } //Multiplicando por 2 o valor de cada elemento do array e somando os resultados
  return soma;
}
console.log(somaArray(numeros)); //Imprimindo o resultado da função somaArray
```
______
10) Crie um exemplo prático no qual você tenha duas classes:

- Uma classe `Produto` com atributos `nome` e `preco`, e um método `calcularDesconto()` que aplica um desconto fixo de 10% no preço do produto.
- Uma classe `Livro` que herda de `Produto` e modifica o método `calcularDesconto()`, aplicando um desconto de 20% no preço dos livros.

Explique como funciona a herança nesse contexto e como você implementaria a modificação do método na classe `Livro`.

**Resposta**:
```javascript
// Definição da classe Produto
class Produto {
  // Construtor da classe Produto
  constructor(nome, preco) {
    this.nome = nome; // Nome do produto
    this.preco = preco; // Preço do produto
  }

  // Método para calcular o desconto do produto
  calcularDesconto(preco, desconto) {
    desconto = 0.1; // Define o desconto padrão como 10%
    return preco - (preco * desconto); // Retorna o preço com desconto aplicado
  }
}

// Definição da classe Livro que herda da classe Produto
class Livro extends Produto {
  // Método sobrescrito para calcular o desconto específico para livros
  calcularDesconto(preco, desconto) {
    desconto = 0.2; // Define o desconto para livros como 20%
    return preco - (preco * desconto); // Retorna o preço com desconto aplicado
  }
}

// Criação de uma instância da classe Livro
const livro = new Livro('Livro', 100);

// Exibe no console o preço do livro com o desconto aplicado
console.log(livro.calcularDesconto(100));
```
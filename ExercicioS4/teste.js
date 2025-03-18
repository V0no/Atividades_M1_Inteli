// Definição da classe Produto
class Produto {
    constructor(nome, preco) {
      this.nome = nome;
      this.preco = preco; // Preço do produto
    }
    calcularDesconto() { // Sem parâmetros, usa o atributo da instância
      const desconto = 0.1; // Desconto fixo de 10%
      return this.preco - (this.preco * desconto); // Calcula o preço com desconto
    }
  }
  // Definição da classe Livro que herda de Produto
  class Livro extends Produto {
    calcularDesconto() { // Sobrescreve o método da classe pai
      const desconto = 0.2; // Desconto fixo de 20% para livros
      return this.preco - (this.preco * desconto); // Calcula o preço com desconto
    }
  }
  // Criação de uma instância da classe Livro
  const livro = new Livro('Livro', 100);
  console.log(livro.calcularDesconto()); // Resultado: 80
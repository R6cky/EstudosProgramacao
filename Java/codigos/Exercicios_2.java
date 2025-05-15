public class Exercicios_2 {

    public static void main(String[] args) {
        //Crie um programa que realize a média de duas notas decimais e exiba o resultado.
        double n1 = 8.1;
        double n2 = 3.5;
        int media = (int) (n1+n2) / 2;
        System.out.println("Media das notas: " + media);

        //**********************************************************************************************************
        //Declare uma variável do tipo double e uma variável do tipo int. Faça o casting da variável
        // double para int e imprima o resultado.

        double value1 = 9.3;
        int value2 = 2;

        int cast = (int) value1;

        System.out.println(cast);
        //**********************************************************************************************************
        //Declare uma variável do tipo char (letra) e uma variável do tipo String (palavra).
        //Atribua valores a essas variáveis e concatene-as em uma mensagem.

        String msg = "O tamanho da camisa do aluno é: ";
        char letra = 'M';

        System.out.printf("""
                            Informações do aluno: 
                            %s %s  
                            """, msg, letra);

        //**********************************************************************************************************
        //Declare uma variável do tipo double precoProduto e uma variável do tipo int (quantidade). Calcule o valor
        // total multiplicando o preço do produto pela quantidade e apresente o resultado em uma mensagem.

        double precoProduto = 54.90;
        int quantidade = 10;

        double result  = precoProduto * quantidade;

        System.out.printf("Total a pagar: %.2f" , result);

        //**********************************************************************************************************
        //Declare uma variável do tipo double valorEmDolares. Atribua um valor em dólares a essa variável. Considere
        // que o valor de 1 dólar é equivalente a 4.94 reais. Realize a conversão do valor em dólares para reais e
        // imprima o resultado formatado.

        double valorEmDolares = 89;
        double valorEmReais = 4.94;
        double resultado = valorEmDolares * valorEmReais;

        System.out.printf("\n\nValor convertido em reais: %.2f \n\n", resultado);


        //**********************************************************************************************************
        //Declare uma variável do tipo double precoOriginal. Atribua um valor em reais a essa variável, representando o
        //preço original de um produto. Em seguida, declare uma variável do tipo double percentualDesconto e atribua um
        //valor percentual de desconto ao produto (por exemplo, 10 para 10%). Calcule o valor do desconto em reais,
        //aplique-o ao preço original e imprima o novo preço com desconto.

        double precoOriginal = 45.60;
        int percentualDesconto = 15;
        double precoFinalComDesconto = (precoOriginal - ((percentualDesconto/100)*precoOriginal));
        String saida = """
                        Preço original: %.2f
                        Desconto de a ser aplicado: %d
                        Preço final com o desconto aplicado: %.2f
                        """.formatted(precoOriginal, percentualDesconto, precoFinalComDesconto);
        System.out.printf(saida);


    }
}

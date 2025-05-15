package ExerciciosControleDeAcesso;

public class Main {
    public static void main(String[] args) {

        // 1 - Conta bancária
        System.out.println("1 - Conta bancária");
        ContaBancaria conta1 = new ContaBancaria();

        conta1.setNumeroConta(123456789-90);
        conta1.setSaldo(30000);
        conta1.titular = "Cleiton";


        System.out.println(conta1.getTitular());
        System.out.println(conta1.getNumeroConta());
        System.out.println(conta1.getSaldo());
        System.out.println("*************************************************");


        // 2 - Idade pessoa
        System.out.println("Idade pessoa");
        IdadePessoa idPessoa = new IdadePessoa();

        idPessoa.setNome("Cleber");
        idPessoa.setIdade(12);

        System.out.println(idPessoa.getNome());
        System.out.println(idPessoa.getIdade());
        idPessoa.verificarIdade((idPessoa.getIdade()));
        System.out.println("*************************************************");


        // 3 -  Produto
        System.out.println(" 3 - Produto");

        Produto produto1 = new Produto();

        produto1.setNome("Elisa");
        produto1.setPreco(100F);

        System.out.println(produto1.getNome());
        System.out.println(produto1.getPreco());
        produto1.aplicarDesconto(40.34F);
        System.out.println("*************************************************");


        // 4 - Aluno
        System.out.println("4 - Aluno");

        Aluno aluno1 = new Aluno();

        aluno1.setNome("Polyana");
        aluno1.setNotas(10);
        aluno1.setNotas(90);
        aluno1.setNotas(20);


        System.out.println(aluno1.getNome());;
        System.out.println(aluno1.getNotas());;
        aluno1.calcularmedia();
        System.out.println("*************************************************");

        // 5 - Livro
        System.out.println("5 - Livro");
        Livro livro1 = new Livro();

        livro1.setTitulo("ACDC the history");
        livro1.setAutor("Angus young");
        livro1.exibirDetalhes();




    }
}

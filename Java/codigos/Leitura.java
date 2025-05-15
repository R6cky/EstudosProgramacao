import java.util.Scanner;

public class Leitura {
    public static void main(String[] args) {
        Scanner leitura = new Scanner(System.in);

        System.out.println("Digite seu filme favorito: ");
        String filme = leitura.nextLine();
        System.out.println("A string digitada na entrada foi: " + filme);
        System.out.println("----------------------------------------------");
        System.out.println("Qual o ano de lançamento? ");
        int anoLancamento = leitura.nextInt();
        System.out.println("O ano de lançamento digitado foi: " + anoLancamento);
        System.out.println("----------------------------------------------");
        System.out.println("Diga a sua avaliação para o filme: ");
        double avaliacaoDoFilme = leitura.nextDouble();
        System.out.println("A avaliação do filme foi: " + avaliacaoDoFilme);

        leitura.close();

    }
}
//Doc SCANNER
//https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/Scanner.html
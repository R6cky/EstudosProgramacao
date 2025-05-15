import java.util.Random;
import java.util.Scanner;

public class NumeroAleatorio {
    public static void main(String[] args) {
        int jogada = 0;
        int randomicos = new Random().nextInt(100);
        Scanner entrada = new Scanner(System.in);

        for (int i = 5; i >=0 ; i--) {
            if(i == 0){
                System.out.println("Suas chances acabaram, não foi desta vez. :( ");
                break;
            }
            System.out.println("Você tem apenas 5 chances para tentar assertar qual o número sorteado! ");
            System.out.println("Tentativa %d".formatted(i));
            System.out.println("Escolha um número de 0 a 100.");
            jogada = entrada.nextInt();
            if(jogada == randomicos){
                System.out.println("""
                                --------------------------
                                Parabéns, você acertou.
                                Número sorteado: %d
                                Você digitou o número %d.
                                --------------------------
                        """.formatted(randomicos, jogada));
                break;
            }else {
                System.out.println("""
                                    --------------------------
                                    Que pena, você errou.
                                    Número sorteado: %d
                                    Você digitou o número %d.
                                    --------------------------
                                    """.formatted(randomicos, jogada));


            }

       }
    }
}

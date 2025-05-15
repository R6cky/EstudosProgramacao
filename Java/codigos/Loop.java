import java.util.Scanner;

public class Loop {
    public static void main(String[] args) {
        double mediaNotas = 0;
       // double nota = 0;
       // int quantNotas = 0;
        Scanner scn = new Scanner(System.in);

        for (int i = 0; i < 3; i++){
            System.out.println("Digite a nota: ");
            mediaNotas += scn.nextDouble();
        }
        System.out.println("Soma das notas: " + mediaNotas);
        System.out.printf("Média das notas: %.2f",  mediaNotas/3);



        

    }
}

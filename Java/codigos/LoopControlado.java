import java.util.Scanner;

public class LoopControlado {
    public static void main(String[] args) {
        double nota = 0;
        double input = 0;
        int control = 0;
        double media = 0;

        Scanner scnr = new Scanner(System.in);

        for (int i = 0; input != -1; i++){
                System.out.println("Digite a nota: ");
                input = scnr.nextDouble();
                if(input == -1){
                    if (nota != 0 || control != 0){
                        media = (nota / control);
                        break;
                    }
                    break;
                }


                nota += input;
                control++;
        }



        //System.out.println("A soma das notas é de: " + nota);
        System.out.println("""
                        A soma das notas é %.2f
                        A média das notas é: %.2f
                        Foram digitadas %d notas
                """.formatted(nota, media, control));
    }
}

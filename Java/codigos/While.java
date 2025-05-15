import java.util.Scanner;

public class While {
    public static void main(String[] args) {
        int count = 0;
        int note = 0;
        Scanner input = new Scanner(System.in);


        while (count < 3){
            System.out.println("Digite a nota " + (count+1));
            int point = input.nextInt();
            note += point;
            count++;
        }
        System.out.println("A soma das notas é: " + note);
        System.out.println("A média das notas é: " + (note/3));
    }
}

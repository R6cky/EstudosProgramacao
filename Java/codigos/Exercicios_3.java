import java.util.Scanner;

public class Exercicios_3 {
    public static void main(String[] args) {
//       1 - Crie um programa que solicite ao usuário digitar um número. Se o número for positivo, exiba
//        "Número positivo", caso contrário, exiba "Número negativo".

        Scanner input = new Scanner(System.in);
//        System.out.println("Digite um número: ");
//        double entrada = input.nextDouble();
//        if (entrada == 0){
//                System.out.println("Número inválido.");
//        }else if(entrada > 0){
//            System.out.println("Número positivo.");
//        }else {
//            System.out.println("Número negativo.");
//        }

        //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

        // 2 - Peça ao usuário para inserir dois números inteiros. Compare os números e imprima uma
        // mensagem indicando se são iguais, diferentes, o primeiro é maior ou o segundo é maior.

//        Scanner input2 = new Scanner(System.in);
//
//        System.out.println("Digite o número 1: ");
//        double n1 = input2.nextDouble();
//
//        System.out.println("Digite o número 2: ");
//        double n2 = input2.nextDouble();
//
//
//        if(n1 == n2){
//            System.out.println("Os números são iguais.");
//        }else {
//            System.out.println("Os números são diferentes.");
//            if(n1 > n2){
//                System.out.println("O primeiro número é maior");
//            }else {
//                System.out.println("O segundo número é maior");
//            }
//        }
        //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


        //3 - Crie um menu que oferece duas opções ao usuário: "1. Calcular área do quadrado" e "2. Calcular
        // área do círculo". Solicite a escolha do usuário e realize o cálculo da área com base na opção selecionada.

//        double raioDoCirculo; //= Math.PI * diametroDoCirculo/2 * Math.pow(diametroDoCirculo/2, 2) ;
//        double ladoDoQuadrado; //(Math.pow(ladoDoQuadrado, 2));
//
//
//        System.out.println("------------------------------");
//        System.out.println("SELECIONE AOPÇÃO DESEJADA: ");
//        System.out.println("------------------------------");
//        System.out.println("1. Calcular área do quadrado");
//        System.out.println("2. Calcular área do círculo.");
//
//        double opc = input.nextDouble();
//
//        if(opc == 1){
//            System.out.println("Para calcular a área do quadrado insira a medida dos lados da forma: ");
//            ladoDoQuadrado = input.nextDouble();
//            double areaDoQuadrado = Math.pow(ladoDoQuadrado, 2);
//            System.out.println("""
//                                O quadrado com a medida de %.2f
//                                possui uma área de %.2f
//                                """.formatted(ladoDoQuadrado, areaDoQuadrado));
//
//        }else if (opc == 2){
//            System.out.println("Para calcular a área do círculo insira o raio da forma: ");
//            raioDoCirculo = input.nextDouble();
//            double areaDoCirculo = Math.PI * (Math.pow(raioDoCirculo, 2));
//            System.out.println("""
//                                Um círculo com o raio de %.2f
//                                possui uma área de %.2f
//                                """.formatted(raioDoCirculo, areaDoCirculo));
//        }


        //Crie um programa que solicite ao usuário um número e exiba a tabuada desse número de 1 a 10.

//        System.out.println("Digite um número de 1 a 10.");
//        int num = input.nextInt();
//
//        for (int i = 0; i <= 10; i++) {
//            System.out.printf("TABUADA DO NÚMERO %d ", num);
//            System.out.println("\nADIÇÃO");
//            for (int j = 0; j <= 10; j++) {
//                System.out.println(num + "+" + j + "=" + (num+j));
//            }
//            System.out.println("-------------------------------");
//            System.out.println("SUBTRAÇÃO");
//            for (int k = 0; k <= 10; k++) {
//                if(num > k){
//                    System.out.println(num + "-" + k + "=" + (num-k));
//                }else if(k > num && num != 0 && k !=0){
//                    System.out.println(k + "-" + num + "=" + (k-num));
//                }
//            }
//            System.out.println("-------------------------------");
//            System.out.println("MULTIPLICAÇÃO");
//            for (int l = 0; l <= 10; l++) {
//                System.out.println(num + "x" + l + "=" + (num*l));
//            }
//            System.out.println("-------------------------------");
//            System.out.println("DIVISÃO");
//            for (int m = 0; m <= 10; m++) {
//                if(num > m && num != 0 && m !=0){
//                    System.out.println(num + "/" + m + "=" + (num/m));
//                }else if(m > num && num != 0 && m !=0){
//                    System.out.println(m + "/" + num + "=" + (m/num));
//                }
//
//            }


//    }


        //5 - Crie um programa que solicite ao usuário a entrada de um número inteiro.
        // Verifique se o número é par ou ímpar e exiba uma mensagem correspondente.

//        System.out.println("Digite um número inteiro: ");
//        int num = input.nextInt();
//        if(num % 2 == 0){
//            System.out.println("Número PAR");
//        }else {
//            System.out.println("Número IMPAR");
//        }



        //6 - Crie um programa que solicite ao usuário um número e calcule o fatorial desse número.

        System.out.println("Digite um número");
        int num = input.nextInt();
        int acc = 0;

        for (int i = num; i >= 1 ; i--) {
            if(i != 9){
                acc = num;
                num = acc * i;
                System.out.println(acc + " x " + i + " = "+ num);
            }
        }
        System.out.println("\nFATORIAL: " + num);
    }
}

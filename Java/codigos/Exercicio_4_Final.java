import java.util.Scanner;

public class Exercicio_4_Final {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double saldoConta = 2500;


        String painelDadosCliente = (
                """
                \n
                ******************************************
                 Dados iniciais do cliente
                 
                 Nome:          Cleiton Sousa
                 Tipo de conta: Corrente
                 Saldo inicial R$ %.0f,00
                ******************************************

                """.formatted(saldoConta)
        );

        String painelOperacoes = ("""
                       OPERAÇÕES
                1 - Consultar Saldos
                2 - Receber valor
                3 - Transferir valor
                4 - Sair      
                """);

        //----------------------------------------------------------
        System.out.println(painelDadosCliente);
        System.out.println(painelOperacoes);


        int opcao = 0;



        for (int i = 1; opcao != 4; ) {

            System.out.println("\nDigite a opção desejada: ");
             opcao = sc.nextInt();

             if(opcao == 1){
                 System.out.println("O saldo atual é " + saldoConta );
             }else if (opcao == 2){
                 System.out.println("Informe o valor a receber: ");
                 double  deposito = sc.nextDouble();

                     saldoConta += deposito;
                     System.out.println("Saldo atualizado: R$ " + saldoConta);

             }else if(opcao == 3){
                 System.out.println("Informe o valor a ser transferido: ");
                 double saque = sc.nextDouble();
                 if(saque > saldoConta){
                     System.out.println("Não há saldo o suficiente para fazer essa transferência.");
                 }else {
                     saldoConta -= saque;
                     System.out.println("Saldo atualizado: R$ " + saldoConta);
                 }
             }else {
                 if(opcao != 4){
                     System.out.println("Opção inválida");
                 }
             }


        }

//                if(opcao == 1){
//                    System.out.println("Saldo atual é: %.0f,00".formatted(saldoConta));
//                    System.out.println(painelOperacoes);
//                }else if(opcao == 2){
//                    System.out.println("Informe o valor a receber: ");
//                    double valorRecebido = sc.nextDouble();
//                    saldoConta += valorRecebido;
//                }else if(opcao == 3){
//
//                }else if(opcao == 4){
//
//                }else {
//                    System.out.println("");
//                }
//                System.out.println("Digite a opção desejada: ");




    }


}

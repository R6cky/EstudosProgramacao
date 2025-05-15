package AplicandoHeranca;

import java.util.ArrayList;

public class NumerosPrimos {
     ArrayList<Integer> numerosPrimos = new ArrayList<>();

     public char verificarPrimalidade(int numero){
          int count = 0;

               for (int i = 1; i <= numero; i++) {
                    if(numero % i == 0){
                         count++;
                    }
               }

          if (count == 2) {
               System.out.println("É primo.");
               numerosPrimos.add(numero);
          } else {
               System.out.println("Não é primo.");
          }

          return 0;
     }

     public void listarPrimos(int limite) {
          for (int i = 1; i <= limite; i++) {
               System.out.println( this.verificarPrimalidade(i));;
          }
     }
}

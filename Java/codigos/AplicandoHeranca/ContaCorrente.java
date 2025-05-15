package AplicandoHeranca;

public class ContaCorrente extends ContaBancaria {



    public  void cobrarTarifaMensal(Double tarifa, double saldo){
        double porcentagem = tarifa/100;
        double saldoTarifado = saldo * porcentagem;
        sacar(saldoTarifado);
    }
}

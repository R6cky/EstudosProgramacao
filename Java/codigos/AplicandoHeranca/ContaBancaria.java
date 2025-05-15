package AplicandoHeranca;

public class ContaBancaria {
    private double saldo;

    public void depositar(double valor){
        this.saldo += valor;
    }

    public void sacar(double valor){
        if(saldo > 0 && saldo > valor){
            this.saldo -= valor;
        }else {
            System.out.println("Saldo insuficiente para saque.");
        }
    }

    public double getSaldo(){
        return (saldo);
    }
}

package ExerciciosControleDeAcesso;

public class ContaBancaria {
    private int numeroConta;
    private double saldo;
    public String titular;



    public int getNumeroConta(){
        return numeroConta;
    }

    public double getSaldo(){
        return saldo;
    }

    public String getTitular(){
        return titular;
    }


    public void  setNumeroConta(int data){
        this.numeroConta = data;
    }

    public  void setSaldo(double data){
        this.saldo = data;
    }




}

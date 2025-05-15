package AplicandoHeranca;


public class Main {
    public static void main(String[] args) {

        // EX 1 Carro

//        ModeloCarro car  = new ModeloCarro();
//
//        car.addModel("Ford Mustang");
//        car.addPriceByYear(100.000,350.000, 500.000);
//        car.addModel("Lamborghinni");
//        car.addPriceByYear(1000000, 3000000, 2500000);
//        car.maxPrice();
//        car.minPrice();
//        car.showInfo();



        // EX 2 Animal

//        Gato meugato = new Gato();
//        var meuCachorro = new Cachorro();
//
//        meugato.arranharMoveis();
//        meugato.emitirSom();
//
//        meuCachorro.abanarRabo();
//        meuCachorro.emitirSom();
//

        // EX 3 Conta bancaria

//        ContaCorrente minhaConta = new ContaCorrente();
//
//        minhaConta.depositar(10000);
//        System.out.println(minhaConta.getSaldo());
//        minhaConta.sacar(200);
//        System.out.println(minhaConta.getSaldo());
//        minhaConta.cobrarTarifaMensal((double) 50, minhaConta.getSaldo());
//        System.out.println(minhaConta.getSaldo());


        // 4 Numeros primos

        NumerosPrimos np = new NumerosPrimos();
        np.verificarPrimalidade(55);
        np.listarPrimos(8);



    }


}

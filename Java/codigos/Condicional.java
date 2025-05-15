public class Condicional {
    public static void main(String[] args) {
        int anoLancamento = 2022;
        boolean incluidoNoPlano = true;
        double notaDoFilme = 8.1;
        String tipoPlano = "plus";

        
        if(anoLancamento >= 2022){
            System.out.println("Lançamento que os clientes estão gostando.");
        } else {
            System.out.println("Filme retrô que vale a pena assistir.");
        }

        if (incluidoNoPlano || tipoPlano.equals("plus")){
            System.out.println("Filme liberado");
        }else {
            System.out.println("Deve pagar a locação.");
        }


        if(!incluidoNoPlano && !tipoPlano.equals("plus")){
            System.out.println("Liberado, hahahaha....");
        }else {
            System.out.println("Deve pagar a mensalidade, hahaha...");
        }

        //**********************************************************************
        //SWITCH CASE

        int dia = 3;
        String nomeDia;

        switch (dia){
            case 1:
                nomeDia = "Domingo";
            break;

            case 2:
                nomeDia = "Segunda feira";
            break;

            case 3:
                nomeDia = "Terça feira";
            break;

            case 4:
                nomeDia = "Quarta feira";
            break;

            case 5:
                nomeDia = "Quinta feira";
            break;

            case 6:
                nomeDia = "Sexta feira";
            break;

            case 7:
                nomeDia = "Sábado";
            break;

            default:
                nomeDia = "Dia inválido";
            break;
        }
        System.out.println("O dia " + dia + " é " + nomeDia);
    }
}

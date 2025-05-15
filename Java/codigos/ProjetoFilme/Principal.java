package ProjetoFilme;

public class Principal {
    public static void main(String[] args) {
        Filme filme1 = new Filme();

        filme1.setNome("Poderoso chefão");
        filme1.setAnoLancamento(1993);
        filme1.setDuracaoEminutos(56);
        filme1.setIncluidoNoPlano(true);


        System.out.println(filme1.getNome());
        System.out.println(filme1.getAnoLancamento());
        System.out.println(filme1.getDuracaoEmminutos());
        System.out.println(filme1.getIncluidoNoPlano());
    }
}

package AplicandoOrientacaoAObjetos;

public class Titulos {
    private String nome;
    private int anoLancamento;
    private boolean incluidoNoPlano;
    private int duracaoEmminutos;


    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getAnoLancamento() {
        return anoLancamento;
    }

    public void setAnoLancamento(int anoLancamento) {
        this.anoLancamento = anoLancamento;
    }

    public boolean isIncluidoNoPlano() {
        return incluidoNoPlano;
    }

    public void setIncluidoNoPlano(boolean incluidoNoPlano) {
        this.incluidoNoPlano = incluidoNoPlano;
    }

    public int getDuracaoEmminutos() {
        return duracaoEmminutos;
    }

    public void setDuracaoEmminutos(int duracaoEmminutos) {
        this.duracaoEmminutos = duracaoEmminutos;
    }
}

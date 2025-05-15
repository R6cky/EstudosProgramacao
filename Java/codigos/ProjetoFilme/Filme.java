package ProjetoFilme;

public class Filme {
    private String nome;
    private int anoLancamento;
    private boolean incluidoNoPlano;
    private int duracaoEmminutos;

    public void setNome(String data){
        this.nome = data;
    }

    public void setAnoLancamento(int data){
        this.anoLancamento = data;
    }

    public void setIncluidoNoPlano(boolean data){
        this.incluidoNoPlano = data;
    }

    public void setDuracaoEminutos(int data){
        this.duracaoEmminutos = data;
    }


    public String getNome(){
        return nome;
    }

    public int getAnoLancamento(){
        return anoLancamento;
    }

    public int getDuracaoEmminutos(){
        return duracaoEmminutos;
    }

    public boolean getIncluidoNoPlano(){
        return incluidoNoPlano;
    }






}

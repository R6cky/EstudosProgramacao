package ExerciciosControleDeAcesso;

public class IdadePessoa {
    private  String nome;
    private int idade;


    public String getNome(){
        return nome;
    }

    public int getIdade(){
        return idade;
    }



    public void setIdade(int data){
        this.idade = data;
    }

    public void setNome(String data){
        this.nome = data;
    }

    public void verificarIdade(int data){
        if(data >= 18){
            System.out.println("Maior de idade.");
        }else {
            System.out.println("Menor de idade.");
        }
    }
}

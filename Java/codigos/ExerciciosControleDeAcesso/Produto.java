package ExerciciosControleDeAcesso;

public class Produto {
    private String nome;
    private float preco;

    public String getNome(){
        return nome;
    }

    public float getPreco(){
        return preco;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }


    public void setPreco(float preco) {
        this.preco = preco;
    }

    public void aplicarDesconto(float valor){
        float desconto = (valor /100) * preco;
        float precoComDesconto = preco - desconto;
        System.out.println("""
                            Desconto: %.0f
                            Valor do desconto: %.2f
                            Preço com o desconto aplicado: %.2f
                            """.formatted(valor, desconto,precoComDesconto));

    }



}

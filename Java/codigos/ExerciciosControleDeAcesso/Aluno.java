package ExerciciosControleDeAcesso;

import java.util.Scanner;

public class Aluno {
    private String nome;
    private double notas;
    Scanner sc = new Scanner(System.in);




    public String getNome() {
        return nome;
    }

    public double getNotas() {
        return notas;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setNotas(double notas) {
//        for (int i = 1; i <= 3; i++) {
//            System.out.println("Digite a nota: " + i + ": ");
//            double notaAluno = sc.nextDouble();
//            this.notas += notaAluno;
//        }
        this.notas += notas;

    }

    public void calcularmedia(){
        double mediaNotas = notas/3;
        System.out.println("Média das notas: " + mediaNotas);
    }
}

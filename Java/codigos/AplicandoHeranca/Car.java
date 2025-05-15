package AplicandoHeranca;

public class Car {
    private String model;
    private double priceYear1;
    private double priceYear2;
    private double priceYear3;


    public void addModel(String model) {
        this.model = model;
    }


    public void addPriceByYear(double priceYear1, double priceYear2, double priceYear3) {
        this.priceYear1 = priceYear1;
        this.priceYear2 = priceYear2;
        this.priceYear3 = priceYear3;
    }


    public void showInfo() {
        System.out.println("Informações do veículo");
        System.out.println("Modelo: " + model);
        System.out.println("Preço ano 1: " + priceYear1);
        System.out.println("Preço ano 2: " + priceYear2);
        System.out.println("Preço ano 3: " + priceYear3);
        System.out.println("maior preço: " + maxPrice());
        System.out.println("Menor preço: " + minPrice());

    }

    public String minPrice() {
        if (priceYear1 < priceYear2 && priceYear1 < priceYear3) {
            return ("Menor preço é no ano 1, sendo de " + priceYear1);
        } else if (priceYear2 < priceYear1 && priceYear2 < priceYear3) {
            return ("Menor preço é no ano 2, sendo de " + priceYear2);
        } else if (priceYear3 < priceYear2 && priceYear3 < priceYear1) {
            return ("Menor preço é no ano 3, sendo de " + priceYear3);
        } else {
            if (priceYear1 == priceYear2) {
                return ("Preços iguais nos anos: " + priceYear1 + " e " + priceYear2);
            } else if (priceYear2 == priceYear3) {
                return ("Preços iguais nos anos: " + priceYear2 + " e " + priceYear3);
            } else {
                return ("Preços iguais nos anos: " + priceYear1 + " e " + priceYear3);
            }
        }
    }

    public String maxPrice() {
        if (priceYear1 > priceYear2 && priceYear1 > priceYear3) {
            return ("Maior preço é o ano 1, sendo de " + priceYear1);
        } else if (priceYear2 > priceYear1 && priceYear2 > priceYear3) {
            return ("Maior preço é o ano 2, sendo de " + priceYear2);
        } else if (priceYear3 > priceYear2 && priceYear3 > priceYear1) {
            return ("Maior preço é o ano 3, sendo de " + priceYear3);
        } else {
            if (priceYear1 == priceYear2) {
                return ("Preços iguais entre os anos: " + priceYear1 + " e " + priceYear2);
            } else if (priceYear2 == priceYear3) {
                return ("Preços iguais entre os anos: " + priceYear2 + " e " + priceYear3);
            } else {
                return ("Preços iguais entre os anos: " + priceYear1 + " e " + priceYear3);
            }
        }
    }
}

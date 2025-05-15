public class aula1 {
    public static void main(String[] args) {
        String a = "12345";
        String b = "hello";

        System.out.println("A " + a + " e " + "B " + b);

        System.out.println(a == b);
        System.out.println(a.equals(b));

        if( a.equals("12345")){
            System.out.println("É igual, a senha está correta.");
    }else {
            System.out.println("Não é igual");
        }


        //-----------------------------------------------------------

        String textBlock = """
            Hello
            World
            Im here
            Today
            
            """;


        System.out.println(textBlock);

        //-----------------------------------------------------------

        String firstName = "Cleiton";
        int age = 30;
        double weight = 1.71;


        System.out.println("""
                            Hello, my name is %s
                            I have %d years old
                            and my weight is %.2f
                            """.formatted(firstName, age, weight));



//        double media =  9 / 2;
//        System.out.print(media);


        // ESTUDAR SOBRE CASTING EM JAVA


        //------------------------------------------------
        int temperatura = 25;
        double fah = (temperatura * 1.8) + 32;

        System.out.printf("""
                Temperatura em ºC: %d
                Temperatura em  F: %.0fº
                """, temperatura,  fah);

    }







}

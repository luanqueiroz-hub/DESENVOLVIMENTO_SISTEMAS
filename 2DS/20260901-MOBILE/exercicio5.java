public class Exercicio5 {

    public double somar(double numero1, double numero2) {
        return numero1 + numero2;
    }

    public double subtrair(double numero1, double numero2) {
        return numero1 - numero2;
    }

    public double multiplicar(double numero1, double numero2) {
        return numero1 * numero2;
    }

    public double dividir(double numero1, double numero2) {
        if (numero2 == 0) {
            System.out.println("Não é possível dividir por zero.");
            return 0;
        }

        return numero1 / numero2;
    }

    public static void main(String[] args) {
        Exercicio5 calculadora = new Exercicio5();

        double numero1 = 10;
        double numero2 = 5;

        System.out.println("10 + 5 = " + calculadora.somar(numero1, numero2));
        System.out.println("10 - 5 = " + calculadora.subtrair(numero1, numero2));
        System.out.println("10 * 5 = " + calculadora.multiplicar(numero1, numero2));
        System.out.println("10 / 5 = " + calculadora.dividir(numero1, numero2));
    }
}
public class Exercicio2 {

    public void calcularRaizes(double a, double b, double c) {
        double delta = (b * b) - (4 * a * c);

        if (a == 0) {
            System.out.println("O valor de A não pode ser zero.");
        } else if (delta < 0) {
            System.out.println("A equação não possui raízes reais.");
        } else if (delta == 0) {
            double x = -b / (2 * a);
            System.out.println("A raiz da equação é: " + x);
        } else {
            double x1 = (-b + Math.sqrt(delta)) / (2 * a);
            double x2 = (-b - Math.sqrt(delta)) / (2 * a);

            System.out.println("x1 = " + x1);
            System.out.println("x2 = " + x2);
        }
    }

    public static void main(String[] args) {
        Exercicio2 exercicio = new Exercicio2();
        exercicio.calcularRaizes(1, -5, 6);
    }
}
public class Exercicio4
{
    public static void main (String[] args) 
    {
        double a = 1;
        double b = -5;
        double c = 6;

        double delta = (b * b) - (4 * a * c);

        double x1 = (-b + Math.sqrt(delta)) / (2 * a);
        double x2 = (-b - Math.sqrt(delta)) / (2 * a);

        System.out.println("O valor de Delta é: " + delta);
        System.out.println("O valor de x1 é: " + x1);
        System.out.println("O valor de x2 é: " + x2);
    }
}

public class PrimeiroPrograma {
    public static void main(String[] args) {
        // 1. Defina os valores da equação (ax² + bx + c = 0)
        double a = 1;
        double b = -5;
        double c = 6;

        // 2. Calcule o Delta
        double delta = (b * b) - (4 * a * c);

        // 3. Calcule as duas respostas (x1 e x2)
        double x1 = (-b + Math.sqrt(delta)) / (2 * a);
        double x2 = (-b - Math.sqrt(delta)) / (2 * a);

        // 4. Mostre o resultado na tela
        System.out.println("O valor de Delta é: " + delta);
        System.out.println("O valor de x1 é: " + x1);
        System.out.println("O valor de x2 é: " + x2);
    }
}

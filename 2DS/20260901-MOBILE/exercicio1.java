public class Exercicio1 {

    public void mostrarNumeros() {
        for (int numero = 3; numero < 100; numero += 3) {
            System.out.println(numero);
        }
    }

    public static void main(String[] args) {
        Exercicio1 exercicio = new Exercicio1();
        exercicio.mostrarNumeros();
    }
}
public class Exercicio3 {

    public long calcularFatorial(int numero) {
        long resultado = 1;

        for (int i = numero; i >= 1; i--) {
            resultado = resultado * i;
        }

        return resultado;
    }

    public static void main(String[] args) {
        Exercicio3 exercicio = new Exercicio3();

        int numero = 4;
        long resultado = exercicio.calcularFatorial(numero);

        System.out.println("O fatorial de " + numero + " é " + resultado);
    }
}
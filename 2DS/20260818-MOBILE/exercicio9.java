import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

public class Main {
    public static void main(String[] args) {
        
        LocalDate dataNascimento = LocalDate.of(2001, 1, 13);
        
        LocalDate hoje = LocalDate.now();
        
        long diasVividos = ChronoUnit.DAYS.between(dataNascimento, hoje);

        System.out.println("Você já viveu: " + diasVividos + " dias!"); 
    }
}

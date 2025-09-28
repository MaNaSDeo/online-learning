
import java.util.Scanner;

public class ReadKeyboard {

    public static void main(String arg[]) {
        Scanner sc = new Scanner(System.in);
        // int x, y, z;

        // System.out.println("Enter 2 Numbers");
        // x = sc.nextInt();
        // y = sc.nextInt();

        // z = x + y;

        // System.out.println("Sum is: " + z);
        sc.useRadix(2);
        int x = sc.nextInt();
        System.out.println(x);
    }
}

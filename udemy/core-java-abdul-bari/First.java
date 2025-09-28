// Java program to print "Hello World" on the screen

// The next line is optional because java.lang is imported automatically.
// It contains core classes like String, System, Math, etc.
import java.lang.*;

// This is the name of the class.
// File name should match the class name (First.java).
class First {

    // main() is the entry point of every Java program.
    // Program execution starts from here.
    /**
     * public static void main(String args[]) means:
     * “Here is a method called (main).
     * It’s visible to everyone (public),
     * it can be called without creating an object (static),
     * it doesn’t return anything (void),
     * and it accepts an array of text values (String args[]).”
     */
    public static void main(String args[]) {
        // String args[] = an array of Strings, usually used to store command - line
        // System → a built-in class in java.lang package
        // out → a static object inside System (represents console output)
        // println → prints text and moves cursor to the next line
        System.out.println("Hello World");

        // ↑ This prints "Hello World" on the screen
    }
}

/*
------------------- Execution Flow -------------------

1. JVM (Java Virtual Machine) starts execution from the main() method.
2. Inside main(), it finds System.out.println("Hello World");
3. This line prints the text Hello World to the console.
4. Program ends after finishing main().

Output:
Hello World

First.java  --(javac)-->  First.class  --(java JVM)-->  Hello World (console)

------------------------------------------------------
 */

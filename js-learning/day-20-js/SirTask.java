
package sirtask;
import java.util.Scanner;

public class SirTask {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        System.out.println("enter arr lenght");
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int a[]= new int[n]; 
        
        
        System.out.println("enter AARAY");
        
        for(int i =0 ; i<n;i++){
            a[i]=sc.nextInt();
            
        }
        int sum = 0;
        int sum2 = 0;
        for(int i=0 ; i<a.length;i++){
        int temp = a[i];
        for(int j = 2 ; j<temp;j++){
        if(temp % j == 0){
        sum++;
        }
        if (sum == 0){
            System.out.println(" prime no"+ temp);
            System.out.println("sum "+sum2);
        }
        sum = 0;
    }
        }
                                    
}
    }

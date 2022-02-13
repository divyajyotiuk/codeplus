/*package whatever //do not write package name here */

import java.util.*;
import java.lang.*;
import java.io.*;

class GFG {
	public static void main (String[] args) throws IOException{
		//code
	
	    BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); 
		
		int t = Integer.parseInt(br.readLine());
		while(t-- > 0)
		{
		
		int n = Integer.parseInt(br.readLine());
		String line = br.readLine();
	    String[] strs = line.split(" ");
	    int[] arr = new int[n];
		StringBuffer sb = new StringBuffer();
		for (int i = 0; i < n; i++) 
                arr[i] = Integer.parseInt(strs[i]); 
		for(int i=0;i<n-1;i++){
		    
		    if(arr[i+1]<arr[i]){
		        sb.append(arr[i+1]+" ");
		    }
		    else{
		        sb.append("-1 ");
		    }
		    
		}
		sb.append("-1");
		
		System.out.println(sb);
    
	}
	
	br.close();
}
}

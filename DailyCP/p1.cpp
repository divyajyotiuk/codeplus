//Daily Coding Problem #1
#include<bits/stdc++.h>
using namespace std;

int main()
{
	int n;
	cin>>n;
	int a[n];
	for(int i=0;i<n;i++){
	cin>>a[i];
	}
	int k;
	cin>>k;
	int flag=0;
	sort(a,a+n-1);
	int i=0,j=n-1;
	while(i<n && j>=0){
		if(k <(a[i]+a[j]) ){
			j--;
		}else if(k > (a[i]+a[j])){
			i++;
		}
		else{
			flag=1;
			break;
		}
	}
	if(flag==1) cout<<"YES";
	else cout<<"NO";
}
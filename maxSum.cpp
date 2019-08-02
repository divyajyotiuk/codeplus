#include<iostream>
#include<cmath>
#include<string.h>

using namespace std;

int value(int l, int* arr)
{
	int sum = 0;
	for(int i=1;i<l;i++)
	{
		sum = sum + abs(arr[i] - arr[i-1]);
	}
	return sum;
}

int* rev(int k,int l, int* arr)
{
	int temp;
	for(int i=k;i<l;i++)
	{
		temp = arr[i];
		arr[i] = arr[l-i-1];
		arr[l-i-1] = temp;
	}
	return arr;
}

int maxe(int l, int* arr)
{
	int max=0,val;
	val = value(l,arr);
	if (max < val)
	{
		max = val;
	}
	return max;
}

int main()
{
	int n,op;
	cin>>n;
	int a[n],arr[n],b[n];
	for(int k=0;k<n;k++)
	{
		cin>>a[k];
	}
	for(int i=0;i<n;i++)
	{
		int j = i+1;
		while(j<n)
		{
			op = value(n,a);
			memset(b,0,sizeof(b));
			memcpy(b,a,sizeof(a));
			memcpy(arr,rev(i,j,b),sizeof(a));
			for(int j1=0;j1<5;j1++)
			{
				cout<<arr[j1]<<" ";
			}
			cout<<endl;
			op = maxe(n,arr);
			j++;
		}
	}

	cout<<op<<endl;
	return 0;
}
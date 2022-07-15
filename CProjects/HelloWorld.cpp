#include <iostream>
#include <vector>
using namespace std;

int main(){
    vector<string> strs{"hello", "world!"};

    for(auto i: strs){
        cout << i << " ";
    }

    //cout << endl;

    return 0;
}
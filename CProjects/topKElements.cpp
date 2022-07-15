#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

vector<int> topKFrequent(vector<int>& nums, int k) {
        unordered_map<int, int> count;
        vector<int, vector<int>> frequency;
        vector<int> result;
        
        for(int c: nums) count[c]++;
        for(auto it = count.begin(); it != count.end(); it++){
            if(frequency[it->first] ==  NULL){
                frequency.insert({it->first, it->second});
            }
        }

        for(auto it = count.begin(); it != count.end(); it++){
            cout << it->first << ": " << it->second << endl;
        }

        for(auto it = frequency.end(); it != frequency.begin(); it--){
            if(it == frequency.end()) --it;
                for(int j = 0; j < it->second.size(); j++){
                    cout << "Push_back: " << it->second[j] << endl;
                    result.push_back(it->second[j]);
                }
        }

        //for(int i = frequency.size(); i >= 0; i--){
        //    cout << i << ": ";
        //    for(int j = 0; j < frequency[i].size(); j++){
        //        cout << "push_back: " << frequency[i][j] << endl;
        //        result.push_back(frequency[i][j]);
        //        if(result.size() == k)
        //            return result;
        //    }
        //}
        
        return result;
    }

int main(){
    vector<int> numbers {-1, -1};
    vector<int> result;
    result = topKFrequent(numbers, 1);
    cout << "Result: ";
    for(auto it = result.begin(); it != result.end(); it++){
        cout << *it << endl;
    }


    return 0;
}
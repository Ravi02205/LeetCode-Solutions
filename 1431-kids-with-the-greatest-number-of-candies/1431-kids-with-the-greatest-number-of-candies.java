class Solution {
    public List<Boolean> kidsWithCandies(int[] candies, int extraCandies) {
        List<Boolean> boolList=new ArrayList<Boolean>();  
        int[] updatedCandies=new int[candies.length];
        int max=Integer.MIN_VALUE;
        for(int i=0;i<candies.length;i++){
            updatedCandies[i]=candies[i]+extraCandies;
            if(max<candies[i]){
                max=candies[i];
            }
        }
        for(int i=0;i<candies.length;i++){
            boolean flag= updatedCandies[i]>=max ? true : false;
            boolList.add(flag);
        }
        return boolList;
    }
}
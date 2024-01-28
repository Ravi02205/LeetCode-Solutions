class Solution {
    public String mergeAlternately(String word1, String word2) {
        int maxN=Math.max(word1.length(),word2.length());
        String str="";
        for(int i=0;i<maxN;i++){
            if(i<word1.length()){
               str+= word1.charAt(i);
            }
            if(i<word2.length()){
               str+= word2.charAt(i);
            }
        }
        return str;
    }
}
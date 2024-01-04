import java.util.Arrays;
import java.util.Comparator;

class Solution {
    public boolean solution(String[] phone_book) {
        Arrays.sort(phone_book, Comparator.comparingInt(String::length));

        for (int i = 1; i < phone_book.length; i++) {
            if (phone_book[i].startsWith(phone_book[0])) {
                return false;
            }
        }

        return true;
    }
}
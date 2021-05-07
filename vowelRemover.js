function shortcut(string) {
    //create a regular expression to match all vowels
    const vowels = /[aeiou]+/g;
    //using replace to take something a replace it with nothing
    //go through all the characters in a string and if a vowel, then it's yoinked
    return string.replace(vowels, "");
}
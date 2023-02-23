/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const map1 = {};
    const map2 = {};

    for (let i = 0; i < s.length; i++){
        let char1 = s[i];
        let char2 = t[i];

        if ((char1 in map1 && map1[char1] != char2) || (char2 in map2 && map2[char2] != char1)){
            return false;
        }

        map1[char1] = char2;
        map2[char2] = char1;
    }

    return true;
    
};

# Password-Strength-Checker

Password Entropy signifies a **measure of password strength**, i.e., how effective a password is against adversaries who try to guess it or use a **brute-force attack**.

Therefore, in principle, **the greater the entropy, the better a password**, at least when it comes to resisting brute force attacks.

This is half the number of attempts to guess with a 100% certainty - if a password has `n` bits of entropy, an attacker needs on average `2n - 1`guesses.

## Method of Checking

For each common symbol type (lower case letters, upper case letters, numbers, etc.), enter **how many characters of that type** there are in your password. The calculator does **not** require you to enter the password - you're 100% safe!

### **Password entropy formula**

Here's a mathematical recipe for how to calculate password entropy:

$$
⁍ 
$$

where:

- `R` - **Size of the pool** of unique characters from which we build the password; and
- `L` - **Password length**, i.e., the number of characters in the password.

| Pool | Elements | Pool Size |
| --- | --- | --- |
| Digits | 0-9 | 10 |
| Lower case Latin letters | a-z | 26 |
| Upper case Latin letters | A-Z | 26 |
| Latin letters | a-z, A-Z | 52 |
| Alphanumeric | a-z, 0-9 | 36 |
| Alphanumeric & Upper Case | a-z, A-Z, 0-9 | 62 |
| Special symbols  | `~!@#$%^&*()-=_+[{]}\|;':",.<>/? | 32 |

To **determine the pool size** for your password, go through the table above. If your password contains at least one character from a given category, then mark this category.Then add the sizes of categories that you've marked. For example:

- The password *incorrect* has a pool of `26` characters (lower case letters);
- Changing the password to *Incorrect* would increase the pool to `52` characters (lower case and upper case letters);
- Changing it further to *IncoRRect77* would increase the pool to `62` characters (lower case, upper case letters, numbers); and
- Finally, *IncoRRect77$%&* has the pool of `26 + 26 + 10 + 32 = 94` characters (lower case, upper case letters, numbers, and special symbols).

The other quantity you need to know to compute your password's entropy is the **password length**. Nothing complicated here, you just need to count the characters. Continuing our example, both *incorrect* and *Incorrect* have `9` characters, *IncoRRect77* has `11` characters, and *Incorrect77$%&* has `14` characters.

Once you know the pool size `R`and the password length `L`, the last step to determine password entropy is to apply the formula `E = L * log2(R)`

- For *incorrect*, we have `R = 26` and `L = 9`, so `E = 9 * log2(26) ≈ 9 * 4.700 ≈ 42.3 bits`;
- For *Incorrect*, we have `R = 52` and `L = 9`, so `E = 9 * log2(52) ≈ 9 * 5.700 ≈ 51.3 bits`;
- For *IncoRRect77*, we have `R = 62` and `L = 11`, so `E = 11 * log2(62) ≈ 11 * 5.954 ≈ 65.5 bits`;
- For *IncoRRect77$%&*, we have `R = 94` and `L = 14`, so `E = 14 * log2(94) ≈ 14 * 6.5545 ≈ 91.76 bits`

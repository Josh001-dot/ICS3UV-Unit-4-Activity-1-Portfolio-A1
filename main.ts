/**
 * @author Joshua Adeyemi
 * @version 1.0.0
 * @date 2025-01-01
 * @fileOverview This program outputs a backward count by 5s from 100 to 0.
 */

let output: string = ""

for (let i = 100; i >= 0; i -= 5) {
  output += i + ", "
}

console.log(output.slice(0, -2))

console.log("\nDone.")

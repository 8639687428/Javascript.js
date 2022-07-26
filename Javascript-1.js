<script>
fuction findMultiples(n)
{
let a=3;  // To keep track of multiples of 3
let b=5;  // To keep track of multiples of 5
for (let i=1; i<=n; i++)
{
let s= "";
// Found multiple of 3
if (i==a)
{
a = a + 3;  // Update next multiple of 3
s = s + "Mutiple of 3. ";
}
// Fpund multiple of 5
if (i==b)
{
b = b + 5; // Update next mutiple of 5
s = s + "Mutliple of 5. ";
}
if (s == "") {
document.write(i);
document.write("<br />");
}
else {
document.write(s);
document.write("<br />");
}
}
}
</script>
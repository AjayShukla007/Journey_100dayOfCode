// To count the bits

function BitCount(n)
{

    count = 0;

    while (n != 0)

    {

        count++;

        n &= (n - 1);

    }

     

    return count;
}
 

function isPrime(n)
{

     

    // Corner cases

    if (n <= 1) 

        return false;

    if (n <= 3) 

        return true;
 

    // This is checked so that we can skip 

    // middle five numbers in below loop

    if (n % 2 == 0 || n % 3 == 0) 

        return false;
 

    for(i = 5; i * i <= n; i = i + 6)

        if (n % i == 0 || n % (i + 2) == 0)

            return false;
 

    return true;
}
 
// Count number, that contains 
// prime number of set bit

function primeBitsInRange(l, r)
{

     

    // tot_bit store number of bit in number

    var tot_bit, count = 0;
 

    // Iterate loop from l to r

    for(i = l; i <= r; i++)

    {

         

        // Use predefined function for finding 

        // set bit it is return number of set bit

        tot_bit = BitCount(i);
 

        // Check tot_bit prime or, not

        if (isPrime(tot_bit))

            count++;

    }

    return count;
}
 
// Driver code

var l = 6, r = 10; 
 
document.write(primeBitsInRange(l, r));
 
// This code is contributed by Rajput-Ji 
 
</script>
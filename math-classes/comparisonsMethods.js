class ComparisonsMethods{
    areTheNumbersAreEqual(...numbers)
    {
        let theyAreEqual = true;
        let compairedNumber = numbers[0];
        for(let number of numbers)
        {
            if(compairedNumber !== number)
            {
                theyAreEqual = false;
            }
        }

        return theyAreEqual;
    }
}
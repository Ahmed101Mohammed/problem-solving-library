class ArrayMethods{
    areSimilar(array1, array2)
    {
        let areTheSameLength = this.areTheSameLength(array1, array2);
        if(!areTheSameLength)
        {
            return false;
        }
        
        let areNoteSimilar = false;
        for(let index = 0; index < array1.length; index++)
        {
            let item1 = array1[index];
            let item2 = array2[index];

            if(this.isAnArray(item1) && this.isAnArray(item2))
            {
                let areSimilar = this.areSimilar(item2, item1);
                if(!areSimilar)
                { 
                    areNoteSimilar = true;
                    break;
                }
                continue;
            }

            if(item1 !== item2)
            {
                areNoteSimilar = true;
                break;
            } 
        }


        return !areNoteSimilar;
    }

    areTheSameLength(array1,array2)
    {
        return (array1.length === array2.length);
    }

    isAnArray(item)
    {
        return (item.constructor === Array);
    }
}

module.exports = ArrayMethods;
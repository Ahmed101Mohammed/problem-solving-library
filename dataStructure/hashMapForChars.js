class HashMapForChars{
    #letters = [];
    
    add(char, value = 0)
    {
        this.#letters[char.charCodeAt()] = value;
    }
    
    get(char)
    {
        let charValue = this.#letters[char.charCodeAt()];
        if(charValue === undefined)
            {
                charValue = false;
            }

        return charValue;
    }

    clear()
    {
        this.#letters = [];
    }
}
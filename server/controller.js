module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["You will die a painful and horrible death!", "You will be stung by a wasp in the near future!", "You will fall off a 5,000ft cliff either this year or in 17 years", "You will be one of the first to visit mars, but unfortunately will die a slow and painful death shortly after your arrival..", "You will win the lottery!.. but unfortuanely get his by a bus the very next day.."]

        let randomIndex2 = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[randomIndex2]
    
        res.status(200).send(randomFortune)
    },

}
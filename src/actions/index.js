export const SUBMIT_GUESS = 'SUBMIT_GUESS';
export const submitGuess = guess => ({
  type: SUBMIT_GUESS,
  guess
});


export const NEW_GAME = 'NEW_GAME';
export const newGAME = correctAnswer => ({
  type: NEW_GAME,
  correctAnswer

}); 

export const GENERATE_AURAL_UPDATE = 'GENERATE_AURAL_UPDATE';
export const generateAuralUpdate = () => ({
    type: GENERATE_AURAL_UPDATE
});
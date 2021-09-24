export function formatQuestion (question, author, loggedInUser) {
    const { id} = question
  
    return {
        id,
        OptionOneText: question.optionOne.text,
        OptionTwoText: question.optionTwo.text,
        questionOneVotes: question.optionOne.votes.length,
        questionTwoVotes: question.optionTwo.votes.length,
        userAnswer: question.optionOne.votes.includes(loggedInUser)
          ? question.optionOne.text
          : question.optionTwo.votes.includes(loggedInUser)
          ? question.optionTwo.text
          : null,
        author: author.name,
        authorAvatar: author.avatarURL,
    
      
    }
  }
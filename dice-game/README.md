## Dice Game 🎲
# `Overview`
The Dice Game is a simple interactive game built with React and styled-components. 
Players can select a number and roll the dice to try and match their selected number.
The game keeps track of the score, rewarding correct guesses and penalizing incorrect ones.

# `Live Demo`
View the live demo of project here: https://react-practice-projects-gold.vercel.app/

# `Features`
Number Selection: Players can choose a number between 1 and 6 before rolling the dice.<br>
Score Tracking: The game keeps track of the player's score, adding the dice value for a correct guess and subtracting points for an incorrect guess.<br>
Responsive Design: The UI is built with styled-components to ensure a responsive and visually appealing experience across different devices.<br>
Reset Score: Players can reset their score at any time.<br>
Show Rules: A section that explains the rules of the game.<br>

# `Technologies Used`
React: A JavaScript library for building user interfaces.<br>
styled-components: A CSS-in-JS tool for styling React components.

# `How to Play`
<ul>
  <li>Select a number between 1 and 6.</li>
  <li>Click on the "Roll Dice" button to roll the dice.</li>
  <li>If the rolled number matches your selected number, you gain points equal to the dice value.</li>
  <li>If the rolled number doesn't match, you lose 2 points.</li>
  <li>The score can be reset using the "Reset Score" button.</li>
  <li>Click on "Show Rules" to view the game rules.</li>
</ul>

# `Project Structure`
<h2>components/: Contains all the React components used in the game.</h2>
GamePlay.jsx: The main game component that handles the game logic.<br>
NumberSelector.jsx: Allows players to select a number.<br>
TotalScore.jsx: Displays the current score.<br>
RollDice.jsx: Handles the dice rolling and score updating.<br>
Rules.jsx: Displays the rules of the game.<br>
<h2>styled/: Contains the styled-components for consistent design.</h2>

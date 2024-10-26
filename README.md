# Requirements Update
Thanks for giving me the chance to do this assignment!

Status on all requirements:

1. Create state and controls for each of the 6 attributes (see `ATTRIBUTE_LIST`) so they can be incremented/decremented independently.
 - **Completed**
2. Display classes on the screen (see `CLASS_LIST`) and visually change the UI when the character meets the minimum requirements for that class, that is, all attributes are greater than or equal to the class minimums
 - **Completed**
3. When clicking on a class, display the minimum required statistics for that class
 - **Completed**
4. Add an “ability modifier” to each attribute row, this is calculated as +1 for each 2 points above 10, for any attribute (let's take Intelligence for example) we would have the following ability modifiers for a given ability
 - **Completed**
5. Implement skills. See `SKILL_LIST` for the list of all skills and their attribute modifier 
 - Mostly completed (I noticed a visual bug afterwards where I mixed up total and modifier, and, but all functionality is there)
6. Save the character(s) to an API so they can be retrieved when the app starts next time. 
 - *Incomplete* - Basis is there, but some bugs I didn't have time to fix
7. Implement a maximum on all attributes of 70. For example, if a character has 20 strength and 10 for all other attributes, they must decrease one before they can increase another
 - **Completed**
8. Add the ability to edit multiple characters simultaneously with the same rules above
 - **Completed** - You can test this by adding another player by changing line 8 in `App.tsx` to:
 `const [people, setPeople] = useState([{pid: 0}, {pid: 1}]);`, or adding another PersonSection to the code
9. Add a Skill Check section for each character. This represents a character's attempt to perform an action
 - *Not Started*
10. Add a party skill check section. This is the same as the above, except we should use the character with the highest skill total to attempt the action
 - *Not Started*
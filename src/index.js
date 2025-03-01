/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
      let weeks;
      let studyHour;
      if (knowsProgramming == true){
         studyHour = 800;
         weeks = studyHour / config[focus];
      } else{
        studyHour = 1300;
         weeks = studyHour / config[focus];
      }
      return Math.ceil(weeks);
  };
  
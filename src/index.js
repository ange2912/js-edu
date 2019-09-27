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

      if (focus === 'family' && knowsProgramming){
        weeks=800/config.family;
      } 
      else if (
        focus === 'family' && !knowsProgramming){
          weeks=1300/config.family;
        }

      if (focus === 'friends' && knowsProgramming){
        weeks=800/config.friends;
      } 
      else if (
        focus === 'friends' && !knowsProgramming){
          weeks=1300/config.friends;
        }


      if (focus === 'normal_life' && knowsProgramming){
        weeks=800/config.normal_life;
      } 
      else if (
        focus === 'normal_life' && !knowsProgramming){
          weeks=1300/config.normal_life;
        }

      if (focus === 'profession' && knowsProgramming){
        weeks=800/config.profession;
      } 
      else if (
        focus === 'profession' && !knowsProgramming){
          weeks=1300/config.profession;
        }

      if (focus === 'carrier' && knowsProgramming){
        weeks=800/config.carrier;
      } 
      else if (
        focus === 'carrier' && !knowsProgramming){
          weeks=1300/config.carrier;
        }

      if (focus === 'top_peformance' && knowsProgramming){
        weeks=800/config.top_peformance;
      } 
      else if (
        focus === 'top_peformance' && !knowsProgramming){
          weeks=1300/config.top_peformance;
        }
      
      weeks = Math.ceil(weeks);
      return weeks;
  };
    
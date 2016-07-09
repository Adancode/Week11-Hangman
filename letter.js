var Letter = function(letterSubmitted) {
	//make a charac property and set it to what you think makes second_instructor_demonstration
     this.character = letterSubmitted;
	//make an appear property and set it to what makes sense
     this.appear = false;
	//make a letterRender property and set it to a function that does what you think makes sense
     this.letterRender = function() {
          if (this.appear === true) {
               return this.character;
          }
          else {
               return " _ ";
          }
     };
};

//export the Letter constructor here
exports.Letter = Letter;

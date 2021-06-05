// TODO: Refactor the class to a factory function.
/* class Lesson {
  constructor() {
    this.title = 'Unit 17 - Computer Science';
    this.description = 'CS for JS';
  }
  information() {
    console.log(this.title, this.description);
  }
}

const csForJS = new Lesson();
csForJS.information(); */

// Factory function
const information = (state) => ({
  info: () => console.log(state.title, state.description),
});

const Lesson = (title, description) => {
  const state = { title, description };

  return { ...information(state) };
};

const lessonJS = Lesson('Unit 17 - Computer Science', 'CS for JS');
lessonJS.info();

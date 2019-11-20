class Levels {
  static HOPELESS = 0;
  static BEGINNER = 1;
  static EXPERIENCED = 2;
  static SKILLED = 3;
  static MASTER = 4;
}

class Level {
  constructor(id, title, description) {
    this.id = id;
    this.title = title;
    this.description = description;
  }
}

export { Level, Levels };

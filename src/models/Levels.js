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

  clone() {
    return new Level(this.id, this.title, this.description);
  }
}

export { Level, Levels };

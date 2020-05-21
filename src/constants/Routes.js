class Routes {
  static ROOT = '/';
  static CATEGORIES = '/categories';
  static NOT_FOUND = '/404';
  static PLANTS = '/plants';
  static PLANTS_CREATE = Routes.PLANTS + '/create';
  static PLANT = Routes.PLANTS + '/:plantId';
  static PLANT_EDIT = Routes.PLANT + '/edit';
  static ROOMS = '/rooms';
}

export default Routes;
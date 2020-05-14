class Routes {
  static ROOT = '/';
  static CATEGORIES = '/categories';
  static PLANTS = '/plants';
  static PLANTS_CREATE = Routes.PLANTS + '/create';
  static PLANTS_EDIT = Routes.PLANTS + '/:plantId/edit';
  static ROOMS = '/rooms';
}

export default Routes;
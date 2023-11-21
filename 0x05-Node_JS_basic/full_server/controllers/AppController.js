/**
 * Contains the miscellaneous route handlers.
 * @author Reagan Musa <https://github.com/rigzlion8>
 */
class AppController {
  static getHomepage(req, res) {
    res.status(200).send('Hello Holberton School!');
  }
}

export default AppController;

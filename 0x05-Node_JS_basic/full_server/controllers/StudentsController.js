import readDatabase from '../utils';

/**
 * The list of supported majors.
 */
const VALID_MAJORS = ['CS', 'SWE'];

/**
 * Contains the student-related route handlers.
 * @author Reagan Musa <https://github.com/rigzlion8>
 */
class StudentsController {
  static getAllStudents(req, res) {
    const dataPath = process.argv.length > 2 ? process.argv[2] : '';

    readDatabase(dataPath)
      .then((studentGroups) => {
        const responseParts = ['This is the list of our students'];
        // A comparison function for ordering a list of strings in ascending
        // order by alphabetic order and case insensitive
        const cmpFxn = (a, b) => {
          if (a[0].toLowerCase() < b[0].toLowerCase()) {
            return -1;
          }
          if (a[0].toLowerCase() > b[0].toLowerCase()) {
            return 1;
          }
          return 0;
        };

        for (const [field, group] of Object.entries(studentGroups).sort(cmpFxn)) {
          responseParts.push([
            `Number of students in ${field}: ${group.length}.`,
            'List:',
            group.map((student) => student.firstname).join(', '),
          ].join(' '));
        }
        res.status(200).send(responseParts.join('\n'));
      })
      .catch((err) => {
        res
          .status(500)
          .send(err instanceof Error ? err.message : err.toString());
      });
  }

  static getAllStudentsByMajor(req, res) {
    const dataPath = process.argv.length > 2 ? process.argv[2] : '';
    const { major } = req.params;

    if (!VALID_MAJORS.includes(major)) {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase(dataPath)
      .then((studentGroups) => {
        let responseText = '';

        if (Object.keys(studentGroups).includes(major)) {
          const group = studentGroups[major];
          responseText = `List: ${group.map((student) => student.firstname).join(', ')}`;
        }
        res.status(200).send(responseText);
      })
      .catch((err) => {
        res
          .status(500)
          .send(err instanceof Error ? err.message : err.toString());
      });
  }
}

export default StudentsController;

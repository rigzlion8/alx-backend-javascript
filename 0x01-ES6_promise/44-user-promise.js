export default function signUpUser(firstName, lastName, phoneNumber, emailAddress, password) {
  return Promise.resolve(
    {
      firstName,
      lastName,
      phoneNumber,
      emailAddress,
      password,
    },
  );
}

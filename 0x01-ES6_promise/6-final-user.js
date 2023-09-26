import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);

  return Promise.allSettled([user, photo]).then((results) =>
    results.map((result) =>
      (result.status === "fulfilled")
        ? { status: 'fulfilled', value: result.value }
        : { status: 'rejected', value: result.reason }
    )
  );
}

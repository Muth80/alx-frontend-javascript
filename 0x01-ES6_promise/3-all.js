import { uploadPhoto, createUser } from './utils'

async function handleProfileSignup() {
  try {
    const results = await Promise.all([uploadPhoto(), createUser()]);

    console.log(`${results[0].body} ${results[1].firstName} ${results[1].lastName}`);
  } catch (error) {
    console.log('Signup system offline');
  }
}

export default handleProfileSignup;

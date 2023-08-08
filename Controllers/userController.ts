import User from '../Models/User'

(async () => {
  try {
    const newUser = await User.create({
      username: 'john_doe',
      email: 'john@example.com',
    });
    console.log('New user created:', newUser.toJSON());
  } catch (error) {
    console.error('Error creating user:', error);
  }
})();

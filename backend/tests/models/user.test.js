import { User } from '../../models/user';

describe('User model', () => {
  const countUsers = () => User.countDocuments({});
  it('can create one successfully', async () => {
    expect(await countUsers()).toBe(0);
    await User.create({ firstName: 'matias', lastName: 'garcia' });
    expect(await countUsers()).toBe(1);
  })
});

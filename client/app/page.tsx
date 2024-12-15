import { currentUser } from '@clerk/nextjs/server';
import { SignOutButton } from '@clerk/nextjs';
import getUsers from './get-users';

export default async function Page() {
  const user = await currentUser();

  const allUsers = await getUsers();

  console.log(allUsers);

  return (
    <div className='flex justify-center items-center h-screen'>
      <div>
        <div>Hello</div>
        {user?.firstName} {user?.lastName}
        <div>
          <SignOutButton />
        </div>
      </div>
    </div>
  );
}

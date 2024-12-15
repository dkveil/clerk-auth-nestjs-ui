import { currentUser } from '@clerk/nextjs/server';
import { SignOutButton } from '@clerk/nextjs';

export default async function Page() {
  const user = await currentUser();

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

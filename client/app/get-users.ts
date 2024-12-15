'use server';

import { cookies } from 'next/headers';

export default async function getUsers() {
  const res = await fetch(process.env.API_URL as string, {
    headers: {
      Cookie: (await cookies()).toString(),
    },
  });

  return res.json();
}

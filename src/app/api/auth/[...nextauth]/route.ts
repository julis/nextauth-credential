// /src/app/api/auth/[...nextauth]/route.ts

import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import { authOptions } from '@/server/auth';

const handleGet = (req: NextApiRequest, res: NextApiResponse) => {
  return NextAuth(req, res, authOptions);
};

const handlePost = (req: NextApiRequest, res: NextApiResponse) => {
  return NextAuth(req, res, authOptions);
};

export { handleGet as GET, handlePost as POST };
import { NextApiRequest, NextApiResponse } from 'next';
import firebase from '../../utils/firebase';
import { Skill } from '../../interfaces/skill';

export default (
  req: NextApiRequest,
  res: NextApiResponse<Skill[] | string>,
) => {
  console.log(req.method, req.url);
  if (req.method === 'GET') return get(req, res);
  res.status(405).json('Method Not Allowed');
};

async function get(req: NextApiRequest, res: NextApiResponse<Skill[]>) {
  const db = firebase.firestore();
  const snapshot = await db.collection('skills').get();
  const skills = snapshot.docs.map(
    doc => ({ id: doc.id, ...doc.data() } as Skill),
  );
  console.dir(skills);
  res.status(200).json(skills);
}

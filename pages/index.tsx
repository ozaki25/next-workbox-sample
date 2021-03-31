import Head from 'next/head';
import { Skill } from '../interfaces/skill';

interface Props {
  skills: Skill[];
}

export default function Home({ skills }: Props) {
  return (
    <div>
      <Head>
        <title>Skill List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto sm:py-4">
        <table className="w-full bg-white shadow-md">
          <thead>
            <tr className="bg-gray-200 text-gray-600 text-sm">
              <th className="py-3 sm:px-6">Name</th>
              <th className="py-3 sm:px-6 max-w-40">Count1</th>
              <th className="py-3 sm:px-6 max-w-40">Count2</th>
              <th className="py-3 sm:px-6 max-w-40">Count3</th>
              <th className="py-3 sm:px-6 max-w-40">Count4</th>
            </tr>
          </thead>
          <tbody>
            {skills.map(({ id, name, count1, count2, count3, count4 }) => (
              <tr key={id} className="text-gray-600 text-sm">
                <td className="py-3 px-6 text-center whitespace-nowrap">
                  {name}
                </td>
                <td className="py-3 px-6 text-right">{count1}</td>
                <td className="py-3 px-6 text-right">{count2}</td>
                <td className="py-3 px-6 text-right">{count3}</td>
                <td className="py-3 px-6 text-right">{count4}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/skills`);
  const skills = await res.json();
  return { props: { skills } };
}

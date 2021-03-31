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
      <main className="container mx-auto p-4">
        <table>
          {skills.map(({ id, name, count1, count2, count3, count4 }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{count1}</td>
              <td>{count2}</td>
              <td>{count3}</td>
              <td>{count4}</td>
            </tr>
          ))}
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

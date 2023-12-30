import Layout from "../components/layout"
import Head from "next/head";
import { DATABASE_ID, TOKEN } from "../../../config";
import ProjectItem from "../components/Projects/project-item";


export default async function Projects() {

    const options = {
        method: 'POST',
        cache: 'no-store',
        headers: {
          'accept': 'application/json',
          'Notion-Version': '2022-02-22',
          'content-type': 'application/json',
          Authorization: `Bearer ${TOKEN}`
        },
        body: JSON.stringify({
            // sort: [
            //     {
            //         "property":"Name",
            //         "direction":"ascending"
            //     }
            // ],
            page_size: 100
        })
      };
    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)
    const projects = await res.json()

    const projectNames = projects.results.map((aProject) =>(
                aProject.properties.Name.title[0].plain_text
            ))
        
            console.log(`projectNames : ${projectNames}`);

    console.log(projectNames);

    return (
        <Layout>
            <div className="flex flex-col items-center justify-center min-h-screen px-3 mb-10">
            <Head>
                <title>김경목 포트폴리오</title>
                <meta name="description" content="오늘도 빡코딩" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 className="text-4xl font-bold sm:text-6xl">총 프로젝트 : 
                <span className="pl-4 text-blue-500">{projectNames.length}</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 p-12 m-4 gap-8">
            {projects.results.map((aProject) => (
                <ProjectItem key={aProject.id} data={aProject}></ProjectItem>
            ))}
            </div>
            </div>
            
        </Layout>
    );
}

// export async function fetchData() {

//     const options = {
//         method: 'POST',
//         cache: 'no-store',
//         headers: {
//           'accept': 'application/json',
//           'Notion-Version': '2022-02-22',
//           'content-type': 'application/json',
//           Authorization: `Bearer ${TOKEN}`
//         },
//         body: JSON.stringify({page_size: 100})
//       };
//     const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)
//     const projects = await res.json()

//     const projectNames = projects.results.map((aProject) =>(
//         aProject.properties
//     ))

//     console.log(`projectNames : ${projectNames}`);

//     return {
//         props: {projects}
//     }
//   }

// export async function getData() {

//     const options = {
//         method: 'POST',
//         headers: {
//           'accept': 'application/json',
//           'Notion-Version': '2022-06-28',
//           'content-type': 'application/json',
//           Authorization: `Bearer ${TOKEN}`
//         },
//         body: JSON.stringify({page_size: 100})
//       };
      
//     const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)
    
//     const projects = await res.json()

   

//     const projectsIds = projects.results.map((aProject) =>(
//         aProject.id
//     ))

//     console.log(`projectsIds : ${projectsIds}`);

//     return {
//         props:{}
//     }
// }
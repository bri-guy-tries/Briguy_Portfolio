import Image from 'next/image'

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

type latestProjectData = {
    project_id: Decimal,
    project_name: string,
    project_date: Date,
    desktop_image: string,
    thumbnail_image:string,
    alt_text: string | null,
    description_short: string,
    description_long:string
}[] | undefined;

export async function getLatestprojects(){
  try{
    const projects = await prisma.projects.findMany({
      take:3,
      orderBy:{
        project_date:'desc'
      }
    }); 
    return projects;
  }catch{
    console.log('hey there is an error on latest projects');
  }
}
export default async function latestProjects(props: projectListData){
    const posts : latestProjectData = await getLatestprojects();
    if (!posts){
      return null;
    }else{
      return(
        <div className="w-full mx-auto max-w-screen-xl">
            <h2 className="text-4xl underline mb-4 text-center">Latest Projects</h2>
              
            <div className="flex flex-col md:flex-row pt-8 justify-between flex">
              {posts.map((project, i) =>{
                let datePosted = project.project_date?.toLocaleDateString('default', {day:'numeric', month:'long', year:'numeric'})
                return(
                    <div className="relative mb-8 hover:relative hover:top-[-20px] md:mb-0 mx-auto project-card md:w-[30%] max-w-[400px] latest-projects-border" key={i}>
                      <Image src={project.thumbnail_image} width={400} height={400} alt={project.alt_text}/ >
                      <div className="p-4">
                        <p className='text-black mb-4'>{datePosted}</p>
                        <p className='text-black'>{project.description_short}</p>
                      </div>
                    </div>
                )
              })
              }
            </div>
          </div>
    )
    }
    
}
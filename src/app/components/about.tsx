import Image from 'next/image'
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function getaboutInfo(){
  try{
    const aboutUs = await prisma.aboutus.findMany(); 
    return aboutUs;
  }catch{
    console.log('hey there is an error on about Us');
  }
}

type aboutProps = {
  srcImage: string;
  altText: string;
  headline: string | null;
  description: string| null;
}[] | undefined;

export default async function about(){
    const data: aboutProps = await getaboutInfo();
    if (!data){
      return null
    }else{
      return(
        <div className="max-w-screen-xl mx-auto max-w-screen-xl justify-center flex flex-col md:flex-row px-4 lg:px-0">
            <div className="rounded-[50%] overflow-hidden md:mr-8 mb-8 md:mb-0 w-full max-w-[500px] profile-border mx-auto md:animate-aboutImage z-10">
             <Image src={data[0].srcImage} width={500} height={500} alt={data[0].altText} />
            </div>
            <div className="self-center w-full md:max-w-[500px] z-0 md:animate-aboutDescription">
              <h2 className="text-4xl underline mb-4 text-center md:text-left">{data[0].headline}</h2>
              <p className="text-center md:text-left">{data[0].description}</p>
            </div>
          </div>
      )
    }
    
}
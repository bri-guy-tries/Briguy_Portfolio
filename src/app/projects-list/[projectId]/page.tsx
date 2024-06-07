import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Project Detail Page",
    description: "this is the project detail page",
};
export default function projectDetail({params} :{
    params:{
        projectId: string
    }
})
{
    return <h1>THis is our {params.projectId}'s detail page</h1>
}
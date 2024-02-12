import { ProjectsInterface } from "@/lib/interface";
import { client } from "@/sanity/sanityClient";

async function fetchData() {
   
    const  data:ProjectsInterface[] =  await client.fetch({
        query: `*[_type == 'project']{
              title,
            "currentSlug":slug.current,
            content,
            projectimage,
          }`,

        });
        return data;

}

const projects = async () => {

    const data = await fetchData();
    console.log(data)

  return (
    <div>
      Projects
    </div>
  )
}

export default projects

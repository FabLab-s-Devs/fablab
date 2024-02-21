import { simpleBlogCard } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image"
import Link from "next/link";

async function getData() {
    const query = `*[_type == 'project' && show]{
      title,
      "slug":slug.current,
      description,
      projectimage,
      show
    }`;
  
    const data = await client.fetch(query);
  
    return data;
  }



export default async function Projects() {
    const data: simpleBlogCard[] = await getData();
    return (
        <div className='container-s tablet:container-t laptop:container-pc relative pt-10 pb-5'>
            <div className='flex flex-col text-center  items-center justify-center'>
                <h2 className='text-4xl font-bold mb-4'>
                    Nos projets
                </h2>
                <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-2 gap-3  items-center justify-center">
                {data && data.map((post, idx) => (
        <Card key={idx}>
          {post && (
            <>
              <Image
                src={urlFor(post.projectimage).url()}
                alt="image"
                width={500}
                height={500}
                className="rounded-t-lg h-[200px] object-cover"
              />

              <CardContent className="mt-5">
                <h3 className="text-lg line-clamp-2 font-bold">{post.title}</h3>
                <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">
                  {post.description}
                </p>
                <Button asChild className="w-full mt-5">
                  <Link href={`/projects/${post.slug}`}>Read more</Link>
                </Button>
              </CardContent>
            </>
          )}
        </Card>
      ))}
                </div>
                <button className="underline text-3xl p-4 font-sans">
                    <Link href={`/projects/`}>See More...</Link></button>
            </div>
        </div>
    )
}

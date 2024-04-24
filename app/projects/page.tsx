import { Card, CardContent } from "@/components/ui/card";
import { simpleBlogCard } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

async function getData() {
  const query = `*[_type == 'project']{
    title,
    "slug":slug.current,
    content,
    description,
    projectimage,
  }`;

  const data = await client.fetch(query);

  return data;
}

export default async function Home() {
  const data: simpleBlogCard[] = await getData();
  
  return (


    <div className="text-center  items-center justify-center">
      <h2 className='text-amber-500 mt-6 font-bold text-4xl md:text-6xl mb-2'>
          Our projets
        </h2>
          <p className="text-blue-500 mb-16">Embark on a Journey of Discovery with Our Projects</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-5 gap-5 mb-20 mx-6 lg:mx-auto max-w-7xl">
      {data && data.map((post) => (
        <Card key={post.currentSlug}>
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
                <Button asChild className="w-full mt-5 hover:bg-amber-400">
                  <Link href={`/projects/${post.slug}`}>Read more</Link>
                </Button>
              </CardContent>
            </>
          )}
        </Card>
      ))}
    </div>
    </div>
  );
}

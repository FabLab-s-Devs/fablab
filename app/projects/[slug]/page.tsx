import { client } from "@/lib/sanity";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

async function getData(params: string) {
  const query = `
  *[_type == 'project' && slug.current == '${params}']{
    title,
    "currentSlug": slug.current,
    "contentText": content,
    "imageUrl": projectimage.asset->url 
   }[0]`;

  const data = await client.fetch(query);
  return data;
}
export default async function page({ params }: { params: { slug: string } }) {
  const width = 500;
  const height = (width * 600) / 600;
  const data = await getData(params.slug);
  return (
    <div className="">
      <h1 className="text-4xl font-bold ms-2 p-2 text-center">
        {data.title}
      </h1>
      <div>
        <div className="flex flex-col justify-center items-center mb-10">
          <Image src={data.imageUrl} width={width} height={height} alt="Hackathon" className="my-10" priority />
          <div className="w-[900px]">
            <div className="flex items-center mb-5">
              <Image src="/assets/projects/details.jpg" width={50} height={100} alt="Details" />
              <h1 className="text-4xl font-bold p-2">Details</h1>
            </div>
            <PortableText value={data.contentText} />
          </div>

        </div>
      </div>
    </div>
  );
};


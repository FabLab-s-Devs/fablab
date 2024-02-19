import { client } from "@/app/lib/sanity";
import { projectIdentifier } from "@/lib/interface";
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
export default async function page ({ params }: { params: { slug: string } }) {
  const width = 500;
  const height = (width * 600) / 600;
  const data: projectIdentifier = await getData(params.slug);
  return (
    <div className="">
      <h1 className="text-4xl font-bold ms-2 p-2 text-center">
        {data.title}
      </h1>
      <div>
        <div className="flex flex-col justify-center items-center mb-10">
          <Image src={data.imageUrl} width={width} height={height} alt="Hackathon" className="my-10" priority/>
          <div className="w-[900px]">
            <div className="flex items-center mb-5">
              <Image src="/assets/projects/details.jpg" width={50} height={100} alt="Details" />
              <h1 className="text-4xl font-bold p-2">Details</h1>
            </div>
            {/* <p>
              L'équipe "InnovateX" a remporté le premier prix au récent hackathon organisé par Tech Innovations Inc. avec leur projet révolutionnaire visant à améliorer l'expérience utilisateur dans les environnements de travail distants.

              Leur solution, nommée "WorkEase", combine des fonctionnalités de réalité augmentée avec des outils de communication avancés pour créer un espace virtuel collaboratif. En utilisant des casques de réalité virtuelle bon marché et une plateforme de communication intégrée, "WorkEase" permet aux équipes de travailler ensemble de manière immersive, peu importe où elles se trouvent dans le monde.

              La technologie "WorkEase" offre une gamme de fonctionnalités, notamment la capacité de visualiser et de manipuler des modèles 3D en temps réel, de partager des annotations et des notes, ainsi que de collaborer sur des projets de manière interactive. Cette approche novatrice vise à surmonter les défis de la collaboration à distance en fournissant une expérience utilisateur immersive et intuitive.

              L'équipe "InnovateX" est composée de développeurs talentueux, de designers UX/UI et de spécialistes en réalité augmentée. Leur collaboration étroite et leur engagement à repousser les limites de la technologie ont été les clés de leur succès lors du hackathon.

              Félicitations à l'équipe "InnovateX" pour leur victoire bien méritée et pour avoir ouvert de nouvelles perspectives dans le domaine de la collaboration à distance. Leur projet "WorkEase" promet de transformer la manière dont les équipes travaillent ensemble et ouvre la voie à de nouvelles opportunités dans le domaine de la réalité augmentée et de la communication virtuelle.

            </p> */}
            <PortableText value={data.contentText} />
            
          </div>
 
        </div>
      </div>
    </div>
  );
};


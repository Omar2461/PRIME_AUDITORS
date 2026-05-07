import Pane from "@/components/Pane";

import { blogData } from "@/features/blog/data";

async function page({ params }:
  
  { params:Promise <{id: string}> }) {
  
  const {id}=await params;

  const data=blogData.find((item)=>item.id===Number(id));
    return (
    <Pane
        title={data?.title}
        details={data?.desc}
        date={data?.date}
    />
  );
}

export default page;

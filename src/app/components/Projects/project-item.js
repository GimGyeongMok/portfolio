// import Image from "next/image";
import Image from "next/legacy/image";

export default function ProjectItem({data}){

    const title = data.properties.Name.title[0].plain_text
    const githubLink = data.properties.Github.url
    const youtube = data.properties.YouTube.url
    const description = data.properties.Description.rich_text[0].plain_text
    const imgSrc = data.cover.file?.url || data.cover.external.url
    const tags = data.properties.Tags.multi_select
    const start = data.properties.WorkPeriod.date.start
    const end = data.properties.WorkPeriod.date.end
    const notion = data.properties.Notion.url


    let fileUrl;

    if (data.properties && data.properties.Files && data.properties.Files.files && data.properties.Files.files.length > 0) {
    fileUrl = data.properties.Files.files[0].file.url;
    } else {
    console.error("파일 URL을 찾을 수 없습니다.");
    }

    const calculatedPeriod = (start, end) => {
        const startDateStringArray = start.split('-');
        const endDateStringArray = end.split('-');

        var startDate = new Date(startDateStringArray[0], startDateStringArray[1], startDateStringArray[2]);
        var endDate = new Date(endDateStringArray[0], endDateStringArray[1], endDateStringArray[2]);
        
        const diffInMs = Math.abs(endDate - startDate);
        const result = diffInMs / (1000 * 60 * 60 * 24);

        return result
    
    };
    return (
        <div className="project-card">
            <Image
            className="rounded-t-xl"
                src={imgSrc}
                alt="cover image"
                width="100%"
                height="50%"
                layout="responsive"
                objectFit="cover"
                quality={100}
            />
            <div className="p-4 flex flex-col">
            <h1 className="text-2xl font-bold">{title}</h1>
            <h3 className="mt-4 text-xl">{description}</h3>
            {githubLink && (<a href={githubLink}>깃허브 바로가기</a>)}
            {youtube && (<a href={youtube}>시연영상 바로가기</a>)}
            {fileUrl && (<a href={fileUrl}>문서 바로가기</a>)}
            {notion && (<a href={notion}>노션 바로가기</a>)}
            <p className="my-1">작업기간 : {start} ~ {end} ({calculatedPeriod(start, end)}일)</p>
            <div className="flex items-start mt-2 flex-wrap">
                {tags.map((aTag)=>(
                    <h1 className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30 mb-2" key={aTag.id}>{aTag.name}</h1>
                ))}
            </div>

            </div>
        </div>
    );
}
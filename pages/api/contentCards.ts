import type {NextApiRequest, NextApiResponse} from 'next'

type TextData = {
    title: string;
    subTitle: string;
    body: string;
    author: {
        first: string;
        last: string;
    };
};

type Metadata = {
    priority: number;
    publishDate: string;
};

export type CommentType = {
    text: string;
    author: string;
    profilePic: string;
    likes: number;
};

export type ContentCardType = {
    id: string;
    imageUri: string;
    textData: TextData;
    metadata: Metadata;
    comments: CommentType[];
};

type ResponseData = {
    contentCards?: ContentCardType[],
    error?: string
}

//Get endpoint to retrive the contentcards
//is order by priority and desc, for features we can send a prop to change to asc 

export default async function GET(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    try {
        const { orderBy } = req.query
        const response = await fetch("https://stoplight.io/mocks/engine/fullstack-spec/52502230/content", {
            headers: {
                prefer: "code=200, dynamic=true"
            }
        })
        const data = await response.json()
        const contentCards: ContentCardType[] =
            orderBy === "desc" ?
                data.contentCards.sort((a: ContentCardType, b: ContentCardType) => a.metadata.priority - b.metadata.priority) :
                data.contentCards.sort((a: ContentCardType, b: ContentCardType) => b.metadata.priority - a.metadata.priority)
        res.status(200).send({ contentCards })
    } catch (err) {
        res.status(500).send({ error: 'failed to fetch data' })
    }
}
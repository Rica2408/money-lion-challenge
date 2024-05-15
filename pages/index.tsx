import { ContentCardType } from "./api/contentCards"
import { Stack } from "@mui/material"
import React from "react"
import ContentCard from "../components/content-card"

type HomeProps = {
    contentCards: ContentCardType[]
}

export default function Home({contentCards}: HomeProps) {
  return (
    <Stack alignItems="center" sx={{background: "#EAF6F9"}}>
        {contentCards.map(card => (
            <ContentCard key={card.id} card={card} />
        ))}
    </Stack>
  )
}

export const getServerSideProps = async() => {
    const res = await fetch("http://localhost:3000/api/contentCards?orderBy=desc")
    const data = await res.json()
    const contentCards = data.contentCards

    return {
        props: {
            contentCards
        }
    }
}
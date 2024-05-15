import { ContentCardType } from '../../pages/api/contentCards'
import Home from '../../pages'
import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import React from 'react'

const mockContentCards: ContentCardType[] = [
    {
        id: 'bd7d15a2-dbf1-58b1-afbf-409d7af9a6e5',
        imageUri: 'https://picsum.photos/200/400',
        textData: {
            subTitle: 'ullamco',
            body: 'amet exercitation do minim adipisicingLorem in labore cillum ullamcoullamco Ut ipsumfugiat nostrudlaboris dolore cillumlabore occaecat aliqua veniam commodosint dolore ex adipisicingdodolor in quinisi Duis deserunt adipisicing eiusmodeuveniam sunt qui pariaturelit dolor do proident UtsitinDuis exercitation reprehenderit Loremin velit nisi sedproident fugiat Lorem culpanulla minimoccaecatminim doloreetcommodoconsequat nisi dolor consectetur situllamco anim consequat velitenimconsecteturmagna eu labore et dolor',
            author: {
                first: "test",
                last: "test"
            },
            title: 'Duis magna commodo esse'
        },
        metadata: { publishDate: '1896-11-29T20:14:48.0Z', priority: 97 },
        comments: [{
            author: "autor 1",
            likes: 12,
            profilePic: "https://picsum.photos/200/400",
            text: "comment 1"
        }]
    },
    {
        id: 'c22be23b-0186-e982-0264-b1cb0ee4de01',
        imageUri: 'https://picsum.photos/400/100',
        textData: {
            title: 'qui id sunt adipisicing',
            author: {
                first: "test",
                last: "test"
            },
            subTitle: 'qui sint dolore',
            body: 'occaecat culpacupidatat cillum ex enimeiusmodsedLorem pariatur inExcepteur dolor ipsum laborumtempor ut do ullamco consequatdolor adipisicing inDuisvoluptate Duisnisiconsectetur sed eiusmod suntExcepteur pariatur Duis nostrudet adExcepteur velit cupidatat nulla eaest pariatur et laborum Duispariatur cillum consequat adipisicing essepariatur laboris minimexercitation indomagna sunt voluptateLoremDuis id aliquipcillum proident dolor auteut mollit in animcupidatat commodo aute elitut et eadolor nisi proident id'
        },
        comments: [{
            author: "autor 2",
            likes: 14,
            profilePic: "https://picsum.photos/200/400",
            text: "comment 1"
        }],
        metadata: { publishDate: '1965-07-07T06:49:59.0Z', priority: 98 }
    }
]

describe('Should show content cards', () => {
    it('Should be the titles of cards', () => {
        render(<Home contentCards={mockContentCards} />)
        expect(screen.getByText(mockContentCards[0].textData.title)).toBeVisible()
        expect(screen.getByText(mockContentCards[1].textData.title)).toBeVisible()
    })
    it('Should be the subTitle of cards', () => {
        render(<Home contentCards={mockContentCards} />)
        expect(screen.getByText(mockContentCards[0].textData.subTitle)).toBeVisible()
        expect(screen.getByText(mockContentCards[1].textData.subTitle)).toBeVisible()
    })
    it('Should expand', () => {
        render(<Home contentCards={mockContentCards} />)
        const expandIcons = screen.getAllByTestId("ExpandMoreIcon")
        expect(expandIcons.length).toBe(2)
        fireEvent.click(expandIcons[0])
        waitFor(() => {
            expect(screen.getByText("Coments")).toBeVisible()
            expect(screen.getByText(/comment 1/i)).toBeVisible()
            expect(screen.getByText(mockContentCards[0].comments[0].likes)).toBeVisible()

        })
        fireEvent.click(expandIcons[0])
        waitFor(() => {
            expect(screen.queryByText("Coments")).toBeUndefined()
            expect(screen.queryByText(/comment 1/i)).toBeUndefined()
        })
    })
})
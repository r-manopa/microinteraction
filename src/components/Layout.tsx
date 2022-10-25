import { useState, useLayoutEffect } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { Pagination, NextButton, PrevButton, PageButton } from 'react-headless-pagination'
import { getParam } from '../utils/url'
import { defaultMedia } from '../media'

export function Layout() {

    const [page, setPage] = useState<number>(0)
    const navigate = useNavigate()
    const location = useLocation()

    useLayoutEffect(() => {
        const id = getParam()

        if (id) {
            setPage(id === '' ? 0 : parseInt(id) - 1)
        }

    }, [location])

    function setCurrentPage(num: number) {
        setPage(num)
        navigate(num > 0 ? `${num + 1}` : '/')
    }

    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <Outlet />
            <Pagination
                currentPage={page}
                totalPages={defaultMedia.length}
                edgePageCount={2}
                middlePagesSiblingCount={0}
                setCurrentPage={setCurrentPage}
                truncableClassName="w-10 px-0.5 text-center"
                className="flex items-center justify-center w-full h-10 text-sm select-none max-w-md mt-4"
                truncableText="..."
            >
                <PrevButton
                    className="flex items-center justify-center w-12 h-8"
                >
                    <svg className="w-6 h-6" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
                    </svg>
                </PrevButton>
                <div className="flex items-center justify-center gap-4 max-w-md overflow-hidden">
                    <PageButton
                        className="flex items-center justify-center w-12 h-8 bg-gray-100 rounded"
                        activeClassName="bg-gray-300"
                    />
                </div>
                <NextButton
                    className="flex items-center justify-center w-12 h-8"
                >
                    <svg className="w-6 h-6" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                </NextButton>
            </Pagination>
        </div>
    )
}
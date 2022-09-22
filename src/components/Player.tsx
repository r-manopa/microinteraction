import { useRef, useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { getParam } from '../utils/url'

export function Player({ src }: { src: string }) {

    const [isPlaying, setIsPlaying] = useState<boolean>(false)
    const refVideo = useRef<HTMLVideoElement | null>(null)
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        stop()
    }, [location])

    function play() {
        if (refVideo.current) {
            refVideo.current.load()
            refVideo.current.play()
            setIsPlaying(true)
        }
    }

    function stop() {
        if (refVideo.current) {
            refVideo.current.pause()
            refVideo.current.currentTime = 0
            setIsPlaying(false)
        }
    }

    function handlePlay() {
        play()
    }

    function handleEnded() {
        stop()
        const id = getParam()
        let num = id === '' || typeof id === 'undefined' ? 1 : parseInt(id)
        if (num < 12) {
            navigate(`/${num + 1}`)
        }
    }

    return (
        <div className="relative w-full max-w-xs">
            <div className="relative aspect-w-[506] aspect-h-[1038]">
                <div className="bg-frame bg-contain bg-no-repeat z-10"></div>
                <video
                    ref={refVideo}
                    onEnded={handleEnded}
                    muted
                >
                    <source src={src} type="video/mp4" />
                </video>
            </div>
            <div className="absolute bottom-12 left-0 w-full px-12 z-20">
                {!isPlaying &&
                    <button
                        onClick={handlePlay}
                        type="button"
                        className=" w-full text-white px-2 py-4 bg-blue-500 hover:bg-blue-400 transition-all rounded-xl"
                    >
                        Place Order
                    </button>
                }
            </div>
        </div>
    )
}
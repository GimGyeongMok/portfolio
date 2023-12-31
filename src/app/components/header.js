"use client"
import Link from "next/link"
import DarkModeToggleButton from "./dark-mode-toggle-button"
import { TbBrandReactNative } from "react-icons/tb";

export default function Header() {
    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg> */}
                        <TbBrandReactNative size={30} color="#3bedf6" />
                        <span className="ml-3 text-xl">김경목 포트폴리오</span>
                    </Link>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link href="/" className="mr-5 hover:text-gray-900">
                            홈
                        </Link>
                        <Link href="/projects" className="mr-5 hover:text-gray-900">
                            프로젝트
                        </Link>
                        <Link href="https://github.com/GimGyeongMok" className="mr-5 hover:text-gray-900">
                            깃허브
                        </Link>
                        {/* ↓ 주소값 적절한걸로 바꿔줘야함 */}
                        <Link href="https://open.kakao.com/o/saO0pV0f" className="mr-5 hover:text-gray-900">
                            연락하기 
                        </Link>
                    </nav>
                    <DarkModeToggleButton/>
                </div>
            </header>
        </>
    )
}
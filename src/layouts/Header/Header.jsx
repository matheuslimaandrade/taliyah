import React from "react";

export default function Header() {
    return (
        <>
            <div className="flex justify-between flex-row items-center py-10 px-96">
                <div className="font-jakarta text-2xl font-semibold">
                    <h1>dev<span className="text-red-600">.</span>matheusandrade</h1>
                </div>
                <div className="font-jakarta text-2xl font-semibold">
                    <ul className="flex flex-row">
                        <li className="px-4">Home</li>
                        <li className="px-4">About</li>
                        <li className="px-4">Contact</li>
                        <li className="px-4">Resume</li>
                    </ul>
                </div>
            </div>
            <hr />
        </>
    )
}
import CodeBlock from "./codeBlock"

export default function Button() {
    const button1 = `
    <article>
            <h1>Button 1    </h1>
            <button
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-all"
            >Button
            </button>
            <code>
                <pre>

                    <h1>Button 1    </h1>
                    <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-all"
                    >Button
                    </button>
                </pre>
            </code>
        </article>`
    
    return(
        <article>
            <h1>Button 1    </h1>
            <button
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-all"
            >Button
            </button>
            <CodeBlock code={button1}/>
        </article>
    )
}
const CodeBlock = ({code}) => {

    return(
        <pre className="border-2 flex flex-wrap p-4 my-4">
            <button
                onClick={() => {
                    navigator.clipboard.writeText(code)
                    alert('Copied to clipboard!')
                }}
                className=""
                >Copy to clipboard
            </button>
            <code className="text-wrap">
                {code}
            </code>
        </pre>
    )
}

export default CodeBlock
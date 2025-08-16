
const Error = ({message}) => {
    return(
        // <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300  to-transparent dark:via-neutral-700" />
        <span className="text-start pl-4 text-red-500 dark:text-red-300 relative col-span-2 my-auto">{message}</span>
    );
}

export default Error;

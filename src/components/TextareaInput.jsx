import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextareaInput({ type = 'text', className = '', placeholder = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <textarea
            cols={"30"}
            rows={"10"}
            {...props}
            type={type}
            className={
                'border-gray-300 px-4 py-2 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm ' +
                className
            }
            ref={input}
            placeholder={placeholder}
        />
    );
});

"use client";

const Guide = () => {
    return (
        <div className="flex flex-col md:flex-row gap-x-12 text-start p-4">
            <div className="shadow-md rounded-md p-4">
                <p className="text-2xl font-bold text-gray-800 dark:text-slate-100">Fill Out The Form</p>
                <p className="text-kg mt-6 max-w-sm text-gray-900 dark:text-slate-300">Accurately enter your details, make sure you fill each field as accurately as you can and make sure you fill all entries.</p>
            </div>

            <div className="shadow-md rounded-md p-4">
                <p className="text-2xl font-bold text-gray-800 dark:text-slate-100">Click the submit button</p>
                <p className="text-kg mt-6 max-w-sm text-gray-900 dark:text-slate-300">Once all the entries are filled as accurately as possible, press on the check button and wait for the magic to happen</p>
            </div>

            <div className="shadow-md rounded-md p-4">
                <p className="text-2xl font-bold text-gray-800 dark:text-slate-100">Thats it</p>
                <p className="text-kg mt-6 max-w-sm text-gray-900 dark:text-slate-300">It’s that simple, find out whether you are at risk of heart disease or not.</p>
            </div>
        </div>
    );
}

export default Guide;
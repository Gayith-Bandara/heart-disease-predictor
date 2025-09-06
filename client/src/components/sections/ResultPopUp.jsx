'use client'

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'

export default function Result({open, onClose, content}) {
  console.log(content);
  return (
    <div>
      {/* <button onClick={() => setOpen(true)} className="rounded-md bg-white/10 px-2.5 py-1.5 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-white/20">
        Open dialog
      </button> */}

      {/* <Dialog open={open} onClose={onClose} className="relative z-10">
        <DialogBackdrop transition className="fixed inset-0 bg-gray-900/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"/> */}

        {/* <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel transition className="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95">
              <div className="bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-500/10 sm:mx-0 sm:size-10">
                    <ExclamationTriangleIcon aria-hidden="true" className="size-6 text-red-400" />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <DialogTitle as="h3" className="text-base font-semibold text-white">
                      Deactivate account
                    </DialogTitle>
                    <div className="mt-2">
                      <p className="text-sm text-gray-400">
                        Are you sure you want to deactivate your account? All of your data will be permanently removed.
                        This action cannot be undone.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-700/25 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button type="button" onClick={() => onClose(false)} className="inline-flex w-full justify-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white hover:bg-red-400 sm:ml-3 sm:w-auto">
                  Deactivate
                </button>
                <button type="button" data-autofocus onClick={() => onClose(false)} className="mt-3 inline-flex w-full justify-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-white/20 sm:mt-0 sm:w-auto">
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </div>
        </div> */}

        <div open={open} onClose={onClose} className='fixed inset-0 z-30 w-screen overflow-y-auto'>
            <div className='relative z-[60] mx-auto my-4 h-fit max-w-5xl rounded-3xl bg-slate-50 p-4 font-sans md:p-10 dark:bg-neutral-900'>
                {/* Close button */}
                <button className="sticky cursor-pointer top-4 right-0 ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-black dark:bg-white"onClick={() => onClose(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-white dark:text-black" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                </button>

                {/* Content */}
                <div className='flex flex-col md:flex-row'>
                    <div className='invisible md:visible'>
                        <img src="src/assets/Positive-Result.png" className="w-xs" alt="logo" />
                    </div>

                    <div className='px-5'>
                        <p className='mt-4 text-2xl font-semibold text-neutral-700 md:text-5xl dark:text-white'>HI</p>
                        <p className='text-base font-medium text-black dark:text-white'>Hello</p>
                    </div>
                    
                </div>
            </div>

        </div>
      {/* </Dialog> */}

    </div>
  )
}

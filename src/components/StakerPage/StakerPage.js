import { useState } from "react";
import { StakeLoans } from "./StakeLoans"
export const StakerPage = () => {
    const [ enabled, setEnabled ] = useState(true);
    return (
        <div class="flex flex-row bg-indigo-50 p-6 min-h-screen m-auto w-full">
        <div class="w-full h-full">
            <main class="flex w-full">
                <div class="px-4 sm:px-6 md:px-8 w-3/5 m-auto">
                    <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                        Stake
                    </h2>
                    <div class="w-full h-full">
                        <div>
                            <div>
                                <dl class="mt-5 grid grid-cols-3 rounded-lg bg-white overflow-hidden shadow divide-y divide-gray-200 md:grid-cols-3 md:divide-y-0 md:divide-x">
                                    <div class="px-10 py-6">
                                        <div class="text-2xl font-bold">
                                            Stake RUP
                                        </div>
                                        <dt class="mt-4 text-base font-normal text-gray-900">
                                            Staking RUP helps in ensuring quality loans are approved, and stakers get to verify them to secure the network.
                                        </dt>

                                    </div>

                                    <div class="px-10 py-6 flex flex-col justify-center items-left">
                                        <dt class="text-xl font-normal text-gray-900">
                                            RUP Staked
                                        </dt>
                                        <dd class="mt-4 flex justify-between items-baseline md:block lg:flex">
                                            <div class="flex items-baseline text-3xl font-semibold text-indigo-600">
                                                12
                                                <span class="ml-2 text-base font-medium text-gray-500">
                                                    RUP
                                                </span>
                                            </div>
                                        </dd>
                                    </div>
                                    <div class="px-10 py-6 flex flex-col justify-center items-left">
                                        <dt class="text-xl font-normal text-gray-900">
                                            Withdrawable RUP
                                        </dt>
                                        <dd class="mt-4 flex justify-between items-baseline md:block lg:flex">
                                            <div class="flex items-baseline text-3xl font-semibold text-indigo-600">
                                                12
                                                <span class="ml-2 text-base font-medium text-gray-500">
                                                    RUP
                                                </span>
                                            </div>
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                        <div class="mt-4">
                            <div class="relative bg-white p-6 shadow rounded-lg mt-8">
                                <div class="flex flex-col">
                                    <div class="flex flex-row items-center justify-between">
                                        <div>
                                            <div class="rounded-md p-4">
                                                <img class="h-8" src="assets/logos/rupya.png" alt=""/>
                                            </div>
                                        </div>
                                        <div class="flex flex-col">
                                            <p class="text-2xl font-semibold text-gray-900">
                                                RUP
                                            </p>
                                            <p class="text-sm font-medium text-gray-500 text-ellipsis">0x3e1fB19E002c83e39a7307B1e5eF9A216B605ce3</p>
                                        </div>

                                        <div class="flex flex-col p-2 text-left justify-between">
                                            <div>
                                                <span>APY: </span>
                                                <span class="font-bold text-indigo-600">12%</span>
                                            </div>
                                            <div>
                                                <span>RUP Price: </span>
                                                <span class="font-bold text-indigo-600">$1</span>
                                            </div>
                                        </div>
                                        <div onClick={enabled => setEnabled(enabled => !enabled)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>


                                    {enabled && <div class="flex flex-row bg-gray-50 -ml-6 -mr-6 -mb-6 mt-6 justify-between p-6 rounded-lg">
                                        <div class="flex flex-col w-1/2 p-2">
                                            <div>
                                                <div class="flex flex-row justify-between">
                                                    <label class="block text-base font-medium text-gray-700">Stake</label>
                                                    <div>
                                                        <span class="text-sm">Wallet Balance: </span>
                                                        <span class="font-bold text-sm text-indigo-600">100 RUP</span>
                                                    </div>
                                                </div>

                                                <div class="mt-1 relative rounded-md shadow-sm">
                                                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                    </div>
                                                    <input type="text" class="h-14 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 text-base border-gray-300 rounded-md" placeholder="Enter amount"/>
                                                </div>
                                            </div>
                                            <button type="button" class="justify-center mt-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                Stake
                                            </button>
                                        </div>
                                        <div class="flex flex-col w-1/2 p-2">
                                            <div>
                                                <label for="email" class="block text-base font-medium text-gray-700">Un Stake</label>
                                                <div class="mt-1 relative rounded-md shadow-sm">
                                                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                    </div>
                                                    <input type="text" class="h-14 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 text-base border-gray-300 rounded-md" placeholder="Enter amount"/>
                                                </div>
                                            </div>
                                            <button type="button" class="justify-center mt-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                Un Stake
                                            </button>
                                        </div>
                                    </div>}
                                </div>
                            </div>
                        </div>
                        <div class="mt-4">
                            <h2 class="mt-8 m-4 text-xxl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                                Verify Loans
                            </h2>
                            <StakeLoans/>
                        </div>

                    </div>

                </div>

            </main>
        </div>
    </div>
    )
}
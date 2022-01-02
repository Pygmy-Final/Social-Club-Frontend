import React from 'react'

export default function Followers() {
	return (
		<div className='flex mt-10 flex-col overflow-auto divide-y h-[40rem] dark:divide-gray-200/5  '>
			<div class="bg-white p-8 rounded-md w-full">
				<div class=" flex items-center justify-between pb-6">
					<h1 className='text-[#15263a]'><b>Followers List</b></h1>
					<div class="flex items-center justify-between">
						<div class="flex bg-gray-50 items-center p-2 rounded-md">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
								fill="currentColor">
								<path fill-rule="evenodd"
									d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
									clip-rule="evenodd" />
							</svg>
							<input class="bg-gray-50 outline-none ml-1 block caret-[#7964da] " type="text" name="" id="" placeholder="search..."/>
						</div>
						
					</div>
				</div>
				<div>
					<div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
						<div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
							<table class="min-w-full leading-normal">
								<thead>
									<tr>
										<th
											class="px-5 py-3 border-b-2 border-gray-200 bg-[#503E9D] text-left text-xs font-semibold text-[#F8F8FB] uppercase tracking-wider">
											Name
										</th>
									
										
										
										<th
											class="px-5 py-3 border-b-2 border-gray-200 bg-[#503E9D] text-left text-xs font-semibold text-[#F8F8FB] uppercase tracking-wider">
											Status
										</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
											<div class="flex items-center">
												<div class="flex-shrink-0 w-10 h-10">
													<img class="w-full h-full rounded-full"
														src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
														alt="" />
												</div>
												<div class="ml-3">
													<p class="text-gray-900 whitespace-no-wrap">
														Vera Carpenter
													</p>
												</div>
											</div>
										</td>
										
										
										<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
											<span
												class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
												<span aria-hidden
													class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
												<span class="relative">Activo</span>
											</span>
										</td>
									</tr>
									<tr>
										<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
											<div class="flex items-center">
												<div class="flex-shrink-0 w-10 h-10">
													<img class="w-full h-full rounded-full"
														src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
														alt="" />
												</div>
												<div class="ml-3">
													<p class="text-gray-900 whitespace-no-wrap">
														Blake Bowman
													</p>
												</div>
											</div>
										</td>
										<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
											<span
												class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
												<span aria-hidden
													class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
												<span class="relative">Activo</span>
											</span>
										</td>
									</tr>
									
									<tr>
										<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
											<div class="flex items-center">
												<div class="flex-shrink-0 w-10 h-10">
													<img class="w-full h-full rounded-full"
														src="https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
														alt="" />
												</div>
												<div class="ml-3">
													<p class="text-gray-900 whitespace-no-wrap">
														Dana Moore
													</p>
												</div>
											</div>
										</td>
										
											<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
												<span
													class="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
													<span aria-hidden
														class="absolute inset-0 bg-orange-200 opacity-50 rounded-full"></span>
													<span class="relative">Suspended</span>
												</span>
											</td>
									</tr>
									
									<tr>
										<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
											<div class="flex items-center">
												<div class="flex-shrink-0 w-10 h-10">
													<img class="w-full h-full rounded-full"
														src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
														alt="" />
												</div>
												<div class="ml-3">
													<p class="text-gray-900 whitespace-no-wrap">
														Blake Bowman
													</p>
												</div>
											</div>
										</td>
										<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
											<span
												class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
												<span aria-hidden
													class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
												<span class="relative">Activo</span>
											</span>
										</td>
									</tr>
									<tr>
										<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
											<div class="flex items-center">
												<div class="flex-shrink-0 w-10 h-10">
													<img class="w-full h-full rounded-full"
														src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
														alt="" />
												</div>
												<div class="ml-3">
													<p class="text-gray-900 whitespace-no-wrap">
														Blake Bowman
													</p>
												</div>
											</div>
										</td>
										<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
											<span
												class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
												<span aria-hidden
													class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
												<span class="relative">Activo</span>
											</span>
										</td>
									</tr>
									<tr>
										<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
											<div class="flex items-center">
												<div class="flex-shrink-0 w-10 h-10">
													<img class="w-full h-full rounded-full"
														src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
														alt="" />
												</div>
												<div class="ml-3">
													<p class="text-gray-900 whitespace-no-wrap">
														Blake Bowman
													</p>
												</div>
											</div>
										</td>
										<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
											<span
												class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
												<span aria-hidden
													class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
												<span class="relative">Activo</span>
											</span>
										</td>
									</tr>
									<tr>
										<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
											<div class="flex items-center">
												<div class="flex-shrink-0 w-10 h-10">
													<img class="w-full h-full rounded-full"
														src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
														alt="" />
												</div>
												<div class="ml-3">
													<p class="text-gray-900 whitespace-no-wrap">
														Blake Bowman
													</p>
												</div>
											</div>
										</td>
										
											<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
												<span
													class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
													<span aria-hidden
														class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
													<span class="relative">Activo</span>
												</span>
											</td>
									</tr>
								</tbody>
							</table>
							{/* <div
								class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
								<span class="text-xs xs:text-sm text-gray-900">
									Showing 1 to 4 of 50 Entries
								</span>
								<div class="inline-flex mt-2 xs:mt-0">
									<button
										class="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l">
										Prev
									</button>
									&nbsp; &nbsp;
									<button
										class="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">
										Next
									</button>
								</div>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
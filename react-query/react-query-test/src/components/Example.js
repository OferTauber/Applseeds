// import React from 'react';

// import axios from 'axios';
// import { useInView } from 'react-intersection-observer';
// import {
//   useInfiniteQuery,
//   // QueryClient,
//   QueryClientProvider,
//   useQueryClient,
// } from '@tanstack/react-query';
// // import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// // const queryClient = new QueryClient();

// // export default function App() {
// //   return (
// //     <QueryClientProvider client={queryClient}>
// //       <Example />
// //     </QueryClientProvider>
// //   );
// // }

// export default function Example() {
//   const queryClient = useQueryClient();
//   const { ref, inView } = useInView();

//   const {
//     status,
//     data,
//     error,
//     isFetching,
//     isFetchingNextPage,
//     isFetchingPreviousPage,
//     fetchNextPage,
//     fetchPreviousPage,
//     hasNextPage,
//     hasPreviousPage,
//   } = useInfiniteQuery(
//     ['projects'],
//     async ({ pageParam = 1 }) => {
//       const res = await axios.get(
//         'https://swapi.dev/api/people/?page=' + pageParam
//       );
//       return res.data;
//     },
//     {
//       getPreviousPageParam: (firstPage) => firstPage.previousId ?? undefined,
//       getNextPageParam: (lastPage) => lastPage.nextId ?? undefined,
//     }
//   );

//   React.useEffect(() => {
//     if (inView) {
//       fetchNextPage();
//     }
//   }, [inView]);

//   return (
//     <div>
//       <h1>Infinite Loading</h1>
//       {status === 'loading' ? (
//         <p>Loading...</p>
//       ) : status === 'error' ? (
//         <span>Error: {error.message}</span>
//       ) : (
//         <>
//           <div>
//             <button
//               onClick={() => fetchPreviousPage()}
//               disabled={!hasPreviousPage || isFetchingPreviousPage}
//             >
//               {isFetchingPreviousPage
//                 ? 'Loading more...'
//                 : hasPreviousPage
//                 ? 'Load Older'
//                 : 'Nothing more to load'}
//             </button>
//           </div>
//           {data.pages.map((page) => (
//             <React.Fragment key={page.nextId}>
//               {page.data.map((project) => (
//                 <p
//                   style={{
//                     border: '1px solid gray',
//                     borderRadius: '5px',
//                     padding: '10rem 1rem',
//                     background: `hsla(${project.id * 30}, 60%, 80%, 1)`,
//                   }}
//                   key={project.id}
//                 >
//                   {project.name}
//                 </p>
//               ))}
//             </React.Fragment>
//           ))}
//           <div>
//             <button
//               ref={ref}
//               onClick={() => fetchNextPage()}
//               disabled={!hasNextPage || isFetchingNextPage}
//             >
//               {isFetchingNextPage
//                 ? 'Loading more...'
//                 : hasNextPage
//                 ? 'Load Newer'
//                 : 'Nothing more to load'}
//             </button>
//           </div>
//           <div>
//             {isFetching && !isFetchingNextPage
//               ? 'Background Updating...'
//               : null}
//           </div>
//         </>
//       )}
//       <hr />
//       <a href="/about">
//         <a>Go to another page</a>
//       </a>
//       {/* <ReactQueryDevtools initialIsOpen /> */}
//     </div>
//   );
// }



const Skeleton = () => {
  return (
    <section className="flex items-center justify-center">
    <div className="flex flex-col  m-8 rounded shadow-md w-2/3  animate-pulse h-screen">
	<div className="h-48 rounded-t bg-gray-200"></div>
	<div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-300">
		<div className="w-full h-6 rounded bg-gray-400"></div>
		<div className="w-full h-6 rounded bg-gray-400"></div>
		<div className="w-3/4 h-6 rounded bg-gray-400"></div>
	</div>
    <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-300">
		<div className="w-full h-6 rounded bg-gray-400"></div>
		<div className="w-full h-6 rounded bg-gray-400"></div>
		<div className="w-3/4 h-6 rounded bg-gray-400"></div>
	</div>
    <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-300">
		<div className="w-full h-6 rounded bg-gray-400"></div>
		<div className="w-full h-6 rounded bg-gray-400"></div>
		<div className="w-3/4 h-6 rounded bg-gray-400"></div>
	</div>
    <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-300">
		<div className="w-full h-6 rounded bg-gray-400"></div>
		<div className="w-full h-6 rounded bg-gray-400"></div>
		<div className="w-3/4 h-6 rounded bg-gray-400"></div>
	</div>
</div>
</section>
  )
}

export default Skeleton
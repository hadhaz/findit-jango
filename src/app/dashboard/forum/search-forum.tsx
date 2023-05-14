export default function SearchForum() {
  return (
    <div className='flex justify-between bg-[#F5F5F5] gap-x-6 p-4 rounded-xl'>
      <input
        className='w-full basis-[85%] p-3 xl:text-lg focus:outline-[#FF9D42] rounded-xl appearance-none focus:outline-2 focus:outline-none'
        placeholder='Bagikan apa yang ada di pikiranmu..'
      />
      <button className='bg-[#FF9D42] w-full basis-[15%] text-white py-2 px-4 rounded-xl'>
        Unggah
      </button>
    </div>
  );
}

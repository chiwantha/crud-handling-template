const WidthShow = () => {
  const style = `bg-gray-800 text-white py-1 px-3 rounded-lg font-mono text-sm`;
  return (
    <div
      className={`fixed bottom-5 right-5 transition-all duration-300 select-none ${style}`}
    >
      <span className="block sm:hidden">xs</span>
      <span className="hidden sm:block md:hidden">sm</span>
      <span className="hidden md:block lg:hidden">md</span>
      <span className="hidden lg:block xl:hidden">lg</span>
      <span className="hidden xl:block 2xl:hidden">xl</span>
      <span className="hidden 2xl:block">2xl</span>
    </div>
  );
};

export default WidthShow;

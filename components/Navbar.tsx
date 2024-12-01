export const Navbar = () => {
  return (
    <div className="flex justify-between items-center sticky top-4 px-3 rounded-2xl opacity-80 w-[760px] mx-auto bg-red-400 h-20">
      <h2>Nidhin Sankar</h2>
      <nav className="flex justify-between items-center gap-3">
        <h1>Articles</h1>
        <h1>Projects</h1>
        <h1>Github</h1>
        <h1>Twitter</h1>
      </nav>
    </div>
  );
};

const Book = () => {
  return (
    <div className="w-[85%] mx-auto mt-12 lg:flex gap-5">
      <div className="shadow-lg p-16 ">
        <h2 className="text-2xl font-bold">
          Email Address: info@example.com or support@example.com.
        </h2>
        <h2>Phone Number:0157678-044 </h2>
        <h2>Physical Address:123 ,Dhaka , kishoreganj, bangladesh,</h2>
      </div>
      <div>
        <label className="input input-bordered flex items-center gap-2">
          Name
          <input type="text" className="grow" placeholder="Daisy" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Email
          <input type="text" className="grow" placeholder="daisy@site.com" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search" />
          <kbd className="kbd kbd-sm">⌘</kbd>
          <kbd className="kbd kbd-sm">K</kbd>
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search" />
          <span className="badge badge-info">Optional</span>
        </label>
      </div>
    </div>
  );
};

export default Book;

function Pane({ title, details,className }: { title: string; details: string; className?: string }) {
  return (
    <div className={`relative border border-black h-45 ${className || ''}`}>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dijoz9ie7/image/upload/v1772883697/Gemini_Generated_Image_aexlk9aexlk9aexl_elx5xr.png')",
        }}
      ></div>

      <div className="absolute inset-0 bg-[#4b4931]/90"></div>

      <span className="absolute inset-0 flex flex-col text-center items-center justify-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold  mb-4">{title}</h2>
        <p className=" max-w-2xl mx-auto">
          {details}
        </p>
      </span>
    </div>
  );
}

export default Pane;

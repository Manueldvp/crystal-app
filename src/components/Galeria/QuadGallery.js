export function QuadGallery() {
    const data = [
      {
        imageLink:
          "/25.jpg",
      },
      {
        imageLink:
          "/25.jpg",
      },
      {
        imageLink:
          "/25.jpg",
      },
      {
        imageLink:
          "/25.jpg",
      },
    ];
   
    return (
      <div className="grid   grid-cols-2 gap-2">
        {data.map(({ imageLink }, index) => (
          <div key={index}>
            <img
              className="h-60 max-w-full rounded-lg object-cover object-center md:h-60"
              src={imageLink}
              alt=""
            />
          </div>
        ))}
      </div>
    );
  }
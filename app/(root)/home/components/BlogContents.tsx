import React from "react";

const BlogContents = () => {
  return (
    <div className="min-h-[40vh]">
      <div>
        <p>Today's Headlines: Stay Informed</p>
        <p>
          Explore the latest news from around the world. We bring you
          up-to-the-minute updates on the most significant events, trends, and
          stories. Discover the world through our news coverage.
        </p>
      </div>
      <div>
        <div className="flex bg-red-300 gap-10">
          <div>
            <p>Image</p>
          </div>
          <div>
            <p>Global Climate Summit Addresses Urgent Climate Action</p>
            <p>
              World leaders gathered at the Global Climate Summit to discuss
              urgent climate action, emissions reductions, and renewable energy
              targets.
            </p>
            <div className="flex gap-10">
              <div className="flex flex-col">
                <span>Category</span>
                <span>Environment</span>
              </div>
              <div className="flex flex-col">
                <span>Category</span>
                <span>Environment</span>
              </div>
              <div className="flex flex-col">
                <span>Category</span>
                <span>Environment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-10 bg-green-500">
        <div>
          <p>img</p>
          <p>A Decisive Victory for Progressive Policies</p>
          <p>Politics</p>
          <div className="flex justify-between">
            <div className="flex gap-4">
              <span>60</span>
              <span>2.2k</span>
            </div>
            <span>Read More</span>
          </div>
        </div>
        <div>
          <p>img</p>
          <p>A Decisive Victory for Progressive Policies</p>
          <p>Politics</p>
          <div className="flex justify-between">
            <div className="flex gap-4">
              <span>60</span>
              <span>2.2k</span>
            </div>
            <span>Read More</span>
          </div>
        </div>
        <div>
          <p>img</p>
          <p>A Decisive Victory for Progressive Policies</p>
          <p>Politics</p>
          <div className="flex justify-between">
            <div className="flex gap-4">
              <span>60</span>
              <span>2.2k</span>
            </div>
            <span>Read More</span>
          </div>
        </div>
      </div>
<div>
    <div className="flex justify-between px-[12%] ">
        <div>
    <p>Featured Blog</p>
    <p>Visual Insights for the Modern Viewer</p>

        </div>
        <span>View All</span>
    </div>

</div>
{/* featured cards */}
<div className="grid grid-cols-3">
<div>
    <p>image</p>
    <p>Mars Exploration: Unveiling Alien Landscapes</p>
    <p>Embark on a journey through the Red Planet's breathtaking landscapes and uncover the mysteries of Mars.</p>
</div>
<div>
    <p>image</p>
    <p>Mars Exploration: Unveiling Alien Landscapes</p>
    <p>Embark on a journey through the Red Planet's breathtaking landscapes and uncover the mysteries of Mars.</p>
</div><div>
    <p>image</p>
    <p>Mars Exploration: Unveiling Alien Landscapes</p>
    <p>Embark on a journey through the Red Planet's breathtaking landscapes and uncover the mysteries of Mars.</p>
</div>
</div>
    </div>
  );
};

export default BlogContents;

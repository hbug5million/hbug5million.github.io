function StarRating() {
    document.getElementById("demo").innerHTML = "Rated 5 million Stars!";
}
function ReviewText() {
  let text = document.getElementById("myInput").value;
  document.getElementById("demo2").innerHTML = "You wrote: " + text + " It seems you were having trouble communicating your review. We have autocorrected your review: Great Recipe! I've recommended this to everyone I know and they all love it!";
}

function PhotoGallery() {
  const newSrcs = [
    'https://livinghealthywithchocolate.com/wp-content/uploads/2016/02/Paleo-Strawberry-Milkshake-dairy-free-sugar-free-gluten-free.jpg',
    'https://www.chocolatemoosey.com/wp-content/uploads/2013/01/Banana-Mango-Smoothie-recipe-photo-1867b.jpg'
  ];
  const images = document.querySelectorAll('.smoothie-img');
  images.forEach((img, idx) => {
    img.src = newSrcs[idx % newSrcs.length];
  });
}